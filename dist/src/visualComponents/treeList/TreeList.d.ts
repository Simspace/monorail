/// <reference types="react" />
import { Forest, Tree } from 'fp-ts/lib/Tree';
import { CSSProp } from '@monorail/helpers/styled-components';
declare type TreeListProps<A> = {
    forest: Forest<A>;
    getTreeNodeKey: (a: A) => string;
};
declare type Ancestor = {
    key: string;
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
    onClick: () => void;
    isOpen: boolean;
    isLeaf: boolean;
    showDepthLine?: boolean;
    cssToggle?: CSSProp;
};
export declare function flattenWithDepth<T>(rootTree: Tree<T>, toKey: (a: T) => string, startingIndex: number): Array<FlattenedNode<T>>;
export declare const TreeRowToggleAndDepthLine: (props: TreeRowToggleAndDepthLineProps) => JSX.Element;
export declare const useTreeList: <A extends unknown>(props: TreeListProps<A>) => {
    rows: FlattenedNode<A>[];
    toggleNode: (nodeKey: string) => void;
    openRows: string[];
};
export declare const outlineNumbering: <T extends unknown>(row: FlattenedNode<T>, startingDepth?: number) => string;
export {};
//# sourceMappingURL=TreeList.d.ts.map