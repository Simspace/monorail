/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { GridValidRowModel } from '@monorail/components/DataGrid/internal'
import type { IconButtonProps } from '@monorail/components/IconButton'
import type { DataAttributes } from '@monorail/types'

export interface RenderCustomFilterParams {
  setState: React.Dispatch<React.SetStateAction<unknown>>
  state: unknown
}

export interface CustomFilterDefinition<
  R extends GridValidRowModel = GridValidRowModel,
  V = any,
  F = V,
> {
  type: 'custom'
  operator: string
  renderFilter: (params: RenderCustomFilterParams) => JSX.Element
  getIsFiltered: (state: unknown) => boolean
  getInitialState: () => unknown
  slotProps?: {
    columnHeaderButton?: Partial<IconButtonProps & DataAttributes>
  }
}
