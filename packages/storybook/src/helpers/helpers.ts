// Functions to be used in stories. Not intended to be used in Monorail.
import { RawColor as ClassicDarkRawColors } from '@monorail/themes/classic/theme/dark'
import { RawColor as ClassicLightRawColors } from '@monorail/themes/classic/theme/light'
import { RawColor as LegacyDarkRawColors } from '@monorail/themes/legacy/theme/dark'
import { RawColor as LegacyLightRawColors } from '@monorail/themes/legacy/theme/light'
import { RawColor as MeteorDarkRawColors } from '@monorail/themes/meteor/theme/dark'
import { RawColor as MeteorLightRawColors } from '@monorail/themes/meteor/theme/light'
import { RawColor as MuiRawColors } from '@monorail/themes/mui/theme'
import { RawColor as PcteDarkRawColors } from '@monorail/themes/pcte/theme/dark'
import { RawColor as PcteLightRawColors } from '@monorail/themes/pcte/theme/light'

import { ThemeName } from '../theme/palette/palette.types'

export const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1)

export const isMeteorTheme = (themeName: ThemeName) =>
  themeName === ThemeName.MeteorLight || themeName === ThemeName.MeteorDark

export const isLegacyTheme = (themeName: ThemeName) =>
  themeName === ThemeName.MeteorLight || themeName === ThemeName.MeteorDark

/**
 * Gets the `RawColor` object of a theme. Used for displaying the corresponding global token and value of an alias token.
 * @param themeName theme.palette.name
 * @returns RawColors object
 */
export const getRawColorObject = (themeName: ThemeName) => {
  switch (themeName) {
    case ThemeName.MeteorLight:
      return MeteorLightRawColors
    case ThemeName.MeteorDark:
      return MeteorDarkRawColors
    case ThemeName.ClassicLight:
      return ClassicLightRawColors
    case ThemeName.ClassicDark:
      return ClassicDarkRawColors
    case ThemeName.LegacyLight:
    case ThemeName.LegacyPlexLight:
      return LegacyLightRawColors
    case ThemeName.LegacyDark:
    case ThemeName.LegacyPlexDark:
      return LegacyDarkRawColors
    case ThemeName.MUILight:
      return MuiRawColors
    case ThemeName.MUIDark:
      return MuiRawColors
    case ThemeName.PCTELight:
      return PcteLightRawColors
    case ThemeName.PCTEDark:
      return PcteDarkRawColors
  }
}
