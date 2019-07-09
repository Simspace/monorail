import { FC, MouseEventHandler, ReactType } from 'react';
import { Colors } from '@monorail/helpers/exports';
import { LinkProps } from '@monorail/types';
declare type TileProps = {
    icon: string;
    image?: string;
    name: string;
    frameColor: Colors;
    isArchived?: boolean;
};
declare type Props = TileProps & {
    to: LinkProps['to'];
    as?: ReactType;
    onClick?: MouseEventHandler;
};
export declare const Tile: FC<Props>;
export {};
