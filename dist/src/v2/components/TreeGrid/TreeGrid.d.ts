import React from 'react';
import { E, NEA, Tree } from '@monorail/sharedHelpers/fp-ts-imports';
import { Key } from '@monorail/sharedHelpers/newtypes';
declare type Tree<T> = Tree.Tree<T>;
declare type Forest<T> = Array<Tree<T>>;
interface KVPair<T> {
    key: Key<T>;
    value: T;
}
interface RowAttrs extends Omit<React.HTMLAttributes<HTMLDivElement>, BannedProps> {
}
declare type GetRowAttrs<T> = (node: NodeRenderProps<T>) => RowAttrs;
interface ExtraVirtualizedTBodyProps<T> {
    content: E.Either<JSX.Element, Array<NodeRenderProps<T>>>;
    /**
     * The original forest passed into TreeGrid
     */
    forest: Forest<KVPair<T>>;
    getRowAttrs?: GetRowAttrs<T>;
    rowHeight: number;
}
interface VirtualizedTBodyProps<T> extends ExtraVirtualizedTBodyProps<T> {
    children: Array<Array<JSX.Element>>;
    className: string;
    style: React.CSSProperties;
}
/**
 * Adapted from '@monorail/visualComponents/dataTable/ReactTableComponents/TbodyComponent/TBodyVirtualList'
 */
export declare function VirtualizedTBody<T>(props: VirtualizedTBodyProps<T>): JSX.Element;
export interface NodeRenderProps<T> {
    key: Key<T>;
    /**
     * The value of the current node
     */
    value: T;
    /**
     * The children of the current node
     */
    children: Forest<KVPair<T>>;
    /**
     * The lineage of parent nodes above this one in the tree
     * with their 1-based ordinal position among their siblings
     */
    ancestors: Array<{
        ordinalPosition: number;
        node: Tree<KVPair<T>>;
    }>;
    /**
     * 1-based ordinal position of node among its siblings
     */
    ordinalPosition: number;
    isExpanded: boolean;
}
/**
 * Configures expand/collapse as either controlled or uncontrolled state
 */
declare type ExpandCollapseConfig<T> = {
    tag: 'Uncontrolled';
} | {
    tag: 'Controlled';
    expandedNodes: ReadonlySet<Key<T>>;
    onExpand: (key: Key<T>) => void;
    onCollapse: (key: Key<T>) => void;
};
declare type BannedProps = 'children' | 'role' | 'aria-level' | 'aria-setsize' | 'aria-posinset' | 'aria-expanded';
interface ColumnHeaderAttrs extends Omit<React.HTMLAttributes<HTMLDivElement>, BannedProps> {
}
interface GridCellAttrs extends Omit<React.HTMLAttributes<HTMLDivElement>, BannedProps> {
}
declare type GetColumnHeaderAttrs<T> = (params: {
    rows: Array<NodeRenderProps<T>>;
}) => ColumnHeaderAttrs;
declare type GetGridCellAttrs<T> = (params: {
    row: NodeRenderProps<T>;
}) => GridCellAttrs;
export interface TreeGridColumn<T> {
    /**
     * A unique string identifying the column
     */
    id: string;
    minWidth?: number;
    maxWidth?: number;
    width?: number;
    renderCell: (props: NodeRenderProps<T>) => string | JSX.Element;
    renderHeader?: (forest: Array<NodeRenderProps<T>>) => string | JSX.Element;
    /**
     * Sets additional attributes/properties on TreeGrid DOM nodes with the
     * "columnheader" ARIA role
     */
    getColumnHeaderAttrs?: GetColumnHeaderAttrs<T>;
    /**
     * Sets additional attributes/properties on TreeGrid DOM nodes with the
     * "gridcell" ARIA role
     */
    getGridCellAttrs?: GetGridCellAttrs<T>;
}
declare type AriaLabel = {
    tag: 'label';
    value: string;
} | {
    tag: 'labelledBy';
    elementIds: NEA.NonEmptyArray<string>;
};
export interface TreeGridProps<T> {
    /**
     * Used to define a string that labels the current element. Use the "label"
     * variant in cases where a text label is not visible on the screen. If
     * there is visible text labeling the element, use "labelledBy" variant
     * to list the DOM nodes providing the label content.
     */
    ariaLabel: AriaLabel;
    /**
     * Configuration for how to render columns
     */
    columns: NEA.NonEmptyArray<TreeGridColumn<T>>;
    /**
     * The content of the table body. `Left<Element>` could be used
     * for rendering a view for loading, no results, or error. A `Right`
     * will make the table display the rows of the table.
     */
    content: E.Either<JSX.Element, Forest<KVPair<T>>>;
    /**
     * Allows expand/collapse to be controlled or uncontrolled state
     */
    expandCollapse?: ExpandCollapseConfig<T>;
    /**
     * Sets the height of rows. Defaults to `32`
     */
    rowHeightInPx?: number;
    /**
     * Sets additional attributes/properties on the DOM node
     * with the "treegrid" ARIA role
     */
    getTreeGridAttrs?: () => Omit<React.HTMLAttributes<HTMLDivElement>, BannedProps>;
    /**
     * Sets additional attributes/properties on TreeGrid DOM nodes with the
     * "row" ARIA role, excluding the row of `columnheader`s
     */
    getRowAttrs?: GetRowAttrs<T>;
}
/**
 * Displays a list of trees as table/datagrid with rows that can expand/collapse
 * if they have child rows. Rows are "windowed" or "virtualized" to help large
 * data sets render performantly.
 *
 * **Note: you must wrap this component in a parent element with a bounded
 * **height, otherwise the rows will not render**
 *
 * A TreeGrid essentially consists of the following DOM structure:
 *
 * ```
 * treegrid
 *   row
 *     columnheader
 *     columnheader
 *     ...
 *   row
 *     gridcell
 *     gridcell
 *     ...
 *   row
 *     gridcell
 *     ...
 *   ...
 * ```
 *
 * All rows are siblings in the DOM, even though some rows are parent nodes,
 * some are child nodes, and some are both. The hierarchical relationship
 * is visually represented by the order and indentation of rows, and
 * programmatically represented in the DOM  via the ARIA attributes
 * `aria-expanded`, `aria-level`, `aria-setsize`, and `aria-posinset`.
 *
 * For more info, see the WAI-Aria guide for "treegrid" components:
 * https://www.w3.org/TR/wai-aria-practices-1.1/#treegrid
 */
export declare function TreeGrid<T extends unknown>(props: TreeGridProps<T>): JSX.Element;
export {};
