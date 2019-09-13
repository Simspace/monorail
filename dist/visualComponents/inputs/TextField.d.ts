import React, { ChangeEvent, Component, MouseEvent } from 'react';
import { SimpleInterpolation } from 'styled-components';
export declare const BBTextFieldInput: import("styled-components").StyledComponent<"input", any, Pick<TextFieldProps, "pattern" | "className" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "onClick" | "max" | "min" | "name" | "autoFocus" | "disabled" | "maxLength" | "readOnly" | "required" | "iconLeft" | "iconRight" | "chromeless" | "htmlType">, never>;
export declare type InputHTMLType = 'button' | 'checkbox' | 'color' | 'date' | 'datetime' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
declare type ContainerProps = {
    cssOverrides: SimpleInterpolation;
    className: string;
};
declare type ExtraProps = {
    chromeless: boolean;
    min: number;
    max: number;
    maxLength: number;
};
declare type BasicProps = {
    iconLeft: string;
    iconRight: string;
    label: string;
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onClick?: (event: MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    placeholder: string;
    value: string | number;
    disabled: boolean;
    readOnly: boolean;
    required: boolean;
    htmlType?: InputHTMLType;
    autoFocus: boolean;
    pattern?: string;
    name?: string;
};
export declare type TextFieldProps = ContainerProps & BasicProps & ExtraProps;
export declare const defaultTextFieldProps: TextFieldProps;
export declare class TextField extends Component<TextFieldProps> {
    static defaultProps: TextFieldProps;
    render(): JSX.Element;
}
export {};
