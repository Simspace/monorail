import React, { Component, ReactNode } from 'react';
export declare const ChoiceSorterCss: import("styled-components").FlattenSimpleInterpolation;
export declare type BasicOption = {
    label: string;
    value: string;
    selected: boolean;
};
export declare type BasicOptionGroup = {
    label: string;
    key: string;
    items: BasicOption[];
};
declare type BasicFilterControllerProps = {
    document?: Document;
    group: BasicOptionGroup;
    children: (params: {
        collection: BasicOption[];
        document?: Document;
        isActive: boolean;
        title: ReactNode;
        key: string;
        onChange: (filter: BasicOption) => void;
    }) => ReactNode;
};
declare type TitleState = {
    title: ReactNode;
};
export declare class BasicFilterController extends Component<BasicFilterControllerProps, TitleState> {
    state: TitleState;
    getTitle: () => React.ReactNode;
    updateTitle: () => void;
    onFilterChange: (filter: BasicOption) => void;
    componentDidMount: () => void;
    render(): React.ReactNode;
}
declare type BasicSorterControllerProps = {
    document?: Document;
    group: BasicOptionGroup;
    children: (params: {
        collection: BasicOption[];
        document?: Document;
        isActive: boolean;
        title: ReactNode;
        key: string;
        style: (selected: boolean) => any;
        onChange: (key: string) => void;
    }) => ReactNode;
};
export declare class BasicSorterController extends Component<BasicSorterControllerProps, TitleState> {
    state: TitleState;
    getTitle: () => React.ReactNode;
    updateTitle: () => void;
    sorterItemStyle: (selected: boolean) => false | import("styled-components").FlattenSimpleInterpolation;
    onSorterChange: (key: string) => void;
    componentDidMount: () => void;
    render(): React.ReactNode;
}
export {};
