/// <reference types="react" />
import * as MUI from '@material-ui/core';
import { OmitBannedProps } from '@monorail/v2/shared/helpers';
export declare type StatusProps = {
    'aria-label': string | null;
} & Omit<OmitBannedProps<MUI.ChipProps>, 'children' | 'avatar'>;
/**
 * Badge-like display, usually for numerical display
 */
export declare function Status(props: StatusProps): JSX.Element;
