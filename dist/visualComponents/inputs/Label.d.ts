import { DOMAttributes } from 'react';
declare type InputLabelProps = DOMAttributes<HTMLParagraphElement> & {
    label?: string | number;
    required?: boolean;
    err?: boolean;
};
export declare const Label: ({ label, required, err, ...domProps }: InputLabelProps) => JSX.Element;
export {};
