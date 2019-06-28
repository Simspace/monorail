import { MouseEvent } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { ButtonSize } from '@monorail/buttons/buttonTypes';
import { Colors } from '@monorail/helpers/exports';
import { CommonComponentType } from '@monorail/types';
declare type Props = CommonComponentType & {
    current: number;
    next?: (event: MouseEvent<Element>) => void;
    previous?: (event: MouseEvent<Element>) => void;
    total: number;
    slideIndicatorType?: string;
    size?: ButtonSize;
    arrowColor?: Colors;
    cssArrowOverrides?: SimpleInterpolation;
};
export declare const ArrowButtons: (props: Props) => JSX.Element;
export {};
