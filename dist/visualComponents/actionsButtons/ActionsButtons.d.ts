import React, { FC, ReactNode } from 'react';
import { PopOverToggleProps } from '@monorail/metaComponents/popOver/PopOver';
import { ActionsMenuProps as ActionsMenuProps_, MenuAction } from '@monorail/visualComponents/actionsMenu/ActionsMenu';
import { ButtonProps } from '@monorail/visualComponents/buttons/Button';
import { ButtonDisplay, ButtonSize } from '@monorail/visualComponents/buttons/buttonTypes';
import { DropdownButtonListItem as DropdownButtonListItem_, Props as DropdownButtonProps_ } from '@monorail/visualComponents/buttons/DropdownButton';
import { IconButtonProps as IconButtonProps_ } from '@monorail/visualComponents/buttons/IconButton';
/**
 * CatalogEntryPermission is coppied from
 * src/catalog/shared/state/catalogStateTypes.ts
 */
export declare enum CatalogEntryPermission {
    Delete = "delete",
    List = "list",
    Read = "read",
    Write = "write"
}
export declare enum ActionButton {
    TextButton = "TEXT_BUTTON",
    IconButton = "ICON_BUTTON",
    ActionsMenu = "ACTIONS_MENU",
    DropdownButton = "DROPDOWN_BUTTON"
}
export declare type Check = {
    check: boolean;
};
/**
 * Regular ol' button
 * Include the label field, since buttons take children as the label
 */
export declare type TextButtonProps = Partial<Omit<ButtonProps, 'onClick'>> & {
    label: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
export declare type TextButtonAction = {
    type: ActionButton.TextButton;
    actionProps: TextButtonProps;
};
export declare type TextButtonActionWithCheck = TextButtonAction & Check;
/** Icon button */
export declare type IconButtonProps = Partial<IconButtonProps_>;
export declare type IconButtonAction = {
    type: ActionButton.IconButton;
    actionProps: IconButtonProps;
};
export declare type IconButtonActionWithCheck = IconButtonAction & Check;
/** Dropdown button */
export declare type DropdownButtonListItem = {
    actionProps: DropdownButtonListItem_;
} & Check;
export declare type DropdownButtonProps = Omit<DropdownButtonProps_, 'listItems'> & {
    listItems: Array<DropdownButtonListItem>;
};
export declare type DropdownButtonAction = {
    type: ActionButton.DropdownButton;
    actionProps: DropdownButtonProps;
};
/** Actions menu */
export declare type ActionsMenuListItem = {
    actionProps: MenuAction;
} & Check;
export declare type ActionsMenuProps = Omit<ActionsMenuProps_, 'actions'> & {
    actions: Array<ActionsMenuListItem>;
};
export declare type ActionsMenuAction = {
    type: ActionButton.ActionsMenu;
    actionProps: ActionsMenuProps;
};
export declare type ActionsButtonsAction = TextButtonActionWithCheck | IconButtonActionWithCheck | DropdownButtonAction | ActionsMenuAction;
export declare type ActionsButtonsProps = {
    display?: ButtonDisplay;
    actions?: Array<ActionsButtonsAction>;
    size?: ButtonSize;
    iconOnly?: boolean;
    document?: Document;
    toggle?: (props: PopOverToggleProps) => ReactNode;
};
export declare const ActionsButtons: FC<ActionsButtonsProps>;
