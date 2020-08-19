import React, { ChangeEvent, MouseEvent, PropsWithoutRef, RefAttributes, ForwardRefExoticComponent } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { IconType } from '@monorail/visualComponents/icon/IconType';
import { DisplayType } from '@monorail/visualComponents/inputs/inputTypes';
import { ErrorProps } from '@monorail/visualComponents/inputs/StdErr';
export declare const IconsAndInputContainer: any;
export declare const StyledInput: any;
export declare type InputHTMLType = 'button' | 'checkbox' | 'color' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
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
    iconLeft?: IconType;
    enableLastPass?: boolean;
    iconRight?: IconType;
    label?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onClick?: (event: MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent) => void;
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
//# sourceMappingURL=TextField.d.ts.map