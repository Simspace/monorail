import React from 'react'
import ReactDOM from 'react-dom'
import { CssBaseline, ThemeProvider, useTheme } from '@mui/material'

import { useStyledEngineContext } from '../StyledEngineContext.js'
import type { PopoutProps } from './popoutProps.js'

/**
 * A component that will open a new window or tab when mounted.
 *
 * Demos:
 *
 * - [Popout](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/story/utils-popout--default)
 */
export function Popout(props: PopoutProps): JSX.Element | null {
  const {
    title,
    onWindowClose,
    onWindowOpen,
    children,
    url,
    target,
    features = {},
  } = props

  const { StyledEngineProvider } = useStyledEngineContext()

  const theme = useTheme()

  const [externalWindow, setExternalWindow] = React.useState<Window | null>(
    null,
  )
  const [externalRoot, setExternalRoot] = React.useState<HTMLElement | null>(
    null,
  )

  React.useEffect(() => {
    let windowFeatures = ''

    if (features.popup !== undefined) {
      windowFeatures += `popup=${features.popup},`
    } else {
      windowFeatures += 'popup=true,'
    }

    if (features.width !== undefined) {
      windowFeatures += `width=${features.width},`
    } else {
      windowFeatures += `width=800,`
    }

    if (features.height !== undefined) {
      windowFeatures += `height=${features.height},`
    } else {
      windowFeatures += 'height=600,'
    }

    if (features.left !== undefined) {
      windowFeatures += `left=${features.left},`
    }

    if (features.top !== undefined) {
      windowFeatures += `top=${features.top},`
    }

    if (features.noopener ?? false) {
      windowFeatures += 'noopener,'
    }

    if (features.noreferrer ?? false) {
      windowFeatures += 'noreferrer'
    }

    const externalWindow = window.open(url, target, windowFeatures)

    onWindowOpen?.(externalWindow)

    let containerElement = null

    if (externalWindow) {
      containerElement = externalWindow.document.createElement('div')
      externalWindow.document.body.appendChild(containerElement)
      externalWindow.document.title = title
      onWindowClose &&
        externalWindow.addEventListener('beforeunload', onWindowClose)
    }

    setExternalWindow(externalWindow)
    setExternalRoot(containerElement)
    return () => {
      if (externalWindow) {
        externalWindow.close()
        onWindowClose &&
          externalWindow.removeEventListener('beforeunload', onWindowClose)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!externalRoot) {
    return null
  }

  if (children === undefined) {
    return null
  }

  return ReactDOM.createPortal(
    <ThemeProvider theme={theme}>
      <StyledEngineProvider
        container={externalWindow!.document.head}
        injectFirst
      >
        <CssBaseline />
        {children}
      </StyledEngineProvider>
    </ThemeProvider>,
    externalRoot,
  )
}
