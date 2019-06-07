import { Component, ReactNode } from 'react';
import { SimpleInterpolation } from 'styled-components';
export declare const CCFilter: import("styled-components").StyledComponent<"div", any, CCFilterProps, never>;
export declare const FilterText: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const FilterIcon: import("styled-components").StyledComponent<({ cssOverrides: _cssOverrides, icon, ...otherProps }: import("../icon/Icon").IconProps) => JSX.Element, any, import("../icon/Icon").IconProps, never>;
declare type CCFilterProps = {
    cssOverrides?: SimpleInterpolation;
    isActive: boolean;
    onToggle?: (isOpen: boolean) => void;
};
declare type Props = CCFilterProps & {
    document?: Document;
    title: ReactNode;
    content: ReactNode;
    zIndex?: number;
};
export declare class Filter extends Component<Props> {
    render(): JSX.Element;
}
export {};
