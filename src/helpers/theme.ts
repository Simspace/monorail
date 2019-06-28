import { colorHSLAMap, Colors, getColor } from '@monorail/helpers/color'

export enum Mode {
  Light = 'light',
  Dark = 'dark',
}

export enum ThemeColors {
  AccentPrimary = 'accentPrimary',
  ActionPrimary = 'actionPrimary',
  ActionSecondary = 'actionSecondary',
  ActivePrimary = 'activePrimary',
  ActiveSecondary = 'activeSecondary',
  ApplicationPrimary = 'applicationPrimary',
  ApplicationSecondary = 'applicationSecondary',
  BackgroundPrimary = 'backgroundPrimary',
  BackgroundSecondary = 'backgroundSecondary',
  BrandPrimary = 'brandPrimary',
  BrandSecondary = 'brandSecondary',
  PrimaryColor = 'primaryColor',
  SecondaryColor = 'secondaryColor',
  Text200 = 'text200',
  Text500 = 'text500',
  Text600 = 'text600',
  Text700 = 'text700',
  Text900 = 'text900',
  Text1000 = 'text1000',
}

type ColorTheme = {
  [key in Exclude<
    ThemeColors,
    ThemeColors.ApplicationPrimary | ThemeColors.ApplicationSecondary
  >]: Colors
}

export interface GlobalAppThemeInterface {
  [Mode.Dark]: ColorTheme
  [Mode.Light]: ColorTheme
  [ThemeColors.ApplicationPrimary]: Colors
  [ThemeColors.ApplicationSecondary]: Colors
  brandAccentColor: Colors
  linkColor: Colors
  mode: Mode
}

const themeBase = {
  [ThemeColors.AccentPrimary]: Colors.AccentPurple700,
  [ThemeColors.ActionPrimary]: Colors.BrandLightBlue,
  [ThemeColors.BrandPrimary]: Colors.BrandLightBlue,
  [ThemeColors.BrandSecondary]: Colors.BrandDarkBlue,
}

export const monorailTheme: GlobalAppThemeInterface = {
  linkColor: Colors.BrandLightBlue,
  brandAccentColor: Colors.BrandDarkBlue,
  [ThemeColors.ApplicationPrimary]: Colors.BrandLightBlue,
  [ThemeColors.ApplicationSecondary]: Colors.BrandDarkBlue,
  mode: Mode.Light,
  [Mode.Light]: {
    ...themeBase,
    [ThemeColors.ActionSecondary]: Colors.BrandLightBlue,
    [ThemeColors.BackgroundPrimary]: Colors.White,
    [ThemeColors.BackgroundSecondary]: Colors.White,
    [ThemeColors.ActivePrimary]: Colors.BrandDarkBlue,
    [ThemeColors.ActiveSecondary]: Colors.White,
    [ThemeColors.PrimaryColor]: Colors.Black,
    [ThemeColors.SecondaryColor]: Colors.White,
    [ThemeColors.Text200]: Colors.Black24,
    [ThemeColors.Text500]: Colors.Black54,
    [ThemeColors.Text600]: Colors.Black62,
    [ThemeColors.Text700]: Colors.Black74,
    [ThemeColors.Text900]: Colors.Black89,
    [ThemeColors.Text1000]: Colors.BrandDarkBlue,
  },
  [Mode.Dark]: {
    ...themeBase,
    [ThemeColors.ActionSecondary]: Colors.White,
    [ThemeColors.BackgroundPrimary]: Colors.DarkGrey,
    [ThemeColors.BackgroundSecondary]: Colors.White,
    [ThemeColors.ActivePrimary]: Colors.AccentPurple700,
    [ThemeColors.ActiveSecondary]: Colors.White,
    [ThemeColors.PrimaryColor]: Colors.White,
    [ThemeColors.SecondaryColor]: Colors.Black,
    [ThemeColors.Text200]: Colors.White89,
    [ThemeColors.Text500]: Colors.White89,
    [ThemeColors.Text600]: Colors.White89,
    [ThemeColors.Text700]: Colors.White,
    [ThemeColors.Text900]: Colors.White,
    [ThemeColors.Text1000]: Colors.White,
  },
}

export const getThemeColor = (colorKey: ThemeColors, a: number = 1) => {
  return ({ theme }: { theme: GlobalAppThemeInterface }) => {
    if (
      colorKey === ThemeColors.ApplicationPrimary ||
      colorKey === ThemeColors.ApplicationSecondary
    ) {
      return getColor(theme[colorKey], a)
    }

    return getColor(theme[theme.mode][colorKey], a)
  }
}

export const getThemeColorBase = (colorKey: ThemeColors, a: number = 1) => {
  return ({ theme }: { theme: GlobalAppThemeInterface }) => {
    if (
      colorKey === ThemeColors.ApplicationPrimary ||
      colorKey === ThemeColors.ApplicationSecondary
    ) {
      return colorHSLAMap({ color: theme[colorKey], alpha: a })
    }

    return colorHSLAMap({ color: theme[theme.mode][colorKey], alpha: a })
  }
}
