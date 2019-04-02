import { Component, ReactNode } from 'react';
import { SimpleInterpolation } from 'styled-components';
declare type CCAlertBoxProps = {
    cssOverrides?: SimpleInterpolation;
    label?: ReactNode;
};
export declare const CCAlertBox: import("styled-components").StyledComponent<"div", any, CCAlertBoxProps, never>;
declare type AlertBoxProps = CCAlertBoxProps & {
    icon: string;
    key?: string | number;
};
export declare class AlertBox extends Component<AlertBoxProps> {
    render(): JSX.Element;
}
export {};
