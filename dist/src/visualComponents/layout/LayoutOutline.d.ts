import { FC, ReactNode } from 'react';
import { Sizes } from '@monorail/helpers/exports';
import { CssOverridesType } from '@monorail/types';
import { MenuAction } from '@monorail/visualComponents/actionsMenu/ActionsMenu';
import { HeaderProps } from '@monorail/visualComponents/header/Header';
import { IconType } from '@monorail/visualComponents/icon/IconType';
import { TextAreaProps } from '@monorail/visualComponents/inputs/TextArea';
declare type Props = {
    title?: string;
    headerProps?: Omit<HeaderProps, 'title'>;
    header?: () => ReactNode;
    children: () => ReactNode;
    list: () => ReactNode;
    listFooter?: () => ReactNode;
};
export declare const OutlineList: any;
export declare const LayoutOutline: FC<Props>;
export declare const EmptyListBox: any;
export declare const EmptyListBoxInner: any;
export declare const EmptyListButtonsBox: any;
declare type EmptyLayoutListProps = {
    title?: string;
    message?: string;
    actions?: ReactNode;
};
export declare const EmptyLayoutContainer: any;
export declare const EmptyLayoutList: ({ title, message, actions, }: EmptyLayoutListProps) => JSX.Element;
export declare const LayoutContentWrapper: any;
export declare const ColumnLayout: any;
export declare const RowLayout: any;
declare type LayoutDetailHeaderProps = TextAreaProps & {
    actions?: Array<MenuAction>;
};
export declare const LayoutDetailHeader: ({ actions, ...textAreaProps }: LayoutDetailHeaderProps) => JSX.Element;
export declare type OutlineItemBaseType = {
    key: string;
    content: string | ReactNode;
};
export declare type OutlineActions<T extends OutlineItemBaseType> = {
    update: (key: string, changes: Partial<T>) => void;
    create: (key?: string) => void;
    delete: (key: string) => void;
    select: (key: string) => void;
};
export declare type OutlineControlledProps<T extends OutlineItemBaseType> = {
    items: Array<T>;
    actions: OutlineActions<T>;
    selectedItem?: T;
};
export declare type OutlineListItemType<T extends OutlineItemBaseType> = {
    item: T;
    icon?: IconType;
    selected?: boolean;
    size?: Sizes;
    onClick?: (item: T) => void;
    onDelete?: (item: T) => void;
    cssOverrides?: CssOverridesType;
};
export declare const OutlineListItem: <T extends OutlineItemBaseType>(props: OutlineListItemType<T>) => JSX.Element;
export declare const useControlledList: <T extends OutlineItemBaseType>({ items, newItem, }: {
    items: T[];
    newItem?: ((ndx: number) => T) | undefined;
}) => OutlineControlledProps<T>;
export {};
//# sourceMappingURL=LayoutOutline.d.ts.map