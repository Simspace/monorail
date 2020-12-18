import React, { ReactElement, ReactNode } from 'react';
import { Eq } from 'fp-ts/lib/Eq';
import { RenderChoiceProps } from '@monorail/visualComponents/cardList/OptionsList';
export declare type CardListCommonProps<A> = {
    readonly selectedItems: ReadonlyArray<A>;
    /**
     * Title to show in Header when in view mode
     */
    readonly headerTitle: ReactNode;
    /**
     * Render an item as a row in the list of selected items
     */
    readonly renderSelectedItem: (item: A) => ReactElement;
    /**
     * Render an empty state for the card content section
     */
    readonly renderEmptyState?: (params: {
        openSearch: () => void;
        closeSearch: () => void;
        isSearchOpen: boolean;
    }) => ReactElement;
};
export declare type CardListEditProps<A> = {
    readonly mode: 'edit';
    readonly allItems: ReadonlyArray<A>;
    readonly onChangeSelectedItems: (value: ReadonlyArray<A>) => void;
    /**
     * Title to show in Header when adding items (will default to `headerTitle`
     * prop if not provided)
     */
    readonly headerTitleAddingItemsMode?: ReactNode;
    /**
     * Optional placeholder for search input
     */
    readonly searchPlaceholder?: string;
    /**
     * Convert an item to an array of strings that can be matched on while
     * searching (defaults to using `primaryText` from `toListItem` prop)
     * NB: Search is *not* case-sensitive
     */
    readonly toSearchableStrings?: (item: A) => ReadonlyArray<string>;
    /**
     * An `Eq` instance for distinguishing the subset of selected items from the
     * list of all items
     */
    readonly eq: Eq<A>;
    readonly toListItem: (item: A) => {
        id: string;
        primaryText: string;
        secondaryText?: string;
    };
    /**
     * Given the list of items converted to `RenderChoiceProps`, render as an
     * options list (defaults to `OptionsList` component)
     */
    readonly renderOptionsList?: (options: ReadonlyArray<RenderChoiceProps<A>>) => ReactElement;
};
declare type CardListViewProps = {
    readonly mode: 'view';
};
export declare type CardListProps<A extends unknown> = CardListCommonProps<A> & (CardListEditProps<A> | CardListViewProps);
export declare const CardListContent: <A extends unknown>(props: CardListProps<A>) => JSX.Element;
/**
 * @NOTE - Pete Murphy 2020-09-22 - Keeping this "wrapper" component separate in
 * case caller wants to, e.g., render a loading spinner inside while waiting for
 * `CardListProps` to resolve:
 *
 * @example
 * ```tsx
 * <CardListWrapper>
 *   {remoteLoadingFold(itemsRemoteData, items =>
 *     <CardListContent<ItemType>
 *       // ...
 *     />
 *   )}
 * </CardListWrapper>
 * ```
 */
export declare const CardListWrapper: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<Pick<import("../cards/Cards").BBCardBackgroundProps, "className" | "id" | "tabIndex" | "elevation" | "children" | "onClick" | "as" | "cssOverrides" | "hover" | "cssCardContent"> & React.RefAttributes<HTMLDivElement>>, import("../../helpers/theme").GlobalAppThemeInterface, import("../cards/Cards").BBCardBackgroundProps, never>;
export declare const CardList: <A extends unknown>(props: CardListProps<A>) => JSX.Element;
export {};
