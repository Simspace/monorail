import React from 'react'
import ReactDOM from 'react-dom'
import { CssBaseline, ThemeProvider, useTheme } from '@mui/material'

import { useForceUpdate } from '@monorail/utils'

import { useStyledEngineContext } from '../StyledEngineContext.js'
import type { PopoutProps } from './popoutProps.js'

/**
 * A component that will open a new window or tab when mounted.
 *
 * Demos:
 *
 * - [Popout](https://simspace.github.io/monorail/main/storybook/?path=/story/utils-popout--default)
 */
export function Popout(props: PopoutProps): JSX.Element | null {
  const {
    title,
    open,
    onWindowClose,
    onWindowOpen,
    children,
    url,
    target,
    theme,
    features,
  } = props

  const { StyledEngineProvider } = useStyledEngineContext()

  const providedTheme = useTheme()

  const externalWindow = React.useRef<Window | null>(null)
  const externalRoot = React.useRef<HTMLElement | null>(null)

  const forceUpdate = useForceUpdate()

  React.useEffect(() => {
    const onBeforeUnload = () => {
      if (externalWindow.current) {
        externalWindow.current.close()
        externalWindow.current = null
      }
    }
    window.addEventListener('beforeunload', onBeforeUnload)
    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload)
      onBeforeUnload()
    }
  }, [])

  React.useEffect(() => {
    if (open && externalWindow.current === null) {
      const windowFeatures = processWindowFeatures(features)

      const newExternalWindow = window.open(url, target, windowFeatures)

      onWindowOpen?.(newExternalWindow)

      let newExternalRoot = null

      if (newExternalWindow) {
        newExternalRoot = newExternalWindow.document.createElement('div')
        newExternalWindow.document.body.appendChild(newExternalRoot)
        newExternalWindow.document.title = title
        onWindowClose &&
          newExternalWindow.addEventListener('beforeunload', onWindowClose)
      }

      externalWindow.current = newExternalWindow
      externalRoot.current = newExternalRoot

      forceUpdate()
    }

    if (!open && externalWindow.current !== null) {
      externalWindow.current.close()
      externalWindow.current = null

      forceUpdate()
    }
  }, [
    open,
    features,
    onWindowClose,
    onWindowOpen,
    forceUpdate,
    target,
    title,
    url,
  ])

  if (!externalRoot.current || !externalWindow.current) {
    return null
  }

  if (children === undefined) {
    return null
  }

  return ReactDOM.createPortal(
    <ThemeProvider theme={theme ?? providedTheme}>
      <StyledEngineProvider
        container={externalWindow.current.document.head}
        injectFirst
      >
        <CssBaseline />
        {children}
      </StyledEngineProvider>
    </ThemeProvider>,
    externalRoot.current,
  )
}

function processWindowFeatures(features: PopoutProps['features'] = {}): string {
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

  return windowFeatures
}
