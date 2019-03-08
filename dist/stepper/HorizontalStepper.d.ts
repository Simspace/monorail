import { Component } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { Step as StepType } from './types';
declare type StyleOptions = {
    cssOverrides?: SimpleInterpolation;
    darkMode?: boolean;
};
declare type Props = {
    steps: StepType[];
    onStepClick: (step: StepType, index: number) => void;
};
export declare class HorizontalStepper extends Component<Props & StyleOptions> {
    getClassname: (step: StepType) => "" | "active" | "completed" | "disabled";
    renderSection: (step: StepType, index: number) => JSX.Element;
    render(): JSX.Element;
}
export {};
