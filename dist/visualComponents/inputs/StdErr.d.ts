/// <reference types="react" />
import { FontSizes } from '@monorail/helpers/exports';
export declare type ErrorProps = {
    err?: boolean;
    msg?: string;
    fontSize?: FontSizes;
};
export declare const StdErr: ({ err, msg, fontSize, ...domProps }: ErrorProps) => JSX.Element;
