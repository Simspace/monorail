import { MouseEvent } from 'react';
import { CommonComponentType, LinkProps } from '@monorail/types';
export declare const Tab: import("styled-components").StyledComponent<"div", any, TabProps, never>;
export declare type TabProps = CommonComponentType & LinkProps & {
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
};
