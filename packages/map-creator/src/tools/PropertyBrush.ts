import { Coordinate, PropertyClass, World } from '@prisel/monopoly-common';
import { CanvasForm } from 'pts';
import { CanvasOps } from '../CanvasOps';
import { equal } from '../common';
import { Tool } from './Tool';

export class PropertyBrush implements Tool {
    constructor(private world: World, private form: CanvasForm, private ops: CanvasOps) {}

    onDown(coor: Coordinate): void {
        const existingProperty = this.world
            .getAll(PropertyClass)
            .find((property) => equal(property.dimension.anchor, coor));
        if (existingProperty) {
            this.ops.selectObject(existingProperty);
        } else {
            const property = this.world.create(PropertyClass);
            property.dimension = {
                anchor: coor,
                size: { width: 1, height: 1 },
            };
            property.name = 'unnamed property';
            const defaultCost = 100;
            const defaultRent = 10;
            property.propertyLevel = {
                current: -1,
                levels: [
                    {
                        cost: defaultCost,
                        rent: defaultRent,
                    },
                    {
                        cost: defaultCost / 2,
                        rent: defaultRent * 5,
                    },
                    {
                        cost: defaultCost / 2,
                        rent: defaultRent * 10,
                    },
                ],
            };

            if (!property.check()) {
                throw new Error('property creation missing fields');
            }
            this.ops.selectObject(property);
        }
    }
}