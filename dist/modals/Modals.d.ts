import { AppName } from '@monorail/helpers/exports';
import { ModalSize } from '@monorail/modals/modalTypes';
import { CommonComponentType } from '@monorail/types';
import React, { MouseEvent, ReactNode, StatelessComponent } from 'react';
import { SimpleInterpolation } from 'styled-components';
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
declare type BBModalSize = {
    size: ModalSize;
};
export declare type BBModalBackgroundProps = BBModalSize & CommonComponentType;
export declare const BBModalBackground: import("styled-components").StyledComponent<"div", any, BBModalBackgroundProps, never>;
declare type BBModalHeaderProps = BBModalSize & {
    appIcon?: AppName;
    customCloseButton?: ReactNode;
    headerRowChildren?: ReactNode;
    iconLeft?: string;
    iconRight?: string;
    onClose?: (event: MouseEvent) => void;
    title: string;
    cssOverrides?: SimpleInterpolation;
};
export declare const DefaultCloseButton: ({ headerRowChildren, onClose, }: Pick<BBModalHeaderProps, "headerRowChildren" | "onClose">) => JSX.Element;
export declare const BBModalHeader: StatelessComponent<BBModalHeaderProps>;
export declare const BBModalFooter: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare type BBModalOverlayProps = CommonComponentType & {
    isOpen: boolean;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    chromeless?: boolean;
};
export declare const BBModalOverlay: StatelessComponent<BBModalOverlayProps>;
export declare const BBModalContainer: import("styled-components").StyledComponent<"div", any, CommonComponentType & {
    isOpen: boolean;
    usesScaleAnimation: boolean;
    zIndex?: number | undefined;
}, never>;
export declare const BBModalContent: import("styled-components").StyledComponent<"div", any, CommonComponentType, never>;
export {};
