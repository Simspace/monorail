import type { TableCellProps, TypographyProps } from '@monorail/components'

export type TypographyStyles = {
  fontFamily?: React.CSSProperties['fontFamily']
  fontSize?: React.CSSProperties['fontSize']
  fontWeight?: React.CSSProperties['fontWeight']
  lineHeight?: React.CSSProperties['lineHeight']
}

export type TypographyTokenRowProps = {
  token: TypographyProps['variant']
  figmaStyle: string
  fontSizePx: number
  lineHeightPx: number
  description?: string
  styles: TypographyStyles
  underlyingElement: string
}

export type TypographyTokenColumns = Array<{
  id: string
  label: string
  align?: TableCellProps['align']
}>
