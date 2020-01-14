/// <reference types="react" />
import { ButtonProps, OnClick } from '@monorail/visualComponents/buttons/Button';
import { SimpleListItemProps } from '@monorail/visualComponents/list/List';
/**
 * The onClick event is for clicking the button, not the list item
 * in the dropdown. The logic for clicking the list item is handled
 * in this component.
 */
export declare type DropdownButtonListItem = Omit<Partial<SimpleListItemProps>, 'onClick' | 'primaryText'> & {
    onClick: OnClick;
    primaryText: SimpleListItemProps['primaryText'];
};
export declare type Props = {
    listItems: Array<DropdownButtonListItem>;
} & Partial<Pick<ButtonProps, 'disabled'>>;
export declare const DropdownButton: ({ listItems, disabled }: Props) => JSX.Element | null;
