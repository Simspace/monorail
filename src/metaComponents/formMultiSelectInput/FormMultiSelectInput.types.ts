import { Eq } from 'fp-ts/lib/Eq'
import { CSSObject, FlattenInterpolation, ThemeProps } from 'styled-components'
import { GlobalAppThemeInterface } from '@monorail/helpers/theme'
import { DisplayType } from '@monorail/visualComponents/inputs/inputTypes'
import { GetInputPropsOptions, GetItemPropsOptions } from 'downshift'
import { Option } from 'fp-ts/lib/Option'

export type FormMultiSelectInputProps<A> = {
  /** Label */
  readonly label: string

  /** All available options */
  readonly options: ReadonlyArray<A>

  /** All selected options */
  readonly selectedOptions: ReadonlyArray<A>

  /** Listen for changes to selected options */
  readonly onChange: (selectedOptions: ReadonlyArray<A>) => void

  /** Equality check */
  readonly eq: Eq<A>

  /** Input disabled or not */
  readonly disabled?: boolean

  /** Render selected options as you will */
  readonly renderSelectedOptions: (
    selectedOptions: ReadonlyArray<A>,
    removeOption: (value: A) => void,
  ) => React.ReactElement | null

  /** Render input component as you will */
  readonly renderInput: (
    props: GetInputPropsOptions,
  ) => React.ReactElement | null

  /** Render suggestions as you would like */
  readonly renderSuggestions: (
    suggestions: ReadonlyArray<A>,
    additionalInfo: SuggestionInfo<A>,
  ) => React.ReactElement | null

  /**
   * Get the suggested values.
   * Allows customizing the search algorithm.
   */
  readonly getSuggestedValues: (
    searchValue: string,
    options: ReadonlyArray<A>,
  ) => ReadonlyArray<A>

  /**
   * Edit or View mode
   * In 'View' mode renderInput, renderSuggestions, and getSuggestedValues will not be called.
   */
  readonly display: DisplayType

  /**
   * Transform a `searchValue` string to item type `A`
   * This returns an `Option<A>` because this transformation might not always be possible
   */
  readonly searchValueToItem: (searchValue: string) => Option<A>

  /** Allow customizing the container of rendered elements */
  readonly containerCss?:
    | string
    | CSSObject
    | FlattenInterpolation<ThemeProps<GlobalAppThemeInterface>>

  /** Required in form */
  readonly required?: boolean

  /**
   * Validate item before adding to selectedOptions
   * NB: `a` can be `undefined` if the user presses Esc
   */
  readonly validateItem?: (a: A | undefined) => Option<A>

  /** Transform search value before calling `setSearchValue` */
  readonly modifySetSearchValue?: (searchValue: string) => string

  /** Set initial focus on a suggestion */
  readonly defaultHighlightedIndex?: number
}

export type SuggestionInfo<A> = {
  readonly selectedOptions: ReadonlyArray<A>
  readonly searchValue: string
  readonly isFocused: boolean
  readonly isOpen: boolean
  readonly isHighlighted: (option: A) => boolean
  // Downshift does not allow generics for its element type.
  readonly getSuggestionProps: <B = HTMLElement>(
    options: GetItemPropsOptions<A>,
  ) => Omit<GetItemPropsOptions<A>, 'ref' | 'as'> & {
    ref?: Exclude<React.LegacyRef<B>, string>
  }
}
