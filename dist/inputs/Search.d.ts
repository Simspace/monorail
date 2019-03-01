import React, { ChangeEvent, Component, MouseEvent, RefObject } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { StyledHtmlElement } from '@monorail/CoreUtils/type-level';
import { Overwrite } from 'typelevel-ts';
export declare const BBSearchContainer: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLLabelElement> & React.LabelHTMLAttributes<HTMLLabelElement> & BBSearchContainerProps, any, React.ClassAttributes<HTMLLabelElement> & React.LabelHTMLAttributes<HTMLLabelElement> & BBSearchContainerProps>;
export declare const BBSearchInput: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement> & BBSearchInputProps, any, React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement> & BBSearchInputProps>;
export declare type BBSearchInput = StyledHtmlElement<HTMLInputElement, BBSearchInputProps>;
export declare type BBSearchContainerProps = {
    css?: SimpleInterpolation;
    searchRef?: RefObject<SearchRefType>;
    darkMode: boolean;
};
export declare type BBSearchInputProps = {
    darkMode: boolean;
    onClick?: (event: MouseEvent<HTMLInputElement>) => void;
    placeholder: string;
    value?: string;
};
export declare type SearchRefType = StyledHtmlElement<HTMLInputElement, BBSearchInputProps>;
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
