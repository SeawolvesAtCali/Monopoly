import { Action, log } from '@prisel/monopoly-common';
import { GameConfig, Packet, Player } from '@prisel/server';
import Game from './Game';
import { createIntialState } from './state';
import { GameStarted } from './stateMachine/GameStarted';
import { StateMachine } from './stateMachine/StateMachine';

const MonopolyGameConfig: GameConfig = {
    type: 'monopoly',
    maxPlayers: 10,
    canStart(room) {
        // TODO temporarily allow 1 person playing
        return true;
        // return room.getPlayers().length > 1;
    },
    onStart(room) {
        (async () => {
            const game = await createIntialState(room);
            room.setGame(game);
            const stateMachine = new StateMachine(game);

            const handleGamePacket = (player: Player, packet: Packet) => {
                if (!stateMachine.state.onPacket(packet, game.getGamePlayer(player))) {
                    log.verbose(
                        `packet ${packet.action} is not processed by state ${
                            stateMachine.state[Symbol.toStringTag]
                        }`,
                    );
                }
            };

            Object.values(Action)
                .filter((action) => action !== Action.UNSPECIFIED && action !== Action.DEBUG) // filter out UNSPECIFIED
                .forEach((action) => room.listenGamePacket(action, handleGamePacket));

            stateMachine.init(GameStarted);
            await new Promise((resolve) => {
                stateMachine.setOnEnd(resolve);
            });
            room.endGame();
        })();
    },
    onEnd(room) {
        room.removeAllGamePacketListener();
        room.setGame(null);
    },
    onRemovePlayer(room, player) {
        const game = room.getGame<Game>();
        if (game && game.stateMachine) {
            game.stateMachine.state.onPlayerLeave(game.getGamePlayer(player));
        }
    },
};

export default MonopolyGameConfig;
