import { FC, ReactNode } from 'react';
import { Colors } from '@monorail/helpers/color';
import { FontSizes, FontWeights } from '@monorail/helpers/typography';
declare type Props = {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'i' | 'b' | 'span' | 'li' | 'div';
    fontSize: FontSizes;
    fontWeight: FontWeights;
    margin?: string;
    color?: Colors;
    children: string | number | ReactNode;
};
export declare const Text: FC<Props>;
export {};
