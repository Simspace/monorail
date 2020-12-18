/// <reference types="react" />
declare type CardListSearchSectionProps = {
    onSearchValueChange: (searchValue: string) => void;
    placeholder?: string;
    searchValue: string;
};
export declare const CardListSearchSection: (props: CardListSearchSectionProps) => JSX.Element;
export {};
