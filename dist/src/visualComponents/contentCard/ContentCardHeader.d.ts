/// <reference types="react" />
import * as O from 'fp-ts/lib/Option';
declare type ImageUrl = string;
declare type ViewProps = {
    mode: 'view';
    image: O.Option<ImageUrl>;
};
export declare type ImageFallbackData = {
    tag: 'empty';
} | {
    tag: 'fallback';
    path: ImageUrl;
} | {
    tag: 'custom';
    path: ImageUrl;
};
declare type EditProps = {
    mode: 'edit';
    image: ImageFallbackData;
    onImageChange: (img: O.Option<File>) => void;
    onRemoveImage: () => void;
};
export declare type ContentCardHeaderProps = ViewProps | EditProps;
export declare const ContentCardHeader: (props: ContentCardHeaderProps) => JSX.Element;
export {};
//# sourceMappingURL=ContentCardHeader.d.ts.map