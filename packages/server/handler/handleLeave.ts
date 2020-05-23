import { Context, Socket } from '../objects';
import { MessageType, Request } from '@prisel/common';
import clientHandlerRegister from '../clientHandlerRegister';
import { getPlayerOrRespondError } from './utils';
import { getRoom } from '../utils/stateUtils';
import { GAME_PHASE } from '../objects/gamePhase';

export const handleLeave = (context: Context, socket: Socket) => (request: Request) => {
    const player = getPlayerOrRespondError(context, socket, request);
    if (!player) {
        return;
    }
    const { roomConfig, gameConfig } = context;
    const failureResponse = roomConfig.preLeave(player, request);
    if (failureResponse) {
        player.emit(failureResponse);
        return;
    }

    roomConfig.onLeave(player, request);
    const room = getRoom(context, socket);
    if (room && room.getGamePhase() === GAME_PHASE.GAME) {
        gameConfig.onRemovePlayer(room, player);
    }
};

clientHandlerRegister.push(MessageType.LEAVE, handleLeave);
