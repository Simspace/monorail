import React from 'react'

import { useEnhancedEffect, useTheme } from '@monorail/utils'

export function useThemeSpacingMultiplier(): number {
  const theme = useTheme()

  const [spacing, setSpacing] = React.useState(4)

  useEnhancedEffect(() => {
    const pixels = theme.spacing()
    const n = Number.parseFloat(pixels.slice(-2))
    if (!Number.isNaN(n)) {
      setSpacing(n)
    }
  }, [theme.spacing])

  return spacing
}
