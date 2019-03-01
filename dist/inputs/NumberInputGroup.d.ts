import { SFC } from 'react';
declare type InputItem = {
    label: string;
    key: string;
    min?: number;
    max?: number;
};
declare type Props = {
    label?: string;
    items: InputItem[];
    onSelect: (key: string, value: any) => void;
    value: any;
    required?: boolean;
};
export declare const NumberInputGroup: SFC<Props>;
export {};
