import { TypographyProps } from '@mui/material'

const DEFAULT_ROOT_SIZE = 16

type TypographyVariant = Capitalize<
  Exclude<NonNullable<TypographyProps['variant']>, 'inherit'>
>

export const FontSize: Record<TypographyVariant, `${number}rem`> = {
  /** 44px */
  Data1: pxToRem(DEFAULT_ROOT_SIZE, 44),
  /** 40px */
  Data2: pxToRem(DEFAULT_ROOT_SIZE, 40),
  /** 36px */
  Data3: pxToRem(DEFAULT_ROOT_SIZE, 36),
  /** 32px */
  H1: pxToRem(DEFAULT_ROOT_SIZE, 32),
  /** 24px */
  H2: pxToRem(DEFAULT_ROOT_SIZE, 24),
  /** 20px */
  H3: pxToRem(DEFAULT_ROOT_SIZE, 20),
  /** 16px */
  Body1: pxToRem(DEFAULT_ROOT_SIZE, 16),
  /** 14px */
  Body2: pxToRem(DEFAULT_ROOT_SIZE, 14),
  /** 16px */
  Subtitle1: pxToRem(DEFAULT_ROOT_SIZE, 16),
  /** 14px */
  Subtitle2: pxToRem(DEFAULT_ROOT_SIZE, 14),
  /** 12px */
  Overline: pxToRem(DEFAULT_ROOT_SIZE, 12),
  /** 12px */
  Caption: pxToRem(DEFAULT_ROOT_SIZE, 12),
  /** 16px */
  Button: pxToRem(DEFAULT_ROOT_SIZE, 16),
}

export const LineHeight: Record<TypographyVariant, string | number> = {
  Data1: 1.2727272727,
  Data2: 1.3,
  Data3: 1.3333333333,
  H1: 1.25,
  H2: 1.3333333333,
  H3: 1.2,
  Body1: 1.5,
  Body2: 1.5714285714,
  Subtitle1: 1.5,
  Subtitle2: 1.5714285714,
  Overline: 1.6666666667,
  Caption: 1.6666666667,
  Button: 'normal',
}

/**
 * @param root the root font size of the document
 * @param px the font size in `pixels`
 * @returns the font size in `rem`
 */
export function pxToRem(root: number, px: number): `${number}rem` {
  return `${px / root}rem`
}
