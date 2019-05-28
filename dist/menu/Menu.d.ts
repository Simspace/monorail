import { PopOverChildProps } from '@monorail/popOver/PopOver';
import { FCwDP } from '@monorail/sharedHelpers/react';
declare type RequiredProps = PopOverChildProps & {
    width?: number;
};
declare type DefaultProps = {
    zIndex: number;
};
export declare const Menu: FCwDP<RequiredProps, DefaultProps>;
export {};
