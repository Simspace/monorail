import { useState, useMemo, useCallback } from 'react'
import { not, identity, flow } from 'fp-ts/lib/function'
import { elem as elemArray, filter, lookup, uniq } from 'fp-ts/lib/Array'
import { pipe } from 'fp-ts/lib/pipeable'
import { elem as elemOption, fold, fromPredicate } from 'fp-ts/lib/Option'

import { unsafeCoerceToArray } from '@monorail/sharedHelpers/ReadonlyArray'
import { isNotNil } from '@monorail/sharedHelpers/typeGuards'
import { DisplayType } from '@monorail/visualComponents/inputs/inputTypes'

import { FormMultiSelectInputProps } from './FormMultiSelectInput.types'

export function useFormMultiSelectInput<A>(
  props: FormMultiSelectInputProps<A>,
) {
  const {
    display,
    eq,
    getSuggestedValues,
    onChange,
    options,
    selectedOptions,
    validateItem = fromPredicate(isNotNil),
    modifySetSearchValue = identity,
  } = props

  const [searchValue, setSearchValue_] = useState('')

  const setSearchValue = useCallback(
    flow(modifySetSearchValue, setSearchValue_),
    [modifySetSearchValue],
  )

  const checkIsASuggestion = useMemo(
    () => (as: Array<A>) => (a: A): boolean => elemArray(eq)(a)(as),
    [eq],
  )

  const suggestions = useMemo(
    () =>
      // Don't bother running the search in view mode
      display === DisplayType.View
        ? []
        : pipe(
            getSuggestedValues(searchValue, options),
            unsafeCoerceToArray,
            filter(
              pipe(
                selectedOptions,
                unsafeCoerceToArray,
                checkIsASuggestion,
                not,
              ),
            ),
          ),
    [
      display,
      getSuggestedValues,
      checkIsASuggestion,
      options,
      searchValue,
      selectedOptions,
    ],
  )
  const removeOption = useCallback(
    (value: A) => onChange(selectedOptions.filter(a => !eq.equals(value, a))),
    [eq, onChange, selectedOptions],
  )
  const addItem = useCallback(
    (item: A) => {
      pipe(
        item,
        validateItem,
        fold(
          () => {},
          item_ => onChange(uniq(eq)([item_, ...selectedOptions])),
        ),
      )
      setSearchValue('')
    },
    [validateItem, setSearchValue, onChange, eq, selectedOptions],
  )
  const checkIsHighlighted = useCallback(
    (item: A, highlightedIndex: number | null) => {
      if (highlightedIndex === null) {
        return false
      }

      return elemOption(eq)(item, lookup(highlightedIndex, suggestions))
    },
    [eq, suggestions],
  )

  return {
    searchValue,
    setSearchValue,
    suggestions,
    removeOption,
    addItem,
    checkIsHighlighted,
  } as const
}
