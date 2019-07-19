import { ReactNode } from 'react';
import { PopOverToggleProps } from '@monorail/metaComponents/popOver/PopOver';
import { FCwDP } from '@monorail/sharedHelpers/react';
export declare type ActionsMenuProps = {
    actions: Array<{
        label: string;
        iconName?: string;
        /**
         * TODO: get rid of the need to have to pass a callback to close the popover.
         * This onClick should match the signature of all other react onClick.
         * If we weren't depending on asynchronous behavior in components that are consuming
         * ActionsMenu we would just be able to stop propagation on the SyntheticEvent
         */
        onClick: (onClickParent: () => void) => void;
        isFeaturedAction?: boolean;
        children?: ReactNode;
    }>;
    document?: Document;
};
declare type DefaultProps = {
    toggle: (props: PopOverToggleProps) => ReactNode;
};
export declare const ActionsMenu: FCwDP<ActionsMenuProps, DefaultProps>;
export {};
