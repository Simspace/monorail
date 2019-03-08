import React, { Component, ReactNode } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { TextFieldProps } from './TextField';
export declare const BBTextFieldLabel: import("styled-components").StyledComponentClass<{}, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>>;
declare type MultipleTextFieldProps = TextFieldProps & {
    key: string;
};
declare type Props = {
    label?: string;
    onChange: (key: string, value: string | number) => void;
    cssOverrides?: SimpleInterpolation;
    textFields: MultipleTextFieldProps[];
    children?: ReactNode;
};
export declare class MultipleTextField extends Component<Props> {
    render(): JSX.Element;
}
export {};
