import { ChangeEvent, MouseEvent, RefObject } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { Overwrite } from 'typelevel-ts';
import { FCwDP } from '@monorail/sharedHelpers/react';
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
declare type DefaultProps = {
    placeholder: string;
};
export declare type SearchProps = SearchContainerProps & Overwrite<SearchInputProps, {
    onChange: (value: string, event?: ChangeEvent<HTMLInputElement>) => void;
}>;
export declare const Search: FCwDP<SearchProps, DefaultProps>;
export {};
