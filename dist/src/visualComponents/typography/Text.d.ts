import { FC, ReactNode } from 'react';
import { Colors } from '@monorail/helpers/color';
import { FontSizes, FontWeights, FontStyles } from '@monorail/helpers/typography';
export declare type TextProps = {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'i' | 'b' | 'span' | 'li' | 'div' | 'label';
    margin?: string;
    title?: string;
    children: string | number | ReactNode;
    color?: Colors;
    fontSize?: FontSizes;
    fontStyle?: FontStyles;
    fontWeight?: FontWeights;
};
export declare const Text: FC<TextProps>;
/**
 * @deprecated Use Text instead. This exist for supporting legacy code only
 * */
export declare const TextDeprecated: FC<TextProps>;
//# sourceMappingURL=Text.d.ts.map