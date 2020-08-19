import { ChangeEvent, FC, MouseEvent, RefObject } from 'react';
import { SimpleInterpolation } from 'styled-components';
export declare const SearchContainer: any;
export declare const SearchInput: any;
export declare type SearchContainerProps = {
    cssOverrides?: SimpleInterpolation;
    width?: number;
    searchRef?: RefObject<HTMLInputElement>;
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
//# sourceMappingURL=Search.d.ts.map