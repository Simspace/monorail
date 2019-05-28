/// <reference types="react" />
/// <reference types="styled-components/cssprop" />
import { LinkProps } from 'react-router';
import { FontSizes, FontWeights } from '@monorail/helpers/typography';
export declare type HyperLinkProps = LinkProps & {
    fontSize?: FontSizes;
    fontWeight?: FontWeights;
    margin?: string;
    isBreadcrumb?: boolean;
};
export declare const HyperLink: import("styled-components").StyledComponent<import("react").ComponentClass<LinkProps, any>, any, HyperLinkProps, never>;
