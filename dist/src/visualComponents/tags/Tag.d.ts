/// <reference types="react" />
import { IconType } from '@monorail/visualComponents/icon/IconType';
declare type Props = {
    icon?: IconType;
    label?: string;
    title?: string;
    button?: {
        icon: IconType;
        onClick: () => void;
    };
};
export declare const TagContainer: any;
/**
 * Consider using one of the more specific Tag components, like
 * `TagIcon` and `TagLabel`. The props for a bare `Tag` are not the most
 * instructive.
 *
 * Use Tags to visually label UI objects for quick recognition and navigation,
 * like categories and metadata.
 *
 * ```tsx
 * <TagLabel>Your Tag Here</TagLabel>
 * <TagIcon icon="person">Your Tag Here</TagIcon>
 * <TagClose onClose={() => alert('closed')}>Close Me</TagClose>
 * ```
 */
export declare const Tag: (props: Props) => JSX.Element;
export declare const TagCircle: (props: {
    icon: IconType;
    title: string;
}) => JSX.Element;
export declare const TagLabel: (props: {
    children: string;
    title?: string;
}) => JSX.Element;
export declare const TagIcon: (props: {
    children: string;
    icon: IconType;
    title?: string;
}) => JSX.Element;
export declare const TagClose: (props: {
    children: string;
    title?: string;
    onClose: () => void;
}) => JSX.Element;
export declare const TagIconClose: (props: {
    icon: IconType;
    children: string;
    title?: string;
    onClose: () => void;
}) => JSX.Element;
export {};
//# sourceMappingURL=Tag.d.ts.map