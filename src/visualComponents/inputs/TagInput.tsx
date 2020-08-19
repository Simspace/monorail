import { GetInputPropsOptions } from 'downshift'
import { elem } from 'fp-ts/lib/Array'
import { contramap, Eq, eqString } from 'fp-ts/lib/Eq'
import { fromPredicate, Option, some } from 'fp-ts/lib/Option'
import React from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'
import { Colors, getColor } from '@monorail/helpers/color'
import { unsafeCoerceToArray } from '@monorail/sharedHelpers/ReadonlyArray'
import { flexFlow } from '@monorail/helpers/flex'
import {
  borderRadius,
  BorderRadius,
  FontSizes,
  FontWeights,
} from '@monorail/helpers/exports'
import { isNonEmptyString, isNull } from '@monorail/sharedHelpers/typeGuards'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import { Text } from '@monorail/visualComponents/typography/Text'
import { Divider } from '@monorail/visualComponents/divider/Divider'
import { FormMultiSelectInput } from '@monorail/metaComponents/formMultiSelectInput/FormMultiSelectInput'
import {
  FormMultiSelectInputProps,
  SuggestionInfo,
} from '@monorail/metaComponents/formMultiSelectInput/FormMultiSelectInput.types'
import {
  ButtonDisplay,
  ButtonSize,
} from '@monorail/visualComponents/buttons/buttonTypes'
import { IconButton } from '@monorail/visualComponents/buttons/IconButton'

const focusedBorder = css`
  border: 1px solid ${getColor(Colors.BrandLightBlue)};
`
export const containerCss = css`
  ${flexFlow('column')};
  border-radius: 4px;
  border: 1px solid ${getColor(Colors.Gray12)};
  width: 256px;
  position: relative;
  background-color: ${getColor(Colors.White)};
  transition: 150ms;
  :focus {
    ${focusedBorder};
  }
  :focus-within {
    ${focusedBorder};
  }
`

const SuggestibleInput = styled.input`
  order: 1;
  border: 0;
  padding: 4px 6px;
  border-radius: 4px;

  input {
    color: ${getColor(Colors.Gray89)};
  }
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: ${getColor(Colors.Gray54)};
    font-style: italic;
  }
`
const SelectedOptions = styled.ol`
  order: 2;
  ${flexFlow('row', 'wrap')};
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
`
const SelectedOption = styled.li<{ fullWidth?: boolean }>`
  ${flexFlow('row')};
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  background-color: ${getColor(Colors.BrandLightBlue, 0.1)};
  color: ${getColor(Colors.Gray89)};
  margin: 0 4px 4px;
  padding-right: ${props => (props.fullWidth ? '6px' : '0')};
  max-width: calc(100% - 8px);
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  transition: 150ms;
  :focus {
    ${focusedBorder};
  }
  ${Icon} {
    cursor: pointer;
    margin: 0;
    border-radius: 4px;
    height: 24px;
    width: 24px;
    padding: 4px 0 0 4px;
  }
  :hover {
    ${Icon} {
      color: ${getColor(Colors.BrandLightBlue)};
    }
  }
`
const SelectedOptionText = styled(Text)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 4px 8px;
`
type Position = 'top' | 'bottom'
const Suggestions = styled.aside<{ isOpen: boolean; position: Position }>`
  transform: ${props =>
    props.position === 'top' ? 'translateY(-100%)' : 'none'};
  background-color: ${getColor(Colors.White)};
  box-shadow: 0 3px 5px -1px ${getColor(Colors.Black, 0.2)},
    0 6px 10px 0 ${getColor(Colors.Black, 0.14)},
    0 1px 18px 0 ${getColor(Colors.Gray12)};
  left: 4px;
  list-style: none;
  margin: 0;
  max-height: 256px;
  max-width: 248px;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0 0 4px 0;
  pointer-events: ${props => (props.isOpen ? 'auto' : 'none')};
  position: absolute;
  right: 4px;
  top: ${props => (props.position === 'top' ? 'auto' : '100%')};
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  z-index: 1;
`
export const TagInputItem = (props: {
  item: string
  handleClick: () => void
}) => (
  <div
    css={`
      ${flexFlow('row')};

      justify-content: space-between;
      padding: 4px 8px;
      margin: 4px 0;
      background: ${getColor(Colors.BrandLightBlue, 0.12)};
      color: ${getColor(Colors.Gray89)};
      ${borderRadius(BorderRadius.Small)};
    `}
  >
    {props.item}
    <IconButton
      css={`
        margin-left: 8px;
      `}
      size={ButtonSize.Dense}
      display={ButtonDisplay.Chromeless}
      icon="close"
      onClick={props.handleClick}
    />
  </div>
)

const SuggestionList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
`

const Suggestion = styled.li<{ isHighlighted: boolean }>`
  cursor: pointer;
  padding: 4px 16px;
  :hover {
    background-color: ${getColor(Colors.SelectionSecondaryOnHover, 0.54)};
  }
  ${props =>
    props.isHighlighted
      ? css`
          background-color: ${getColor(Colors.SelectionSecondaryOnHover, 0.54)};
        `
      : ``}
`

type Tag = 'fullWidth' | 'text'
const selectedOptionComponent = (
  removeOption: (value: string) => void,
  tag?: Tag,
) => {
  switch (tag) {
    case 'text': {
      return (value: string) => (
        <li
          key={value}
          css={`
            width: 100%;
          `}
        >
          <Text fontWeight={FontWeights.Book} fontSize={FontSizes.Title5}>
            {value}
          </Text>
        </li>
      )
    }
    case 'fullWidth': {
      return (value: string) => (
        <SelectedOption key={value} fullWidth={true}>
          <SelectedOptionText
            fontWeight={FontWeights.Book}
            fontSize={FontSizes.Title5}
          >
            {value}
          </SelectedOptionText>
          <Icon onClick={() => removeOption(value)} icon="clear" />
        </SelectedOption>
      )
    }
    default: {
      return (value: string) => (
        <SelectedOption key={value}>
          <SelectedOptionText
            fontWeight={FontWeights.Book}
            fontSize={FontSizes.Title5}
          >
            {value}
          </SelectedOptionText>
          <Icon
            onClick={() => removeOption(value)}
            cssOverrides={`margin: 4px;`}
            icon="clear"
          />
        </SelectedOption>
      )
    }
  }
}
export const renderSelectedOptions = (tag?: Tag) => (
  selectedOptions: ReadonlyArray<string>,
  removeOption: (value: string) => void,
): React.ReactElement => (
  <SelectedOptions>
    {unsafeCoerceToArray(selectedOptions).map(
      selectedOptionComponent(removeOption, tag),
    )}
  </SelectedOptions>
)

export const renderSuggestibleInput = (placeholder: string) => (
  props: GetInputPropsOptions,
) => (
  <SuggestibleInput
    {...(props as Omit<GetInputPropsOptions, 'ref' | 'as'>)}
    placeholder={placeholder}
  />
)

export const shouldShowNewSuggestion = (
  searchValue: string,
  suggestions: ReadonlyArray<string>,
  selectedOptions: ReadonlyArray<string>,
) => {
  const regExpChar = /[\\^$.*+?()[\]{}|]/g // from lodash escapeRegExp function
  const searchValueRegex = new RegExp(
    `^${searchValue.replace(regExpChar, '\\$&')}$`,
    'ig',
  )
  const hasPerfectMatch =
    suggestions.findIndex(s => searchValueRegex.test(s)) > -1
  const hasBeenSelected = suggestions.some(s =>
    elem(eqString)(s, unsafeCoerceToArray(selectedOptions)),
  )
  return searchValue.length > 0 && !hasPerfectMatch && !hasBeenSelected
}

export const renderSuggestions = (position: Position) => (
  suggestions: ReadonlyArray<string>,
  info: SuggestionInfo<string>,
): React.ReactElement => {
  const {
    isFocused,
    searchValue,
    isHighlighted,
    getSuggestionProps,
    selectedOptions,
  } = info
  const hasHighlightedSuggestion = suggestions.some(s => isHighlighted(s))

  const showNewSuggestion = shouldShowNewSuggestion(
    searchValue,
    suggestions,
    selectedOptions,
  )

  return (
    <Suggestions
      isOpen={isFocused && searchValue.length > 0}
      position={position}
    >
      <Text
        fontWeight={FontWeights.Medium}
        fontSize={FontSizes.Title5}
        margin="12px 16px 4px 16px"
        css={`
          display: block;
          color: ${getColor(Colors.Gray38)};
        `}
      >
        {suggestions.length > 0 ? 'Suggestions' : 'No Matches'}
      </Text>

      <SuggestionList>
        {suggestions.map((s, i) => (
          <Suggestion
            {...getSuggestionProps({ item: s })}
            key={`${s}-${i}`}
            isHighlighted={hasHighlightedSuggestion && isHighlighted(s)}
          >
            {searchValue.length > 0 ? highlightSearchValue(s, searchValue) : s}
          </Suggestion>
        ))}
        {showNewSuggestion && (
          <>
            <li key="divider">
              <Divider />
            </li>

            <Suggestion
              {...getSuggestionProps({
                item: searchValue,
              })}
              key={'generic-search-value'}
              isHighlighted={!hasHighlightedSuggestion}
            >
              <strong>{searchValue}</strong> (New Value)
            </Suggestion>
          </>
        )}
      </SuggestionList>
    </Suggestions>
  )
}
export function highlightSearchValue(labelName: string, searchValue: string) {
  return findHighlightedSearchValues(
    labelName,
    normalize(searchValue),
  ).map(({ highlighted, value }, i) =>
    highlighted ? <strong key={`${value}-${i}`}>{value}</strong> : value,
  )
}
/**
 * Finds what parts of a given string matches the given search value.
 */
function findHighlightedSearchValues(
  value: string,
  searchValue: string,
): ReadonlyArray<{ highlighted: boolean; value: string }> {
  if (eqNormalizedString.equals(value, searchValue)) {
    return [{ highlighted: true, value }]
  }
  const regExpChar = /[\\^$.*+?()[\]{}|]/g // from lodash escapeRegExp function
  const regex = new RegExp(`${searchValue.replace(regExpChar, '\\$&')}`, 'ig')
  const startParts: Array<{ highlighted: boolean; value: string }> = []

  const indexedParts = Array.from(value.matchAll(regex)).reduce(
    (acc, match) => {
      const startIndex = match.index!
      const before = value.slice(acc.index, startIndex)

      const endIndex = startIndex + match[0].length
      const matchedText = value.slice(startIndex, endIndex)

      return {
        index: endIndex,
        parts: [
          ...acc.parts,
          { highlighted: false, value: before || '' },
          { highlighted: true, value: matchedText },
        ],
      }
    },
    { index: 0, parts: startParts },
  )

  const after = value.slice(indexedParts.index)

  return after
    ? [...indexedParts.parts, { highlighted: false, value: after }]
    : indexedParts.parts
}

export const normalize = (str: string): string => str.trim().toLocaleLowerCase()

export const eqNormalizedString: Eq<string> = contramap(normalize)(eqString)

export const getSuggestions = (selectedLabels: ReadonlyArray<string>) => (
  searchValue: string,
  labels: ReadonlyArray<string>,
) =>
  labels.filter(
    l =>
      includesSearchValue(l, searchValue) &&
      !elem(eqNormalizedString)(l, unsafeCoerceToArray(selectedLabels)),
  )

const includesSearchValue = (value: string, searchValue: string) =>
  normalize(value).includes(normalize(searchValue))

type GenericTagInputProps<T> = Omit<
  FormMultiSelectInputProps<T>,
  'renderInput'
> & {
  placeholder: string
  cssOverrides?: SimpleInterpolation
  position?: Position
}
export function GenericTagInput<T>({
  placeholder,
  cssOverrides = '',
  selectedOptions,
  options,
  eq,
  ...otherProps
}: GenericTagInputProps<T>) {
  return (
    <FormMultiSelectInput<T>
      containerCss={containerCss.concat(cssOverrides)}
      defaultHighlightedIndex={0}
      renderInput={renderSuggestibleInput(placeholder)}
      eq={eq}
      selectedOptions={selectedOptions}
      options={options}
      {...otherProps}
    />
  )
}

type TagInputProps = Omit<
  GenericTagInputProps<string>,
  | 'eq'
  | 'getSuggestedValues'
  | 'renderInput'
  | 'renderSelectedOptions'
  | 'renderSuggestions'
  | 'searchValueToItem'
> & {
  placeholder: string
  tag?: Tag
  eq?: Eq<string>
  showSuggestions?: boolean
  position?: Position
  searchValueToItem?: (searchValue: string) => Option<string>
}

export const TagInput = ({
  tag,
  selectedOptions,
  eq = eqNormalizedString,
  showSuggestions = true,
  position = 'bottom',
  searchValueToItem = some,
  ...otherProps
}: TagInputProps) => (
  <GenericTagInput<string>
    eq={eq}
    renderSelectedOptions={renderSelectedOptions(tag)}
    getSuggestedValues={getSuggestions(selectedOptions)}
    renderSuggestions={
      showSuggestions ? renderSuggestions(position) : () => null
    }
    selectedOptions={selectedOptions}
    validateItem={fromPredicate(isNonEmptyString)}
    searchValueToItem={searchValueToItem}
    {...otherProps}
  />
)
