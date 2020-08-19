/// <reference types="@monorail/typings/styled-components" />
import { GetInputPropsOptions } from 'downshift';
import { Eq } from 'fp-ts/lib/Eq';
import { Option } from 'fp-ts/lib/Option';
import React from 'react';
import { SimpleInterpolation } from 'styled-components';
import { FormMultiSelectInputProps, SuggestionInfo } from '@monorail/metaComponents/formMultiSelectInput/FormMultiSelectInput.types';
export declare const containerCss: import("styled-components").FlattenSimpleInterpolation;
declare type Position = 'top' | 'bottom';
export declare const TagInputItem: (props: {
    item: string;
    handleClick: () => void;
}) => JSX.Element;
declare type Tag = 'fullWidth' | 'text';
export declare const renderSelectedOptions: (tag?: "text" | "fullWidth" | undefined) => (selectedOptions: ReadonlyArray<string>, removeOption: (value: string) => void) => React.ReactElement;
export declare const renderSuggestibleInput: (placeholder: string) => (props: GetInputPropsOptions) => JSX.Element;
export declare const shouldShowNewSuggestion: (searchValue: string, suggestions: ReadonlyArray<string>, selectedOptions: ReadonlyArray<string>) => boolean;
export declare const renderSuggestions: (position: Position) => (suggestions: ReadonlyArray<string>, info: SuggestionInfo<string>) => React.ReactElement;
export declare function highlightSearchValue(labelName: string, searchValue: string): (string | JSX.Element)[];
export declare const normalize: (str: string) => string;
export declare const eqNormalizedString: Eq<string>;
export declare const getSuggestions: (selectedLabels: ReadonlyArray<string>) => (searchValue: string, labels: ReadonlyArray<string>) => string[];
declare type GenericTagInputProps<T> = Omit<FormMultiSelectInputProps<T>, 'renderInput'> & {
    placeholder: string;
    cssOverrides?: SimpleInterpolation;
    position?: Position;
};
export declare function GenericTagInput<T>({ placeholder, cssOverrides, selectedOptions, options, eq, ...otherProps }: GenericTagInputProps<T>): JSX.Element;
declare type TagInputProps = Omit<GenericTagInputProps<string>, 'eq' | 'getSuggestedValues' | 'renderInput' | 'renderSelectedOptions' | 'renderSuggestions' | 'searchValueToItem'> & {
    placeholder: string;
    tag?: Tag;
    eq?: Eq<string>;
    showSuggestions?: boolean;
    position?: Position;
    searchValueToItem?: (searchValue: string) => Option<string>;
};
export declare const TagInput: ({ tag, selectedOptions, eq, showSuggestions, position, searchValueToItem, ...otherProps }: TagInputProps) => JSX.Element;
export {};
//# sourceMappingURL=TagInput.d.ts.map