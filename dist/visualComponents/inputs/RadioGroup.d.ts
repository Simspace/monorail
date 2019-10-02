import { ChangeEvent, SFC } from 'react';
import { ErrorProps } from '@monorail/visualComponents/inputs/StdErr';
export declare type ChoiceOption = {
    label: string;
    key: string;
    info?: string;
    disabled?: boolean;
    'data-test-id'?: string;
};
export declare type RadioGroupProps = ErrorProps & {
    label: string;
    options: Array<ChoiceOption>;
    onSelect: (key: string, val: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    required?: boolean;
    hasRequiredAsterisk?: boolean;
};
export declare const RadioGroup: SFC<RadioGroupProps>;
