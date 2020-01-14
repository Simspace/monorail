import { FC, ReactNode } from 'react';
import { MenuAction } from '@monorail/visualComponents/actionsMenu/ActionsMenu';
import { HeaderProps } from '@monorail/visualComponents/header/Header';
import { TextAreaProps } from '@monorail/visualComponents/inputs/TextArea';
declare type Props = {
    title: string;
    headerProps?: Omit<HeaderProps, 'title'>;
    children: () => ReactNode;
    list: () => ReactNode;
    listFooter?: () => ReactNode;
};
export declare const OutlineList: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, {}, never>;
export declare const LayoutOutline: FC<Props>;
export declare const EmptyListBox: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, {}, never>;
export declare const EmptyListBoxInner: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, {}, never>;
export declare const EmptyListButtonsBox: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, {}, never>;
declare type EmptyLayoutListProps = {
    title?: string;
    message?: string;
    actions?: ReactNode;
};
export declare const EmptyLayoutList: ({ title, message, actions, }: EmptyLayoutListProps) => JSX.Element;
export declare const LayoutContentWrapper: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, {}, never>;
export declare const ColumnLayout: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, {}, never>;
export declare const RowLayout: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, {}, never>;
declare type LayoutDetailHeaderProps = TextAreaProps & {
    actions?: Array<MenuAction>;
};
export declare const LayoutDetailHeader: ({ actions, ...textAreaProps }: LayoutDetailHeaderProps) => JSX.Element;
export declare type OutlineItemBaseType = {
    key: string;
    name: string | ReactNode;
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
    icon?: string;
    selected?: boolean;
    onClick?: (item: T) => void;
    onDelete?: (item: T) => void;
};
export declare const OutlineListItem: <T extends OutlineItemBaseType>(props: OutlineListItemType<T>) => JSX.Element;
export declare const useControlledList: <T extends OutlineItemBaseType>({ items, newItem, }: {
    items: T[];
    newItem?: ((ndx: number) => T) | undefined;
}) => OutlineControlledProps<T>;
export {};
