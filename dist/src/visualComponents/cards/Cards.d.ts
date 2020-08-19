import { MouseEvent, ReactNode, Ref, StatelessComponent } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { AppName, ElevationRange } from '@monorail/helpers/exports';
import { CommonComponentType } from '@monorail/types';
import { IconType } from '@monorail/visualComponents/icon/IconType';
export declare type BBCardBackgroundProps = CommonComponentType & {
    hover?: boolean;
    elevation?: ElevationRange;
    onClick?: (event: MouseEvent) => void;
    ref?: Ref<any>;
    cssCardContent?: SimpleInterpolation;
    children?: ReactNode;
};
export declare const BBCardBackground: any;
declare type BBCardBottomBorderProps = {
    accentColor?: string;
};
declare type BBCardHeaderProps = BBCardBottomBorderProps & {
    appIcon?: AppName;
    cssOverrides?: SimpleInterpolation;
    iconLeft?: IconType;
    iconRight?: IconType;
    noBorder?: boolean;
    title: string;
};
export declare const BBCardHeader: StatelessComponent<BBCardHeaderProps>;
export declare const BBCardGrid: any;
export {};
//# sourceMappingURL=Cards.d.ts.map