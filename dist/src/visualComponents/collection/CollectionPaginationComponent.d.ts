import React, { FC } from 'react';
declare type PaginationButtonProps = {
    onClick?: (e: React.SyntheticEvent<HTMLButtonElement, MouseEvent>) => void;
    disabled?: boolean;
};
export declare const PaginationBackButton: ({ onClick, disabled, }: PaginationButtonProps) => JSX.Element;
export declare const PaginationNextButton: ({ onClick, disabled, }: PaginationButtonProps) => JSX.Element;
export declare const CollectionPaginationComponent: FC<{
    data: Array<object>;
    page: number;
    pages: number;
    pageSize: number;
    onPageChange: (n: number) => void;
}>;
export {};
