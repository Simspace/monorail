import { ChangeEvent, CSSProperties, ReactNode } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { FCwDP } from '@monorail/sharedHelpers/react';
declare type AnsweredProps = {
    answered?: boolean;
    centeredInput?: boolean;
    dense?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
};
declare type BBGradeIconProps = {
    correct?: boolean;
    incorrect?: boolean;
};
declare type BBChoiceInputProps = AnsweredProps & {
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
declare type CCChoiceProps = AnsweredProps & BBGradeIconProps & {
    cssOverrides?: SimpleInterpolation;
    readOnly?: boolean;
    value?: string | number | Array<string>;
    required?: boolean;
    name?: string;
};
export declare type ChoiceProps = BBGradeIconProps & CCChoiceProps & BBChoiceInputProps & {
    key?: string | number;
    type?: 'radio' | 'checkbox';
    children?: ReactNode;
    style?: CSSProperties;
};
declare type DefaultProps = {
    answered: boolean;
    disabled: boolean;
    indeterminate: boolean;
    correct: boolean;
    incorrect: boolean;
    checked: boolean;
    defaultChecked: boolean;
    cssOverrides: SimpleInterpolation;
    readOnly: boolean;
    value: string | number | Array<string>;
    required: boolean;
    name: string;
    key: string | number;
    type: 'radio' | 'checkbox';
    children: ReactNode;
};
export declare const Choice: FCwDP<ChoiceProps, DefaultProps>;
export {};
