import { MouseEvent } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { Colors } from '@monorail/helpers/exports';
import { CommonComponentType } from '@monorail/types';
import { ButtonSize } from '@monorail/visualComponents/buttons/buttonTypes';
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
