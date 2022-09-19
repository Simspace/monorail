import type { TypographyProps } from '@mui/material'

type TypographyVariant = Capitalize<
  Exclude<NonNullable<TypographyProps['variant']>, 'inherit'>
>

/**
 * Typography global tokens.
 * Meant to be assigned to aliases. Don't use directly on components.
 */
enum Scale {
  FontSize44 = 44,
  FontSize40 = 40,
  FontSize36 = 36,
  FontSize32 = 32,
  FontSize28 = 28,
  FontSize24 = 24,
  FontSize20 = 20,
  FontSize16 = 16,
  FontSize14 = 14,
  FontSize12 = 12,

  LineHeight56 = 56,
  LineHeight52 = 52,
  LineHeight48 = 48,
  LineHeight36 = 36,
  LineHeight32 = 32,
  LineHeight24 = 24,
  LineHeight22 = 22,
  LineHeight20 = 20,
  LineHeight18 = 18,
  LineHeight16 = 16,
  LineHeight14 = 14,

  LetterSpacing17 = 0.17,
  LetterSpacing15 = 0.15,
}

const DEFAULT_ROOT_SIZE = Scale.FontSize16

/**
 * Typography alias tokens for font sizes in pixels.
 * Used in documentation and to calculate responsive units.
 */
export const PixelFontSize: Record<TypographyVariant, number> = {
  Data1: Scale.FontSize44,
  Data2: Scale.FontSize40,
  Data3: Scale.FontSize36,
  H1: Scale.FontSize28,
  H2: Scale.FontSize24,
  H3: Scale.FontSize20,
  Body1: Scale.FontSize16,
  Body2: Scale.FontSize14,
  Subtitle1: Scale.FontSize16,
  Subtitle2: Scale.FontSize14,
  MonoBody1: Scale.FontSize16,
  MonoBody2: Scale.FontSize14,
  Overline: Scale.FontSize12,
  Caption: Scale.FontSize12,
  Button: Scale.FontSize16,

  // Components
  AlertTitle: Scale.FontSize16,
  AvatarInitials: Scale.FontSize14,
  BadgeLabel: Scale.FontSize14,
  BottomNavActiveLabel: Scale.FontSize14,
  ButtonLarge: Scale.FontSize16,
  ButtonMedium: Scale.FontSize16,
  ButtonSmall: Scale.FontSize14,
  Chip: Scale.FontSize16,
  InputLabel: Scale.FontSize16,
  HelperText: Scale.FontSize14,
  InputText: Scale.FontSize16,
  TableHeader: Scale.FontSize14,
  ListSubheader: Scale.FontSize14,
  MenuItem: Scale.FontSize16,
  MenuItemDense: Scale.FontSize14,
  TabActive: Scale.FontSize16,
  TabInactive: Scale.FontSize16,
  Tooltip: Scale.FontSize14,
}

/**
 * Typography alias tokens for line heights in pixels.
 * Used in documentation and to calculate responsive units.
 */
export const PixelLineHeight: Record<TypographyVariant, number> = {
  Data1: Scale.LineHeight56,
  Data2: Scale.LineHeight52,
  Data3: Scale.LineHeight48,
  H1: Scale.LineHeight36,
  H2: Scale.LineHeight32,
  H3: Scale.LineHeight24,
  Body1: Scale.LineHeight24,
  Body2: Scale.LineHeight22,
  Subtitle1: Scale.LineHeight24,
  Subtitle2: Scale.LineHeight22,
  MonoBody1: Scale.LineHeight24,
  MonoBody2: Scale.LineHeight22,
  Overline: Scale.LineHeight20,
  Caption: Scale.LineHeight20,
  Button: Scale.LineHeight20,

  // Components
  AlertTitle: Scale.LineHeight24,
  AvatarInitials: Scale.LineHeight14,
  BadgeLabel: Scale.LineHeight18,
  BottomNavActiveLabel: Scale.LineHeight24,
  ButtonLarge: Scale.LineHeight20,
  ButtonMedium: Scale.LineHeight20,
  ButtonSmall: Scale.LineHeight16,
  Chip: Scale.LineHeight20,
  InputLabel: Scale.LineHeight24,
  HelperText: Scale.LineHeight20,
  InputText: Scale.LineHeight24,
  TableHeader: Scale.LineHeight24,
  ListSubheader: Scale.LineHeight24,
  MenuItem: Scale.LineHeight24,
  MenuItemDense: Scale.LineHeight20,
  TabActive: Scale.LineHeight20,
  TabInactive: Scale.LineHeight20,
  Tooltip: Scale.LineHeight20,
}

/**
 * Typography alias tokens for font sizes. OK to use on components.
 */
export const FontSize: Record<TypographyVariant, `${number}rem`> = {
  Data1: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.Data1),
  Data2: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.Data2),
  Data3: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.Data3),
  H1: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.H1),
  H2: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.H2),
  H3: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.H3),
  Body1: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.Body1),
  Body2: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.Body2),
  Subtitle1: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.Subtitle1),
  Subtitle2: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.Subtitle2),
  MonoBody1: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.MonoBody1),
  MonoBody2: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.MonoBody2),
  Overline: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.Overline),
  Caption: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.Caption),
  Button: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.Button),

  // Components
  AlertTitle: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.AlertTitle),
  AvatarInitials: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.AvatarInitials),
  BadgeLabel: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.BadgeLabel),
  BottomNavActiveLabel: pxToRem(
    DEFAULT_ROOT_SIZE,
    PixelFontSize.BottomNavActiveLabel,
  ),
  ButtonLarge: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.ButtonLarge),
  ButtonMedium: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.ButtonMedium),
  ButtonSmall: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.ButtonSmall),
  Chip: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.Chip),
  InputLabel: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.InputLabel),
  HelperText: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.HelperText),
  InputText: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.InputText),
  TableHeader: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.TableHeader),
  ListSubheader: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.ListSubheader),
  MenuItem: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.MenuItem),
  MenuItemDense: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.MenuItemDense),
  TabActive: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.TabActive),
  TabInactive: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.TabInactive),
  Tooltip: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.Tooltip),
}

/**
 * Typography alias tokens for line height. OK to use on components.
 */
export const LineHeight: Record<TypographyVariant, number> = {
  Data1: pxToLineHeight(PixelFontSize.Data1, PixelLineHeight.Data1),
  Data2: pxToLineHeight(PixelFontSize.Data2, PixelLineHeight.Data2),
  Data3: pxToLineHeight(PixelFontSize.Data3, PixelLineHeight.Data3),
  H1: pxToLineHeight(PixelFontSize.H1, PixelLineHeight.H1),
  H2: pxToLineHeight(PixelFontSize.H2, PixelLineHeight.H2),
  H3: pxToLineHeight(PixelFontSize.H3, PixelLineHeight.H3),
  Body1: pxToLineHeight(PixelFontSize.Body1, PixelLineHeight.Body1),
  Body2: pxToLineHeight(PixelFontSize.Body2, PixelLineHeight.Body2),
  Subtitle1: pxToLineHeight(PixelFontSize.Subtitle1, PixelLineHeight.Subtitle1),
  Subtitle2: pxToLineHeight(PixelFontSize.Subtitle2, PixelLineHeight.Subtitle2),
  MonoBody1: pxToLineHeight(PixelFontSize.MonoBody1, PixelLineHeight.MonoBody1),
  MonoBody2: pxToLineHeight(PixelFontSize.MonoBody2, PixelLineHeight.MonoBody2),
  Overline: pxToLineHeight(PixelFontSize.Overline, PixelLineHeight.Overline),
  Caption: pxToLineHeight(PixelFontSize.Caption, PixelLineHeight.Caption),
  Button: pxToLineHeight(PixelFontSize.Button, PixelLineHeight.Button),

  // Components
  AlertTitle: pxToLineHeight(
    PixelFontSize.AlertTitle,
    PixelLineHeight.AlertTitle,
  ),
  AvatarInitials: pxToLineHeight(
    PixelFontSize.AvatarInitials,
    PixelLineHeight.AvatarInitials,
  ),
  BadgeLabel: pxToLineHeight(
    PixelFontSize.BadgeLabel,
    PixelLineHeight.BadgeLabel,
  ),
  BottomNavActiveLabel: pxToLineHeight(
    PixelFontSize.BottomNavActiveLabel,
    PixelLineHeight.BottomNavActiveLabel,
  ),
  ButtonLarge: pxToLineHeight(
    PixelFontSize.ButtonLarge,
    PixelLineHeight.ButtonLarge,
  ),
  ButtonMedium: pxToLineHeight(
    PixelFontSize.ButtonMedium,
    PixelLineHeight.ButtonMedium,
  ),
  ButtonSmall: pxToLineHeight(
    PixelFontSize.ButtonSmall,
    PixelLineHeight.ButtonSmall,
  ),
  Chip: pxToLineHeight(PixelFontSize.Chip, PixelLineHeight.Chip),
  InputLabel: pxToLineHeight(
    PixelFontSize.InputLabel,
    PixelLineHeight.InputLabel,
  ),
  HelperText: pxToLineHeight(
    PixelFontSize.HelperText,
    PixelLineHeight.HelperText,
  ),
  InputText: pxToLineHeight(PixelFontSize.InputText, PixelLineHeight.InputText),
  TableHeader: pxToLineHeight(
    PixelFontSize.TableHeader,
    PixelLineHeight.TableHeader,
  ),
  ListSubheader: pxToLineHeight(
    PixelFontSize.ListSubheader,
    PixelLineHeight.ListSubheader,
  ),
  MenuItem: pxToLineHeight(PixelFontSize.MenuItem, PixelLineHeight.MenuItem),
  MenuItemDense: pxToLineHeight(
    PixelFontSize.MenuItemDense,
    PixelLineHeight.MenuItemDense,
  ),
  TabActive: pxToLineHeight(PixelFontSize.TabActive, PixelLineHeight.TabActive),
  TabInactive: pxToLineHeight(
    PixelFontSize.TabInactive,
    PixelLineHeight.TabInactive,
  ),
  Tooltip: pxToLineHeight(PixelFontSize.Tooltip, PixelLineHeight.Tooltip),
}

/**
 * @param root the root font size of the document
 * @param px the font size in `pixels`
 * @returns the font size in `rem`
 */
export function pxToRem(root: number, px: number): `${number}rem` {
  return `${px / root}rem`
}

/**
 * @param fontSize the font size in `pixels`
 * @param px the line-height in `pixels`
 * @returns a unit-less `line-height`
 */
export function pxToLineHeight(fontSize: number | string, px: number): number {
  return px / Number(fontSize)
}
