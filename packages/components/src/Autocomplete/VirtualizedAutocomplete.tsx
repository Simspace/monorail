/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import type { VirtuosoProps } from 'react-virtuoso'
import { Virtuoso } from 'react-virtuoso'

import type { ChipTypeMap } from '../Chip.js'
import { ListItem } from '../ListItem.js'
import { ListItemText } from '../ListItemText.js'
import { ListSubheader } from '../ListSubheader.js'
import type {
  AutocompleteProps,
  AutocompleteRenderGroupParams,
  AutocompleteRenderOptionState,
} from './Autocomplete.js'
import { Autocomplete, autocompleteClasses } from './Autocomplete.js'

export interface VirtualizedAutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
> extends Omit<
    AutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>,
    'ListboxComponent' | 'ListboxProps' | 'renderGroup'
  > {
  ListboxProps?: Omit<VirtuosoProps<T, unknown>, 'data' | 'itemContent'>
  /**
   * Render the group.
   *
   * @param {AutocompleteRenderGroupProps} props The props of the group to render.
   * @param {AutocompleteRenderGroupParams} params The group to render.
   * @returns {ReactNode}
   */
  renderGroup?: (params: AutocompleteRenderGroupParams) => React.ReactNode
}

interface RenderRowProps<T> {
  data: ChildData<T>
  renderOption?: (
    props: React.HTMLAttributes<HTMLLIElement>,
    option: T,
    state: AutocompleteRenderOptionState,
  ) => React.ReactNode
  renderGroup?: (params: AutocompleteRenderGroupParams) => React.ReactNode
}

export function RenderRow<T>(props: RenderRowProps<T>) {
  const { data, renderGroup, renderOption } = props

  if ('group' in data) {
    if (renderGroup) {
      const node = renderGroup(data)
      if (React.isValidElement(node)) {
        return node
      } else {
        return <React.Fragment>{node}</React.Fragment>
      }
    } else {
      return (
        <ListSubheader
          key={data.key}
          className={autocompleteClasses.groupLabel}
        >
          {data.group}
        </ListSubheader>
      )
    }
  } else {
    if (renderOption) {
      const node = renderOption(data[0], data[1], data[2])
      if (React.isValidElement(node)) {
        return node
      } else {
        return <React.Fragment>{node}</React.Fragment>
      }
    } else {
      return (
        <ListItem {...data[0]}>
          <ListItemText primaryTypographyProps={{ noWrap: true }}>
            {data[1]}
          </ListItemText>
        </ListItem>
      )
    }
  }
}

type ChildData<T> =
  | [
      props: React.HTMLAttributes<HTMLLIElement>,
      option: T,
      state: AutocompleteRenderOptionState,
    ]
  | (Omit<AutocompleteRenderGroupParams, 'children'> & {
      children?: ReadonlyArray<
        [
          props: React.HTMLAttributes<HTMLLIElement>,
          option: T,
          state: AutocompleteRenderOptionState,
        ]
      >
    })

interface ListboxComponentProps<T>
  extends VirtuosoProps<ChildData<T>, unknown> {
  ref: React.Ref<HTMLDivElement>
  children?: React.ReactNode
  renderOption?: (
    props: React.HTMLAttributes<HTMLLIElement>,
    option: T,
    state: AutocompleteRenderOptionState,
  ) => React.ReactNode
  renderGroup?: (params: AutocompleteRenderGroupParams) => React.ReactNode
}

export const ListboxComponent = React.forwardRef(function ListboxComponent(
  props,
  ref,
) {
  const { ref: _, children, renderOption, renderGroup, ...others } = props

  const data = (children as Array<ChildData<any>>).flatMap(
    (item: ChildData<any>) => [
      item,
      ...('children' in item && item.children !== undefined
        ? item.children
        : []),
    ],
  )

  return (
    <div ref={ref}>
      <Virtuoso
        data={data}
        itemContent={(_, data) => (
          <RenderRow
            data={data}
            renderOption={renderOption}
            renderGroup={renderGroup}
          />
        )}
        {...others}
      />
    </div>
  )
}) as <T>(props: ListboxComponentProps<T>) => JSX.Element

export const VirtualizedAutocomplete = React.forwardRef(
  function VirtualizedAutocomplete(props, ref) {
    const { renderOption, renderGroup, ...others } = props

    const InnerListboxComponent = React.useMemo(() => {
      return React.forwardRef<HTMLDivElement>(function InnerListboxComponent(
        props,
        ref,
      ) {
        return (
          <ListboxComponent
            {...props}
            ref={ref}
            renderOption={renderOption}
            renderGroup={renderGroup}
          />
        )
      }) as (props: React.HTMLAttributes<HTMLElement>) => JSX.Element
    }, [renderOption, renderGroup])

    return (
      <Autocomplete
        ref={ref}
        ListboxComponent={InnerListboxComponent}
        renderOption={(props, options, state) => [props, options, state]}
        renderGroup={params => params}
        {...(others as AutocompleteProps<
          unknown,
          undefined,
          undefined,
          undefined
        >)}
      />
    )
  },
) as <
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
>(
  props: VirtualizedAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
) => JSX.Element
