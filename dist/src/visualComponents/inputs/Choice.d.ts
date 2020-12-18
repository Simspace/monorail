import { ChangeEvent, CSSProperties, FC, ReactNode } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { Colors } from '@monorail/helpers/exports';
import { OnClick } from '@monorail/visualComponents/icon/Icon';
export declare const ChoiceFakeLabel: import("styled-components").StyledComponent<"div", any, AnsweredProps, never>;
declare type AnsweredProps = {
    answered?: boolean;
    centeredInput?: boolean;
    dense?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    err?: boolean;
};
declare type GradeIconProps = {
    correct?: boolean;
    incorrect?: boolean;
};
declare type ChoiceInputProps = AnsweredProps & {
    checked?: boolean;
    checkColor?: Colors;
    defaultChecked?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onClick?: OnClick;
    'data-test-id'?: string;
};
declare type ContainerProps = AnsweredProps & GradeIconProps & {
    cssOverrides?: SimpleInterpolation;
    readOnly?: boolean;
    value?: string | number | Array<string>;
    required?: boolean;
    name?: string;
};
export declare type ChoiceProps = GradeIconProps & ContainerProps & ChoiceInputProps & {
    type?: 'radio' | 'checkbox';
    children?: ReactNode;
    style?: CSSProperties;
};
export declare const Choice: FC<ChoiceProps>;
export declare const ChoiceIcon: FC<ChoiceProps>;
export {};
