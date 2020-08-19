import { FC } from 'react';
import { MenuAction } from '@monorail/visualComponents/actionsMenu/ActionsMenu';
import { IconType } from '@monorail/visualComponents/icon/IconType';
import { TileStatus } from './TileStatus';
declare type TileStyleProps = {
    status: TileStatus;
    selected?: boolean;
    disabled?: boolean;
};
declare type TileProps = TileStyleProps & {
    icon: IconType;
    status?: TileStatus;
    selected?: boolean;
    actions?: Array<MenuAction>;
};
export declare const Tile: FC<TileProps>;
export {};
//# sourceMappingURL=Tile.d.ts.map