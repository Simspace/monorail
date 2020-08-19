import React, { FC } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { DisplayType } from '@monorail/visualComponents/inputs/inputTypes';
export declare type SelectOption = {
    label: string;
    value: string;
};
export declare type SelectProps = {
    cssOverrides?: SimpleInterpolation;
    disabled?: boolean;
    display?: DisplayType;
    err?: boolean;
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
export declare const Select: FC<SelectProps>;
//# sourceMappingURL=Select.d.ts.map