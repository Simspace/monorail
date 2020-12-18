/// <reference types="react" />
import { SimpleInterpolation } from 'styled-components';
import { FontSizes } from '@monorail/helpers/exports';
import { ButtonProps } from '@monorail/visualComponents/buttons/Button';
import { IconType } from '@monorail/visualComponents/icon/IconType';
export declare const TextContainer: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, {}, never>;
export declare type EmptyStateProps = {
    icon?: IconType;
    size?: EmptyStateSizes;
    message?: string;
    title?: string;
    cssOverrides?: SimpleInterpolation;
    button?: ButtonProps & {
        text: string;
    };
};
export declare enum EmptyStateSizes {
    Small = "small",
    Large = "large"
}
export declare const iconSizes: {
    small: number;
    large: number;
};
export declare const titleSizes: {
    small: FontSizes;
    large: FontSizes;
};
export declare const messageSizes: {
    small: FontSizes;
    large: FontSizes;
};
export declare const iconMargins: {
    small: string;
    large: string;
};
export declare const titleMargins: {
    small: string;
    large: string;
};
export declare const messageMargins: {
    small: string;
    large: string;
};
export declare const getMessageMaxWidth: (size: EmptyStateSizes) => number;
export declare const EmptyState: (props: EmptyStateProps) => JSX.Element;
