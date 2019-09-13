import { SFC } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { SelectOption } from '@monorail/visualComponents/inputs/Select';
export declare type CheckmarkSelectValue = {
    enabled: boolean;
    value: string;
};
export declare type CheckboxSelectProps = {
    onChange: (value: CheckmarkSelectValue) => void;
    value: CheckmarkSelectValue;
    cssOverrides?: SimpleInterpolation;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    name?: string;
    label?: string;
    options: Array<SelectOption>;
    placeholder?: string;
};
export declare const CheckboxSelect: SFC<CheckboxSelectProps>;
