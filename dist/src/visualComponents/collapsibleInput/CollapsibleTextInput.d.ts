/// <reference types="react" />
import { CssOverridesType } from '@monorail/types';
interface CollapsibleTextInputProps {
    onSubmit: (val: string) => void;
    closeOnSubmit?: true;
    buttonText: string;
    titleText: string;
    allowEmpty?: true;
    cssOverrides?: CssOverridesType;
    maxLength?: number;
    disabled?: boolean;
    placeholder?: string;
}
export declare const CollapsibleTextInput: (props: CollapsibleTextInputProps) => JSX.Element;
export {};
