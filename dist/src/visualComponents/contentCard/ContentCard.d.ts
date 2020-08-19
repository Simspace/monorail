/// <reference types="react" />
import { LinkProps } from 'react-router/lib/Link';
import { SimpleInterpolation } from 'styled-components';
import * as O from 'fp-ts/lib/Option';
import { ImageFallbackData } from '@monorail/visualComponents/contentCard/ContentCardHeader';
declare type PackageDifficulty = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export declare const difficultyLevels: Record<PackageDifficulty, number>;
declare type BaseProps = {
    cssOverrides?: SimpleInterpolation;
    organization?: string;
    title: string;
    description: string;
    difficulty: PackageDifficulty;
    rating?: number;
    duration?: number;
    isSelfEnroll?: boolean;
    logo?: string;
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
export declare type ContentCardProps = BaseProps & (ViewCardProps | EditCardProps);
export declare const ContentCard: (props: ContentCardProps) => JSX.Element;
export {};
//# sourceMappingURL=ContentCard.d.ts.map