import { DOMAttributes } from 'react';
import { DisplayType } from '@monorail/visualComponents/inputs/inputTypes';
declare type InputLabelProps = DOMAttributes<HTMLParagraphElement> & {
    label?: string | number;
    required?: boolean;
    err?: boolean;
    display?: DisplayType;
};
export declare const Label: ({ label, required, err, display, ...domProps }: InputLabelProps) => JSX.Element;
export {};
