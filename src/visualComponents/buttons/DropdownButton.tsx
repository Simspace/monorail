import React from 'react'
import { css } from 'styled-components'
import { head, isEmpty } from 'fp-ts/lib/Array'
import { isNone, Option } from 'fp-ts/lib/Option'

import { PopOver } from '@monorail/metaComponents/popOver/PopOver'
import { Button, ButtonProps } from '@monorail/visualComponents/buttons/Button'
import {
  ButtonDisplay,
  ButtonSize,
} from '@monorail/visualComponents/buttons/buttonTypes'
import { IconButton } from '@monorail/visualComponents/buttons/IconButton'
import { ButtonsBar } from '@monorail/visualComponents/buttonsBar/ButtonsBar'
import {
  SimpleListItem,
  SimpleListItemProps,
} from '@monorail/visualComponents/list/List'
import { Menu } from '@monorail/visualComponents/menu/Menu'

const overrides = {
  button: css`
    margin-left: auto;
  `,
}

/**
 * The onClick event is for clicking the button, not the list item
 * in the dropdown. The logic for clicking the list item is handled
 * in this component.
 */
export type DropdownButtonListItem = Omit<
  Partial<SimpleListItemProps>,
  'onClick' | 'primaryText'
> & {
  onClick: (event: React.MouseEvent) => void
  primaryText: SimpleListItemProps['primaryText']
}

export type Props = {
  listItems: Array<DropdownButtonListItem>
} & Partial<Pick<ButtonProps, 'disabled'>>

type State = {
  selectedListItem: Option<DropdownButtonListItem>
}

export const DropdownButton = ({ listItems, disabled }: Props) => {
  const selectedListItem = head(listItems)
  /**
   * you can't have a DropdownButton if there are no items, therefore
   * there must be at least one item in the list and
   * selectedListItem will always be of type some
   */
  if (isEmpty(listItems) || isNone(selectedListItem)) {
    return null
  }

  return (
    <PopOver
      popOver={popOverProps => (
        <Menu
          onClick={popOverProps.onClick}
          position={popOverProps.position}
          isOpen={popOverProps.isOpen}
          togglePopOver={popOverProps.togglePopOver}
          closingAnimationCompleted={popOverProps.closingAnimationCompleted}
        >
          {listItems.map((listItem, idx) => (
            <SimpleListItem
              key={`${idx}-${listItem.primaryText}`}
              {...listItem}
              onClick={e => {
                listItem.onClick(e)
                popOverProps.onClick(e)
              }}
            />
          ))}
        </Menu>
      )}
      toggle={toggleProps => {
        const selectedListItemValue = selectedListItem.value

        return (
          <ButtonsBar size={ButtonSize.Compact} display={ButtonDisplay.Primary}>
            <Button
              onClick={selectedListItemValue.onClick}
              iconLeft={selectedListItemValue.leftIcon}
              iconRight={selectedListItemValue.rightIcon}
              disabled={disabled}
              css={overrides.button}
            >
              {selectedListItemValue.primaryText}
            </Button>

            <IconButton
              icon={toggleProps.isActive ? 'arrow_drop_up' : 'arrow_drop_down'}
              onClick={toggleProps.onClick}
            />
          </ButtonsBar>
        )
      }}
    />
  )
}
