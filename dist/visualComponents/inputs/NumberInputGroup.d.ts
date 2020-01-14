import { FC } from 'react';
declare type InputItem = {
    label: string;
    key: string;
    min?: number;
    max?: number;
};
declare type Props = {
    label?: string;
    items: Array<InputItem>;
    onSelect: (key: string, value: number) => void;
    value: Record<string, number>;
    required?: boolean;
};
export declare const NumberInputGroup: FC<Props>;
export {};
