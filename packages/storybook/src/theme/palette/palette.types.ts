import type {
  Palette,
  PaletteOptions,
} from '@mui/material/styles/createPalette'

export enum ThemeName {
  MeteorLight = 'meteorLight',
  MeteorDark = 'meteorDark',
  ClassicLight = 'classicLight',
  ClassicDark = 'classicDark',
  LegacyLight = 'legacyLight',
  LegacyDark = 'legacyDark',
  MUILight = 'muiLight',
  MUIDark = 'muiDark',
  PCTELight = 'pcteLight',
  PCTEDark = 'pcteDark',
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
