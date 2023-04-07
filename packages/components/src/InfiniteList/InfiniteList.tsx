/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable eqeqeq */
import React from 'react'
import { Virtuoso } from 'react-virtuoso'

import { Box } from '../Box.js'
import { CircularProgress } from '../CircularProgress.js'
import { List } from '../List.js'
import { ListItem } from '../ListItem.js'
import type { InfiniteListProps } from './InfiniteListProps.js'

export const InfiniteList = React.forwardRef(function InfiniteList(
  props: InfiniteListProps<
    unknown,
    {
      slots: InfiniteListProps['slots']
      slotProps: InfiniteListProps['slotProps']
    }
  >,
  ref,
) {
  const { data, slots = {}, slotProps = {}, ...others } = props

  return (
    <Virtuoso
      ref={ref}
      data={data}
      {...others}
      context={{
        slots,
        slotProps,
        ...others.context,
      }}
      components={{
        List: ListComponent,
        Footer: LoaderComponent,
        Item: ListItemComponent,
        ...others.components,
      }}
    />
  )
}) as <T, C>(props: InfiniteListProps<T, C>) => JSX.Element

const DefaultLoaderComponent = React.forwardRef(function DefaultLoaderComponent(
  props,
  ref,
) {
  return (
    <Box
      ref={ref}
      py={4}
      display="flex"
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      <CircularProgress />
    </Box>
  )
})

interface SlotComponentProps {
  ref?: React.Ref<any>
  context?: {
    slots?: InfiniteListProps['slots']
    slotProps?: InfiniteListProps['slotProps']
  }
}

const LoaderComponent = React.forwardRef(function LoaderComponent(props, ref) {
  const { context = {}, ...others } = props

  let LoaderComponent: React.ComponentType<{ ref?: React.Ref<any> }> =
    DefaultLoaderComponent

  if (context.slots?.loader) {
    LoaderComponent = context.slots.loader
  }

  return (
    <LoaderComponent {...others} {...context.slotProps?.loader} ref={ref} />
  )
}) as (props: SlotComponentProps) => JSX.Element

const ListComponent = React.forwardRef(function ListComponent(props, ref) {
  const { context = {}, ...others } = props

  let ListComponent: React.ComponentType<{ ref?: React.Ref<any> }> = List

  if (context.slots?.list) {
    ListComponent = context.slots.list
  }

  return <ListComponent {...others} {...context.slotProps?.list} ref={ref} />
}) as (props: SlotComponentProps) => JSX.Element

const ListItemComponent = React.forwardRef(function ListComponent(props, ref) {
  const { context = {}, ...others } = props

  let ListItemComponent: React.ComponentType<{ ref?: React.Ref<any> }> =
    ListItem

  if (context.slots?.listItem) {
    ListItemComponent = context.slots.listItem
  }

  return (
    <ListItemComponent {...others} {...context.slotProps?.listItem} ref={ref} />
  )
}) as (props: SlotComponentProps) => JSX.Element
