import { SFC, ChangeEvent } from 'react';
declare type ChoiceOption = {
    label: string;
    key: string;
    info: string;
};
declare type Props = {
    label: string;
    options: Array<ChoiceOption>;
    onSelect: (key: string, val: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    required: boolean;
};
export declare const RadioGroup: SFC<Props>;
export {};
