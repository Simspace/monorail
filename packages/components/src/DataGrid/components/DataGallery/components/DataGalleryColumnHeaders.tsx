import React from 'react'
import { useGridApiContext, useGridRootProps } from '@mui/x-data-grid-premium'

import { Divider, dividerClasses } from '@monorail/components/Divider'
import { composeClasses, filterMap, styled } from '@monorail/utils'

import type { DataGalleryClasses } from '../constants/dataGalleryClasses'
import { getDataGalleryUtilityClass } from '../constants/dataGalleryClasses.js'
import { DataGalleryColumnHeader } from './DataGalleryColumnHeader.js'

export interface CollectionHeaderProps {
  classes?: Partial<DataGalleryClasses>
}

interface OwnerState {
  classes?: Partial<DataGalleryClasses>
}

const DataGalleryColumnHeadersRoot = styled('div', {
  name: 'MonorailDataGallery',
  slot: 'ColumnHeaders',
})(({ theme }) => ({
  height: theme.spacing(14),
  maxHeight: theme.spacing(14),
  width: '100%',
  backgroundColor: theme.palette.default.lowEmphasis.light,
  display: 'flex',
  flexDirection: 'row',
  boxShadow: `inset 0px -1px ${theme.palette.divider}`,
}))

const DataGalleryColumnSeparator = styled('div', {
  name: 'MonorailDataGallery',
  slot: 'ColumnSeparator',
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: theme.spacing(2),
  [`& .${dividerClasses.root}`]: {
    height: '70%',
  },
}))

export const DataGalleryColumnHeaders = React.forwardRef<
  HTMLDivElement,
  CollectionHeaderProps
>(function CollectionHeader(props, ref) {
  const apiRef = useGridApiContext()
  const rootProps = useGridRootProps()
  const classes = useUtilityClasses({ classes: props.classes })
  return (
    <DataGalleryColumnHeadersRoot
      className={classes.columnHeaders}
      ref={ref}
      style={{
        minHeight: rootProps.columnHeaderHeight,
        maxHeight: rootProps.columnHeaderHeight,
        lineHeight: rootProps.columnHeaderHeight,
      }}
    >
      {filterMap(apiRef.current.getAllColumns(), colDef => {
        if (colDef.field === '__check__') {
          return null
        }
        return (
          <React.Fragment key={colDef.field}>
            <DataGalleryColumnHeader colDef={colDef} classes={props.classes} />
            <DataGalleryColumnSeparator>
              <Divider orientation="vertical" />
            </DataGalleryColumnSeparator>
          </React.Fragment>
        )
      })}
    </DataGalleryColumnHeadersRoot>
  )
})

function useUtilityClasses(ownerState: OwnerState) {
  const { classes } = ownerState

  const slots = {
    columnHeaders: ['columnHeaders'],
    columnHeader: ['columnHeader'],
  }

  return composeClasses(slots, getDataGalleryUtilityClass, classes)
}
