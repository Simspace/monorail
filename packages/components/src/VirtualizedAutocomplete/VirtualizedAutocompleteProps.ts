 
import type { GroupProps, ItemProps, VirtuosoProps } from 'react-virtuoso'
import type { SxProps, Theme } from '@mui/material'
import type { ListProps } from '@mui/material/List'

import type {
  AutocompleteOwnerState,
  AutocompleteProps,
  AutocompleteRenderGroupParams,
  AutocompleteRenderOptionState,
} from '@monorail/components/Autocomplete/Autocomplete'
import type { ChipTypeMap } from '@monorail/components/Chip'
import type { ListItemProps } from '@monorail/components/ListItem'

export interface VirtualizedAutocompleteProps<
  Value,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
> extends Omit<
    AutocompleteProps<
      Value,
      Multiple,
      DisableClearable,
      FreeSolo,
      ChipComponent
    >,
    | 'ListboxComponent'
    | 'ListboxProps'
    | 'renderGroup'
    | 'renderOption'
    | 'slotProps'
  > {
  /**
   * Render the group.
   *
   * @param {AutocompleteRenderGroupProps} props The props of the group to render.
   * @param {AutocompleteRenderGroupParams} params The group to render.
   * @returns {React.ReactNode}
   */
  renderGroup?: (params: AutocompleteRenderGroupParams) => React.ReactNode
  /**
   * Render the option.
   *
   * @param props  The props to apply on the li element.
   * @param option The option to render.
   * @param state The state of each option.
   * @returns {React.ReactNode}
   */
  renderOption?: (
    props: React.HTMLAttributes<HTMLLIElement>,
    option: Value,
    state: AutocompleteRenderOptionState,
    ownerState: AutocompleteOwnerState<
      Value,
      Multiple,
      DisableClearable,
      FreeSolo,
      ChipComponent
    >,
  ) => React.ReactNode

  slotProps?: AutocompleteProps<
    Value,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
  >['slotProps'] & {
    listbox?: Omit<
      ListboxComponentProps<Value>,
      | 'data'
      | 'children'
      | 'itemContent'
      | 'context'
      | 'components'
      | 'renderOption'
      | 'renderGroup'
      | 'ref'
    >
  }
}

export interface ListboxComponentProps<
  Value,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
> extends Omit<
    VirtuosoProps<never, VirtualizedAutocompleteContext<Value>>,
    'itemContent' | 'children'
  > {
  children: Array<Data<Value>>

  renderOption?: (
    props: React.HTMLAttributes<HTMLLIElement>,
    option: Value,
    state: AutocompleteRenderOptionState,
    ownerState: AutocompleteOwnerState<
      Value,
      Multiple,
      DisableClearable,
      FreeSolo,
      ChipComponent
    >,
  ) => React.ReactNode

  renderGroup?: (params: AutocompleteRenderGroupParams) => React.ReactNode

  slots?: {
    list?: React.ComponentType<VirtualizedListProps<Value>>
    listItem?: React.ComponentType<VirtualizedListItemProps<Value>>
    group?: React.ComponentType<VirtualizedGroupProps<Value>>
  }

  slotProps?: {
    list?: Partial<ListProps>
    listItem?: Partial<ListItemProps>
    group?: Partial<ListItemProps>
  }
  sx?: SxProps<Theme>
}

export interface VirtualizedAutocompleteContext<Value> {
  listboxOwnerState: ListboxComponentProps<Value>
  groups: Array<GroupData<Value>>
  items: Array<ItemData<Value>>
}

export type GroupData<
  Value,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
> = Omit<AutocompleteRenderGroupParams, 'children'> & {
  children?: ReadonlyArray<
    ItemData<Value, Multiple, DisableClearable, FreeSolo, ChipComponent>
  >
}

export type ItemData<
  Value,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
> = [
  props: React.HTMLAttributes<HTMLLIElement>,
  option: Value,
  state: AutocompleteRenderOptionState,
  ownerState: AutocompleteOwnerState<
    Value,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
  >,
]

export type Data<Value> = ItemData<Value> | GroupData<Value>

export interface VirtualizedListProps<Value> extends ListProps {
  context: VirtualizedAutocompleteContext<Value>
}

export interface VirtualizedListItemProps<Value>
  extends ListItemProps,
    ItemProps<never> {
  context: VirtualizedAutocompleteContext<Value>
}

export interface VirtualizedGroupProps<Value>
  extends ListItemProps,
    GroupProps {
  context: VirtualizedAutocompleteContext<Value>
}
