import { FC, MouseEvent } from 'react';
import { Colors } from '@monorail/helpers/exports';
import { CommonComponentType, CssOverridesType } from '@monorail/types';
import { ButtonSize } from '@monorail/visualComponents/buttons/buttonTypes';
export declare type ArrowButtonsProps = CommonComponentType & {
    current: number;
    next?: (event: MouseEvent<Element>) => void;
    previous?: (event: MouseEvent<Element>) => void;
    total: number;
    slideIndicatorType?: string;
    size?: ButtonSize;
    arrowColor?: Colors;
    loop?: boolean;
    cssArrowOverrides?: CssOverridesType;
};
export declare const ArrowButtons: FC<ArrowButtonsProps>;
//# sourceMappingURL=ArrowButtons.d.ts.map