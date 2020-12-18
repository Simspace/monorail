import React, { Component, ReactNode } from 'react';
import { PopOverChildProps } from '@monorail/metaComponents/popOver/PopOver';
import { IconType } from '@monorail/visualComponents/icon/IconType';
export declare type ContextMenuItemProps = {
    description: string;
    icons?: ReactNode;
    isLabelActive?: boolean;
    key: number | string;
    link: string;
    title: string;
};
export declare type ContextMenuItems = Array<{
    title: string;
    items: Array<ContextMenuItemProps>;
}>;
declare type Props = PopOverChildProps & {
    onItemClick?: (item: ContextMenuItemProps) => void;
    contextItems: ContextMenuItems;
    icon: IconType;
    renderFilter: () => ReactNode;
    width?: number;
};
export declare class ContextMenu extends Component<Props> {
    static defaultProps: {
        renderFilter: () => null;
    };
    searchRef: React.RefObject<HTMLInputElement>;
    componentDidUpdate(prevProps: Readonly<Props>): void;
    renderContextMenuItems: (compareSearch: (stringToCompare: string) => boolean) => import("fp-ts/lib/Option").Option<(JSX.Element | JSX.Element[])[]>[];
    render(): JSX.Element;
}
export {};
