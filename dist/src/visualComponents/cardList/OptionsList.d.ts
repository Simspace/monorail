/// <reference types="react" />
import { IconType } from '@monorail/visualComponents/icon/IconType';
export declare type ListItemProps = {
    id: string;
    primaryText: string;
    secondaryText?: string;
};
export declare type RenderChoiceProps<A> = {
    item: A;
    disabled?: boolean;
    type: 'checkbox' | 'radio';
    onChange: () => void;
    handleClick?: (item: A) => void;
    checked: boolean;
} & ListItemProps;
export declare const renderDefaultListItem: (props: ListItemProps) => JSX.Element;
export declare const renderIconListItem: (props: ListItemProps & {
    iconName: IconType;
}) => JSX.Element;
export declare type OptionsListProps<A> = {
    noDataHeading?: string;
    options: ReadonlyArray<RenderChoiceProps<A>>;
    renderListItem?: (props: ListItemProps) => JSX.Element;
};
export declare const OptionsList: <A extends unknown>({ noDataHeading, options, renderListItem, }: OptionsListProps<A>) => JSX.Element;
