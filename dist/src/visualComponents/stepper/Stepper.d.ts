import React, { FC } from 'react';
import { Colors } from '@monorail/helpers/exports';
import { IconType } from '@monorail/visualComponents/icon/IconType';
import { Step as StepType } from '@monorail/visualComponents/stepper/types';
import { CommonComponentType, CssOverridesType } from '@monorail/types';
export declare type StepperProps = CommonComponentType & {
    steps: Array<StepType>;
    onStepClick: (index: number) => void;
    activeStepIndex: number;
    isNumbered?: boolean;
};
export declare type VerticalStepperProps = CommonComponentType & {
    children: React.ReactNode;
    isNumbered?: boolean;
    value: number;
    onChange: (index: number) => void;
};
export declare type InjectedStepProps = {
    index?: number;
    isActive?: boolean;
    isNumbered?: boolean;
    key?: string;
    onClick?: () => void;
};
export declare type StepProps = {
    cssOverrides?: CssOverridesType;
    iconLeft?: IconType;
    iconRight?: IconType;
    iconColor?: Colors;
    isDisabled?: boolean;
    label: string;
    statusIconName?: IconType;
    statusIconColor?: Colors;
    subtitle?: string;
};
export declare const Step: FC<StepProps & InjectedStepProps>;
export declare const Stepper: (props: VerticalStepperProps) => JSX.Element;
//# sourceMappingURL=Stepper.d.ts.map