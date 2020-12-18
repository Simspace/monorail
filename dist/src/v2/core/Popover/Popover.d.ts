import React from 'react';
import * as MUI from '@material-ui/core';
import { NegativeSize, Size } from '@monorail/helpers/size';
import { OmitBannedProps } from '@monorail/v2/shared/helpers';
export declare type UsePopoverReturn = {
    triggerProps: {
        'aria-expanded': boolean;
        'aria-controls': string | undefined;
        onClick: (e: React.MouseEvent<HTMLElement>) => void;
    };
    popoverProps: {
        id: string | undefined;
        open: boolean;
        anchorEl: HTMLElement | null;
        onClose: () => void;
    };
    isOpen: boolean;
};
export declare const usePopover: () => UsePopoverReturn;
export declare type PopoverProps = OmitBannedProps<MUI.PopoverProps> & {
    /**
     * Space between the anchor and the Popover
     */
    margin?: {
        top?: Size | NegativeSize;
        right?: Size | NegativeSize;
        bottom?: Size | NegativeSize;
        left?: Size | NegativeSize;
    };
};
/**
 * An overlay positioned relative to its anchor element
 *
 * - [Popover | Material-UI](https://material-ui.com/components/popover/#popover)
 */
export declare function Popover(props: PopoverProps): JSX.Element;
