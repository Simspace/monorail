import { FC, ReactNode } from 'react';
import { ActionsMenuProps } from '@monorail/actionsMenu/ActionsMenu';
import { ButtonDisplay, ButtonSize } from '@monorail/buttons/buttonTypes';
import { PopOverToggleProps } from '@monorail/popOver/PopOver';
export declare type ActionsButtonsProps = {
    display?: ButtonDisplay;
    featuredActions?: Array<Omit<ActionsMenuProps['menuItems'][0], 'featuredAction'>>;
    standardActions?: Array<Omit<ActionsMenuProps['menuItems'][0], 'featuredAction'>>;
    size?: ButtonSize;
    iconOnly?: boolean;
    document?: Document;
    toggle?: (props: PopOverToggleProps) => ReactNode;
};
export declare const ActionsButtons: FC<ActionsButtonsProps>;
