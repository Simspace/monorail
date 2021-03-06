import { Colors } from '@monorail/helpers/color';
import { ThemeColors } from '@monorail/helpers/theme';
import { CssOverridesType } from '@monorail/types';
export declare const baseFocusStyles: (addPositionToParent?: boolean) => CssOverridesType;
export declare const floatingOutlineStyles: (color?: string) => import("styled-components").FlattenSimpleInterpolation;
export declare const floatingBackgroundStyles: (color?: string) => import("styled-components").FlattenSimpleInterpolation;
export declare const baseOutlineStyles: (color?: Colors, focusColor?: Colors) => import("styled-components").FlattenSimpleInterpolation;
export declare const baseChromelessStyles: (color?: ThemeColors) => import("styled-components").FlattenSimpleInterpolation;
export declare const baseIconButtonChromelessStyles: (isActive?: boolean) => import("styled-components").FlattenSimpleInterpolation;
export declare const baseSecondaryStyles: (color?: ThemeColors) => import("styled-components").FlattenSimpleInterpolation;
export declare const basePrimaryStyles: (backgroundColor?: ThemeColors, color?: ThemeColors) => import("styled-components").FlattenSimpleInterpolation;
export declare const baseButtonBarStyles: (color?: Colors) => import("styled-components").FlattenSimpleInterpolation;
export declare const baseToolBarStyles: (color?: Colors) => import("styled-components").FlattenSimpleInterpolation;
export declare const baseDisabledStyles: import("styled-components").FlattenSimpleInterpolation;
export declare const baseErrorBorderStyles: import("styled-components").FlattenSimpleInterpolation;
export declare const baseErrorBackgroundStyles: import("styled-components").FlattenSimpleInterpolation;
export declare const baseHyperLinkStyles: (color?: ThemeColors) => import("styled-components").FlattenSimpleInterpolation;
