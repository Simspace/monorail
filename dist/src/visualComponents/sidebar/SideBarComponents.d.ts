import { FC } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { CssOverridesType } from '@monorail/types';
import { FontSizes } from '@monorail/helpers/exports';
import { ButtonDisplay } from '@monorail/visualComponents/buttons/buttonTypes';
export declare const sideBarCollapsedTransitionDuration = 150;
export declare const sideBarCollapsedTransition: (props: {
    properties?: Array<string>;
    isSideBarCollapsed: boolean;
}) => SimpleInterpolation;
export declare enum SidebarContainerAnimationPose {
    Open = "open",
    Collapsed = "collapsed"
}
export declare const SidebarContainer: any;
export declare const SidebarMenuContainer: any;
export declare const SidebarMenuItemDropDownToggle: any;
export declare const SideBarMenuDivider: any;
export declare const SideBarMenuHeader: FC<{
    isSideBarCollapsed: boolean;
    header: string;
    fontSize?: FontSizes;
    cssOverrides?: CssOverridesType;
}>;
export declare const SidebarBack: FC<{
    to: string;
    title: string;
    byline: string;
    display?: ButtonDisplay;
}>;
//# sourceMappingURL=SideBarComponents.d.ts.map