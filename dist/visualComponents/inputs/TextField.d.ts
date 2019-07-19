import { ChangeEvent, Component, MouseEvent } from 'react';
import { SimpleInterpolation } from 'styled-components';
export declare const BBTextFieldLabel: import("styled-components").StyledComponent<"p", any, {}, never>;
export declare const BBTextFieldInput: import("styled-components").StyledComponent<"input", any, Pick<TextFieldProps, "className" | "placeholder" | "onChange" | "onClick" | "disabled" | "max" | "min" | "type" | "autoFocus" | "readOnly" | "required" | "iconLeft" | "iconRight" | "chromeless">, never>;
declare type ContainerProps = {
    cssOverrides: SimpleInterpolation;
    className: string;
};
declare type ExtraProps = {
    chromeless: boolean;
    min: number;
    max: number;
};
declare type BasicProps = {
    iconLeft: string;
    iconRight: string;
    label: string;
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onClick?: (event: MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    placeholder: string;
    value: string | number;
    disabled: boolean;
    readOnly: boolean;
    required: boolean;
    type: string;
    autoFocus: boolean;
};
export declare type TextFieldProps = ContainerProps & BasicProps & ExtraProps;
export declare type TextAreaProps = ContainerProps & BasicProps;
export declare const defaultTextFieldProps: {
    cssOverrides: string;
    chromeless: boolean;
    iconLeft: string;
    iconRight: string;
    label: string;
    onChange: () => void;
    placeholder: string;
    value: string;
    disabled: boolean;
    readOnly: boolean;
    required: boolean;
    type: string;
    min: number;
    max: number;
    className: string;
    autoFocus: boolean;
};
export declare const defaultTextAreaProps: {
    cssOverrides: string;
    iconLeft: string;
    iconRight: string;
    label: string;
    onChange: () => void;
    placeholder: string;
    value: string;
    disabled: boolean;
    readOnly: boolean;
    required: boolean;
    type: string;
    className: string;
    name: string;
    autoFocus: boolean;
};
export declare class TextField extends Component<TextFieldProps> {
    static defaultProps: {
        cssOverrides: string;
        chromeless: boolean;
        iconLeft: string;
        iconRight: string;
        label: string;
        onChange: () => void;
        placeholder: string;
        value: string;
        disabled: boolean;
        readOnly: boolean;
        required: boolean;
        type: string;
        min: number;
        max: number;
        className: string;
        autoFocus: boolean;
    };
    render(): JSX.Element;
}
export declare class TextArea extends Component<TextAreaProps> {
    static defaultProps: {
        cssOverrides: string;
        iconLeft: string;
        iconRight: string;
        label: string;
        onChange: () => void;
        placeholder: string;
        value: string;
        disabled: boolean;
        readOnly: boolean;
        required: boolean;
        type: string;
        className: string;
        name: string;
        autoFocus: boolean;
    };
    render(): JSX.Element;
}
export {};
