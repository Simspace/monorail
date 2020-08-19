import { FC, MouseEventHandler, ReactNode } from 'react';
import { CommonComponentType } from '@monorail/types';
export declare const TitleContainer: any;
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
//# sourceMappingURL=PageHeader.d.ts.map