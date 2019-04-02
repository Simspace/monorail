import { ChangeEvent, Component } from 'react';
import { SimpleInterpolation } from 'styled-components';
export declare const BBTextFieldLabel: import("styled-components").StyledComponent<"p", any, {}, never>;
declare type BBTextFieldContainerProps = {
    cssOverrides?: SimpleInterpolation;
};
declare type BBTextFieldInputProps = {
    chromeless?: boolean;
    iconLeft?: string;
    iconRight?: string;
    label?: string | number;
    onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    placeholder?: string;
    value?: string | number;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    type?: string;
    min?: number;
    max?: number;
};
export declare type TextFieldProps = BBTextFieldContainerProps & BBTextFieldInputProps & {};
export declare class TextField extends Component<TextFieldProps> {
    render(): JSX.Element;
}
export declare class TextArea extends Component<TextFieldProps> {
    render(): JSX.Element;
}
export {};
