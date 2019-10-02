import React, { ReactElement } from 'react';
import { TableProps } from 'react-table';
import { TableColumns } from '@monorail/visualComponents/dataTable/ReactTable';
import { PageHeaderProps } from '@monorail/visualComponents/pageHeader/PageHeader';
declare type Props<I> = {
    actions?: PageHeaderProps['actions'];
    title: PageHeaderProps['title'];
    columns: TableColumns<I>;
    data: TableProps<I>['data'];
    isLoading?: boolean;
    NoDataComponent?: () => ReactElement;
};
export declare const TablePage: <T extends unknown>(props: Props<T>) => React.ReactElement<Props<T>, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export {};
