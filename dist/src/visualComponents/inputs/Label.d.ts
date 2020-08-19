import { DOMAttributes } from 'react';
import { DisplayType } from '@monorail/visualComponents/inputs/inputTypes';
declare type InputLabelProps = DOMAttributes<HTMLParagraphElement> & {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    label?: string | number;
    title?: string;
    required?: boolean;
    err?: boolean;
    display?: DisplayType;
};
export declare const Label: ({ label, required, err, display, ...domProps }: InputLabelProps) => JSX.Element;
export {};
//# sourceMappingURL=Label.d.ts.map