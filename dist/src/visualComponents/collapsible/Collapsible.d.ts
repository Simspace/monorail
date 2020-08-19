import React, { FC, ReactNode } from 'react';
import { SimpleInterpolation } from 'styled-components';
/**
 * Create a Collapsible
 *
 * @param header        - header content
 * @param content       - collapsible content
 * @param expanded?     - collapsible content is expanded/visible, default is false
 * @param onClick?      - any extra functionality that should happen on header click
 *                        (`isExpanded` is passed to the function passed in for outside
 *                          control of expanded state)
 * @param iconPosition? - header icon position (left or right)
 * @param iconCss?      - any css overrides for the icon
 * @param maxDuration?  - max duration for transition in ms
 * @param msPerPx?      - ms / px for transition
 * @param contentCss?   - any css overrides for the content container
 * @param clickTarget?  - hit target for expand/collapse action (header or icon)
 */
export declare type IconPosition = 'left' | 'right';
export declare type ClickTarget = 'header' | 'icon';
export declare type CollapsibleProps = {
    header: ReactNode;
    content: ReactNode;
    expanded?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, isExpanded: boolean) => void;
    iconPosition?: IconPosition;
    iconCss?: SimpleInterpolation;
    contentCss?: SimpleInterpolation;
    labelId?: string;
    sectionId?: string;
    maxDuration?: number;
    msPerPx?: number;
    clickTarget?: ClickTarget;
    isContentScrollable?: boolean;
};
export declare const Collapsible: FC<CollapsibleProps>;
//# sourceMappingURL=Collapsible.d.ts.map