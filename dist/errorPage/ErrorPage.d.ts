import { Component, ReactNode } from 'react';
import { ErrorType } from '@monorail/errorPage/errorTypes';
declare type ErrorPageProps = {
    errorType: ErrorType;
    title?: ReactNode;
    errorMessage?: ReactNode;
};
export declare class ErrorPage extends Component<ErrorPageProps> {
    static defaultProps: {
        errorType: ErrorType;
    };
    render(): JSX.Element;
}
export {};
