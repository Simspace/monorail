import type { FontStyle } from '@mui/material/styles/createTypography'

import type { TableCellProps, TypographyProps } from '@monorail/components'

export type TypographyTokenRowProps = {
  variant?: TypographyProps['variant']
  fontWeightToken?: keyof Omit<FontStyle, 'fontFamily' | 'fontSize' | 'htmlFontSize'>
  figmaStyle?: string
  fontSizePx?: number
  lineHeightPx?: number | string
  description?: JSX.Element | string
  styles?: Partial<
    Omit<FontStyle, 'fontSize'> & {
      fontWeight: React.CSSProperties['fontWeight']
      lineHeight: React.CSSProperties['lineHeight']
      fontSize: React.CSSProperties['fontSize']
    }
  >
  underlyingElement?: string
}

export type TypographyTokenColumns = Array<{
  id: string
  label: string
  align?: TableCellProps['align']
}>
