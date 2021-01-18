import { property } from '@prisel/protos';
import React from 'react';
import { ListEditor } from './ListEditor';
import { NumberInput } from './NumberInput';

interface PropertyLevelEditorProps {
    propertyLevel: property.PropertyLevel;
    level: number;
}
const PropertyLevelEditor: React.FC<PropertyLevelEditorProps> = ({ propertyLevel, level }) => {
    return (
        <React.Fragment>
            <p>level {level + 1}</p>
            <NumberInput
                label="purchase/upgrade cost"
                initialValue={propertyLevel.cost}
                onCommit={(value: number) => {
                    propertyLevel.cost = value;
                }}
            />
            <NumberInput
                label="rent"
                initialValue={propertyLevel.rent}
                onCommit={(value: number) => {
                    propertyLevel.rent = value;
                }}
            />
        </React.Fragment>
    );
};

interface PropertyLevelsEditorProps {
    propertyLevels: property.PropertyLevel[];
}

export const PropertyLevelsEditor: React.FC<PropertyLevelsEditorProps> = ({ propertyLevels }) => {
    return (
        <ListEditor
            list={propertyLevels}
            fixedLength
            itemRenderer={(level: property.PropertyLevel, index: number) => (
                <PropertyLevelEditor propertyLevel={level} level={index} />
            )}
        />
    );
};
