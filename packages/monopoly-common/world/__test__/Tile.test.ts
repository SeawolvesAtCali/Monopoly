import { ChanceInput } from '../../types';
import { Property } from '../Property';
import { Ref } from '../ref2';
import { Tile } from '../Tile';

describe('Tile', () => {
    test('serialize', () => {
        const tile = new Tile();
        tile.id = '123';
        tile.isStart = true;
        tile.position = { row: 1, col: 2 };
        tile.prev = [Ref.forTest<Tile>('1'), Ref.forTest<Tile>('2')];
        tile.next = [Ref.forTest<Tile>('3')];
        tile.hasProperties = [Ref.forTest<Property>('property1')];
        const moveToTile: ChanceInput<'move_to_tile'> = {
            display: { title: 'move to tile', description: 'description' },
            type: 'move_to_tile',
            inputArgs: {
                tileId: '1',
                isTeleport: false,
            },
        };
        tile.chancePool = [moveToTile];
        expect(tile.serialize()).toMatchSnapshot();
    });
});
