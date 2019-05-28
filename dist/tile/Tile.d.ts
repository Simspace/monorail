import { FC } from 'react';
import { Colors } from '@monorail/helpers/exports';
import { CommonComponentType, LinkProps } from '@monorail/types';
declare type TileProps = {
    icon: string;
    image?: string;
    name: string;
    frameColor: Colors;
};
declare type Props = CommonComponentType & TileProps & {
    to: LinkProps['to'];
};
export declare const Tile: FC<Props>;
export {};
