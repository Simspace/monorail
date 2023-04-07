import React from 'react'
import type { Story } from '@storybook/react'

import type { InfiniteListProps } from '@monorail/components'
import {
  Box,
  Card,
  CardContent,
  InfiniteList,
  Typography,
} from '@monorail/components'

export default {
  title: 'Utils/InfiniteList',
  component: InfiniteList,
}

const Template: Story<InfiniteListProps> = _ => {
  const [items, setItems] = React.useState<Array<string>>([])
  const [isNextPageLoading, setNextPageLoading] = React.useState(false)

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

  React.useEffect(() => {
    loadNextPage()
    // eslint-disable-next-line
  }, [])

  return (
    <Box sx={{ height: 400 }}>
      <InfiniteList
        data={items}
        endReached={loadNextPage}
        itemContent={(_, data) => (
          <Card sx={{ width: '100%', height: '100%' }}>
            <CardContent>
              <Typography>{data}</Typography>
            </CardContent>
          </Card>
        )}
        overscan={200}
        slotProps={{
          list: {
            disablePadding: true,
            dense: true,
          },
        }}
      />
    </Box>
  )
}

export const Default = Template.bind({})
