import React, { ChangeEvent, FC, MouseEvent } from 'react';
import { SimpleInterpolation } from 'styled-components';
export declare const SearchContainer: import("styled-components").StyledComponent<"label", import("../../helpers/theme").GlobalAppThemeInterface, SearchContainerProps, never>;
export declare const SearchInput: import("styled-components").StyledComponent<"input", import("../../helpers/theme").GlobalAppThemeInterface, SearchInputProps, never>;
export declare type SearchContainerProps = {
    cssOverrides?: SimpleInterpolation;
    width?: number;
    searchRef?: React.Ref<HTMLInputElement>;
};
export declare type SearchInputProps = {
    onClick?: (event: MouseEvent<HTMLInputElement>) => void;
    onBlur?: (event?: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    width?: number;
    name?: string;
};
export declare type SearchProps = SearchContainerProps & SearchInputProps & {
    onChange: (value: string, event?: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
};
export declare const Search: FC<SearchProps>;
