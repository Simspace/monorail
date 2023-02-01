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
  FontSize38 = 38,
  FontSize36 = 36,
  FontSize33 = 33,
  FontSize32 = 32,
  FontSize28 = 28,
  FontSize24 = 24,
  FontSize20 = 20,
  FontSize16 = 16,
  FontSize14 = 14,
  FontSize12 = 12,
  FontSize11 = 11,
  FontSize10 = 10,

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
}

/**
 * Typography alias tokens for font sizes in pixels.
 * Used in documentation and to calculate responsive units.
 */
export const PixelFontSize: Record<TypographyVariant, number> = {
  Data1: Scale.FontSize44,
  Data2: Scale.FontSize38,
  Data3: Scale.FontSize33,
  H1: Scale.FontSize16,
  H2: Scale.FontSize14,
  H3: Scale.FontSize12,
  H4: Scale.FontSize12,
  H5: Scale.FontSize10,
  H6: Scale.FontSize10,
  Body1: Scale.FontSize12,
  Body2: Scale.FontSize10,
  Subtitle1: Scale.FontSize12,
  Subtitle2: Scale.FontSize10,
  MonoBody1: Scale.FontSize12,
  MonoBody2: Scale.FontSize10,
  Overline: Scale.FontSize10,
  Caption: Scale.FontSize10,
  Button: Scale.FontSize11,

  // Components
  AlertTitle: Scale.FontSize11,
  AvatarInitials: Scale.FontSize11,
  BadgeLabel: Scale.FontSize11,
  BottomNavActiveLabel: Scale.FontSize11,
  ButtonLarge: Scale.FontSize11,
  ButtonMedium: Scale.FontSize11,
  ButtonSmall: Scale.FontSize11,
  Chip: Scale.FontSize11,
  InputLabel: Scale.FontSize12,
  HelperText: Scale.FontSize11,
  InputText: Scale.FontSize11,
  TableHeader: Scale.FontSize11,
  ListSubheader: Scale.FontSize11,
  MenuItem: Scale.FontSize12,
  MenuItemDense: Scale.FontSize11,
  TabActive: Scale.FontSize12,
  TabInactive: Scale.FontSize12,
  Tooltip: Scale.FontSize11,
}

/**
 * Typography alias tokens for line heights in pixels.
 * Used in documentation and to calculate responsive units.
 */
export const PixelLineHeight: Record<TypographyVariant, string | number> = {
  Data1: 'normal',
  Data2: 'normal',
  Data3: 'normal',
  H1: 'normal',
  H2: 'normal',
  H3: 'normal',
  H4: `${Scale.LineHeight16}px`,
  H5: 'normal',
  H6: 'normal',
  Body1: 'normal',
  Body2: 'normal',
  Subtitle1: 'normal',
  Subtitle2: 'normal',
  MonoBody1: 'normal',
  MonoBody2: 'normal',
  Overline: 'normal',
  Caption: 'normal',
  Button: `${Scale.LineHeight16}px`,

  // Components
  AlertTitle: 'normal',
  AvatarInitials: 'normal',
  BadgeLabel: 'normal',
  BottomNavActiveLabel: 'normal',
  ButtonLarge: `${Scale.LineHeight16}px`,
  ButtonMedium: `${Scale.LineHeight16}px`,
  ButtonSmall: `${Scale.LineHeight16}px`,
  Chip: 'normal',
  InputLabel: 'normal',
  HelperText: 'normal',
  InputText: 'normal',
  TableHeader: 'normal',
  ListSubheader: 'normal',
  MenuItem: 'normal',
  MenuItemDense: 'normal',
  TabActive: 'normal',
  TabInactive: 'normal',
  Tooltip: 'normal',
}

/**
 * Typography alias tokens for font sizes. OK to use on components.
 */
export const FontSize: Record<TypographyVariant, number> = {
  Data1: PixelFontSize.Data1,
  Data2: PixelFontSize.Data2,
  Data3: PixelFontSize.Data3,
  H1: PixelFontSize.H1,
  H2: PixelFontSize.H2,
  H3: PixelFontSize.H3,
  H4: PixelFontSize.H4,
  H5: PixelFontSize.H5,
  H6: PixelFontSize.H6,
  Body1: PixelFontSize.Body1,
  Body2: PixelFontSize.Body2,
  Subtitle1: PixelFontSize.Subtitle1,
  Subtitle2: PixelFontSize.Subtitle2,
  MonoBody1: PixelFontSize.MonoBody1,
  MonoBody2: PixelFontSize.MonoBody2,
  Overline: PixelFontSize.Overline,
  Caption: PixelFontSize.Caption,
  Button: PixelFontSize.Button,

  // Components
  AlertTitle: PixelFontSize.AlertTitle,
  AvatarInitials: PixelFontSize.AvatarInitials,
  BadgeLabel: PixelFontSize.BadgeLabel,
  BottomNavActiveLabel: PixelFontSize.BottomNavActiveLabel,
  ButtonLarge: PixelFontSize.ButtonLarge,
  ButtonMedium: PixelFontSize.ButtonMedium,
  ButtonSmall: PixelFontSize.ButtonSmall,
  Chip: PixelFontSize.Chip,
  InputLabel: PixelFontSize.InputLabel,
  HelperText: PixelFontSize.HelperText,
  InputText: PixelFontSize.InputText,
  TableHeader: PixelFontSize.TableHeader,
  ListSubheader: PixelFontSize.ListSubheader,
  MenuItem: PixelFontSize.MenuItem,
  MenuItemDense: PixelFontSize.MenuItemDense,
  TabActive: PixelFontSize.TabActive,
  TabInactive: PixelFontSize.TabInactive,
  Tooltip: PixelFontSize.Tooltip,
}

/**
 * Typography alias tokens for line height. OK to use on components.
 */
export const LineHeight: Record<TypographyVariant, string | number> = {
  Data1: PixelLineHeight.Data1,
  Data2: PixelLineHeight.Data2,
  Data3: PixelLineHeight.Data3,
  H1: PixelLineHeight.H1,
  H2: PixelLineHeight.H2,
  H3: PixelLineHeight.H3,
  H4: PixelLineHeight.H4,
  H5: PixelLineHeight.H5,
  H6: PixelLineHeight.H6,
  Body1: PixelLineHeight.Body1,
  Body2: PixelLineHeight.Body2,
  Subtitle1: PixelLineHeight.Subtitle1,
  Subtitle2: PixelLineHeight.Subtitle2,
  MonoBody1: PixelLineHeight.MonoBody1,
  MonoBody2: PixelLineHeight.MonoBody2,
  Overline: PixelLineHeight.Overline,
  Caption: PixelLineHeight.Caption,
  Button: PixelLineHeight.Button,

  // Components
  AlertTitle: PixelLineHeight.AlertTitle,
  AvatarInitials: PixelLineHeight.AvatarInitials,
  BadgeLabel: PixelLineHeight.BadgeLabel,
  BottomNavActiveLabel: PixelLineHeight.BottomNavActiveLabel,
  ButtonLarge: PixelLineHeight.ButtonLarge,
  ButtonMedium: PixelLineHeight.ButtonMedium,
  ButtonSmall: PixelLineHeight.ButtonSmall,
  Chip: PixelLineHeight.Chip,
  InputLabel: PixelLineHeight.InputLabel,
  HelperText: PixelLineHeight.HelperText,
  InputText: PixelLineHeight.InputText,
  TableHeader: PixelLineHeight.TableHeader,
  ListSubheader: PixelLineHeight.ListSubheader,
  MenuItem: PixelLineHeight.MenuItem,
  MenuItemDense: PixelLineHeight.MenuItemDense,
  TabActive: PixelLineHeight.TabActive,
  TabInactive: PixelLineHeight.TabInactive,
  Tooltip: PixelLineHeight.Tooltip,
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
