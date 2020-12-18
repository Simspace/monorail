import React from 'react'

import { Colors, getColor, visible } from '@monorail/helpers/exports'
import styled, { css } from '@monorail/helpers/styled-components'
import { isNotNil } from '@monorail/sharedHelpers/typeGuards'
import { ButtonDisplay } from '@monorail/visualComponents/buttons/buttonTypes'
import { IconButton } from '@monorail/visualComponents/buttons/IconButton'
import {
  ListItemProps,
  OptionsList,
  RenderChoiceProps,
} from '@monorail/visualComponents/cardList/OptionsList'
import { EmptyState } from '@monorail/visualComponents/emptyState/EmptyState'
import { IconType } from '@monorail/visualComponents/icon/IconType'
import {
  SimpleListItem,
  StyledListItemIcon,
} from '@monorail/visualComponents/list/List'

const IconButtonContainer = styled.div`
  ${visible(false)}
`

type RenderSelectedItemParams<A> = {
  readonly onRemoveItem: (item: A) => void

  /**
   * A function that returns the corresponding `IconType` for an item. If not
   * provided, no icon will be rendered.
   */
  readonly toIcon?: (item: A) => IconType

  readonly toListItem: (item: A) => ListItemProps
}

const StyledSimpleListItem = styled(SimpleListItem)`
  padding: 4px 8px;

  ${StyledListItemIcon} {
    color: ${getColor(Colors.Gray54)};
    font-size: 24px;
  }

  &:hover {
    ${IconButtonContainer} {
      ${visible(true)}
    }
  }
`

/**
 * Common use case for rendering a selected item in the `CardList` view mode
 */
export const renderDefaultSelectedItem = <A extends unknown>({
  onRemoveItem,
  toIcon,
  toListItem,
}: RenderSelectedItemParams<A>) => (item: A) => {
  const { id, primaryText, secondaryText } = toListItem(item)

  const leftIcon = isNotNil(toIcon) ? toIcon(item) : undefined

  return (
    <StyledSimpleListItem
      key={id}
      primaryText={primaryText}
      secondaryText={secondaryText}
      leftIcon={leftIcon}
    >
      <IconButtonContainer>
        <IconButton
          icon="cancel"
          display={ButtonDisplay.Chromeless}
          css={css`
            color: ${getColor(Colors.Gray24)};

            &:hover {
              color: ${getColor(Colors.Gray54)};
            }
          `}
          onClick={() => onRemoveItem(item)}
        />
      </IconButtonContainer>
    </StyledSimpleListItem>
  )
}

export const renderDefaultEmptyState = ({
  icon = 'ghost_empty',
  message = "There's no one here but me.",
  isSearchOpen,
  openSearch,
}: {
  icon?: IconType
  message?: string
  isSearchOpen: boolean
  openSearch: () => void
}) => (
  <EmptyState
    css={css`
      height: 100%;
    `}
    icon={icon}
    message={message}
    button={
      isSearchOpen
        ? undefined
        : {
            text: 'Add',
            onClick: openSearch,
          }
    }
  />
)

export const renderDefaultOptionsList = <A extends unknown>(
  options: ReadonlyArray<RenderChoiceProps<A>>,
) => <OptionsList options={options} />
