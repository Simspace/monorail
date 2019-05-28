import React, { SFC } from 'react';
import { SimpleInterpolation } from 'styled-components';
export declare type SelectOption = {
    label: string;
    value: string;
};
declare type Props = {
    cssOverrides?: SimpleInterpolation;
    disabled?: boolean;
    label?: string;
    name?: string;
    onBlur?: (e: React.SyntheticEvent) => void;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onSelect?: (e: string | Array<string> | number | undefined) => void;
    options: Array<SelectOption>;
    placeholder?: string;
    required?: boolean;
    value?: string | Array<string> | number;
};
export declare const Select: SFC<Props>;
export {};
