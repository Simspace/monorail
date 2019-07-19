import { FC, ReactNode } from 'react';
import { PopOverToggleProps } from '@monorail/metaComponents/popOver/PopOver';
import { ActionsMenuProps } from '@monorail/visualComponents/actionsMenu/ActionsMenu';
import { ButtonDisplay, ButtonSize } from '@monorail/visualComponents/buttons/buttonTypes';
declare type Action = Omit<ActionsMenuProps['actions'][0], 'featuredAction'>;
export declare type ActionsButtonsProps = {
    display?: ButtonDisplay;
    actions?: Array<Action>;
    size?: ButtonSize;
    iconOnly?: boolean;
    document?: Document;
    toggle?: (props: PopOverToggleProps) => ReactNode;
};
export declare const ActionsButtons: FC<ActionsButtonsProps>;
export {};
