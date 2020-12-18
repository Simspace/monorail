import React from 'react';
import { Forest, Tree } from 'fp-ts/lib/Tree';
import { CSSProp } from '@monorail/helpers/styled-components';
declare type Key = string;
declare type TreeListProps<T> = {
    forest: Forest<T>;
    getTreeNodeKey: (a: T) => Key;
    startExpanded?: boolean;
};
declare type Ancestor = {
    key: Key;
    index: number;
};
export declare type FlattenedNode<T> = {
    value: T;
    depth: number;
    ancestors: Array<Ancestor>;
    isLeaf: boolean;
    index: number;
};
declare type TreeRowToggleAndDepthLineProps = {
    depth: number;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    isOpen: boolean;
    isLeaf: boolean;
    showDepthLine?: boolean;
    cssToggle?: CSSProp;
};
export declare function flattenWithDepth<T>(rootTree: Tree<T>, toKey: (a: T) => Key, startingIndex: number): Array<FlattenedNode<T>>;
export declare const TreeRowToggleAndDepthLine: (props: TreeRowToggleAndDepthLineProps) => JSX.Element;
export declare const useTreeList: <T extends unknown>(props: TreeListProps<T>) => {
    rows: FlattenedNode<T>[];
    toggleNode: (nodeKey: Key) => void;
    openRows: string[];
};
export declare const outlineNumbering: <T extends unknown>(row: FlattenedNode<T>, startingDepth?: number) => string;
export {};
