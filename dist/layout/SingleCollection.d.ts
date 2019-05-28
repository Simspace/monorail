import React, { Component, ReactNode, RefObject } from 'react';
export declare type SingleCollectionHeaderProps = {
    shadowRef: RefObject<HTMLDivElement>;
    willAnimateShadow: boolean;
};
declare type Props = {
    header: (props: SingleCollectionHeaderProps) => ReactNode;
    content: ReactNode;
};
export declare class SingleCollection extends Component<Props> {
    singleCollectionContainer: React.RefObject<HTMLDivElement>;
    pageHeaderShadow: React.RefObject<HTMLDivElement>;
    render(): JSX.Element;
}
export {};
