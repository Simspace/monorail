import { FC } from 'react';
declare type ActionsMenuProps = {
    menuItems: Array<{
        label: string;
        iconName?: string;
        onClick: () => void;
        featuredAction?: boolean;
    }>;
};
export declare const ActionsMenu: FC<ActionsMenuProps>;
export {};
