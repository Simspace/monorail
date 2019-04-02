import { Component } from 'react';
import { AppName } from '@monorail/CommonStyles';
import { CommonComponentType } from '@monorail/types';
declare type SectionHeaderProps = CommonComponentType & {
    iconLeft?: string | AppName;
    iconRight?: string | AppName;
    title: string;
};
export declare class SectionHeader extends Component<SectionHeaderProps> {
    render(): JSX.Element;
}
export {};
