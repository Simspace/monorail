import { ChangeEvent, FC } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { DisplayType } from '@monorail/visualComponents/inputs/inputTypes';
import { ErrorProps } from '@monorail/visualComponents/inputs/StdErr';
declare type ContainerProps = {
    cssOverrides?: SimpleInterpolation;
    className?: string;
};
export declare type ChoiceOption = {
    label: string;
    key: string;
    info?: string;
    disabled?: boolean;
    'data-test-id'?: string;
};
export declare type RadioGroupProps = ErrorProps & ContainerProps & {
    label?: string;
    options: Array<ChoiceOption>;
    onSelect?: (key: string, val: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    required?: boolean;
    htmlValidation?: boolean;
    display?: DisplayType;
    hideStdErr?: boolean;
};
export declare const RadioGroup: FC<RadioGroupProps>;
export {};
