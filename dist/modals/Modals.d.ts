import React, { MouseEvent, ReactNode, StatelessComponent } from 'react';
import { AppName } from '@monorail/CommonStyles';
import { SimpleInterpolation } from 'styled-components';
import { CommonComponentType } from '@monorail/types';
declare type BBModalSize = {
    mini?: boolean;
};
export declare type BBModalBackgroundProps = BBModalSize & CommonComponentType;
export declare const BBModalBackground: import("styled-components").StyledComponentClass<BBModalBackgroundProps, any, BBModalSize & CommonComponentType & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>>;
declare type BBModalHeaderProps = BBModalSize & {
    appIcon?: AppName;
    customCloseButton?: ReactNode;
    headerRowChildren?: ReactNode;
    iconLeft?: string;
    iconRight?: string;
    onClose?: (event: MouseEvent) => void;
    title: string;
};
export declare const DefaultCloseButton: ({ headerRowChildren, onClose, }: Pick<BBModalHeaderProps, "headerRowChildren" | "onClose">) => JSX.Element;
export declare const BBModalHeader: StatelessComponent<BBModalHeaderProps>;
export declare const BBModalFooter: import("styled-components").StyledComponentClass<{}, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare type BBModalOverlayProps = CommonComponentType & {
    isOpen: boolean;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    chromeless?: boolean;
};
export declare const BBModalOverlay: StatelessComponent<BBModalOverlayProps>;
export declare const BBModalContainer: import("styled-components").StyledComponentClass<CommonComponentType & {
    isOpen: boolean;
    usesScaleAnimation: boolean;
}, any, CommonComponentType & {
    isOpen: boolean;
    usesScaleAnimation: boolean;
} & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>>;
export declare const BBModalContent: import("styled-components").StyledComponentClass<{
    css?: SimpleInterpolation;
}, any, {
    css?: SimpleInterpolation;
} & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>>;
export {};
