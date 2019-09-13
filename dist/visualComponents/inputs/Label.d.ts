import { DOMAttributes } from 'react';
declare type InputLabelProps = DOMAttributes<HTMLParagraphElement> & {
    label?: string | number;
    required?: boolean;
};
export declare const Label: ({ label, required, ...domProps }: InputLabelProps) => JSX.Element;
export {};
