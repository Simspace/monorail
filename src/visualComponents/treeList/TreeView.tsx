import * as React from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { tuple } from 'fp-ts/lib/function'
import { Task } from 'fp-ts/lib/Task'
import * as T from 'fp-ts/Tree'
import {
  A as Arr,
  NEA,
  O,
  pipe,
  R,
  Sg,
} from '@monorail/sharedHelpers/fp-ts-imports'

import { Icon, IconProps } from '@monorail/exports'
import {
  baseChromelessStyles,
  Colors,
  flexFlow,
  FontSizes,
  getColor,
  typography,
} from '@monorail/helpers/exports'
import { PopOverToggleProps } from '@monorail/metaComponents/popOver/PopOver'
import * as TF from '@monorail/sharedHelpers/fp-ts-ext/Tree'
import { matchI } from '@monorail/sharedHelpers/matchers'
import { name, the } from '@monorail/sharedHelpers/names'
import { isNotNil } from '@monorail/sharedHelpers/typeGuards'
import {
  ActionsMenu,
  MenuAction,
} from '@monorail/visualComponents/actionsMenu/ActionsMenu'
import { Button } from '@monorail/visualComponents/buttons/Button'
import { ButtonDisplay } from '@monorail/visualComponents/buttons/buttonTypes'
import { IconButton } from '@monorail/visualComponents/buttons/IconButton'
import { ScrollAnimation } from '@monorail/visualComponents/layout/ScrollAnimation'
import {
  FlattenedNode,
  outlineNumbering,
  TreeRowToggleAndDepthLine,
  useTreeList,
} from '@monorail/visualComponents/treeList/TreeList'

type Key = string

export enum TreeViewRowDisplayType {
  ArbitraryContent = 'ArbitraryContent',
  Default = 'Default',
}

export type TreeViewRowDisplay =
  | {
      tag: typeof TreeViewRowDisplayType.Default
      text: string
      iconLeft?: IconProps
    }
  | {
      tag: typeof TreeViewRowDisplayType.ArbitraryContent
      content: JSX.Element
    }

export type ActionReturn<K> = void | Task<{
  tag: 'nodeOpen'
  nodeOpen: boolean
  key: K
}>

interface Props<A> {
  header?: {
    main: string
    sub?: string
  }
  forest: T.Forest<A>
  getDisplay: (args: {
    value: A
    isLeaf: boolean
    isChildSelected: boolean
  }) => TreeViewRowDisplay
  getTreeViewTextProps?: (args: {
    value: A
  }) => Partial<{ css: FlattenSimpleInterpolation }>
  getKey: (node: A) => Key
  numbered?: boolean
  selected: O.Option<Key>
  editable?: boolean
  getActions?: (nodeKey: Key) => Array<MenuAction<ActionReturn<Key>>>
  onAddSection: () => void
  onSelect?: (key: Key, numbering: string, value: A) => void
}

const TreeViewWrapper = styled.section`
  ${flexFlow('column')}
  height: 100%;
`

const TreeViewScrollContainer = styled(ScrollAnimation)`
  ${flexFlow('row')}

  height: 100%;
  width: 100%;
  overflow: auto;
`

const TreeViewList = styled.ul`
  ${flexFlow('column')}
  flex-grow: 1;
`

const TreeViewText = styled.div.attrs({
  role: 'button',
  tabIndex: 0,
})<{ depth: number }>`
  ${flexFlow('row', 'nowrap')};
  ${props => typography(props.depth === 0 ? 500 : 400, FontSizes.Title5)}
  margin-left: 8px;
  &:focus {
    outline: none;
    text-decoration: underline;
  }
`

interface TreeViewRowProps extends React.HTMLProps<HTMLLIElement> {
  active?: boolean
}
const ActionsMenuToggle = styled(IconButton)``

export const TreeViewRow = styled.li.attrs((props: TreeViewRowProps) => ({
  className: props.active ? 'is-active' : '',
  role: 'button',
  tabindex: '0',
}))<TreeViewRowProps>`
  ${baseChromelessStyles()};
  ${flexFlow('row')};

  align-items: center;
  min-height: 32px;
  padding: 0 8px;
  position: relative;
  white-space: nowrap;
  color: ${props =>
    getColor(props.active ? Colors.AccentBlue500 : Colors.Gray89)};

  & ${ActionsMenuToggle} {
    opacity: 0;
  }

  &:hover
    ${/* sc-selector */ ActionsMenuToggle},
    &:focus
    ${/* sc-selector */ ActionsMenuToggle},
    &:focus-within
    ${/* sc-selector */ ActionsMenuToggle} {
    opacity: 1;
  }
`

const RowScrollIntoViewAnchor = styled.div`
  width: 40px;
`

const ActionsMenuWrapper = styled.div`
  height: 100%;
  ${flexFlow('row')};
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;

  & ${ActionsMenuToggle} {
    margin: 0 8px;
    position: sticky;
    right: 8px;
  }
`

const RowIconLeftContainer = styled.div`
  ${flexFlow('row', 'nowrap')};

  margin: 0 8px 0 4px;
`

const Header = styled.header`
  padding: 16px 32px;
  border-bottom: 1px solid ${getColor(Colors.Gray06)};

  h1 {
    ${typography(500, FontSizes.Title3)};
    padding-bottom: 8px;
  }
  h2 {
    ${typography(400, FontSizes.Title5)}
    color: ${getColor(Colors.Gray54)};
    padding-bottom: 8px;
  }
`

export const TreeView = <A extends unknown>(props: Props<A>) => {
  const {
    editable,
    numbered,
    forest,
    getKey,
    header,
    getActions,
    onAddSection,
  } = props
  const treeListState = useTreeList({
    forest,
    getTreeNodeKey: getKey,
    startExpanded: true,
  })

  const selectedRow = pipe(
    props.selected,
    O.chain(selected =>
      pipe(
        treeListState.rows,
        Arr.findFirst(
          (a: FlattenedNode<A>) => props.getKey(a.value) === selected,
        ),
      ),
    ),
  )

  const selectedRowAncestorKeys = pipe(
    selectedRow,
    O.map(x => x.ancestors.map(a => a.key)),
  )

  const handleActionComplete = React.useCallback(
    async (r: ActionReturn<Key>) => {
      if (r) {
        matchI(await r())({
          nodeOpen: ({ key, nodeOpen }) => {
            if (treeListState.openRows.includes(key) !== nodeOpen) {
              treeListState.toggleNode(key)
            }
          },
        })
      }
    },
    [treeListState],
  )
  const selectedItemScrollAnchor = React.useRef<HTMLDivElement>(null)
  const selectedKey = O.toUndefined(props.selected)
  React.useEffect(() => {
    selectedItemScrollAnchor.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'end',
    })
  }, [selectedKey])

  React.useEffect(() => {
    /**
     * If the selected node somehow ends up in a collapsed row, (e.g. during a
     * "move into" movement or when the user gets the latest checklist that has
     * undergone edits from another user moving their selected item into a collapsed
     * row), we need to make sure all the ancestors of the selected node are opened.
     */
    const openRowKeyDict = pipe(
      treeListState.openRows,
      Arr.map(key => tuple(key, key)),
      R.fromFoldable(Sg.getLastSemigroup<string>(), Arr.array),
    )

    const collapsedParentsOfSelected = pipe(
      name(forest)(TF.getPath(node => getKey(node.value) === selectedKey)),
      O.map(pathToSelected => {
        return Arr.unfold(the(pathToSelected), path => {
          const init = NEA.init(path)
          return Arr.isNonEmpty(init) ? O.some([init, init]) : O.none
        })
      }),
      O.getOrElse<Array<NEA.NonEmptyArray<number>>>(() => Arr.empty),
      Arr.map(ancestor => TF.getTreeOptionalFromPath<A>(ancestor)),
      Arr.filterMap(optional => optional.getOption(forest)),
      Arr.filter(
        parent => !R.hasOwnProperty(getKey(parent.value), openRowKeyDict),
      ),
      Arr.map(unopenedParent => getKey(unopenedParent.value)),
    )

    collapsedParentsOfSelected.forEach(parent =>
      treeListState.toggleNode(parent),
    )
  }, [forest, getKey, selectedKey, treeListState])

  return (
    <TreeViewWrapper>
      {header && (
        <Header>
          {header && <h1>{header.main}</h1>}
          {header?.sub && <h2>{header.sub}</h2>}
          {editable && (
            <Button
              display={ButtonDisplay.Secondary}
              onClick={onAddSection}
              cssOverrides={css`
                width: 100%;
              `}
            >
              Create Item
            </Button>
          )}
        </Header>
      )}

      <TreeViewScrollContainer>
        <TreeViewList>
          {treeListState.rows.map(row => {
            const isChildSelected = pipe(
              selectedRowAncestorKeys,
              O.fold(
                () => false,
                xs => xs.includes(key),
              ),
            )
            const key = getKey(row.value)
            const isSelected = pipe(
              props.selected,
              O.fold(
                () => false,
                selected => key === selected,
              ),
            )

            // `rowDisplayUnmodified` shown in the `title` on hover
            const rowDisplayUnmodified = props.getDisplay({
              value: row.value,
              isLeaf: row.isLeaf,
              isChildSelected,
            })

            const rowNumber = outlineNumbering(row)
            const formattedRowNumber =
              rowNumber.split('.').length === 1
                ? rowNumber.concat('.')
                : rowNumber

            return (
              <TreeViewRow
                key={key}
                title={(() => {
                  switch (rowDisplayUnmodified.tag) {
                    case TreeViewRowDisplayType.Default:
                      return numbered
                        ? `${formattedRowNumber} ${rowDisplayUnmodified.text}`
                        : rowDisplayUnmodified.text

                    case TreeViewRowDisplayType.ArbitraryContent:
                      return ''
                  }
                })()}
                onClick={() =>
                  props.onSelect?.(key, outlineNumbering(row), row.value)
                }
                onKeyDown={e =>
                  (e.key === ' ' || e.key === 'Enter') &&
                  props.onSelect?.(key, outlineNumbering(row), row.value)
                }
                active={isSelected}
              >
                <TreeRowToggleAndDepthLine
                  depth={row.depth}
                  onClick={evt => {
                    const childIsSelected = name(props.forest)(nf => {
                      return pipe(
                        nf,
                        TF.getPath(node => getKey(node.value) === selectedKey),
                        O.bindTo('selected'),
                        O.bind('this', () =>
                          pipe(
                            nf,
                            TF.getPath(
                              node => getKey(node.value) === getKey(row.value),
                            ),
                          ),
                        ),
                        O.exists(b =>
                          TF.isNodePathDescendantOf(b.this)(b.selected),
                        ),
                      )
                    })

                    if (childIsSelected) {
                      props.onSelect?.(key, formattedRowNumber, row.value)
                    }
                    evt.stopPropagation()
                    treeListState.toggleNode(key)
                  }}
                  isOpen={treeListState.openRows.includes(key)}
                  isLeaf={row.isLeaf}
                />

                {(() => {
                  switch (rowDisplayUnmodified.tag) {
                    case TreeViewRowDisplayType.Default:
                      return isNotNil(rowDisplayUnmodified.iconLeft) ? (
                        <RowIconLeftContainer>
                          <Icon {...rowDisplayUnmodified.iconLeft} />
                        </RowIconLeftContainer>
                      ) : (
                        <></>
                      )

                    default:
                      return null
                  }
                })()}

                <TreeViewText
                  css={props.getTreeViewTextProps?.({ value: row.value }).css}
                  depth={row.depth}
                >
                  {numbered && formattedRowNumber.concat(' ')}
                  {(() => {
                    switch (rowDisplayUnmodified.tag) {
                      case TreeViewRowDisplayType.Default:
                        return rowDisplayUnmodified.text.length > 249
                          ? `${rowDisplayUnmodified.text.slice(0, 246)}...`
                          : rowDisplayUnmodified.text

                      case TreeViewRowDisplayType.ArbitraryContent:
                        return rowDisplayUnmodified.content
                    }
                  })()}
                </TreeViewText>

                {(() => {
                  switch (rowDisplayUnmodified.tag) {
                    case TreeViewRowDisplayType.Default:
                      return (
                        <ActionsMenuWrapper>
                          <RowScrollIntoViewAnchor
                            ref={
                              isSelected ? selectedItemScrollAnchor : undefined
                            }
                          />
                          <ActionsMenu
                            toggle={(toggleProps: PopOverToggleProps) => (
                              <ActionsMenuToggle
                                icon="more_vert"
                                display={ButtonDisplay.Chromeless}
                                {...toggleProps}
                                onClick={e => {
                                  e.stopPropagation()
                                  toggleProps.onClick(e)
                                }}
                              />
                            )}
                            actions={getActions?.(key) ?? Arr.empty}
                            onActionComplete={handleActionComplete}
                          />
                        </ActionsMenuWrapper>
                      )

                    default:
                      return (
                        <RowScrollIntoViewAnchor
                          ref={
                            isSelected ? selectedItemScrollAnchor : undefined
                          }
                        />
                      )
                  }
                })()}
              </TreeViewRow>
            )
          })}
        </TreeViewList>
      </TreeViewScrollContainer>
    </TreeViewWrapper>
  )
}
