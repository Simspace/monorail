/// <reference types="@monorail/typings/styled-components" />
import { SimpleInterpolation } from 'styled-components';
import { PopOverPosition } from '@monorail/metaComponents/popOver/PopOver';
export declare const visible: (isVisible?: boolean) => import("styled-components").FlattenSimpleInterpolation;
export declare const ease: (isActive: boolean) => "ease-in" | "ease-out";
export declare const generateScaleAnimation: (params: {
    position: PopOverPosition;
    isOpen: boolean;
    elementHeight: number;
    elementWidth: number;
}) => {
    outSideContentStyles: SimpleInterpolation;
    inSideContentStyles: SimpleInterpolation;
};
export declare const buttonTransition: import("styled-components").FlattenSimpleInterpolation;
export declare const transition: (props: {
    properties?: Array<string>;
    easing: string;
    duration: number;
}) => SimpleInterpolation;
//# sourceMappingURL=animation.d.ts.map