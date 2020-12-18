import { Link, LinkProps } from 'react-router';
import { FontSizes, FontWeights } from '@monorail/helpers/typography';
export declare type HyperLinkProps = LinkProps & {
    fontSize?: FontSizes;
    fontWeight?: FontWeights;
    margin?: string;
    isBreadcrumb?: boolean;
};
export declare const HyperLink: import("styled-components").StyledComponent<Link, any, HyperLinkProps, never>;
