import { Component } from 'react';
import { SimpleInterpolation } from 'styled-components';
declare type BBDetailsSize = {
    compact?: boolean;
    darkMode?: boolean;
    large?: boolean;
};
declare type BBDetailsContainerProps = {
    css?: SimpleInterpolation;
};
declare type CCDetailsProps = BBDetailsSize & BBDetailsContainerProps & {
    property: string;
    value?: string | number;
};
export declare class CCDetails extends Component<CCDetailsProps> {
    render(): JSX.Element;
}
export {};
