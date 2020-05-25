import { NodeConfig } from './NodeConfig';
import SharedAssets from '../SharedAssets';
import { WidgetConfig } from './WidgetConfig';
import { nullCheck } from '../utils';

interface InputProps {
    name?: string;
    placeholder?: string;
    initialText?: string;
    size?: cc.Size;
    widget?: WidgetConfig;
    onChange?: (editBox: cc.EditBox) => void;
    onEnter?: (editBox: cc.EditBox) => void;
    onFocus?: (editBox: cc.EditBox) => void;
    onInput?: (editBox: cc.EditBox) => void;
    maxLength?: number;
}
export function createInput(props: InputProps): NodeConfig {
    const {
        name = 'input',
        placeholder = '',
        initialText = '',
        size = new cc.Size(100, 40),
        widget,
        onChange,
        onEnter,
        onFocus,
        onInput,
        maxLength = 100,
    } = props;
    const root = NodeConfig.fromPrefab('input', SharedAssets.instance().inputPrefab);
    if (widget) {
        root.addComponents(widget);
    }
    // we don't have a EditBoxConfig, let's for now just modify the prefab value
    // in postApply
    root.postApply((node) => {
        const editBox = nullCheck(node.getComponent(cc.EditBox));
        node.name = name;
        node.setContentSize(size);
        editBox.maxLength = maxLength;
        if (onChange) {
            node.on('text-changed', onChange);
        }
        if (onEnter) {
            node.on('editing-return', onEnter);
        }
        if (onFocus) {
            node.on('editing-did-began', onFocus);
        }
        if (onInput) {
            node.on('editing-did-ended', onInput);
        }
        editBox.string = initialText;
        editBox.placeholder = placeholder;
    });
    return root;
}