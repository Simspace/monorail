/// <reference types="react" />
export declare type ErrorProps = {
    err?: boolean;
    msg?: string;
};
export declare const StdErr: ({ err, msg, ...domProps }: ErrorProps) => JSX.Element;
