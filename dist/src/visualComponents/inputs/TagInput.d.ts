import React from 'react';
import { GetInputPropsOptions } from 'downshift';
import { SimpleInterpolation } from 'styled-components';
import { Eq } from 'fp-ts/lib/Eq';
import * as O from 'fp-ts/lib/Option';
import { FormMultiSelectInputProps, SuggestionInfo } from '@monorail/metaComponents/formMultiSelectInput/FormMultiSelectInput.types';
export declare const containerCss: import("styled-components").FlattenSimpleInterpolation;
declare type Position = 'top' | 'bottom';
export declare const TagInputItem: (props: {
    item: string;
    handleClick: () => void;
}) => JSX.Element;
declare type Tag = 'fullWidth' | 'text';
export declare const renderSelectedOptions: (tag?: "text" | "fullWidth" | undefined, viewPlaceholder?: string | undefined) => (selectedOptions: ReadonlyArray<string>, removeOption: (value: string) => void) => React.ReactElement;
export declare const renderSuggestibleInput: (placeholder: string) => (props: GetInputPropsOptions) => JSX.Element;
export declare const shouldShowNewSuggestion: (searchValue: string, suggestions: ReadonlyArray<string>, selectedOptions: ReadonlyArray<string>) => boolean;
export declare const isAlreadySelected: (searchValue: string, selectedOptions: ReadonlyArray<string>) => boolean;
export declare const renderSuggestions: (params: {
    position: Position;
    validateItem?: ((item: string) => O.Option<string>) | undefined;
}) => (suggestions: ReadonlyArray<string>, info: SuggestionInfo<string>) => React.ReactElement;
export declare function highlightSearchValue(labelName: string, searchValue: string): (string | JSX.Element)[];
export declare const normalize: (str: string) => string;
export declare const eqNormalizedString: Eq<string>;
export declare const getSuggestions: (selectedLabels: ReadonlyArray<string>) => (searchValue: string, labels: ReadonlyArray<string>) => Array<string>;
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
    searchValueToItem?: (searchValue: string) => O.Option<string>;
    /** Text to display when in View mode with no tags  */
    viewPlaceholder?: string;
};
export declare const TagInput: ({ tag, selectedOptions, eq, showSuggestions, position, searchValueToItem, validateItem, viewPlaceholder, ...otherProps }: TagInputProps) => JSX.Element;
export {};
