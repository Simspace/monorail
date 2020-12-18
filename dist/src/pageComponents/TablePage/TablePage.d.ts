import React, { ChangeEvent, ReactElement } from 'react';
import { TableProps } from 'react-table';
import { PageHeaderProps } from '@monorail/visualComponents/pageHeader/PageHeader';
declare type Props<I> = Partial<TableProps<I>> & {
    actions?: PageHeaderProps['actions'];
    title?: PageHeaderProps['title'];
    isLoading?: boolean;
    pageSize?: number;
    searchProps?: {
        onChange: (value: string, event?: ChangeEvent<HTMLInputElement>) => void;
        value?: string;
    };
};
export declare const TablePage: <T extends unknown>(props: Props<T>) => React.ReactElement<Props<T>, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export {};
