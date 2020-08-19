/// <reference types="@monorail/typings/styled-components" />
import React, { MouseEvent, PropsWithChildren, ReactNode, StatelessComponent } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { AppName } from '@monorail/helpers/exports';
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
export declare const BBModalBackground: any;
export declare const BBModalHeaderContainer: any;
export declare const BBModalHeaderRow: any;
declare type BBModalHeaderProps = BBModalSize & {
    appIcon?: AppName;
    customCloseButton?: ReactNode;
    headerRowChildren?: ReactNode;
    iconLeft?: IconType;
    iconRight?: IconType;
    onClose?: (event: MouseEvent) => void;
    title: string;
    cssOverrides?: SimpleInterpolation;
};
declare type DefaultCloseButtonProps = Pick<BBModalHeaderProps, 'headerRowChildren' | 'onClose'>;
export declare const DefaultCloseButton: ({ headerRowChildren, onClose, }: DefaultCloseButtonProps) => JSX.Element;
export declare const BBModalHeader: StatelessComponent<BBModalHeaderProps>;
export declare const BBModalFooter: any;
export declare const BBModalOverlayContainer: any;
export declare type BBModalOverlayProps = CommonComponentType & {
    isOpen: boolean;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    chromeless?: boolean;
};
export declare const BBModalOverlay: StatelessComponent<BBModalOverlayProps>;
export declare const BBModalContainer: any;
export declare const BBModalContent: any;
export {};
//# sourceMappingURL=Modals.d.ts.map