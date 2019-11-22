import React, { ChangeEvent, ForwardRefExoticComponent, MouseEvent, PropsWithoutRef, RefAttributes } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { DisplayType } from '@monorail/visualComponents/inputs/inputTypes';
import { ErrorProps } from '@monorail/visualComponents/inputs/StdErr';
export declare const IconsAndInputContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StyledInput: import("styled-components").StyledComponent<"input", any, TextFieldProps, never>;
export declare type InputHTMLType = 'button' | 'checkbox' | 'color' | 'date' | 'datetime' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
declare type ContainerProps = {
    cssOverrides?: SimpleInterpolation;
    className?: string;
};
declare type VisibilityProps = {
    canToggleVisibility?: boolean;
};
declare type ExtraProps = {
    chromeless?: boolean;
    min?: number;
    max?: number;
    maxLength?: number;
};
declare type BasicProps = {
    iconLeft?: string;
    iconRight?: string;
    label?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onClick?: (event: MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    placeholder?: string;
    value?: string | number;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    htmlValidation?: boolean;
    htmlType?: InputHTMLType;
    autoFocus?: boolean;
    pattern?: string;
    name?: string;
    hideStdErr?: boolean;
    display?: DisplayType;
};
export declare type TextFieldProps = ContainerProps & VisibilityProps & BasicProps & ExtraProps & ErrorProps;
export declare const TextField: ForwardRefExoticComponent<PropsWithoutRef<TextFieldProps> & RefAttributes<HTMLInputElement>>;
export {};
