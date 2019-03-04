import { StyledHtmlElement } from '@monorail/CoreUtils/type-level';
import React, { ChangeEvent, Component } from 'react';
import { SimpleInterpolation } from 'styled-components';
declare type BBTextAreaContainerProps = {
    css?: SimpleInterpolation;
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
};
export declare type TextAreaProps = BBTextAreaContainerProps & BBTextAreaInputProps & {};
export declare class TextArea extends Component<TextAreaProps> {
    textArea: React.RefObject<StyledHtmlElement<HTMLTextAreaElement, BBTextAreaInputProps, unknown>>;
    setCompactHeight: () => void;
    componentDidUpdate(): void;
    componentDidMount(): void;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    render(): JSX.Element;
}
export {};
