import React, { FC, ReactNode } from 'react';
import { Colors } from '@monorail/helpers/color';
import { FontSizes, FontStyles, FontWeights } from '@monorail/helpers/typography';
export declare type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export declare type TextProps = {
    as?: HeadingTag | 'p' | 'i' | 'b' | 'span' | 'li' | 'div' | 'label' | 'pre';
    margin?: string;
    title?: string;
    id?: string;
    children: string | number | ReactNode;
    color?: Colors;
    fontSize?: FontSizes;
    fontStyle?: FontStyles;
    fontWeight?: FontWeights;
    noWrap?: boolean;
};
export declare const Text: React.ForwardRefExoticComponent<TextProps & React.RefAttributes<HTMLSpanElement>>;
/**
 * @deprecated Use Text instead. This exist for supporting legacy code only
 * */
export declare const TextDeprecated: FC<TextProps>;
