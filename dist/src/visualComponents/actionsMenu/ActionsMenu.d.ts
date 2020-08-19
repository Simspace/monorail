import React, { FC, ReactNode } from 'react';
import { PopOverToggleProps } from '@monorail/metaComponents/popOver/PopOver';
import { IconType } from '@monorail/visualComponents/icon/IconType';
import { Colors } from '@monorail/helpers/color';
export declare type MenuAction = {
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
    onClick: (onClickParent: () => void, event: React.MouseEvent<HTMLDivElement>) => void;
    isFeaturedAction?: boolean;
    children?: ReactNode;
    disabled?: boolean;
};
export declare type ActionsMenuProps = {
    actions: Array<MenuAction>;
    document?: Document;
    toggle?: (props: PopOverToggleProps) => ReactNode;
};
export declare const ActionsMenu: FC<ActionsMenuProps>;
//# sourceMappingURL=ActionsMenu.d.ts.map