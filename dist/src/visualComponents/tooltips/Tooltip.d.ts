import React, { RefObject } from 'react';
import { TriggerParams } from '@reach/tooltip';
import '@reach/tooltip/styles.css';
declare type TooltipMonorailProps = {
    label: string | React.ReactElement;
    children: ((props: TriggerParams) => React.ReactElement) | React.ReactElement;
    ariaLabel?: string;
    ref?: RefObject<HTMLDivElement>;
};
export declare const TooltipMonorail: (props: TooltipMonorailProps) => JSX.Element;
export {};
