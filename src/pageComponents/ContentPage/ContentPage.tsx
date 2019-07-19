import React, { FC } from 'react'

import { sizes } from '@monorail/helpers/size'
import { ThemeProvider } from '@monorail/helpers/styled-components'

export const ContentPage: FC = props => {
  const { children } = props

  return (
    <ThemeProvider
      theme={theme => ({
        ...theme,
        size: {
          ...theme.size,
          page: {
            width: 1064 + sizes.page.sideSpace * 2,
          },
        },
      })}
    >
      <>{children}</>
    </ThemeProvider>
  )
}
