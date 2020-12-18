import React, { ChangeEvent } from 'react';
import * as MUI from '@material-ui/core';
import { OmitBannedProps } from '@monorail/v2/shared/helpers';
export declare const StyledOutlinedInput: import("styled-components").StyledComponent<typeof SearchField, import("../../../helpers/theme").GlobalAppThemeInterface, {}, never>;
declare type ClearableSearchFieldProps = Pick<SearchFieldProps, 'value' | 'inputRef' | 'onChange'> & {
    /**
     * Callback when clear button is clicked
     */
    onClear: () => void;
};
export declare const useClearableSearchField: (props: ClearableSearchFieldProps) => {
    searchFieldProps: {
        inputRef: React.RefObject<HTMLInputElement>;
        value: string;
        onChange: (e: ChangeEvent<HTMLInputElement>) => void;
        endAdornment: JSX.Element;
    };
};
declare type SearchFieldMonorailProps = {
    value?: string;
    inputRef?: React.RefObject<HTMLInputElement>;
};
declare type SearchFieldProps = SearchFieldMonorailProps & OmitBannedProps<Omit<MUI.OutlinedInputProps, 'inputRef'>>;
/**
 * Basic input styled as a search field
 */
export declare function SearchField(props: SearchFieldProps): JSX.Element;
/**
 * `SearchField` composed with `useClearableSearch`
 *
 * TODO: If we don't like separate `SearchField` and `SearchFieldClearable`, we can change it to
 * `<SearchField clearable={true} />` and create a `SearchFieldBase`.
 */
export declare function SearchFieldClearable(props: ClearableSearchFieldProps & SearchFieldProps): JSX.Element;
export {};
