import { Action, Anim, animationMap, exist, Tile } from '@prisel/monopoly-common';
import { animation_spec, announce_received_chance_spec } from '@prisel/protos';
import { Packet } from '@prisel/server';
import { Moved } from '../stateMachine/Moved';
import { ChanceHandler } from './ChanceHander';

export const moveStepsHandler: ChanceHandler<'move_steps'> = async (game, input) => {
    const inputArgs = input.inputArgs;
    const currentPlayer = game.getCurrentPlayer();
    const currentTile = currentPlayer.pathTile?.get();
    if (!exist(currentTile)) {
        return;
    }
    const startLocation = currentTile.position;
    let path: Tile[] = [];
    if (inputArgs.steps > 0) {
        path = currentTile.genPath(inputArgs.steps);
        currentPlayer.move(path);
    }
    if (inputArgs.steps < 0) {
        path = currentTile.genPathReverse(-inputArgs.steps);
        currentPlayer.move(path);
    }

    game.broadcast(
        Packet.forAction(Action.ANNOUNCE_CHANCE)
            .setPayload(announce_received_chance_spec.AnnounceRecievedChancePayload, {
                player: currentPlayer.id,
                chance: {
                    display: input.display,
                    extra: {
                        oneofKind: 'moveSteps',
                        moveSteps: {
                            steps: inputArgs.steps,
                        },
                    },
                },
            })
            .build(),
    );

    await Anim.processAndWait(
        (packet) => {
            game.broadcast(packet);
        },
        Anim.create('move', animation_spec.MoveExtra)
            .setExtra({
                player: currentPlayer.getGamePlayerInfo(),
                start: startLocation,
                path: path.map((pathTile) => pathTile.position),
            })
            .setLength(animationMap.move * path.length),
    ).promise;
    return Moved;
};
