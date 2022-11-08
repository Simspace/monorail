import React from 'react'
import type { Palette, Theme } from '@mui/material'
import { useTheme } from '@mui/material'
import { unstable_getThemeValue } from '@mui/system'

export type ColorProp = string | ((palette: Palette) => string)

export function useColorProp(
  colorProp: ColorProp | undefined,
  defaultColor?: ColorProp,
): string | undefined {
  const theme = useTheme()
  return React.useMemo(() => {
    if (colorProp === undefined && defaultColor === undefined) {
      return undefined
    }
    if (colorProp === undefined) {
      if (typeof defaultColor === 'string') {
        return getThemeColor(defaultColor, theme)
      }
      if (typeof defaultColor === 'function') {
        return defaultColor(theme.palette)
      }
    }
    if (typeof colorProp === 'string') {
      return getThemeColor(colorProp, theme)
    }
    if (typeof colorProp === 'function') {
      return colorProp(theme.palette)
    }
    return undefined
  }, [colorProp, defaultColor, theme])
}

function getThemeColor(value: string, theme: Theme): string | undefined {
  return (
    unstable_getThemeValue('color', value, theme) as
      | { color?: string }
      | undefined
  )?.color
}
