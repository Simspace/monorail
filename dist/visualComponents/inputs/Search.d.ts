import { ChangeEvent, FC, MouseEvent, RefObject } from 'react';
import { SimpleInterpolation } from 'styled-components';
export declare const SearchContainer: import("styled-components").StyledComponent<"label", import("../../helpers/theme").GlobalAppThemeInterface, SearchContainerProps, never>;
export declare const SearchInput: import("styled-components").StyledComponent<"input", import("../../helpers/theme").GlobalAppThemeInterface, SearchInputProps, never>;
export declare type SearchContainerProps = {
    cssOverrides?: SimpleInterpolation;
    searchRef?: RefObject<HTMLInputElement>;
};
export declare type SearchInputProps = {
    onClick?: (event: MouseEvent<HTMLInputElement>) => void;
    value?: string;
    name?: string;
};
export declare type SearchProps = SearchContainerProps & SearchInputProps & {
    onChange: (value: string, event?: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
};
export declare const Search: FC<SearchProps>;
