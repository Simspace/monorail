import { ChangeEvent, Component, MouseEvent, RefObject } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { Overwrite } from 'typelevel-ts';
export declare const BBSearchContainer: import("styled-components").StyledComponent<"label", any, BBSearchContainerProps, never>;
export declare const BBSearchInput: import("styled-components").StyledComponent<"input", any, BBSearchInputProps, never>;
export declare type BBSearchContainerProps = {
    cssOverrides?: SimpleInterpolation;
    searchRef?: RefObject<HTMLInputElement>;
    darkMode: boolean;
};
export declare type BBSearchInputProps = {
    darkMode: boolean;
    onClick?: (event: MouseEvent<HTMLInputElement>) => void;
    placeholder: string;
    value?: string;
};
declare type SearchProps = BBSearchContainerProps & Overwrite<BBSearchInputProps, {
    onChange: (value: string, event?: ChangeEvent<HTMLInputElement>) => void;
}>;
export declare class Search extends Component<SearchProps> {
    static defaultProps: {
        darkMode: boolean;
        placeholder: string;
    };
    render(): JSX.Element;
}
export {};
