import { SimpleInterpolation, Styles } from 'styled-components';
import { PopOverPosition } from '@monorail/popOver/PopOver';
declare enum AuthSubAppName {
    Academy = "academy",
    Admin = "admin",
    Catalog = "catalog",
    Dashboard = "dashboard",
    Hardhat = "hardhat",
    Range = "range",
    TechOps = "techops",
    Tracker = "tracker"
}
export declare const visible: (isVisible?: boolean) => Styles;
export declare enum ElevationRange {
    Elevation0 = "elevation0",
    Elevation1 = "elevation1",
    Elevation2 = "elevation2",
    Elevation3 = "elevation3",
    Elevation4 = "elevation4",
    Elevation5 = "elevation5",
    Elevation6 = "elevation6",
    Elevation7 = "elevation7",
    Elevation8 = "elevation8",
    Elevation9 = "elevation9",
    Elevation10 = "elevation10",
    Elevation11 = "elevation11",
    Elevation12 = "elevation12",
    Elevation13 = "elevation13",
    Elevation14 = "elevation14",
    Elevation15 = "elevation15",
    Elevation16 = "elevation16",
    Elevation17 = "elevation17",
    Elevation18 = "elevation18",
    Elevation19 = "elevation19",
    Elevation20 = "elevation20",
    Elevation21 = "elevation21",
    Elevation22 = "elevation22",
    Elevation23 = "elevation23",
    Elevation24 = "elevation24"
}
export declare const getElevation: (elevation: ElevationRange) => Styles;
export declare const flexFlow: (direction?: string, wrap?: string) => Styles;
export declare const ellipsis: import("styled-components").InterpolationValue[];
export declare enum FontWeights {
    ExtraLight = 200,
    Light = 300,
    Book = 400,
    Medium = 500,
    Bold = 700,
    Black = 800
}
export declare enum FontSizes {
    Hyper1 = "hyper1",
    Hyper2 = "hyper2",
    Hyper3 = "hyper3",
    Hyper4 = "hyper4",
    Title1 = "title1",
    Title2 = "title2",
    Title3 = "title3",
    Title4 = "title4",
    Title5 = "title5",
    Content = "content",
    Micro = "micro"
}
export declare const typography: (weight: number, size: FontSizes, margin?: string | undefined) => Styles;
export declare type Margin = {
    bottom?: number | 'auto';
    left?: number | 'auto';
    right?: number | 'auto';
    top?: number | 'auto';
};
export declare const typographyMargin: (size: FontSizes, margin?: string) => {
    margin: string;
};
export declare const shortHandDeconstruction: (value: string) => Margin;
export declare const gothamFontFamily: import("styled-components").InterpolationValue[];
/**
 * App Name
 */
export declare enum AppName {
    Admin = "admin",
    Dashboard = "dashboard",
    Hardhat = "hardhat",
    Impact = "impact",
    LMS = "externalLms",
    Range = "range",
    Repo = "repo",
    TechOps = "techops",
    Tracker = "tracker",
    Training = "training"
}
export declare enum EventState {
    Active = "active",
    Canceled = "canceled",
    Finished = "finished",
    Scheduled = "scheduled",
    Requested = "requested",
    Inactive = "inactive"
}
export declare enum Colors {
    Black24 = "black24",
    Black54 = "black54",
    Black62 = "black62",
    Black74 = "black74",
    Black89 = "black89",
    Black = "black",
    White89 = "white89",
    White = "white",
    Grey94 = "grey94",
    Grey96 = "grey96",
    Grey97 = "grey97",
    Grey98 = "grey98",
    Grey99 = "grey99",
    BrandLightBlue = "brandLightBlue",
    BrandDarkBlue = "brandDarkBlue",
    PCTEPurple = "PCTEPurple",
    AccentBlue300 = "accentBlue300",
    AccentBlue400 = "accentBlue400",
    AccentBlue500 = "accentBlue500",
    AccentBlue600 = "accentBlue600",
    AccentBlue700 = "accentBlue700",
    AccentPurple500 = "accentPurple500",
    AccentPurple700 = "accentPurple700",
    Active = "active",
    Canceled = "canceled",
    Finished = "finished",
    Scheduled = "scheduled",
    Requested = "requested",
    Inactive = "inactive",
    Academy = "academy",
    Admin = "admin",
    Catalog = "catalog",
    Dashboard = "dashboard",
    Range = "range",
    Tracker = "tracker",
    Hardhat = "hardhat",
    Impact = "impact",
    Training = "training",
    TechOps = "techops",
    Repo = "repo",
    LMS = "externalLms",
    Green = "green",
    Red = "red",
    Amber = "amber"
}
export declare type AppOrAuthSubAppName = AppName | AuthSubAppName;
export declare type AppOrAuthSubAppNameString = 'admin' | 'academy' | 'catalog' | 'dashboard' | 'range' | 'tracker' | 'hardhat' | 'impact' | 'training' | 'techops' | 'repo' | 'externalLms';
export declare const convertAppNameToColor: (appNames: AppOrAuthSubAppName) => Colors;
export declare const convertStringToAppName: (appNameString: string) => AppOrAuthSubAppName;
export declare const convertAppNameToString: (appName: AppOrAuthSubAppName) => AppOrAuthSubAppNameString;
export declare const convertEventStateToColor: (eventState: EventState) => Colors;
declare type HSLAMapType = {
    h: number;
    s: number;
    l: number;
    a: number;
};
export declare const colorHSLAMap: ({ color, alpha, }: {
    color: Colors;
    alpha: number;
}) => HSLAMapType;
export declare const convertHSLAMapToCss: (HSLAMap: HSLAMapType) => string;
export declare const colors: (color: Colors, alpha?: number) => string;
export declare const baseFocusStyles: (addPositionToParent?: boolean) => SimpleInterpolation;
export declare const baseOutlineStyles: (color?: Colors) => import("styled-components").InterpolationValue[];
export declare const baseChromelessStyles: (color?: Colors, isActive?: boolean | undefined) => import("styled-components").InterpolationValue[];
export declare const baseSecondaryStyles: (color?: Colors, isActive?: boolean | undefined) => import("styled-components").InterpolationValue[];
export declare const basePrimaryStyles: (color?: Colors) => import("styled-components").InterpolationValue[];
export declare const baseDisabledStyles: import("styled-components").InterpolationValue[];
export declare enum BorderRadius {
    Small = 3,
    Medium = 4,
    Large = 6,
    XLarge = 8,
    Round = 1000
}
export declare const borderRadius: (borderRadius2?: BorderRadius) => import("styled-components").InterpolationValue[];
export declare const generateScaleAnimation: (params: {
    position: PopOverPosition;
    isOpen: boolean;
    elementHeight: number;
    elementWidth: number;
}) => {
    outSideContentStyles: SimpleInterpolation;
    inSideContentStyles: SimpleInterpolation;
};
export declare const ease: (isActive: boolean) => "ease-in" | "ease-out";
export declare const buttonTransition: import("styled-components").InterpolationValue[];
export declare const transition: (props: {
    properties?: Array<string>;
    easing: string;
    duration: number;
}) => SimpleInterpolation;
export declare const sizes: {
    modals: {
        mini: {
            height: number;
            width: number;
        };
    };
    menu: {
        width: number;
    };
    appSwitcher: {
        width: number;
    };
};
export declare enum Sizes {
    DP8 = 8,
    DP16 = 16,
    DP24 = 24,
    DP32 = 32,
    DP40 = 40,
    DP48 = 48,
    DP56 = 56,
    DP64 = 64
}
export {};
