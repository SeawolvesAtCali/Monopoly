// @generated by protobuf-ts 1.0.12 with parameters disable_service_client
// @generated from protobuf file "prisel/broadcast_spec.proto" (package "prisel", syntax proto3)
// tslint:disable
import { BinaryWriteOptions } from "@protobuf-ts/runtime";
import { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import { BinaryReadOptions } from "@protobuf-ts/runtime";
import { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { PlayerInfo } from "./player_info";
/**
 * @generated from protobuf message prisel.BroadcastPayload
 */
export interface BroadcastPayload {
    /**
     * @generated from protobuf field: prisel.PlayerInfo player = 1;
     */
    player?: PlayerInfo;
    /**
     * @generated from protobuf field: string message = 2;
     */
    message: string;
}
/**
 * Type for protobuf message prisel.BroadcastPayload
 */
class BroadcastPayload$Type extends MessageType<BroadcastPayload> {
    constructor() {
        super("prisel.BroadcastPayload", [
            { no: 1, name: "player", kind: "message", T: () => PlayerInfo },
            { no: 2, name: "message", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<BroadcastPayload>): BroadcastPayload {
        const message = { message: "" };
        if (value !== undefined)
            reflectionMergePartial<BroadcastPayload>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BroadcastPayload): BroadcastPayload {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* prisel.PlayerInfo player */ 1:
                    message.player = PlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.player);
                    break;
                case /* string message */ 2:
                    message.message = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: BroadcastPayload, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* prisel.PlayerInfo player = 1; */
        if (message.player)
            PlayerInfo.internalBinaryWrite(message.player, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string message = 2; */
        if (message.message !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.message);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
export const BroadcastPayload = new BroadcastPayload$Type();
