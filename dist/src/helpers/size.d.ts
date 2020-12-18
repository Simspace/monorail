import { CssOverridesType } from '@monorail/types';
export declare enum Sizes {
    DP8 = 8,
    DP12 = 12,
    DP16 = 16,
    DP24 = 24,
    DP32 = 32,
    DP40 = 40,
    DP48 = 48,
    DP56 = 56,
    DP64 = 64
}
export declare type Size = 8 | 12 | 16 | 24 | 32 | 40 | 48 | 56 | 64;
export declare type NegativeSize = -8 | -12 | -16 | -24 | -32 | -40 | -48 | -56 | -64;
export declare const sizes: {
    modals: {
        mini: {
            height: number;
            width: number;
        };
        small: {
            width: number;
        };
        medium: {
            width: number;
        };
        mediumLarge: {
            width: number;
        };
    };
    menu: {
        width: number;
    };
    appSwitcher: {
        width: number;
    };
    page: {
        sideSpace: Sizes;
    };
};
export declare const pageSizeMargin: (params?: {
    marginTop?: number;
    marginBottom?: number;
}) => CssOverridesType;
export declare const pageSizePadding: (params?: {
    paddingTop?: number;
    paddingBottom?: number;
}) => CssOverridesType;
