/// <reference types="@monorail/typings/styled-components" />
export declare const ellipsis: import("styled-components").FlattenSimpleInterpolation;
export declare enum FontWeights {
    ExtraLight = 200,
    Light = 300,
    Book = 400,
    Medium = 500,
    Bold = 700,
    Black = 800
}
export declare enum FontSizes {
    /** 44px */
    Hyper1 = "hyper1",
    /** 38px */
    Hyper2 = "hyper2",
    /** 33px */
    Hyper3 = "hyper3",
    /** 25px */
    Hyper4 = "hyper4",
    /** 22px */
    Title1 = "title1",
    /** 19px */
    Title2 = "title2",
    /** 16px */
    Title3 = "title3",
    /** 14px */
    Title4 = "title4",
    /** 11px */
    Title5 = "title5",
    /** 8px */
    Micro = "micro"
}
export declare enum FontStyles {
    Inherit = "inherit",
    Initial = "initial",
    Italic = "italic",
    Normal = "normal",
    Oblique = "oblique"
}
/**
 * @description Helper to add font size and weight, and line height following designed typography. To use only in specific cases. Use `typography` instead for most common cases.
 * */
export declare const typographyFont: (weight: number, size: FontSizes) => {
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
};
/**
 * @description Typography helper to add styling for text following design components including margin alignment
 * */
export declare const typography: (weight: number, size: FontSizes, margin?: string) => {
    margin: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    margin: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    margin: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    margin: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    margin: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    margin: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    margin: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    margin: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    margin: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    margin: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
};
/**
 * @deprecated Use typography or typographyFont instead
 * */
export declare const typographyDeprecated: (weight: number, size: FontSizes, margin?: string | undefined) => {
    margin?: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    margin?: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    margin?: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    margin?: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    margin?: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    margin?: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    margin?: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    margin?: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    margin?: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    margin?: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
};
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
export declare const gothamFontFamily: import("styled-components").FlattenSimpleInterpolation;
export declare const oswaldFontFamily: import("styled-components").FlattenSimpleInterpolation;
//# sourceMappingURL=typography.d.ts.map