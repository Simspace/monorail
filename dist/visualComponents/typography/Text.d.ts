import { Colors } from '@monorail/helpers/color';
import { FontSizes, FontWeights } from '@monorail/helpers/typography';
declare type Props = {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'i' | 'b' | 'span' | 'li';
    fontSize: FontSizes;
    fontWeight: FontWeights;
    margin?: string;
    color?: Colors;
};
export declare const Text: import("styled-components").StyledComponent<"span", any, Props, never>;
export {};
