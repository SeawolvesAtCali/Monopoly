import { hasMixin, PathMixinConfig, PathNode } from '@prisel/monopoly-common';
import {
    LANDING_POS_OFFSET,
    PLAYER_Z_INDEX_OFFSET,
    TILE_SIZE,
    TILE_Z_INDEX_OFFSET,
} from './consts';
import { getRand, lifecycle } from './utils';

const { ccclass, property } = cc._decorator;

@ccclass
export default class Tile extends cc.Component {
    private tile: PathNode = null;
    @property(cc.SpriteAtlas)
    private tileAtlas: cc.SpriteAtlas = null;

    public init(tile: PathNode) {
        this.tile = tile;
    }

    public getLandingPos() {
        return this.node.position.add(LANDING_POS_OFFSET);
    }

    // return the initial position of the bottom as if map's anchor is at the
    // top left corner.
    public getInitialAnchorPos() {
        return new cc.Vec2(
            this.tile.position.col * TILE_SIZE,
            -(this.tile.position.row + 1) * TILE_SIZE,
        );
    }

    public getLandingZIndex() {
        return this.tile.position.row * 10 + PLAYER_Z_INDEX_OFFSET;
    }

    public getZIndex() {
        return this.tile.position.row * 10 + TILE_Z_INDEX_OFFSET;
    }

    @lifecycle
    protected start() {
        this.getComponent(cc.Sprite).spriteFrame = this.tileAtlas.getSpriteFrame(this.getSprite());
    }

    public getSprite(): string {
        const pos = this.tile.position;
        if (hasMixin(this.tile, PathMixinConfig)) {
            let up = false;
            let down = false;
            let left = false;
            let right = false;
            for (const prevRef of this.tile.path.prev) {
                const prev = prevRef();
                if (prev.position.col === pos.col && prev.position.row === pos.row + 1) {
                    down = true;
                }
                if (prev.position.col === pos.col && prev.position.row === pos.row - 1) {
                    up = true;
                }
                if (prev.position.row === pos.row && prev.position.col === pos.col + 1) {
                    right = true;
                }
                if (prev.position.row === pos.row && prev.position.col === pos.col - 1) {
                    left = true;
                }
            }
            for (const nextRef of this.tile.path.next) {
                const next = nextRef();
                if (next.position.col === pos.col && next.position.row === pos.row + 1) {
                    down = true;
                }
                if (next.position.col === pos.col && next.position.row === pos.row - 1) {
                    up = true;
                }
                if (next.position.row === pos.row && next.position.col === pos.col + 1) {
                    right = true;
                }
                if (next.position.row === pos.row && next.position.col === pos.col - 1) {
                    left = true;
                }
            }
            if (up && down && left && right) {
                return 'all-direction';
            }
            if (up && down && left) {
                return 't-left';
            }
            if (up && down && right) {
                return 't-right';
            }
            if (up && down) {
                return 'vertical';
            }
            if (left && right) {
                return 'horizontal';
            }
            if (left && up) {
                return 'left-up';
            }
            if (left && down) {
                return 'left-down';
            }
            if (right && up) {
                return 'right-up';
            }
            if (right && down) {
                return 'right-down';
            }
        }
        return getRand(['slice1', 'slice2', 'slice3', 'slice4', 'slice5']);
    }
}
