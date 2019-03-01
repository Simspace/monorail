import React, { Component, ReactNode } from 'react';
import { PopOverChildProps } from '@monorail/popOver/PopOver';
declare type Props = PopOverChildProps & {
    contextItems: Array<{
        title: string;
        items: Array<{
            description: string;
            icons?: ReactNode;
            isLabelActive?: boolean;
            key: number | string;
            link: string;
            title: string;
        }>;
    }>;
    icon: string;
    width?: number;
};
export declare class ContextMenu extends Component<Props> {
    searchRef: React.RefObject<import("../CoreUtils/type-level").StyledHtmlElement<HTMLInputElement, import("../inputs/Search").BBSearchInputProps, any>>;
    componentDidUpdate(prevProps: Readonly<Props>): void;
    renderContextMenuItems: (compareSearch: (stringToCompare: string) => boolean) => import("fp-ts/lib/Option").Option<(JSX.Element | JSX.Element[])[]>[];
    render(): JSX.Element;
}
export {};
