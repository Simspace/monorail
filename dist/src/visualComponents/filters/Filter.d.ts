import React, { Component, ReactNode } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { Colors } from '@monorail/helpers/exports';
export declare const CCFilter: import("styled-components").StyledComponent<"div", any, CCFilterProps, never>;
export declare const FilterText: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const FilterIcon: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<import("../../types").CommonComponentType & {
    className?: string | undefined;
    icon: import("../exports").IconType;
    onClick?: import("../icon/Icon").OnClick | undefined;
    size?: number | undefined;
    title?: string | undefined;
    color?: Colors | undefined;
} & React.RefAttributes<HTMLElement>>, any, import("../icon/Icon").IconProps, never>;
declare type CCFilterProps = {
    cssOverrides?: SimpleInterpolation;
    isActive?: boolean;
    onToggle?: (isOpen: boolean) => void;
};
declare type Props = CCFilterProps & {
    document?: Document;
    title: ReactNode;
    children: ReactNode;
    zIndex?: number;
};
export declare class Filter extends Component<Props> {
    render(): JSX.Element;
}
export {};
