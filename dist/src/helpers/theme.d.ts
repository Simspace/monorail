import { Colors } from '@monorail/helpers/color';
import { Theme } from '@monorail/v2/core/theme/colors';
import { IconType } from '@monorail/visualComponents/icon/IconType';
export declare enum Mode {
    Light = "light",
    Dark = "dark"
}
export declare enum ThemeColors {
    AccentPrimary = "accentPrimary",
    ActionPrimary = "actionPrimary",
    ActionSecondary = "actionSecondary",
    ActivePrimary = "activePrimary",
    ActiveSecondary = "activeSecondary",
    ApplicationPrimary = "applicationPrimary",
    ApplicationSecondary = "applicationSecondary",
    BackgroundPrimary = "backgroundPrimary",
    BackgroundSecondary = "backgroundSecondary",
    BrandPrimary = "brandPrimary",
    BrandSecondary = "brandSecondary",
    PrimaryColor = "primaryColor",
    SecondaryColor = "secondaryColor",
    Text200 = "text200",
    Text500 = "text500",
    Text600 = "text600",
    Text700 = "text700",
    Text900 = "text900",
    Text1000 = "text1000"
}
declare type ColorTheme = {
    [key in Exclude<ThemeColors, ThemeColors.ApplicationPrimary | ThemeColors.ApplicationSecondary>]: Colors;
};
export interface GlobalAppThemeInterface {
    v2: Theme;
    [Mode.Dark]: ColorTheme;
    [Mode.Light]: ColorTheme;
    [ThemeColors.ApplicationPrimary]: Colors;
    [ThemeColors.ApplicationSecondary]: Colors;
    brandAccentColor: Colors;
    brandIcon: IconType;
    linkColor: Colors;
    mode: Mode;
    size: {
        page: {
            width: 'auto' | number;
        };
        table: {
            margin: 16 | 24 | 32;
        };
    };
    introductionTagline: Array<string>;
    introductionOctagonColor: string;
}
export declare const monorailTheme: GlobalAppThemeInterface;
export declare const getThemeColor: (colorKey: ThemeColors, a?: number) => ({ theme }: {
    theme: GlobalAppThemeInterface;
}) => string;
export declare const getThemeColorBase: (colorKey: ThemeColors, a?: number) => ({ theme }: {
    theme: GlobalAppThemeInterface;
}) => {
    h: number;
    s: number;
    l: number;
    a: number;
};
export {};
