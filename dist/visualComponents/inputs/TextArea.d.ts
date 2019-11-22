import React, { ChangeEvent, FC } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { DisplayType } from '@monorail/visualComponents/inputs/inputTypes';
import { ErrorProps } from '@monorail/visualComponents/inputs/StdErr';
export declare const TextAreaContainer: import("styled-components").StyledComponent<"label", any, TextAreaContainerProps & {
    display?: DisplayType | undefined;
}, never>;
export declare const TextAreaInput: import("styled-components").StyledComponent<"textarea", any, TextAreaInputProps, never>;
declare type TextAreaContainerProps = {
    cssOverrides?: SimpleInterpolation;
    className?: string;
};
declare type TextAreaInputProps = {
    chromeless?: boolean;
    compact?: boolean;
    disabled?: boolean;
    height?: number;
    label?: string | number;
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    value?: string;
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    name?: string;
    htmlValidation?: boolean;
    hideStdErr?: boolean;
    display?: DisplayType;
} & ErrorProps;
export declare type TextAreaProps = TextAreaContainerProps & TextAreaInputProps;
export declare const TextArea: FC<TextAreaProps>;
export {};
