import React, { Component } from 'react';
import { SimpleInterpolation } from 'styled-components';
declare type CCTagProps = {
    cssOverrides?: SimpleInterpolation;
    label?: string;
};
export declare const CCTag: import("styled-components").StyledComponentClass<CCTagProps, any, CCTagProps & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>>;
declare type TagProps = CCTagProps & {
    icon: string;
    key?: string | number;
};
export declare class Tag extends Component<TagProps> {
    render(): JSX.Element;
}
export {};
