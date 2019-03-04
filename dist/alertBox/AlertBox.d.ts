import React, { Component, ReactNode } from 'react';
import { SimpleInterpolation } from 'styled-components';
declare type CCAlertBoxProps = {
    css?: SimpleInterpolation;
    label?: ReactNode;
};
export declare const CCAlertBox: import("styled-components").StyledComponentClass<CCAlertBoxProps, any, CCAlertBoxProps & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>>;
declare type AlertBoxProps = CCAlertBoxProps & {
    icon: string;
    key?: string | number;
};
export declare class AlertBox extends Component<AlertBoxProps> {
    render(): JSX.Element;
}
export {};
