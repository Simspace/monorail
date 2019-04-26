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
export declare const typography: (weight: number, size: FontSizes, margin?: string | undefined) => {
    margin: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    margin: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    margin: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    margin: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    margin: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    margin: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    margin: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    margin: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    margin: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    margin: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
    margin: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
} | {
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
