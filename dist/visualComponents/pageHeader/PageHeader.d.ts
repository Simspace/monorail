import { FC, MouseEventHandler, ReactNode } from 'react';
import { GlobalAppThemeInterface } from '@monorail/helpers/theme';
import { CommonComponentType } from '@monorail/types';
export declare const TitleContainer: import("styled-components").StyledComponent<"div", GlobalAppThemeInterface, {
    hasAboveContent: boolean;
}, never>;
export declare type BreadCrumbsType = Array<{
    title: string;
    path: string;
}>;
export declare type PageHeaderNavigationProps = {
    breadCrumbs?: BreadCrumbsType;
};
export declare type PageHeaderProps = CommonComponentType & PageHeaderNavigationProps & {
    goBack?: MouseEventHandler | string;
    title: ReactNode;
    pageName?: string;
    actions?: ReactNode;
};
export declare const PageHeader: FC<PageHeaderProps>;
