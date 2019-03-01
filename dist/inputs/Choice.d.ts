import React, { Component, ReactNode } from 'react';
import { SimpleInterpolation } from 'styled-components';
declare type AnsweredProps = {
    answered?: boolean;
    htmlFor?: string;
};
declare type BBGradeIconProps = {
    correct?: boolean;
    incorrect?: boolean;
};
declare type BBChoiceInputProps = AnsweredProps & {
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
declare type CCChoiceProps = AnsweredProps & BBGradeIconProps & {
    css?: SimpleInterpolation;
    disabled?: boolean;
    readOnly?: boolean;
    value?: string | number | string[];
    required?: boolean;
    name?: string;
};
export declare type ChoiceProps = BBGradeIconProps & CCChoiceProps & BBChoiceInputProps & {
    key?: any;
    type: 'radio' | 'checkbox';
    children?: ReactNode;
};
export declare class Choice extends Component<ChoiceProps> {
    renderFakeInputIcons: () => JSX.Element[];
    render(): JSX.Element;
}
export {};
