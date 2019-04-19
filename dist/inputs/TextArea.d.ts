import React, { ChangeEvent, Component } from 'react';
import { SimpleInterpolation } from 'styled-components';
declare type BBTextAreaContainerProps = {
    cssOverrides?: SimpleInterpolation;
};
declare type BBTextAreaInputProps = {
    chromeless?: boolean;
    compact?: boolean;
    disabled?: boolean;
    label?: string | number;
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    value?: string;
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
};
export declare type TextAreaProps = BBTextAreaContainerProps & BBTextAreaInputProps & {};
export declare class TextArea extends Component<TextAreaProps> {
    textArea: React.RefObject<HTMLTextAreaElement>;
    setCompactHeight: () => void;
    componentDidUpdate(): void;
    componentDidMount(): void;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    render(): JSX.Element;
}
export {};
