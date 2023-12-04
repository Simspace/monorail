import React from 'react'
import { FixedSizeList } from 'react-window'
import type { StoryFn } from '@storybook/react'

import type { InfiniteListProps } from '@monorail/components'
import {
  Card,
  CardContent,
  InfiniteList,
  ListItem,
  Skeleton,
  Typography,
} from '@monorail/components'

export default {
  title: 'Utils/InfiniteList',
  component: InfiniteList,
}

const Template: StoryFn<InfiniteListProps> = _ => {
  const [items, setItems] = React.useState<Array<string>>([])
  const [isNextPageLoading, setNextPageLoading] = React.useState(false)
  const ref = React.useRef(null)

  const loadNextPage = () => {
    return new Promise<void>(resolve => {
      if (!isNextPageLoading) {
        setNextPageLoading(true)
        setTimeout(() => {
          const newItems = items.slice()
          for (let i = 0; i < 10; i++) {
            newItems.push(`Item ${items.length + i}`)
          }
          setItems(newItems)
          setNextPageLoading(false)
          resolve()
        }, 1000)
      }
    })
  }

  const isItemLoaded = (index: number) => index < items.length

  return (
    <InfiniteList
      ref={ref}
      component={FixedSizeList}
      data={items}
      isItemLoaded={isItemLoaded}
      loadNextPage={loadNextPage}
      itemSize={100}
      width={500}
      height={500}
      pageSize={10}
      threshold={5}
      renderItem={({ style, data }) => (
        <ListItem dense style={style}>
          <Card sx={{ width: '100%', height: '100%' }}>
            <CardContent>
              <Typography>{data}</Typography>
            </CardContent>
          </Card>
        </ListItem>
      )}
      slots={{
        loader: props => (
          <ListItem dense style={props.style}>
            <Skeleton
              variant="rounded"
              sx={{ width: '100%', height: '100%' }}
            />
          </ListItem>
        ),
      }}
      slotProps={{
        list: {
          disablePadding: true,
          dense: true,
        },
      }}
    />
  )
}

export const Default = Template.bind({})
