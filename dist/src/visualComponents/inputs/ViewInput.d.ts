import { ReactNode } from 'react';
import { TextProps } from '@monorail/visualComponents/typography/Text';
export declare enum Orientation {
    Row = "row",
    Column = "column"
}
declare type ViewInputProps = {
    disabled?: boolean;
    label?: string | number;
    orientation?: Orientation;
    placeholder?: string;
    value?: string | number | ReactNode;
    textProps?: Omit<TextProps, 'children'>;
};
export declare const ViewInput: ({ label, value, placeholder, orientation, disabled, textProps, ...domProps }: ViewInputProps) => JSX.Element;
export {};
