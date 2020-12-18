/// <reference types="react" />
import { CardListCommonProps, CardListEditProps } from '@monorail/visualComponents/cardList/CardList';
import { RenderChoiceProps } from '@monorail/visualComponents/cardList/OptionsList';
export declare const useCardListForEditing: <A>(params: CardListCommonProps<A> & CardListEditProps<A>) => {
    readonly closeSearch: () => void;
    readonly handleCancel: () => void;
    readonly handleConfirm: () => void;
    readonly isButtonDisabled: boolean;
    readonly isSearchOpen: boolean;
    readonly openSearch: () => void;
    readonly options: readonly RenderChoiceProps<A>[];
    readonly searchValue: string;
    readonly setSearchValue: import("react").Dispatch<import("react").SetStateAction<string>>;
};
