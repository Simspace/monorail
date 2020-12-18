import React, { ReactNode } from 'react';
import { Colors } from '@monorail/helpers/color';
import { PopOverToggleProps } from '@monorail/metaComponents/popOver/PopOver';
import { IconType } from '@monorail/visualComponents/icon/IconType';
export declare type MenuActionOnClick<R = void> = (onClickParent: () => void, event: React.MouseEvent<HTMLDivElement>) => R;
export declare type MenuAction<R = void> = {
    type: 'divider';
} | {
    type?: 'action';
    label: ReactNode;
    iconName?: IconType;
    iconColor?: Colors;
    chromeless?: boolean;
    /**
     * TODO: get rid of the need to have to pass a callback to close the popover.
     * This onClick should match the signature of all other react onClick.
     * If we weren't depending on asynchronous behavior in components that are consuming
     * ActionsMenu we would just be able to stop propagation on the SyntheticEvent
     */
    onClick: MenuActionOnClick<R>;
    isFeaturedAction?: boolean;
    children?: ReactNode;
    disabled?: boolean;
};
export declare type ActionsMenuProps<R = void> = {
    actions: Array<MenuAction<R>>;
    document?: Document;
    toggle?: (props: PopOverToggleProps) => ReactNode;
    onActionComplete?: (r: R) => void;
};
export declare const ActionsMenu: <R extends unknown>(props: ActionsMenuProps<R>) => JSX.Element;
