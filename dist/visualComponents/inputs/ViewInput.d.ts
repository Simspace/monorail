/// <reference types="react" />
export declare enum Orientation {
    Row = "row",
    Column = "column"
}
declare type ViewInputProps = {
    disabled?: boolean;
    label?: string | number;
    orientation?: Orientation;
    placeholder?: string;
    value?: string | number;
};
export declare const ViewInput: ({ label, value, placeholder, orientation, disabled, ...domProps }: ViewInputProps) => JSX.Element;
export {};
