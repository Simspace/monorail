import { ReactElement } from 'react';
import { LinkProps } from 'react-router/lib/Link';
import { SimpleInterpolation } from 'styled-components';
import * as O from 'fp-ts/lib/Option';
import { ImageFallbackData } from './ContentCardHeader';
import { ContentDifficulty } from './ContentDifficulty';
export declare type ContentCardProps = BaseProps & (ViewCardProps | EditCardProps);
declare type BaseProps = {
    cssOverrides?: SimpleInterpolation;
    organization?: string;
    title: string;
    description: string;
    difficulty?: ContentDifficulty;
    logo?: string;
    renderFooter?: () => ReactElement | null;
};
declare type MaybeLinkProps = AsLinkProps | {
    asLink: false;
};
declare type ViewCardProps = {
    mode: 'view';
    image?: string;
} & MaybeLinkProps;
declare type EditCardProps = {
    mode: 'edit';
    image: ImageFallbackData;
    onLogoChange: (file: O.Option<File>) => void;
    onImageChange: (file: O.Option<File>) => void;
    onRemoveLogo: () => void;
    onRemoveImage: () => void;
};
declare type AsLinkProps = {
    asLink: true;
} & LinkProps;
export {};
