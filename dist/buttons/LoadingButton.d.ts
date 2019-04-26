import { Component, MouseEvent } from 'react';
import { ButtonProps } from './Button';
import { Omit } from 'typelevel-ts';
declare type Props = Omit<ButtonProps, 'onClick'> & {
    loadingText: string;
    onClick: (event: MouseEvent<HTMLButtonElement>) => Promise<void>;
};
declare type State = {
    loading: boolean;
};
/**
 * Takes an `onClick` that returns a Promise and toggles loading/disabled state
 */
export declare class LoadingButton extends Component<Props, State> {
    static defaultProps: {
        loadingText: string;
        display: import("./buttonTypes").ButtonDisplay;
        size: import("./buttonTypes").ButtonSize;
        type: string;
        onClick: () => void;
        disabled: boolean;
        pressed: boolean;
        mode: import("./buttonTypes").ButtonMode;
        iconLeft: string;
        iconRight: string;
    };
    state: State;
    _isMounted: boolean;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private onClick;
    render(): JSX.Element;
}
export {};
