/// <reference types="react" />
/// <reference types="styled-components/cssprop" />
import { FontSizes, FontWeights } from '@monorail/helpers/typography';
import { LinkProps } from 'react-router';
export declare type HyperLinkProps = LinkProps & {
    fontSize?: FontSizes;
    fontWeight?: FontWeights;
    margin?: string;
};
export declare const HyperLink: import("styled-components").StyledComponent<import("react").ComponentClass<LinkProps, any>, any, {
    className: "new-link";
} & LinkProps & {
    fontSize?: FontSizes | undefined;
    fontWeight?: FontWeights | undefined;
    margin?: string | undefined;
}, "className">;
