import Game from './Game';
import { Room, PacketType, broadcast, Request, wrapResponse, Packet } from '@prisel/server';
import { Action, AnnouncePlayerPurchasePayload } from './messages';

export function waitForEveryoneSetup(game: Game, room: Room): Promise<void> {
    return new Promise((resolve) => {
        const syncedSet = new Set<string>();
        const off = room.listenGamePacket<Packet>(Action.SETUP_FINISHED, (player) => {
            syncedSet.add(game.getPlayerId(player));
            for (const playerInGame of game.players.keys()) {
                if (!syncedSet.has(playerInGame)) {
                    return;
                }
            }
            off();
            resolve();
        });
    });
}

export function runPlayerTurn(game: Game, room: Room): Promise<void> {
    const turn = game.turn;
    // Wait for player roll, off when player rolled
    turn.runRequestListener({
        action: Action.ROLL,
        handle(currentGame, packet, player) {
            return wrapResponse(player.roll(currentGame, packet));
        },
        postHandle(currentGame, response, player) {
            if (response.ok()) {
                // notify other players about current player's move
            }
        },
        isDone(_, response) {
            return response.ok();
        },
    });

    // Wait for player purchase
    // player can purchase at any time (before roll or after roll or both) or
    // not purchase at all as long as the land is not purchased
    turn.runRequestListener({
        action: Action.PURCHASE,
        handle(currentGame, packet, player) {
            return wrapResponse(player.purchase(currentGame, packet));
        },
        postHandle(currentGame, response, player) {
            if (response.ok()) {
                // notify other player about the purchase
                broadcast<AnnouncePlayerPurchasePayload>(currentGame.room.getPlayers(), {
                    type: PacketType.DEFAULT,
                    action: Action.ANNOUNCE_PLAYER_PURCHASE,
                    payload: {
                        id: player.id,
                        property: response.payload.property,
                    },
                });
            }
        },
    });

    // Wait for player end turn
    const waitForEndTurn = turn.runRequestListener({
        action: Action.END_TURN,
        handle(currentGame, packet, player) {
            return wrapResponse(player.endTurn(currentGame, packet));
        },
        isDone(_, response) {
            return response.ok();
        },
    });

    return waitForEndTurn;
}