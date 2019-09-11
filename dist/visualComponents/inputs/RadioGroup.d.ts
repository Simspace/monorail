import { ChangeEvent, SFC } from 'react';
export declare type ChoiceOption = {
    label: string;
    key: string;
    info?: string;
    disabled?: boolean;
    'data-test-id'?: string;
};
export declare type RadioGroupProps = {
    label: string;
    options: Array<ChoiceOption>;
    onSelect: (key: string, val: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    required: boolean;
};
export declare const RadioGroup: SFC<RadioGroupProps>;
