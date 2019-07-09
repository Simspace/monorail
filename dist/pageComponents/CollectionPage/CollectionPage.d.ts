import React from 'react';
import { CollectionProps } from '@monorail/visualComponents/collection/Collection';
import { CompareSearchType } from '@monorail/visualComponents/inputs/SearchController';
import { PageHeaderProps } from '@monorail/visualComponents/pageHeader/PageHeader';
export declare type SearchFilterType<T> = (params: {
    item: T;
    compareSearch: CompareSearchType;
}) => boolean;
declare type Props<I> = CollectionProps<I> & {
    actions?: PageHeaderProps['actions'];
    title: PageHeaderProps['title'];
};
export declare const CollectionPage: <T extends unknown>(props: Props<T>) => React.ReactElement<Props<T>, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export {};
