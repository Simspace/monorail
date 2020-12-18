import React, { DOMAttributes } from 'react';
import { DisplayType } from '@monorail/visualComponents/inputs/inputTypes';
declare type InputLabelProps = DOMAttributes<HTMLParagraphElement> & {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    label?: string | number;
    title?: string;
    required?: boolean;
    err?: boolean;
    display?: DisplayType;
    details?: string | React.ReactElement;
};
export declare const Label: ({ label, required, err, details, display, ...domProps }: InputLabelProps) => JSX.Element;
export {};
