import React from 'react'

import type { StandardElementProps } from '@monorail/types'
import { styled } from '@monorail/utils'

import { Divider, dividerClasses } from '../../Divider.js'

export interface DataGridColumnSeparatorProps
  extends StandardElementProps<'div'> {}

export const DataGridColumnSeparatorRoot = styled('div', {
  name: 'MuiDataGrid',
  slot: 'ColumnSeparatorRoot',
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: theme.spacing(4),
  [`& .${dividerClasses.root}`]: {
    color: theme.palette.divider,
    backgroundColor: theme.palette.divider,
    borderColor: theme.palette.divider,
    width: '1px',
    height: theme.spacing(10),
  },
}))

export const DataGridColumnSeparator = React.forwardRef(
  function DataGridColumnSeparator(props, ref) {
    return (
      <DataGridColumnSeparatorRoot ref={ref} {...props}>
        <Divider />
      </DataGridColumnSeparatorRoot>
    )
  },
) as (props: DataGridColumnSeparatorProps) => JSX.Element
