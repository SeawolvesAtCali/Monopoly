import React, { useContext, useEffect, useState, useCallback } from 'react';
import {
    createClient,
    connect,
    login,
    ClientState,
    getGameAndRoomTypes,
    createRoom,
    AddToLogs,
    joinRoom,
} from './utils';
import GameContext from '../GameContext';
import LogPanel, { MessageWithMetaData, createMessage } from '../LogPanel';
import { Client, MessageType } from '@prisel/client';
import Container, { BorderBox } from '../Container';
import Suggestion from '../Suggestion';
import Prompt from '../Prompt';
import run from '../suggestionProviders/runCommand';

interface HostContainerProps extends BorderBox {
    username: string;
}

function useRun(client: Client, addToLogs: AddToLogs) {
    const onRun = useCallback(
        (suggestions: Suggestion[]) => {
            if (!client) {
                return;
            }
            run(
                suggestions,
                (key) => {},
                (json) => {
                    const { type, payload } = json;
                    client.emit(type, payload);
                    // TODO: if this is not message type, it will be log twice
                    addToLogs({
                        origin: 'client',
                        payload,
                        command: suggestions,
                        type,
                    });
                },
            );
        },
        [client],
    );
    return onRun;
}

function useLog(): [MessageWithMetaData[], AddToLogs] {
    const [logs, setLogs] = useState<MessageWithMetaData[]>([]);
    const addToLogs: AddToLogs = useCallback((message) => {
        setLogs((prevLogs) => prevLogs.concat([createMessage(message)]));
    }, []);
    return [logs, addToLogs];
}

export function HostContainer({ username, displayBorder }: HostContainerProps) {
    const { setRoomAndGameType, setRoomInfo, setRoomId } = useContext(GameContext);
    const [logs, addToLogs] = useLog();
    const [client, setClient] = useState<Client<ClientState>>(null);
    useEffect(() => {
        (async () => {
            const myClient = await createClient(username);
            myClient.on(
                () => true,
                (data, messageType) => {
                    addToLogs({ type: messageType, payload: data, origin: 'server' });
                },
            );
            const cancelEmitListener = myClient.onEmit(
                () => true,
                (data, messageType) => {
                    addToLogs({ type: messageType, payload: data, origin: 'client' });
                },
            );
            await connect(myClient);
            setClient(myClient);
            await login(myClient);

            const { gameTypes, roomTypes } = await getGameAndRoomTypes(myClient);
            // pick the first game and room type;
            const firstGameType = gameTypes[0];
            const firstRoomType = roomTypes[0];
            setRoomId(await createRoom(myClient, firstGameType, firstRoomType));
            cancelEmitListener();
            setRoomAndGameType(firstRoomType, firstGameType);
            myClient.on(MessageType.ROOM_UPDATE, (data) => {
                myClient.log(data);
                setRoomInfo(data as any);
            });
        })();
    }, []);
    const onRun = useRun(client, addToLogs);

    return (
        <Container displayBorder={displayBorder}>
            <LogPanel messages={logs} />
            <Prompt onSubmit={onRun} />
        </Container>
    );
}

interface GuestContainerProps extends BorderBox {
    username: string;
    roomId: string;
}

export function GuestContainer({ username, roomId, displayBorder }: GuestContainerProps) {
    const [logs, addToLogs] = useLog();
    const [client, setClient] = useState<Client<ClientState>>(null);
    useEffect(() => {
        (async () => {
            const myClient = await createClient(username);
            myClient.on(
                () => true,
                (data, messageType) => {
                    addToLogs({ type: messageType, payload: data, origin: 'server' });
                },
            );
            const cancelEmitListener = myClient.onEmit(
                () => true,
                (data, messageType) => {
                    addToLogs({ type: messageType, payload: data, origin: 'client' });
                },
            );
            await connect(myClient);
            setClient(myClient);
            await login(myClient);

            await joinRoom(myClient, roomId);
            cancelEmitListener();
        })();
    }, []);
    const onRun = useRun(client, addToLogs);

    return (
        <Container displayBorder={displayBorder}>
            <LogPanel messages={logs} />
            <Prompt onSubmit={onRun} />
        </Container>
    );
}