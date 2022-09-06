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

export type ColorTokenRowProps = {
  token: string
  mapping?: string
  colorValue?: string
  figmaStyle?: string
  description?: string
  opacity?: number
}

export type ColorTokenTableProps = {
  alias?: keyof Palette
  paletteColor?: PaletteOptions
  rawColorObj?: Record<string, string>
  colorMetadata?: Array<ColorTokenRowProps>
}
