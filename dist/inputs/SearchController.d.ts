import React, { Component, ReactNode } from 'react';
declare type Props = {
    children: (props: {
        value: string;
        onChange: (newSearchString: string) => void;
        compareSearch: (stringToCompare: string) => boolean;
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
