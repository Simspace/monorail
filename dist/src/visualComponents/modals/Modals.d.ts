import React, { MouseEvent, PropsWithChildren, ReactNode, StatelessComponent } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { AppName } from '@monorail/helpers/exports';
import { CSSProp } from '@monorail/helpers/styled-components';
import { CommonComponentType } from '@monorail/types';
import { IconType } from '@monorail/visualComponents/icon/IconType';
import { ModalSize } from '@monorail/visualComponents/modals/modalTypes';
/**
 * Modal Hooks
 */
declare type UseModalAnimationParams = {
    closingAnimationCompleted: () => void;
    isOpen: boolean;
};
export declare function useModalAnimation<E extends HTMLElement>(params: UseModalAnimationParams): {
    modalBackgroundRef: React.RefObject<E>;
    isRendered: boolean;
};
export declare const modalAnimationDuration = 100;
export declare const mediumModalOpenAnimation: import("styled-components").Keyframes;
export declare const mediumModalCloseAnimation: import("styled-components").Keyframes;
export declare const largeModalOpenAnimation: import("styled-components").Keyframes;
export declare const largeModalCloseAnimation: import("styled-components").Keyframes;
export declare const fullScreenModalOpenAnimation: import("styled-components").Keyframes;
export declare const fullScreenModalCloseAnimation: import("styled-components").Keyframes;
export declare const overlayOpenAnimation: import("styled-components").Keyframes;
export declare const overlayCloseAnimation: import("styled-components").Keyframes;
export declare type BBModalSize = {
    size: ModalSize;
};
export declare type BBModalBackgroundProps = BBModalSize & PropsWithChildren<CommonComponentType>;
export declare const BBModalBackground: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<BBModalSize & CommonComponentType & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>, import("../../helpers/theme").GlobalAppThemeInterface, BBModalBackgroundProps, never>;
export declare const BBModalHeaderContainer: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, BBModalSize & {
    cssOverrides: SimpleInterpolation | CSSProp;
}, never>;
export declare const BBModalHeaderRow: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, BBModalSize, never>;
declare type BBModalHeaderProps = BBModalSize & {
    appIcon?: AppName;
    customCloseButton?: ReactNode;
    headerRowChildren?: ReactNode;
    iconLeft?: IconType;
    iconRight?: IconType;
    onClose?: (event: MouseEvent) => void;
    title: string;
    titleId?: string;
    cssOverrides?: SimpleInterpolation | CSSProp;
};
declare type DefaultCloseButtonProps = Pick<BBModalHeaderProps, 'headerRowChildren' | 'onClose'>;
export declare const DefaultCloseButton: ({ headerRowChildren, onClose, }: DefaultCloseButtonProps) => JSX.Element;
export declare const BBModalHeader: StatelessComponent<BBModalHeaderProps>;
export declare const BBModalFooter: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, {}, never>;
export declare const BBModalOverlayContainer: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, BBModalOverlayProps, never>;
export declare type BBModalOverlayProps = CommonComponentType & {
    isOpen: boolean;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    chromeless?: boolean;
};
export declare const BBModalOverlay: StatelessComponent<BBModalOverlayProps>;
export declare const BBModalContainer: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, CommonComponentType & {
    isOpen: boolean;
    usesScaleAnimation: boolean;
    zIndex?: number | undefined;
}, never>;
export declare const BBModalContent: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, CommonComponentType, never>;
export {};
