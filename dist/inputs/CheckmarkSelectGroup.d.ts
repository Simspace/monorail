import { SFC } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { SelectOption } from './Select';
declare type CheckmarkSelect = {
    label: string;
    key: string;
    options: Array<SelectOption>;
    value: string;
    enabled: boolean;
};
declare type Props = {
    cssOverrides?: SimpleInterpolation;
    label?: string;
    items: Array<CheckmarkSelect>;
    onSelect: (key: string, value: string | number | Array<string> | undefined) => void;
    onCheck: (key: string, checked: boolean) => void;
};
export declare const CheckmarkSelectGroup: SFC<Props>;
export {};
