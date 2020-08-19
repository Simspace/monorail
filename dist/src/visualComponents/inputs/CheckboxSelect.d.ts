import { FC } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { SelectOption } from '@monorail/visualComponents/inputs/Select';
export declare type CheckboxSelectValue = {
    enabled: boolean;
    value: string;
};
export declare type CheckboxSelectProps = {
    onChange: (value: CheckboxSelectValue) => void;
    value: CheckboxSelectValue;
    cssOverrides?: SimpleInterpolation;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    name?: string;
    label?: string;
    options: Array<SelectOption>;
    placeholder?: string;
};
export declare const CheckboxSelect: FC<CheckboxSelectProps>;
//# sourceMappingURL=CheckboxSelect.d.ts.map