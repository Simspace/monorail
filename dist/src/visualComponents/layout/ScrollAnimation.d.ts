import React, { ReactNode, UIEvent } from 'react';
import { CssOverridesType } from '@monorail/types';
declare type ScrollAnimationProps = {
    containerCssOverrides?: CssOverridesType;
    onScroll?: (event: UIEvent<HTMLDivElement>) => void;
    children?: ReactNode;
};
export declare const ScrollAnimation: React.ForwardRefExoticComponent<ScrollAnimationProps & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=ScrollAnimation.d.ts.map