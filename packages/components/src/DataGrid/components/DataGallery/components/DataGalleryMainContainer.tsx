import React from 'react'
import type { CSSObject } from '@mui/material'
import clsx from 'clsx'

import { dataGridClasses } from '@monorail/components/DataGrid'
import type { StandardElementProps } from '@monorail/types'
import { composeClasses, styled } from '@monorail/utils'

import type {
  DataGalleryClasses,
  DataGalleryClassKey,
} from '../constants/dataGalleryClasses'
import {
  dataGalleryClasses,
  getDataGalleryUtilityClass,
} from '../constants/dataGalleryClasses.js'

function overridesResolver(
  _: unknown,
  styles: Partial<Record<DataGalleryClassKey, CSSObject>>,
) {
  return [
    { [`& .${dataGalleryClasses.columnHeaders}`]: styles.columnHeaders },
    { [`& .${dataGalleryClasses.columnHeader}`]: styles.columnHeader },
    {
      [`& .${dataGalleryClasses['columnHeader--sortable']}`]:
        styles['columnHeader--sortable'],
    },
    styles.main,
  ]
}

const DataGalleryMainContainerRoot = styled('div', {
  name: 'MonorailCollection',
  slot: 'Main',
  overridesResolver,
})(() => ({
  position: 'relative',
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  width: '100%',
}))

interface DataGalleryMainContainerProps extends StandardElementProps<'div'> {
  classes?: Partial<DataGalleryClasses>
  children: React.ReactNode
}

export const DataGalleryMainContainer = React.forwardRef(
  function DataGalleryMainContainer(props, ref) {
    const classes = useUtilityClasses(props)
    return (
      <DataGalleryMainContainerRoot
        ref={ref}
        className={clsx(classes.main, dataGridClasses.main)}
      >
        {props.children}
      </DataGalleryMainContainerRoot>
    )
  },
) as (props: DataGalleryMainContainerProps) => JSX.Element

function useUtilityClasses(props: DataGalleryMainContainerProps) {
  const { classes } = props

  const slots = {
    main: ['main'],
  }

  return composeClasses(slots, getDataGalleryUtilityClass, classes)
}
