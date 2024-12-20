 
import React from 'react'
import type { GridStateColDef } from '@mui/x-data-grid/internals'
import clsx from 'clsx'

import { DataGridColumnHeader } from '@monorail/components/DataGrid/components/DataGridColumnHeader'
import { typographyClasses } from '@monorail/components/Typography'
import { composeClasses, styled } from '@monorail/utils'

import type { DataGalleryClasses } from '../constants/dataGalleryClasses'
import {
  dataGalleryClasses,
  getDataGalleryUtilityClass,
} from '../constants/dataGalleryClasses.js'

export interface DataGalleryColumnHeaderProps {
  classes?: Partial<DataGalleryClasses>
  colDef: GridStateColDef
}

interface OwnerState {
  classes?: Partial<DataGalleryClasses>
  colDef: GridStateColDef
}

const DataGalleryColumnHeaderRoot = styled('div', {
  name: 'MonorailDataGallery',
  slot: 'ColumnHeaderContainer',
})(({ theme }) => ({
  display: 'flex',
  flex: 1,
  minWidth: 0,
  '&:focus': {
    outline: 'none',
  },
  '&:focus-within': {
    outline: 'none',
  },
  '&:focus-visible': {
    boxShadow: `inset 0 0 0 1px ${theme.palette.primary.focusRing.inner}, inset 0 0 0 4px ${theme.palette.primary.focusRing.outer}`,
    zIndex: 1,
  },
  [`&.${dataGalleryClasses['columnHeader--sortable']}`]: {
    cursor: 'pointer',
  },
  [`& .${typographyClasses.root}`]: {
    ...theme.typography.tableHeader,
  },
}))

export const DataGalleryColumnHeader = React.forwardRef<
  HTMLDivElement,
  DataGalleryColumnHeaderProps
>(function CollectionColumnHeader(props, ref) {
  const classes = useUtilityClasses({
    classes: props.classes,
    colDef: props.colDef,
  })

  return (
    <DataGalleryColumnHeaderRoot
      className={clsx(classes.root, props.colDef.headerClassName)}
      ref={ref}
    >
      <DataGridColumnHeader field={props.colDef.field} colDef={props.colDef} />
    </DataGalleryColumnHeaderRoot>
  )
})

function useUtilityClasses(ownerState: OwnerState) {
  const { classes, colDef } = ownerState

  const slots = {
    root: ['columnHeader', colDef.sortable && 'columnHeader--sortable'],
  }

  return composeClasses(slots, getDataGalleryUtilityClass, classes)
}
