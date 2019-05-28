import { ReactNode } from 'react';
import { PopOverToggleProps } from '@monorail/popOver/PopOver';
import { FCwDP } from '@monorail/sharedHelpers/react';
export declare type ActionsMenuProps = {
    menuItems: Array<{
        label: string;
        iconName?: string;
        onClick: (onClickParent: () => void) => void;
        featuredAction?: boolean;
        children?: ReactNode;
    }>;
    document?: Document;
};
declare type DefaultProps = {
    toggle: (props: PopOverToggleProps) => ReactNode;
};
export declare const ActionsMenu: FCwDP<ActionsMenuProps, DefaultProps>;
export {};
