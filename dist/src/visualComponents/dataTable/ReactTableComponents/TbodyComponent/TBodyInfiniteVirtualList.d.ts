import React from 'react';
import { NoData } from '@monorail/visualComponents/dataStates/DataStates';
export declare const TBodyInfiniteVirtualFixedSizeList: (tbodyComponentProps: {
    children: Array<Array<JSX.Element>>;
    className: string;
    style: React.CSSProperties;
    rowHeight: number;
    loadMoreItems: () => null;
    continuationToken: string | undefined;
    NoData: JSX.Element | null;
    Loading: JSX.Element;
}) => JSX.Element | null;
