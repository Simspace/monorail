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
        /** override buttonDefaultProps.onClick */
        onClick: () => Promise<void>;
        loadingText: string;
    };
    state: State;
    _isMounted: boolean;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private onClick;
    render(): JSX.Element;
}
export {};
