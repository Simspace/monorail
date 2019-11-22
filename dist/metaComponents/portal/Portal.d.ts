/// <reference types="@monorail/typings/styled-components" />
import { Component } from 'react';
export declare class Portal extends Component<{
    document?: Document;
}> {
    modalRoot: HTMLElement | null;
    portalElement: HTMLSpanElement;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): import("react").ReactPortal;
}
