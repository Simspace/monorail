import { FCwDP } from '@monorail/sharedHelpers/react';
import { PopOverChildProps } from '@monorail/popOver/PopOver';
declare type RequiredProps = PopOverChildProps & {
    width?: number;
};
declare type DefaultProps = {
    zIndex: number;
};
export declare const Menu: FCwDP<RequiredProps, DefaultProps>;
export {};
