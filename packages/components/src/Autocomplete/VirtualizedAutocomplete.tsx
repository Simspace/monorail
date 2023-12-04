/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import type { ListChildComponentProps } from 'react-window'
import { VariableSizeList } from 'react-window'

import type { StandardElementProps } from '@monorail/types'

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

const LISTBOX_PADDING = 8

interface AutocompleteRenderGroupProps {
  style: React.CSSProperties
}

export interface VirtualizedAutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
> extends Omit<
    AutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>,
    'ListboxComponent' | 'renderGroup' | 'renderOption'
  > {
  estimatedItemSize: number
  getItemSize?: (item: ChildData<T>) => number
  /**
   * Render the group.
   *
   * @param {AutocompleteRenderGroupProps} props The props of the group to render.
   * @param {AutocompleteRenderGroupParams} params The group to render.
   * @returns {ReactNode}
   */
  renderGroup?: (
    props: AutocompleteRenderGroupProps,
    params: AutocompleteRenderGroupParams,
  ) => React.ReactNode
  /**
   * Render the option.
   *
   * @param props  The props to apply on the li element.
   * @param option The option to render.
   * @param state The state of each option.
   * @returns {ReactNode}
   */
  renderOption?: (
    props: React.HTMLAttributes<HTMLLIElement>,
    option: T,
    state: AutocompleteRenderOptionState,
  ) => React.ReactNode
}

interface RenderRowProps<T> extends Omit<ListChildComponentProps, 'data'> {
  data: ReadonlyArray<ChildData<T>>
  renderOption?: (
    props: React.HTMLAttributes<HTMLLIElement>,
    option: T,
    state: AutocompleteRenderOptionState,
  ) => React.ReactNode
  renderGroup?: (
    props: AutocompleteRenderGroupProps,
    params: AutocompleteRenderGroupParams,
  ) => React.ReactNode
}

export function RenderRow<T>(props: RenderRowProps<T>) {
  const { data, index, style, renderGroup, renderOption } = props
  const dataSet = data[index]
  const inlineStyle: React.CSSProperties = {
    ...style,
    top: (style.top! as number) + LISTBOX_PADDING,
  }

  if ('group' in dataSet) {
    if (renderGroup) {
      const node = renderGroup({ style: inlineStyle }, dataSet)
      if (React.isValidElement(node)) {
        return node
      } else {
        return <React.Fragment>{node}</React.Fragment>
      }
    } else {
      return (
        <ListSubheader
          key={dataSet.key}
          className={autocompleteClasses.groupLabel}
          style={inlineStyle}
        >
          {dataSet.group}
        </ListSubheader>
      )
    }
  } else {
    if (renderOption) {
      const node = renderOption(
        { ...dataSet[0], style: inlineStyle },
        dataSet[1],
        dataSet[2],
      )
      if (React.isValidElement(node)) {
        return node
      } else {
        return <React.Fragment>{node}</React.Fragment>
      }
    } else {
      return (
        <ListItem {...dataSet[0]} style={inlineStyle}>
          <ListItemText primaryTypographyProps={{ noWrap: true }}>
            {dataSet[1]}
          </ListItemText>
        </ListItem>
      )
    }
  }
}

const OuterElementContext = React.createContext({})

const OuterElementType = React.forwardRef<HTMLDivElement>((props, ref) => {
  const outerProps = React.useContext(OuterElementContext)
  return <div ref={ref} {...props} {...outerProps} />
})

function useResetCache(data: unknown) {
  const ref = React.useRef<VariableSizeList>(null)
  React.useEffect(() => {
    if (ref.current !== null) {
      ref.current.resetAfterIndex(0, true)
    }
  }, [data])
  return ref
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

interface ListboxComponentProps<T> extends StandardElementProps<'div'> {
  estimatedItemSize: number
  getItemSize?: (child: ChildData<T>) => number
  renderOption?: (
    props: React.HTMLAttributes<HTMLLIElement>,
    option: T,
    state: AutocompleteRenderOptionState,
  ) => React.ReactNode
  renderGroup?: (
    props: AutocompleteRenderGroupProps,
    params: AutocompleteRenderGroupParams,
  ) => React.ReactNode
}

export const ListboxComponent = React.forwardRef(function ListboxComponent(
  props,
  ref,
) {
  const {
    children,
    estimatedItemSize,
    renderOption,
    renderGroup,
    getItemSize: getItemSizeProp,
    ...others
  } = props

  const data = (children as Array<ChildData<any>>).flatMap(
    (item: ChildData<any>) => [
      item,
      ...('children' in item && item.children !== undefined
        ? item.children
        : []),
    ],
  )

  const itemCount = data.length

  const getItemSize = (data: ChildData<any>) => {
    if (getItemSizeProp !== undefined) {
      return getItemSizeProp(data)
    }
    if (Object.prototype.hasOwnProperty.call(data, 'group')) {
      return 24
    }
    return 48
  }

  const getHeight = () => {
    if (itemCount > 8) {
      return 8 * estimatedItemSize
    }
    return data.reduce((a, b) => a + getItemSize(b), 0)
  }

  const listRef = useResetCache(itemCount)

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={others}>
        <VariableSizeList
          itemData={data}
          height={getHeight() + 2 * LISTBOX_PADDING}
          width="100%"
          ref={listRef}
          outerElementType={OuterElementType}
          innerElementType="ul"
          itemSize={index => getItemSize(data[index])}
          overscanCount={5}
          itemCount={itemCount}
        >
          {props => (
            <RenderRow
              {...props}
              renderOption={renderOption}
              renderGroup={renderGroup}
            />
          )}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </div>
  )
}) as <T>(props: ListboxComponentProps<T>) => JSX.Element

export const VirtualizedAutocomplete = React.forwardRef(
  function VirtualizedAutocomplete(props, ref) {
    const {
      estimatedItemSize,
      renderOption,
      renderGroup,
      getItemSize,
      ...others
    } = props

    const InnerListboxComponent = React.useMemo(() => {
      return React.forwardRef<HTMLDivElement>(function InnerListboxComponent(
        props,
        ref,
      ) {
        return (
          <ListboxComponent
            {...props}
            ref={ref}
            getItemSize={getItemSize}
            estimatedItemSize={estimatedItemSize}
            renderOption={renderOption}
            renderGroup={renderGroup}
          />
        )
      }) as (props: React.HTMLAttributes<HTMLElement>) => JSX.Element
    }, [estimatedItemSize, renderOption, renderGroup, getItemSize])

    return (
      <Autocomplete
        ref={ref}
        ListboxComponent={InnerListboxComponent}
        renderOption={(props, options, state) => [props, options, state]}
        renderGroup={params => params}
        {...others}
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
