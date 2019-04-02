import { Component, ReactNode } from 'react';
import { ErrorType } from '@monorail/errorPage/errorTypes';
declare type ErrorPageProps = {
    errorMessage?: ReactNode;
    errorType: ErrorType;
    title?: ReactNode;
};
export declare class ErrorPage extends Component<ErrorPageProps> {
    static defaultProps: {
        errorType: ErrorType;
    };
    render(): JSX.Element;
}
export {};
