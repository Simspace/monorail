import { FormMultiSelectInputProps } from './FormMultiSelectInput.types';
export declare function useFormMultiSelectInput<A>(props: FormMultiSelectInputProps<A>): {
    readonly searchValue: string;
    readonly setSearchValue: (searchValue: string) => void;
    readonly suggestions: A[];
    readonly removeOption: (value: A) => void;
    readonly addItem: (item: A) => void;
    readonly checkIsHighlighted: (item: A, highlightedIndex: number | null) => boolean;
};
//# sourceMappingURL=FormMultiSelectInput.hooks.d.ts.map