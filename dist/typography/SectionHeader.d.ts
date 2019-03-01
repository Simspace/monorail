import { Component } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { AppName } from '@monorail/CommonStyles';
declare type CCSectionHeaderProps = {
    css?: SimpleInterpolation;
};
declare type SectionHeaderProps = CCSectionHeaderProps & {
    iconLeft?: string | AppName;
    iconRight?: string | AppName;
    title: string;
};
export declare class SectionHeader extends Component<SectionHeaderProps> {
    render(): JSX.Element;
}
export {};
