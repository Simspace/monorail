import React, { FC } from 'react'

import { sizes } from '@monorail/helpers/size'
import { ThemeProvider } from '@monorail/helpers/styled-components'

export type ContentPageProps = {
  fullWidth?: boolean
}

export const ContentPage: FC<ContentPageProps> = props => {
  const { children, fullWidth = false } = props

  return (
    <ThemeProvider
      theme={theme => ({
        ...theme,
        size: {
          ...theme.size,
          page: {
            width: fullWidth ? 'auto' : 1064 + sizes.page.sideSpace * 2,
          },
        },
      })}
    >
      <>{children}</>
    </ThemeProvider>
  )
}
