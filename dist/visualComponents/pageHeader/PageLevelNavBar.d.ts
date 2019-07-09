import { Component, ReactNode } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { Sizes } from '@monorail/helpers/exports';
declare type PageLevelNavContainerProps = {
    cssOverrides?: SimpleInterpolation;
    activeTabIndex?: number;
};
declare type Props = PageLevelNavContainerProps & {
    getActiveTabIndex?: (activeTabIndex: number) => void;
    actions?: ReactNode;
};
export declare class PageLevelNavBar extends Component<Props> {
    static defaultProps: {
        size: Sizes;
    };
    render(): JSX.Element;
}
export {};
