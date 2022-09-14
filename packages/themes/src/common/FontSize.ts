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

  LetterSpacing17 = 0.17,
  LetterSpacing15 = 0.15,
}

const DEFAULT_ROOT_SIZE = Scale.FontSize16

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
  Overline: Scale.FontSize12,
  Caption: Scale.FontSize12,
  Button: Scale.FontSize16,
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
  Overline: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.Overline),
  Caption: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.Caption),
  Button: pxToRem(DEFAULT_ROOT_SIZE, PixelFontSize.Button),
}

/**
 * Typography alias tokens for line height. OK to use on components.
 */
export const LineHeight: Record<TypographyVariant, string | number> = {
  Data1: pxToLineHeight(PixelFontSize.Data1, Scale.LineHeight56),
  Data2: pxToLineHeight(PixelFontSize.Data2, Scale.LineHeight52),
  Data3: pxToLineHeight(PixelFontSize.Data3, Scale.LineHeight48),
  H1: pxToLineHeight(PixelFontSize.H1, Scale.LineHeight36),
  H2: pxToLineHeight(PixelFontSize.H2, Scale.LineHeight32),
  H3: pxToLineHeight(PixelFontSize.H3, Scale.LineHeight24),
  Body1: pxToLineHeight(PixelFontSize.Body1, Scale.LineHeight24),
  Body2: pxToLineHeight(PixelFontSize.Body2, Scale.LineHeight22),
  Subtitle1: pxToLineHeight(PixelFontSize.Subtitle1, Scale.LineHeight24),
  Subtitle2: pxToLineHeight(PixelFontSize.Subtitle2, Scale.LineHeight22),
  Overline: pxToLineHeight(PixelFontSize.Overline, Scale.LineHeight20),
  Caption: pxToLineHeight(PixelFontSize.Caption, Scale.LineHeight20),
  Button: pxToLineHeight(PixelFontSize.Button, Scale.LineHeight20),
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
