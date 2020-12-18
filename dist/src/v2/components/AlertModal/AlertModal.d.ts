import { ReactNode } from 'react';
import { ModalProps as ModalPropsType } from '@monorail/v2/core/Modal/Modal';
declare const ALERT_TYPE: {
    readonly Error: "error";
    readonly Warning: "warning";
    readonly Success: "success";
    readonly Info: "info";
};
declare type AlertType = typeof ALERT_TYPE[keyof typeof ALERT_TYPE];
export declare type AlertModalProps = {
    /**
     * Whether the modal is visible and active
     */
    open: boolean;
    /**
     * Callback for when the modal is closed
     */
    onClose: () => void;
    /**
     * The visual style and default `label`
     *
     * Default: `info`
     */
    type?: AlertType;
    /**
     * The text shown in the header, after the icon
     */
    label?: string;
    /**
     * The title of the message
     */
    title?: string;
    /**
     * The body of the message
     */
    description?: string;
    /**
     * Placed after `description` and before the actions
     */
    children?: ReactNode;
    /**
     * String label or config object of the primary action
     */
    primaryAction?: string | {
        label: string;
        onClick: () => void;
        disabled?: boolean;
    };
    /**
     * String label or config object of the secondary action
     */
    secondaryAction?: string | {
        label: string;
        onClick: () => void;
    };
    ModalProps?: Partial<ModalPropsType>;
};
/**
 * An alert modal informs the user about situations that require acknowledgement.
 *
 * - [Alerts | Monorail Figma](https://www.figma.com/file/dKL9YeHgWyxmRHuIjs38f3O9/Monorail-Components?node-id=17564%3A21)
 */
export declare const AlertModal: (props: AlertModalProps) => JSX.Element;
export {};
