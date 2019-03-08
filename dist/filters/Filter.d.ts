import { Component, ReactNode } from 'react';
import { SimpleInterpolation } from 'styled-components';
declare type CCFilterProps = {
    cssOverrides?: SimpleInterpolation;
    isOpen?: boolean;
    isActive: boolean;
    onToggle?: (isOpen: boolean) => void;
};
declare type Props = CCFilterProps & {
    document?: Document;
    title: ReactNode;
    content: ReactNode;
};
export declare class Filter extends Component<Props> {
    render(): JSX.Element;
}
export {};
