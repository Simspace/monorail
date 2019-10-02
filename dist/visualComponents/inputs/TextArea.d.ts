import React, { ChangeEvent, Component } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { ErrorProps } from '@monorail/visualComponents/inputs/StdErr';
export declare const TextAreaContainer: import("styled-components").StyledComponent<"label", any, TextAreaContainerProps, never>;
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
    hasRequiredAsterisk?: boolean;
    hideStdErr?: boolean;
} & ErrorProps;
export declare type TextAreaProps = TextAreaContainerProps & TextAreaInputProps;
export declare class TextArea extends Component<TextAreaProps> {
    textArea: React.RefObject<HTMLTextAreaElement>;
    setCompactHeight: () => void;
    componentDidUpdate(): void;
    componentDidMount(): void;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    render(): JSX.Element;
}
export {};
