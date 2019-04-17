import { MouseEvent, ReactNode, StatelessComponent } from 'react';
import { AppName } from '@monorail/helpers/exports';
import { SimpleInterpolation } from 'styled-components';
import { CommonComponentType } from '@monorail/types';
declare type BBModalSize = {
    mini?: boolean;
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
