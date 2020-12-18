/// <reference types="react" />
import { StatusProps } from '@monorail/v2/core/Status/Status';
export declare type CornerStatusProps = StatusProps;
/**
 * Status used within a **square** button to align with the top-right.
 *
 * Can be improved to work with circle button by adding a prop that insets it by top/right 4px. Not currently necessary.
 **/
export declare const CornerStatus: (props: CornerStatusProps) => JSX.Element;
