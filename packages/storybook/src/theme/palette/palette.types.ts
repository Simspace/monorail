import type {
  Palette,
  PaletteOptions,
} from '@mui/material/styles/createPalette'

export enum ThemeName {
  ClassicLight = 'classicLight',
  ClassicDark = 'classicDark',
  MUILight = 'muiLight',
  MUIDark = 'muiDark',
  PCTELight = 'pcteLight',
  PCTEDark = 'pcteDark',
  RebrandLight = 'rebrandLight',
  RebrandDark = 'rebrandDark',
}

export type ColorCardProps = {
  token: string
  mapping?: string
  colorValue: string
  figmaStyle: string
  description?: string
  opacity?: number
}

export type ColorSwatchProps = {
  alias?: keyof Palette
  paletteColor?: PaletteOptions
  colorMode: string
  rawColorObj?: Record<string, string>
  data?: Array<ColorCardProps>
}
