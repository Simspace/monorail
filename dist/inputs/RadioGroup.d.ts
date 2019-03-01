import { SFC } from 'react';
declare type ChoiceOption = {
    label: string;
    key: string;
};
declare type Props = {
    label?: string;
    options: ChoiceOption[];
    onSelect: any;
    value: string;
    required?: boolean;
};
export declare const RadioGroup: SFC<Props>;
export {};
