import React, { Component } from 'react';
import { Step as StepType } from './types';
import { CommonComponentType } from '@monorail/types';
declare type Props = CommonComponentType & {
    className?: string;
    darkMode: boolean;
    onStepClick: (step: StepType, index: number) => void;
    steps: Array<StepType>;
};
declare type State = {
    activeStepIndex: number;
};
export declare class HorizontalStepper extends Component<Props, State> {
    static defaultProps: {
        darkMode: boolean;
    };
    state: State;
    activeStepRef: React.RefObject<HTMLDivElement>;
    scrollStepIntoView: () => void;
    componentDidUpdate(prevProps: Props, prevState: State): void;
    renderSection: (step: StepType, index: number) => JSX.Element;
    render(): JSX.Element;
}
export {};
