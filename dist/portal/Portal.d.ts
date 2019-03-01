import React, { Component } from 'react';
export declare class Portal extends Component<{
    document?: Document;
}> {
    modalRoot: HTMLElement | null;
    portalElement: HTMLSpanElement;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactPortal;
}
