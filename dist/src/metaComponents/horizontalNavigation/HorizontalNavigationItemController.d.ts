import React, { Component, MouseEvent, ReactNode, RefObject } from 'react';
export declare type TabProps = {
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    isActive: boolean;
    index?: number;
    setIndicator: (width: number, offsetLeft: number) => void;
    updateIsActive?: (i: number) => void;
    tab: (props: {
        onClick: (event: MouseEvent<HTMLDivElement>) => void;
        ref: RefObject<HTMLDivElement>;
    }) => ReactNode;
};
export declare class HorizontalNavigationItemController extends Component<TabProps> {
    static defaultProps: {
        isActive: boolean;
    };
    tabRef: React.RefObject<HTMLDivElement>;
    componentDidMount(): void;
    componentDidUpdate(prevProps: TabProps): void;
    callSetIndicator: () => void;
    private onClick;
    render(): React.ReactNode;
}
//# sourceMappingURL=HorizontalNavigationItemController.d.ts.map