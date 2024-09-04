/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import type { Components } from 'react-virtuoso'
import { GroupedVirtuoso, Virtuoso } from 'react-virtuoso'
import { getOverlayAlpha } from '@mui/material'

import { List } from '@monorail/components/List'
import type {
  Data,
  GroupData,
  ItemData,
  ListboxComponentProps,
  VirtualizedAutocompleteContext,
  VirtualizedAutocompleteProps,
  VirtualizedGroupProps,
  VirtualizedListItemProps,
  VirtualizedListProps,
} from '@monorail/components/VirtualizedAutocomplete/VirtualizedAutocompleteProps'
import { styled } from '@monorail/utils'

import {
  Autocomplete,
  autocompleteClasses,
} from '../Autocomplete/Autocomplete.js'
import type { ChipTypeMap } from '../Chip.js'
import { ListItem } from '../ListItem.js'
import { ListItemText } from '../ListItemText.js'

/**
 * A version of `Autocomplete` in which the listbox is virtualized using `react-virtuoso`
 */
export const VirtualizedAutocomplete = React.forwardRef(
  function VirtualizedAutocomplete(props, ref) {
    const { renderOption, renderGroup, slotProps, ...others } = props

    const { listbox: listboxProps, ...otherSlotProps } = slotProps ?? {}

    const ListboxProps = React.useMemo(() => {
      return {
        ...listboxProps,
        renderOption,
        renderGroup,
      }
    }, [listboxProps, renderGroup, renderOption])

    return (
      <Autocomplete
        ref={ref}
        ListboxComponent={VirtualizedListboxComponent as any}
        ListboxProps={ListboxProps as any}
        renderOption={(props, options, state, ownerState) => [
          props,
          options,
          state,
          ownerState,
        ]}
        renderGroup={params => params}
        slotProps={otherSlotProps}
        {...others}
      />
    )
  },
) as <
  Value,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
>(
  props: VirtualizedAutocompleteProps<
    Value,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
  >,
) => JSX.Element

const VirtualizedListComponent = React.forwardRef(function VirtualizedList(
  props,
  ref,
) {
  const { context, ...others } = props

  const { listboxOwnerState } = context
  const { slotProps = {} } = listboxOwnerState

  return <List ref={ref} {...others} disablePadding {...slotProps.list} />
}) as (props: VirtualizedListProps<any>) => JSX.Element

function VirtualizedListItemComponent<Value>(
  props: VirtualizedListItemProps<Value>,
) {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const { item, context, children, ...others } = props
  /* eslint-enable @typescript-eslint/no-unused-vars */

  const { listboxOwnerState, items } = context

  const [optionProps, option, state, autocompleteOwnerState] =
    items[props['data-item-index']]

  const { slotProps = {} } = listboxOwnerState

  const renderOption = listboxOwnerState.renderOption

  if (renderOption) {
    const node = renderOption(
      optionProps,
      option,
      state,
      autocompleteOwnerState,
    )
    if (React.isValidElement(node)) {
      return React.cloneElement(node, { ...others, ...slotProps.listItem })
    } else {
      return <React.Fragment>{node}</React.Fragment>
    }
  } else {
    return (
      <ListItem {...optionProps} {...others} {...slotProps.listItem}>
        <ListItemText primaryTypographyProps={{ noWrap: true }}>
          {autocompleteOwnerState.getOptionLabel(option)}
        </ListItemText>
      </ListItem>
    )
  }
}

const GroupListItem = styled(ListItem)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  ...(theme.palette.mode === 'dark' && {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, ${getOverlayAlpha(
      1,
    )}), rgba(255, 255, 255, ${getOverlayAlpha(1)}))`,
  }),
}))

function VirtualizedGroupComponent<Value>(props: VirtualizedGroupProps<Value>) {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const { context, children, key, ...others } = props
  /* eslint-enable @typescript-eslint/no-unused-vars */

  const { listboxOwnerState: ownerState, groups } = context

  const { slotProps = {} } = ownerState

  const item = groups[props['data-item-index']]

  const renderGroup = ownerState.renderGroup

  if (renderGroup) {
    const node = renderGroup(item)
    if (React.isValidElement(node)) {
      return React.cloneElement(node, { ...others, ...slotProps.group })
    } else {
      return <React.Fragment>{node}</React.Fragment>
    }
  } else {
    return (
      <GroupListItem
        key={item.key}
        className={autocompleteClasses.groupLabel}
        {...props}
        {...slotProps.group}
      >
        {item.group}
      </GroupListItem>
    )
  }
}

const VirtualizedListboxRoot = styled('div')({})

export const VirtualizedListboxComponent = React.forwardRef(
  function ListboxComponent(props, ref: React.ForwardedRef<HTMLDivElement>) {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const {
      children,
      renderOption,
      renderGroup,
      slots,
      slotProps,
      components: componentsProp,
      sx,
      ...others
    } = props
    /* eslint-enable @typescript-eslint/no-unused-vars */

    const scrollerRef = React.useRef<HTMLElement | null>(null)

    const { items, groups, groupCounts } = React.useMemo(() => {
      return getDataParts(children)
    }, [children])

    const scrollerRefCallback = React.useCallback(
      (ref: HTMLElement | Window | null) => {
        if (ref === null || ref instanceof HTMLElement) {
          scrollerRef.current = ref
        }

        if (scrollerRef.current !== null) {
          scrollerRef.current.style.height = '40vh'
        }
      },
      [],
    )

    const handleTotalListHeightChanged = React.useCallback((height: number) => {
      if (scrollerRef.current) {
        scrollerRef.current.style.height = `min(40vh, ${height}px)`
        scrollerRef.current.style.padding = '0'
      }
    }, [])

    const components = React.useMemo(() => {
      return {
        List: slots?.list ?? VirtualizedListComponent,
        Group: slots?.group ?? VirtualizedGroupComponent,
        Item: slots?.listItem ?? VirtualizedListItemComponent,
        ...componentsProp,
      } as Components<never, VirtualizedAutocompleteContext<any>>
    }, [slots, componentsProp])

    return (
      <VirtualizedListboxRoot ref={ref} sx={sx}>
        {groupCounts.length > 0 ? (
          <GroupedVirtuoso
            groupCounts={groupCounts}
            scrollerRef={scrollerRefCallback}
            totalListHeightChanged={handleTotalListHeightChanged}
            context={{
              listboxOwnerState: props,
              groups,
              items,
            }}
            components={components}
            {...others}
          />
        ) : (
          <Virtuoso
            totalCount={items.length}
            scrollerRef={scrollerRefCallback}
            totalListHeightChanged={handleTotalListHeightChanged}
            context={{
              listboxOwnerState: props,
              groups,
              items,
            }}
            components={components}
            {...others}
          />
        )}
      </VirtualizedListboxRoot>
    )
  },
) as <Value>(props: ListboxComponentProps<Value>) => JSX.Element

interface ItemDataParts<Value> {
  items: Array<ItemData<Value>>
  groups: Array<GroupData<Value>>
  groupCounts: Array<number>
}

function getDataParts<Value>(data: Array<Data<Value>>): ItemDataParts<Value> {
  const items: Array<ItemData<Value>> = []
  const groups: Array<GroupData<Value>> = []
  const groupCounts: Array<number> = []

  for (const item of data) {
    if ('children' in item && item.children !== undefined) {
      groups.push(item)
      const groupItems = item.children
      groupCounts.push(groupItems.length)
      for (const item of groupItems) {
        items.push(item)
      }
    } else {
      items.push(item as ItemData<any>)
    }
  }

  return { items, groups, groupCounts }
}
