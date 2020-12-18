/// <reference types="react" />
import * as MUI from '@material-ui/core';
import { OmitBannedProps } from '@monorail/v2/shared/helpers';
declare type ModalPaperProps = OmitBannedProps<MUI.PaperProps> & Pick<ModalProps, 'open' | 'fullScreen'>;
export declare type ModalProps = OmitBannedProps<Omit<MUI.DialogProps, 'PaperProps'>> & {
    /**
     * The ARIA role for the content container
     */
    role?: 'dialog' | 'alertdialog';
    PaperProps?: Partial<ModalPaperProps>;
    TransitionProps?: Partial<Pick<MUI.DialogProps, 'TransitionProps'> & {
        role: string | null;
    }>;
};
/**
 * Modal dialog
 *
 * - [Dialog | Material-UI](https://material-ui.com/components/dialogs/#dialog)
 * - [Modals | Monorail Figma](https://www.figma.com/file/dKL9YeHgWyxmRHuIjs38f3O9/Monorail-Components?node-id=2133%3A64)
 */
export declare function Modal({ role, title, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, PaperProps, TransitionProps, ...props }: ModalProps): JSX.Element;
export {};
