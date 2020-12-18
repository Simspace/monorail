import { MouseEvent, ReactNode } from 'react';
import { StyledProps } from '@monorail/helpers/styled-components';
import { IconButtonProps } from '@monorail/v2/core/IconButton/IconButton';
import { ModalSize } from '@monorail/v2/core/Modal/modalTypes';
export declare type ModalHeaderProps = {
    title: string;
    TitleProps?: Partial<StyledProps & HeaderTitleProps>;
    size?: ModalSize;
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
    closeButton?: ReactNode;
    onClose?: (event: MouseEvent) => void;
};
declare type HeaderTitleProps = Pick<ModalHeaderProps, 'size'>;
export declare const ModalHeaderContainer: import("styled-components").StyledComponent<"div", import("../../../helpers/theme").GlobalAppThemeInterface, Pick<ModalHeaderProps, "size">, never>;
/**
 * WCAG note: This heading uses an `h1`.
 * Since it is displayed in a modal, it does not affect other headings on the page.
 */
export declare const ModalHeaderTitle: import("styled-components").StyledComponent<"h1", import("../../../helpers/theme").GlobalAppThemeInterface, {
    'data-test-id': string;
} & Pick<ModalHeaderProps, "size">, "data-test-id">;
export declare type CloseButtonProps = Pick<ModalHeaderProps, 'onClose'> & Pick<IconButtonProps, 'display' | 'size'>;
export declare const CloseButton: ({ display, size, onClose, }: CloseButtonProps) => JSX.Element;
/**
 * Top banner of the modal dialog
 */
export declare const ModalHeader: (props: ModalHeaderProps) => JSX.Element;
export {};
