/// <reference types="react" />
import { TableProps } from 'react-table';
export declare enum CheckboxType {
    Radio = "RADIO",
    Checkbox = "CHECKBOX"
}
export declare type SelectableTableProps<T> = {
    selectProps: {
        onSelectionChange: (sel: Record<string, T>) => void;
        selected: Record<string, T>;
        getId: (x: T) => string;
        isDisabled: (x: T) => boolean;
        totalItems: number;
        rowHeight: number;
        type?: CheckboxType;
    };
    reactTableProps: ModifiedReactTableProps<T> & Required<Pick<TableProps<T>, 'data' | 'columns'>>;
};
declare type ModifiedReactTableProps<T> = Partial<Omit<TableProps<T>, 'data' | 'columns' | 'getTrProps' | 'TrComponent'>>;
export declare const ReactTableSelect: <T extends unknown>({ selectProps: { type, totalItems, ...selectProps }, reactTableProps: { ...reactTableProps }, }: SelectableTableProps<T>) => JSX.Element;
export {};
