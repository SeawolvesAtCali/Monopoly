import { system_action_type } from '@prisel/protos';
import clientHandlerRegister, { Handler } from '../clientHandlerRegister';
import { closeSocket } from '../utils/networkUtils';
import { getPlayer, getRoom } from '../utils/stateUtils';

export const handleExit: Handler = (context, socket) => (_packet) => {
    const { SocketManager } = context;
    closeSocket(socket);
    if (!SocketManager.hasSocket(socket)) {
        // client has not logged in yet. Nothing to clean up.
        return;
    }
    const room = getRoom(context, socket);
    const player = getPlayer(context, socket);
    if (room && player) {
        context.roomConfig.onExit(player);
        context.gameConfig.onRemovePlayer(room, player);
        context.players.delete(player.getId());
    }
    SocketManager.removeBySocket(socket);
};

clientHandlerRegister.push(system_action_type.SystemActionType.EXIT, handleExit);
