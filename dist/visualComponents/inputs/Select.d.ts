import React, { FC } from 'react';
import { SimpleInterpolation } from 'styled-components';
export declare type SelectOption = {
    label: string;
    value: string;
};
export declare type SelectProps = {
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
    err?: boolean;
};
export declare const Select: FC<SelectProps>;
