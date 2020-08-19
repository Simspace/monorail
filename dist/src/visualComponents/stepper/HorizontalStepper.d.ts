import React, { Component } from 'react';
import { CommonComponentType } from '@monorail/types';
import { Step as StepType } from './types';
declare type Props = CommonComponentType & {
    onStepClick: (step: StepType, index: number) => void;
    steps: Array<StepType>;
};
declare type State = {
    activeStepIndex: number;
};
export declare class HorizontalStepper extends Component<Props, State> {
    state: State;
    activeStepRef: React.RefObject<HTMLDivElement>;
    scrollStepIntoView: () => void;
    componentDidUpdate(prevProps: Props, prevState: State): void;
    renderSection: (step: StepType, index: number) => JSX.Element;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=HorizontalStepper.d.ts.map