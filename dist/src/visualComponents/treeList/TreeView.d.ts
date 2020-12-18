import * as React from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';
import { Task } from 'fp-ts/lib/Task';
import * as T from 'fp-ts/Tree';
import { O } from '@monorail/sharedHelpers/fp-ts-imports';
import { IconProps } from '@monorail/exports';
import { MenuAction } from '@monorail/visualComponents/actionsMenu/ActionsMenu';
declare type Key = string;
export declare enum TreeViewRowDisplayType {
    ArbitraryContent = "ArbitraryContent",
    Default = "Default"
}
export declare type TreeViewRowDisplay = {
    tag: typeof TreeViewRowDisplayType.Default;
    text: string;
    iconLeft?: IconProps;
} | {
    tag: typeof TreeViewRowDisplayType.ArbitraryContent;
    content: JSX.Element;
};
export declare type ActionReturn<K> = void | Task<{
    tag: 'nodeOpen';
    nodeOpen: boolean;
    key: K;
}>;
interface Props<A> {
    header?: {
        main: string;
        sub?: string;
    };
    forest: T.Forest<A>;
    getDisplay: (args: {
        value: A;
        isLeaf: boolean;
        isChildSelected: boolean;
    }) => TreeViewRowDisplay;
    getTreeViewTextProps?: (args: {
        value: A;
    }) => Partial<{
        css: FlattenSimpleInterpolation;
    }>;
    getKey: (node: A) => Key;
    numbered?: boolean;
    selected: O.Option<Key>;
    editable?: boolean;
    getActions?: (nodeKey: Key) => Array<MenuAction<ActionReturn<Key>>>;
    onAddSection: () => void;
    onSelect?: (key: Key, numbering: string, value: A) => void;
}
interface TreeViewRowProps extends React.HTMLProps<HTMLLIElement> {
    active?: boolean;
}
export declare const TreeViewRow: import("styled-components").StyledComponent<"li", any, {
    className: "" | "is-active";
    role: "button";
    tabindex: string;
} & TreeViewRowProps, "className" | "role" | "tabindex">;
export declare const TreeView: <A extends unknown>(props: Props<A>) => JSX.Element;
export {};
