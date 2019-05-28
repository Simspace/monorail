import { Component, MouseEvent } from 'react';
import { Omit } from 'typelevel-ts';
import { ButtonProps } from './Button';
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
        onClick: () => Promise<void>;
        iconLeft: string;
        iconRight: string;
        className: string;
        disabled: boolean;
        display: import("./buttonTypes").ButtonDisplay;
        isActive: boolean;
        mode: import("./buttonTypes").ButtonMode;
        onMouseDown?: import("./Button").OnClick | undefined;
        onMouseUp?: import("./Button").OnClick | undefined;
        pressed: boolean;
        size: import("./buttonTypes").ButtonSize;
        type: "button" | "reset" | "submit";
    };
    state: State;
    _isMounted: boolean;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private onClick;
    render(): JSX.Element;
}
export {};
