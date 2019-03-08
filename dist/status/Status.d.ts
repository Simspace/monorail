import React from 'react';
import { CommonComponentType } from '@monorail/types';
declare type Props = CommonComponentType & {
    size?: number;
    inactive?: boolean;
};
export declare const Status: import("styled-components").StyledComponentClass<Props, any, CommonComponentType & {
    size?: number | undefined;
    inactive?: boolean | undefined;
} & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>>;
export {};
