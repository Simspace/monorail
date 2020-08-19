import React, { HTMLProps, FocusEvent } from 'react'
import Downshift from 'downshift'
import styled from 'styled-components'
import { pipe } from 'fp-ts/lib/pipeable'

import { DisplayType } from '@monorail/visualComponents/inputs/inputTypes'
import { flexFlow } from '@monorail/helpers/flex'
import { Label } from '@monorail/visualComponents/inputs/Label'

import * as O from 'fp-ts/lib/Option'
import { FormMultiSelectInputProps } from './FormMultiSelectInput.types'
import { useFormMultiSelectInput } from './FormMultiSelectInput.hooks'

const ENTER_KEY_VALUE = 'Enter'
const ESCAPE_KEY_VALUE = 'Escape'

const FlexColumn = styled.div`
  ${flexFlow('column')};
  margin-bottom: 24px;
  width: 100%;
`

/**
 * Provides the functionality behind creating an input of some kind that will
 * filter a set of suggestions or can be used to create new values by pressing
 * the 'Enter' key. Multiple UIs have been mentioned by design, so this
 * defers UI concerns to render props to leave it open for extension.
 *
 * It has been attempted to try to satisfy the Open-Closed Principle - the "O" in SOLID -
 * to make it easy enough to build forms with multiple UI variants with the same
 * multi-select functionality.
 *
 * @example
 * <section css={containerCss}>
 * --------------------------
 * |  renderSelectedOptions |
 * --------------------------
 * |  renderInput           |
 * --------------------------
 * |  renderSuggestions     |
 * --------------------------
 * </section>
 */
export function FormMultiSelectInput<A>(props: FormMultiSelectInputProps<A>) {
  const {
    containerCss,
    defaultHighlightedIndex,
    disabled,
    display,
    label,
    renderInput,
    renderSelectedOptions,
    renderSuggestions,
    required = false,
    searchValueToItem,
    selectedOptions,
  } = props
  const {
    addItem,
    checkIsHighlighted,
    removeOption,
    searchValue,
    setSearchValue,
    suggestions,
  } = useFormMultiSelectInput(props)

  return (
    <Downshift
      inputValue={searchValue}
      onSelect={addItem}
      defaultHighlightedIndex={defaultHighlightedIndex}
    >
      {({
        getInputProps,
        getItemProps,
        getRootProps,
        highlightedIndex,
        isOpen,
        toggleMenu,
      }) => {
        const defaultInputProps = {
          disabled,
          onFocus: () => toggleMenu({ isOpen: true }),
          onBlur: (ev: FocusEvent<HTMLInputElement>) => {
            toggleMenu({ isOpen: false })
            setSearchValue('')
            ev.target.value = ''
          },
          onChange: (ev: { currentTarget: HTMLInputElement }) =>
            setSearchValue(ev.currentTarget.value),
          onKeyDown: (
            ev: KeyboardEvent & { currentTarget: HTMLInputElement },
          ) => {
            const notSelectingHighlightedOption = highlightedIndex === null
            const enterKeyWasPressed = ev.key === ENTER_KEY_VALUE
            if (notSelectingHighlightedOption && enterKeyWasPressed) {
              // Don't trigger a form submit
              ev.preventDefault()

              pipe(
                ev.currentTarget.value,
                searchValueToItem,
                O.fold(
                  () => {},
                  v => {
                    addItem(v)
                    ev.currentTarget.value = ''
                  },
                ),
              )
            }
          },
          placeholder: 'Type any tag...',
        }
        const suggestionInfo = {
          getSuggestionProps: getItemProps,
          isHighlighted: (option: A) =>
            checkIsHighlighted(option, highlightedIndex),
          isOpen: isOpen && suggestions.length > 0 && searchValue.length > 0,
          searchValue,
          isFocused: isOpen,
          selectedOptions,
        }
        const sectionProps = getRootProps() as HTMLProps<HTMLElement>

        return (
          <FlexColumn>
            <Label label={label} required={required} display={display} />
            <section {...sectionProps} css={containerCss}>
              {renderSelectedOptions(selectedOptions, removeOption)}

              {display === DisplayType.Edit && (
                <>
                  {renderInput(getInputProps(defaultInputProps))}
                  {renderSuggestions(suggestions, suggestionInfo)}
                </>
              )}
            </section>
          </FlexColumn>
        )
      }}
    </Downshift>
  )
}
