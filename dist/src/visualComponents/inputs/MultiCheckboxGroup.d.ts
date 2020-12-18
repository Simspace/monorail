import React from 'react';
import { SimpleInterpolation } from 'styled-components';
import { DisplayType } from '@monorail/visualComponents/inputs/inputTypes';
import { ErrorProps } from '@monorail/visualComponents/inputs/StdErr';
declare type ContainerProps = {
    cssOverrides?: SimpleInterpolation;
    className?: string;
};
export declare type CheckboxChoiceOption = {
    label: string;
    key: string;
    info?: string;
    disabled?: boolean;
    'data-test-id'?: string;
};
export declare type MultiCheckboxGroupProps = ErrorProps & ContainerProps & {
    name?: string;
    label?: string;
    options: Array<CheckboxChoiceOption>;
    onChange?: (key: string, previousValues: Array<string>, event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
    values: Array<string>;
    required?: boolean;
    htmlValidation?: boolean;
    display?: DisplayType;
    hideStdErr?: boolean;
};
export declare const MultiCheckboxGroup: (props: MultiCheckboxGroupProps) => JSX.Element;
export {};
