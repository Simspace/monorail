import { PopOverChildProps } from '@monorail/metaComponents/popOver/PopOver';
import { FCwDP } from '@monorail/sharedHelpers/react';
import { CommonComponentType } from '@monorail/types';
declare type MenuProps = CommonComponentType & {
    width: string;
};
export declare const MenuContainer: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, MenuProps, never>;
export declare const MenuContent: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, {}, never>;
declare type RequiredProps = CommonComponentType & PopOverChildProps & {
    width?: number;
};
declare type DefaultProps = {
    zIndex: number;
};
export declare const Menu: FCwDP<RequiredProps, DefaultProps>;
export {};
