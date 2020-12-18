/* Helpers */
import * as Helpers from '@monorail/helpers/exports'

// Helpers that are not exported from exports.ts
import {
  Mode,
  ThemeColors,
  GlobalAppThemeInterface,
  monorailTheme,
  getThemeColor,
  getThemeColorBase,
} from '@monorail/helpers/theme'
import styled, {
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} from '@monorail/helpers/styled-components'
import { isUndefined } from '@monorail/sharedHelpers/typeGuards'
import {
  DropdownItemType,
  DropdownItemValue,
  DropdownType,
} from '@monorail/visualComponents/dropdown/helpers'
import {
  categoryColor,
  categoryIcon,
} from '@monorail/helpers/categoryTransforms'

export const MonorailHelpers = {
  ...Helpers,
  /* theme helpers */
  Mode,
  ThemeColors,
  GlobalAppThemeInterface,
  monorailTheme,
  getThemeColor,
  getThemeColorBase,
  /* dropdown helpers */
  DropdownItemType,
  DropdownItemValue,
  DropdownType,
  /* styled-components helpers */
  styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  /* typeguards */
  isUndefined,
  /* Category Transforms */
  categoryColor,
  categoryIcon,
}
