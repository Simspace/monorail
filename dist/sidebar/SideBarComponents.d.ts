import React from 'react';
import { SimpleInterpolation } from 'styled-components';
import { CommonComponentType } from '@monorail/types';
import { PopOverToggleProps } from '@monorail/popOver/PopOver';
export declare const sideBarCollapsedTransitionDuration = 150;
export declare const sideBarCollapsedTransition: (props: {
    properties?: Array<string>;
    isSideBarCollapsed: boolean;
}) => SimpleInterpolation;
export declare enum SidebarContainerAnimationPose {
    Open = "open",
    Collapsed = "collapsed"
}
export declare const SidebarContainer: import("styled-components").StyledComponentClass<CommonComponentType & {
    pose: string;
}, any, Pick<CommonComponentType & {
    pose: string;
}, "id" | "css" | "className" | "as" | "tabIndex" | "pose"> & {
    theme?: any;
}>;
export declare const SidebarMenuContainer: import("styled-components").StyledComponentClass<CommonComponentType, any, CommonComponentType & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>>;
export declare const SidebarMenuItemDropDownToggle: import("styled-components").StyledComponentClass<CommonComponentType & PopOverToggleProps & {
    disabled?: boolean | undefined;
    title: string;
    subtitle?: string | undefined;
    iconName: string;
    isSideBarCollapsed: boolean;
}, any, Pick<CommonComponentType & PopOverToggleProps & {
    disabled?: boolean | undefined;
    title: string;
    subtitle?: string | undefined;
    iconName: string;
    isSideBarCollapsed: boolean;
}, "title" | "id" | "isOpen" | "css" | "className" | "onClick" | "as" | "tabIndex" | "disabled" | "isSideBarCollapsed" | "subtitle" | "iconName"> & {
    theme?: any;
}>;
export declare const SidebarMenuContextRibbon: import("styled-components").StyledComponentClass<CommonComponentType, any, CommonComponentType & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>>;
export declare const SideBarMenuDivider: import("styled-components").StyledComponentClass<{}, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
