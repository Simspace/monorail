import { FC, ReactNode } from 'react';
import { PopOverToggleProps } from '@monorail/metaComponents/popOver/PopOver';
import { ActionsMenuProps } from '@monorail/visualComponents/actionsMenu/ActionsMenu';
import { ButtonDisplay, ButtonSize } from '@monorail/visualComponents/buttons/buttonTypes';
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
