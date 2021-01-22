import React from 'react'
import * as Newtype from 'newtype-ts'
import { AutoSizer } from 'react-virtualized'
import * as RW from 'react-window'
import {
  A,
  Ap,
  constant,
  E,
  Eq,
  identity,
  IO,
  Mn,
  NEA,
  O,
  pipe,
  RS,
  Tree,
} from '@monorail/sharedHelpers/fp-ts-imports'

import { FontWeights, styled, Text } from '@monorail/exports'
import { coerce, Key } from '@monorail/sharedHelpers/newtypes'
import * as Btn from '@monorail/v2/core/Button/Button'
import { IconButton } from '@monorail/v2/core/IconButton/IconButton'
import { ArrowDropDown, ArrowRight } from '@monorail/v2/icons/Icons'
import * as ReactTable from '@monorail/visualComponents/dataTable/ReactTable'

type IO<T> = IO.IO<T>

type Tree<T> = Tree.Tree<T>

type Forest<T> = Array<Tree<T>>

interface KVPair<T> {
  key: Key<T>
  value: T
}

const RowLevelLine = styled.div`
  border-right: 1px solid ${props => props.theme.v2.FoundationPinch};
  display: inline-flex;
  flex-direction: column;
  flex: 1;
  margin-right: 12px;
  width: 11px;
`

const RowLevelLinesContainer = styled.div`
  display: flex;
  height: 100%;
  left: 0;
  position: relative;
  top: 0;
  user-select: none;
  margin-left: -16px;
`

const ExpandCollapseBtn = styled(IconButton).attrs({
  display: Btn.DISPLAY.Chromeless,
})`
  display: inline-flex;
  margin-right: 4px;

  & i {
    margin: 0;
  }
`

const ExpandCollapseBtnPlaceholder = styled.div`
  display: inline-flex;
  min-height: 24px;
  min-width: 24px;
  margin-right: 4px;
  overflow: auto;
`

const TrGroupComponent = styled.div`
  display: flex;
  position: relative;
  /* box-sizing: border-box; */

  &:focus,
  & [role='gridcell']:focus {
    outline: 2px solid ${props => props.theme.v2.ActionDollop};
    outline-offset: -2px;
    box-shadow: inset 0 0 0 3px #0c3d99;
  }

  &:hover {
    background-color: ${props => props.theme.v2.ActionSmidgen};
  }

  &:hover::before {
    background-color: ${props => props.theme.v2.ActionDollop};
    content: ' ';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    pointer-events: none;
    width: 4px;
  }

  &[aria-selected='true']::before {
    background-color: ${props => props.theme.v2.ActionPrimary};
    content: ' ';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    pointer-events: none;
    width: 4px;
  }
`

const OldThComponent = ReactTable.MonorailReactTableOverrides.ThComponent
const ThComponentContainer = styled((props: { scrollbarWidth: number }) => (
  <OldThComponent {...props} />
))`
  &&:first-of-type {
    padding-left: 16px;

    & > * {
      margin-left: 8px;
    }
  }
  && {
    padding: 0 12px;
  }
  &&:last-of-type {
    padding-right: ${props => props.scrollbarWidth + 16}px;
  }

  & * {
    padding: 0;
  }
`
const ThComponent = (props: {}) => {
  const [scrollbarWidth, setScrollbarWidth] = React.useState(0)

  React.useLayoutEffect(() => {
    // thanks too https://davidwalsh.name/detect-scrollbar-width
    const scrollDiv = document.createElement('div')
    scrollDiv.setAttribute(
      'style',
      'width: 100px; height: 100px; overflow: scroll; position:absolute; top:-9999px;',
    )
    document.body.appendChild(scrollDiv)
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    document.body.removeChild(scrollDiv)
    setScrollbarWidth(scrollbarWidth)
  }, [])

  return <ThComponentContainer scrollbarWidth={scrollbarWidth} {...props} />
}

interface Ancestor<T> {
  /**
   * 1-based index position of node among its siblings
   */
  ordinalPosition: number
  node: Tree<KVPair<T>>
}

interface ForestToNodeRenderPropsParam<T> {
  trees: Forest<KVPair<T>>
  ancestors: Array<Ancestor<T>>
  expandedNodes: ReadonlySet<Key<T>>
}

function forestToNodeRenderProps<T>(
  params: ForestToNodeRenderPropsParam<T>,
): Array<NodeRenderProps<T>> {
  const go = ({
    trees,
    ancestors,
    expandedNodes,
  }: ForestToNodeRenderPropsParam<T>): Array<O.Option<NodeRenderProps<T>>> => {
    return pipe(
      trees,

      A.chainWithIndex((ix, node) => {
        const ordinalPosition = ix + 1
        const nextAncestors = NEA.snoc(ancestors, {
          ordinalPosition,
          node,
        })

        const isVisible = pipe(
          ancestors,
          A.foldMap(Mn.monoidAll)(ancestor => {
            return expandedNodes.has(ancestor.node.value.key)
          }),
        )

        return pipe(
          go({
            trees: node.forest,
            ancestors: nextAncestors,
            expandedNodes,
          }),
          A.cons(
            isVisible
              ? O.some<NodeRenderProps<T>>({
                  key: node.value.key,
                  value: node.value.value,
                  children: node.forest,
                  ordinalPosition,
                  ancestors,
                  isExpanded: expandedNodes.has(node.value.key),
                })
              : O.none,
          ),
        )
      }),
    )
  }

  return A.compact(go(params))
}

interface VirtualizedTBodyRowContext<T> {
  /**
   * The original forest passed into TreeGrid
   */
  forest: Forest<KVPair<T>>
  /**
   * The flatlist representation of the Forest passed to TreeGrid
   */
  rows: Array<NodeRenderProps<T>>
  /**
   * The row elements created by ReactTable. Should be equal in length to
   * `rows`. We are hi-jacking them to virtualize their rendering to the DOM.
   */
  items: Array<JSX.Element>
  getRowAttrs?: GetRowAttrs<T>
}
/**
 * Since `VirtualizedTBodyRow` needs to be passed to `FixedSizeList`
 * as a stable component reference, we can't pass in dependencies on props,
 * so we're using React Context to work around that.
 */
const VirtualizedTBodyRowContext = React.createContext<
  VirtualizedTBodyRowContext<unknown>
>({
  forest: [],
  rows: [],
  items: [],
})

/**
 * VirtualizedTBodyRow needs to be defined at the module level so that the
 * reference to the component isn't changed each render, otherwise keyboard
 * navigation won't work properly in the TreeGrid because element focus
 * is lost each render.
 */
function VirtualizedTBodyRow({ index, style }: RW.ListChildComponentProps) {
  const { forest, rows, items, getRowAttrs } = React.useContext(
    VirtualizedTBodyRowContext,
  )
  return pipe(
    Ap.sequenceT(O.option)(A.lookup(index)(rows), A.lookup(index)(items)),
    O.fold(
      () => <></>,
      ([node, nodeJsx]) => {
        const extraAttrs = getRowAttrs?.(node) ?? {}
        const level = node.ancestors.length + 1
        const setSize = pipe(
          A.last(node.ancestors),
          O.map(({ node }) => node.forest.length),
          // no ancestors = top-level node
          O.getOrElse(() => forest.length),
        )
        return React.cloneElement(nodeJsx, {
          ...extraAttrs,
          'aria-level': level,
          'aria-posinset': node.ordinalPosition,
          'aria-setsize': setSize,
          ...(A.isEmpty(node.children)
            ? {}
            : { 'aria-expanded': node.isExpanded }),
          role: 'row',
          style: {
            minHeight: 'unset',
            ...(extraAttrs.style ?? {}),
            ...style,
          },
          tabIndex: 0,
        })
      },
    ),
  )
}

interface RowAttrs
  extends Omit<React.HTMLAttributes<HTMLDivElement>, BannedProps> {}

type GetRowAttrs<T> = (node: NodeRenderProps<T>) => RowAttrs

interface ExtraVirtualizedTBodyProps<T> {
  content: E.Either<JSX.Element, Array<NodeRenderProps<T>>>
  /**
   * The original forest passed into TreeGrid
   */
  forest: Forest<KVPair<T>>
  getRowAttrs?: GetRowAttrs<T>
  rowHeight: number
}

interface VirtualizedTBodyProps<T> extends ExtraVirtualizedTBodyProps<T> {
  children: Array<Array<JSX.Element>>
  className: string
  style: React.CSSProperties
}
/**
 * Adapted from '@monorail/visualComponents/dataTable/ReactTableComponents/TbodyComponent/TBodyVirtualList'
 */
export function VirtualizedTBody<T>(props: VirtualizedTBodyProps<T>) {
  const {
    content,
    forest,
    rowHeight,
    children,
    getRowAttrs,
    ...restProps
  } = props

  return pipe(
    children,
    A.head,
    O.fold(
      () => pipe(content, E.fold(identity, constant(<></>))),
      items => {
        return pipe(
          content,
          E.fold(identity, rows => {
            return (
              <VirtualizedTBodyRowContext.Provider
                value={{
                  forest,
                  rows,
                  items,
                  getRowAttrs: getRowAttrs as VirtualizedTBodyRowContext<
                    unknown
                  >['getRowAttrs'],
                }}
              >
                <div style={{ height: '100%' }}>
                  <AutoSizer
                    style={{
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    {({ width, height }) => {
                      return (
                        <RW.FixedSizeList
                          {...restProps}
                          style={{
                            outline: 'none',
                            willChange: 'unset',
                            overflowX: 'hidden',
                            overflowY: 'scroll',
                            ...restProps.style,
                          }}
                          width={width}
                          height={height}
                          itemSize={rowHeight}
                          itemCount={rows.length}
                          itemKey={ix =>
                            pipe(
                              A.lookup(ix)(rows),
                              O.fold(
                                () => String(ix),
                                row => coerce(row.key),
                              ),
                            )
                          }
                          overscanCount={5}
                        >
                          {VirtualizedTBodyRow}
                        </RW.FixedSizeList>
                      )
                    }}
                  </AutoSizer>
                </div>
              </VirtualizedTBodyRowContext.Provider>
            )
          }),
        )
      },
    ),
  )
}

interface GetColumnProps<T> {
  col: TreeGridColumn<T>
  columns: Array<TreeGridColumn<T>>
  handleNodeCollapsed: (key: Key<T>) => IO<void>
  handleNodeExpanded: (key: Key<T>) => IO<void>
}

const StyledGridCell = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
`
/**
 * `GridCell` needs to be a stable reference in order for keyboard
 * navigation to work properly in the TreeGrid, otherwise element focus
 * interactions don't work properly.
 */
function GridCell<T>(cell: ReactTable.CellInfo<NodeRenderProps<T>, string>) {
  const {
    col,
    columns,
    handleNodeCollapsed,
    handleNodeExpanded,
  } = (cell.columnProps as { rest: GetColumnProps<T> }).rest
  const node = cell.original
  const nodeKey = node.key
  const level = node.ancestors.length + 1
  const [fstCol] = columns
  const isFirstColumn = fstCol.id === cell.column.id
  return (
    <StyledGridCell>
      {isFirstColumn ? (
        <>
          <RowLevelLinesContainer>
            {A.unfold(level, levelsRemaining =>
              levelsRemaining <= 0
                ? O.none
                : O.some([
                    <RowLevelLine key={levelsRemaining}></RowLevelLine>,
                    levelsRemaining - 1,
                  ]),
            )}
          </RowLevelLinesContainer>

          {A.isEmpty(node.children) ? (
            <ExpandCollapseBtnPlaceholder />
          ) : (
            <ExpandCollapseBtn
              aria-label={node.isExpanded ? 'Collapse' : 'Expand'}
              title={node.isExpanded ? 'Collapse' : 'Expand'}
              onClick={
                node.isExpanded
                  ? handleNodeCollapsed(nodeKey)
                  : handleNodeExpanded(nodeKey)
              }
            >
              {node.isExpanded ? <ArrowDropDown /> : <ArrowRight />}
            </ExpandCollapseBtn>
          )}
        </>
      ) : (
        <></>
      )}

      <Text fontWeight={FontWeights.Book} noWrap={true}>
        {col.renderCell(node)}
      </Text>
    </StyledGridCell>
  )
}

export interface NodeRenderProps<T> {
  key: Key<T>
  /**
   * The value of the current node
   */
  value: T
  /**
   * The children of the current node
   */
  children: Forest<KVPair<T>>
  /**
   * The lineage of parent nodes above this one in the tree
   * with their 1-based ordinal position among their siblings
   */
  ancestors: Array<{
    ordinalPosition: number
    node: Tree<KVPair<T>>
  }>
  /**
   * 1-based ordinal position of node among its siblings
   */
  ordinalPosition: number
  isExpanded: boolean
}

/**
 * Configures expand/collapse as either controlled or uncontrolled state
 */
type ExpandCollapseConfig<T> =
  | { tag: 'Uncontrolled' }
  | {
      tag: 'Controlled'
      expandedNodes: ReadonlySet<Key<T>>
      onExpand: (key: Key<T>) => void
      onCollapse: (key: Key<T>) => void
    }

type BannedProps =
  | 'children'
  | 'role'
  | 'aria-level'
  | 'aria-setsize'
  | 'aria-posinset'
  | 'aria-expanded'

interface ColumnHeaderAttrs
  extends Omit<React.HTMLAttributes<HTMLDivElement>, BannedProps> {}

interface GridCellAttrs
  extends Omit<React.HTMLAttributes<HTMLDivElement>, BannedProps> {}

type GetColumnHeaderAttrs<T> = (params: {
  rows: Array<NodeRenderProps<T>>
}) => ColumnHeaderAttrs

type GetGridCellAttrs<T> = (params: {
  row: NodeRenderProps<T>
}) => GridCellAttrs

export interface TreeGridColumn<T> {
  /**
   * A unique string identifying the column
   */
  id: string
  minWidth?: number
  maxWidth?: number
  width?: number
  renderCell: (props: NodeRenderProps<T>) => string | JSX.Element
  renderHeader?: (forest: Array<NodeRenderProps<T>>) => string | JSX.Element
  /**
   * Sets additional attributes/properties on TreeGrid DOM nodes with the
   * "columnheader" ARIA role
   */
  getColumnHeaderAttrs?: GetColumnHeaderAttrs<T>
  /**
   * Sets additional attributes/properties on TreeGrid DOM nodes with the
   * "gridcell" ARIA role
   */
  getGridCellAttrs?: GetGridCellAttrs<T>
}

type AriaLabel =
  | {
      tag: 'label'
      value: string
    }
  | { tag: 'labelledBy'; elementIds: NEA.NonEmptyArray<string> }

export interface TreeGridProps<T> {
  /**
   * Used to define a string that labels the current element. Use the "label"
   * variant in cases where a text label is not visible on the screen. If
   * there is visible text labeling the element, use "labelledBy" variant
   * to list the DOM nodes providing the label content.
   */
  ariaLabel: AriaLabel
  /**
   * Configuration for how to render columns
   */
  columns: NEA.NonEmptyArray<TreeGridColumn<T>>
  /**
   * The content of the table body. `Left<Element>` could be used
   * for rendering a view for loading, no results, or error. A `Right`
   * will make the table display the rows of the table.
   */
  content: E.Either<JSX.Element, Forest<KVPair<T>>>
  /**
   * Allows expand/collapse to be controlled or uncontrolled state
   */
  expandCollapse?: ExpandCollapseConfig<T>
  /**
   * Sets the height of rows. Defaults to `32`
   */
  rowHeightInPx?: number
  /**
   * Sets additional attributes/properties on the DOM node
   * with the "treegrid" ARIA role
   */
  getTreeGridAttrs?: () => Omit<
    React.HTMLAttributes<HTMLDivElement>,
    BannedProps
  >
  /**
   * Sets additional attributes/properties on TreeGrid DOM nodes with the
   * "row" ARIA role, excluding the row of `columnheader`s
   */
  getRowAttrs?: GetRowAttrs<T>
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
export function TreeGrid<T extends unknown>(props: TreeGridProps<T>) {
  const { columns, content, expandCollapse = { tag: 'Uncontrolled' } } = props
  const forest = pipe(
    content,
    E.getOrElse((): Forest<KVPair<T>> => A.empty),
  )
  const eqKeyT = React.useMemo(() => Newtype.getEq<Key<T>>(Eq.eqString), [])

  const [expandedNodes_, setExpandedNodes_] = React.useState<
    ReadonlySet<Key<T>>
  >(RS.empty)

  const expandedNodes =
    expandCollapse.tag === 'Uncontrolled'
      ? expandedNodes_
      : expandCollapse.expandedNodes

  const rows = React.useMemo(
    () =>
      forestToNodeRenderProps({
        trees: forest,
        ancestors: A.empty,
        expandedNodes,
      }),
    [expandedNodes, forest],
  )

  const columnsMemoized = React.useMemo(() => {
    function handleNodeExpanded(key: Key<T>): IO<void> {
      return () =>
        expandCollapse.tag === 'Uncontrolled'
          ? setExpandedNodes_(pipe(expandedNodes_, RS.insert(eqKeyT)(key)))
          : expandCollapse.onExpand(key)
    }

    function handleNodeCollapsed(key: Key<T>): IO<void> {
      return () =>
        expandCollapse.tag === 'Uncontrolled'
          ? setExpandedNodes_(pipe(expandedNodes_, RS.remove(eqKeyT)(key)))
          : expandCollapse.onCollapse(key)
    }

    return columns.map(
      (col): ReactTable.Column<NodeRenderProps<T>> => {
        return {
          id: col.id,
          sortable: false,
          filterable: false,
          minWidth: col.minWidth ?? 100,
          maxWidth: col.maxWidth,
          width: col.width,
          getProps: (): GetColumnProps<T> => ({
            col,
            columns,
            handleNodeExpanded,
            handleNodeCollapsed,
          }),
          Header(cellInfo: ReactTable.ColumnRenderProps<NodeRenderProps<T>>) {
            return col.renderHeader?.(cellInfo.data) ?? <></>
          },
          Cell: GridCell,
        }
      },
    )
  }, [columns, eqKeyT, expandedNodes_, expandCollapse])

  return (
    <ReactTable.ReactTable
      data={rows}
      pageSize={rows.length}
      columns={columnsMemoized}
      TbodyComponent={VirtualizedTBody}
      ThComponent={ThComponent}
      TrGroupComponent={TrGroupComponent}
      NoDataComponent={() => <></>}
      getTbodyProps={(): ExtraVirtualizedTBodyProps<T> => ({
        content: pipe(content, E.map(constant(rows))),
        forest,
        rowHeight: props.rowHeightInPx ?? 32,
        getRowAttrs: props.getRowAttrs,
      })}
      getTdProps={
        ((
          finalState: unknown,
          rowInfo: ReactTable.RowInfo<NodeRenderProps<T>>,
          column: ReactTable.Column<NodeRenderProps<T>>,
          table: unknown,
        ) => {
          const htmlId = `${column.id}-${coerce(rowInfo.original.key)}`
          const extraAttrs: ReturnType<GetGridCellAttrs<T>> = pipe(
            columns,
            A.findFirst(col => col.id === column.id),
            O.fold(
              constant({}),
              col => col.getGridCellAttrs?.({ row: rowInfo.original }) ?? {},
            ),
          )
          return {
            ...((ReactTable.MonorailReactTableOverrides
              .getTdProps as ReactTable.ComponentPropsGetterRC)?.(
              finalState,
              rowInfo,
              column,
              table,
            ) ?? {}),
            id: htmlId,
            role: 'gridcell',
            tabIndex: 0,
            ...extraAttrs,
          }
        }) as ReactTable.ComponentPropsGetterRC
      }
      getTheadThProps={(...args) => {
        const [, , column] = args
        const extraAttrs = pipe(
          columns,
          A.findFirst(col => col.id === column?.id),
          O.fold(
            constant({}),
            col => col.getColumnHeaderAttrs?.({ rows }) ?? {},
          ),
        )

        return {
          ...(ReactTable.MonorailReactTableOverrides.getTheadThProps?.(
            ...args,
          ) ?? {}),
          ...extraAttrs,
          id: column?.id ?? '',
          role: 'columnheader',
        }
      }}
      getTableProps={(...args) => {
        const extraAttrs = props.getTreeGridAttrs?.() ?? {}

        return {
          ...(ReactTable.MonorailReactTableOverrides.getTableProps?.(...args) ??
            {}),
          ...extraAttrs,
          role: 'treegrid',
          ...(props.ariaLabel.tag === 'label'
            ? { 'aria-label': props.ariaLabel.value }
            : { 'aria-labelledby': props.ariaLabel.elementIds.join(' ') }),
        }
      }}
      getTheadProps={(...args) => {
        return {
          ...(ReactTable.MonorailReactTableOverrides.getTheadProps?.(...args) ??
            {}),
          role: 'row',
        }
      }}
    />
  )
}
