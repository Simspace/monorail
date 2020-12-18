import React, { Component, ReactNode } from 'react';
export declare type CompareSearchType = (stringToCompare: string) => boolean;
declare type Props = {
    children: (props: {
        value: string;
        onChange: (newSearchString: string) => void;
        compareSearch: CompareSearchType;
    }) => ReactNode;
};
declare type State = {
    searchString: string;
};
export declare class SearchController extends Component<Props, State> {
    state: State;
    onChange: (newSearchString: string) => void;
    render(): React.ReactNode;
}
export {};
