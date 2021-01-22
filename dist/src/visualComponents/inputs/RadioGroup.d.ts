import React, { FC } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { DisplayType } from '@monorail/visualComponents/inputs/inputTypes';
import { ErrorProps } from '@monorail/visualComponents/inputs/StdErr';
declare type ContainerProps = {
    containerCssOverrides?: SimpleInterpolation;
    className?: string;
    direction?: 'row' | 'column';
};
export declare type ChoiceOption = {
    label: string;
    key: string;
    info?: string;
    disabled?: boolean;
    'data-test-id'?: string;
};
export declare type RadioGroupProps = ErrorProps & ContainerProps & {
    cssOverrides?: SimpleInterpolation;
    name?: string;
    label?: string;
    options: Array<ChoiceOption>;
    onSelect?: (key: string, val: React.MouseEvent<Element, MouseEvent>) => void;
    value: string;
    required?: boolean;
    htmlValidation?: boolean;
    display?: DisplayType;
    hideStdErr?: boolean;
};
export declare const RadioGroup: FC<RadioGroupProps>;
export {};
