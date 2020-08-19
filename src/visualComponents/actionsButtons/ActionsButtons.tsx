import { isEmpty } from 'fp-ts/lib/Array'
import React, { FC, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { Colors } from '@monorail/helpers/color'
import { PopOverToggleProps } from '@monorail/metaComponents/popOver/PopOver'
import { isFalsy, isNil } from '@monorail/sharedHelpers/typeGuards'
import {
  ActionsMenu,
  ActionsMenuProps as ActionsMenuProps_,
  MenuAction,
} from '@monorail/visualComponents/actionsMenu/ActionsMenu'
import { Button, ButtonProps } from '@monorail/visualComponents/buttons/Button'
import {
  ButtonDisplay,
  ButtonSize,
} from '@monorail/visualComponents/buttons/buttonTypes'
import {
  DropdownButton,
  DropdownButtonListItem as DropdownButtonListItem_,
  Props as DropdownButtonProps_,
} from '@monorail/visualComponents/buttons/DropdownButton'
import {
  IconButton,
  IconButtonProps as IconButtonProps_,
} from '@monorail/visualComponents/buttons/IconButton'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import { TooltipMonorail } from '@monorail/visualComponents/tooltips/Tooltip'

/**
 * CatalogEntryPermission is coppied from
 * src/catalog/shared/state/catalogStateTypes.ts
 */
export enum CatalogEntryPermission {
  Delete = 'delete',
  List = 'list',
  Read = 'read',
  Write = 'write',
}

export enum ActionButton {
  TextButton = 'TEXT_BUTTON',
  IconButton = 'ICON_BUTTON',
  ActionsMenu = 'ACTIONS_MENU',
  DropdownButton = 'DROPDOWN_BUTTON',
  InfoButton = 'INFO_BUTTON',
}

export type Check = {
  check: boolean
}

/**
 * Regular ol' button
 * Include the label field, since buttons take children as the label
 */
export type TextButtonProps = Partial<Omit<ButtonProps, 'onClick'>> & {
  label: string
  onClick: (event: React.MouseEvent) => void
}
export type TextButtonAction = {
  type: ActionButton.TextButton
  actionProps: TextButtonProps
}
export type TextButtonActionWithCheck = TextButtonAction & Check

/** InfoButton */
export type InfoButtonProps = { info: string }
export type InfoButtonAction = {
  type: ActionButton.InfoButton
  actionProps: InfoButtonProps
}

/** Icon button */
export type IconButtonProps = Partial<IconButtonProps_>
export type IconButtonAction = {
  type: ActionButton.IconButton
  actionProps: IconButtonProps
}
export type IconButtonActionWithCheck = IconButtonAction & Check

/** Dropdown button */
export type DropdownButtonListItem = {
  actionProps: DropdownButtonListItem_
} & Check
export type DropdownButtonProps = Omit<DropdownButtonProps_, 'listItems'> & {
  listItems: Array<DropdownButtonListItem>
}
export type DropdownButtonAction = {
  type: ActionButton.DropdownButton
  actionProps: DropdownButtonProps
}

/** Actions menu */
export type ActionsMenuListItem = {
  actionProps: MenuAction
} & Check
export type ActionsMenuProps = Omit<ActionsMenuProps_, 'actions'> & {
  actions: Array<ActionsMenuListItem>
}
export type ActionsMenuAction = {
  type: ActionButton.ActionsMenu
  actionProps: ActionsMenuProps
}

export type ActionsButtonsAction =
  | ActionsMenuAction
  | DropdownButtonAction
  | IconButtonActionWithCheck
  | InfoButtonAction
  | TextButtonActionWithCheck

export type ActionsButtonsProps = {
  display?: ButtonDisplay
  actions?: Array<ActionsButtonsAction>
  size?: ButtonSize
  iconOnly?: boolean
  document?: Document
  toggle?: (props: PopOverToggleProps) => ReactNode
}

const ActionsButtonsBox = styled.div`
  display: flex;

  > * {
    margin-left: 8px;
  }
`

const makeTextButton = ({
  action,
  size,
  display,
}: {
  action: TextButtonActionWithCheck
  size: ActionsButtonsProps['size']
  display: ActionsButtonsProps['display']
}): JSX.Element | null =>
  action.check ? (
    <Button
      key={`${action.actionProps.label}-${action.actionProps.iconLeft}`}
      size={size}
      display={display}
      iconLeft={action.actionProps.iconLeft}
      onClick={action.actionProps.onClick}
      disabled={action.actionProps.disabled}
    >
      {action.actionProps.label}
    </Button>
  ) : null

const makeIconButton = ({
  action,
  size,
  display,
}: {
  action: IconButtonActionWithCheck | TextButtonActionWithCheck
  size: ActionsButtonsProps['size']
  display: ActionsButtonsProps['display']
}): JSX.Element | null => {
  if (action.check) {
    switch (action.type) {
      case ActionButton.IconButton:
        return (
          <IconButton
            key={`${action.actionProps.icon}`}
            icon={action.actionProps.icon ?? ''}
            size={size}
            display={display}
            onClick={action.actionProps.onClick}
            disabled={action.actionProps.disabled}
          />
        )
      case ActionButton.TextButton:
        const icon = isNil(action.actionProps.iconLeft)
          ? action.actionProps.iconRight
          : action.actionProps.iconLeft

        return (
          <IconButton
            key={`${icon}`}
            icon={icon ?? ''}
            size={size}
            display={display}
            onClick={action.actionProps.onClick}
            disabled={action.actionProps.disabled}
          />
        )
      default:
        return null
    }
  } else {
    return null
  }
}

const makeDropdownButton = (
  action: DropdownButtonAction,
): JSX.Element | null => {
  const accessibleListItems = action.actionProps.listItems.filter(
    action_ => action_.check,
  )

  return isEmpty(accessibleListItems) ? null : (
    <DropdownButton
      listItems={accessibleListItems.map(listItem => listItem.actionProps)}
      disabled={action.actionProps.disabled}
    />
  )
}

const makeInfoButton = (action: InfoButtonAction) => {
  return (
    <TooltipMonorail
      key={action.actionProps.info}
      label={action.actionProps.info}
    >
      <span
        css={css`
          margin-top: 4px;
        `}
      >
        <Icon icon="info" color={Colors.Black54a} />
      </span>
    </TooltipMonorail>
  )
}

const ActionsMenu_ = ({
  action,
  document,
}: {
  action: ActionsMenuAction
  document: ActionsButtonsProps['document']
}) => {
  const accessibleActions = action.actionProps.actions.filter(
    action_ => action_.check,
  )

  return isEmpty(accessibleActions) ? null : (
    <ActionsMenu
      actions={accessibleActions.map(action_ => action_.actionProps)}
    />
  )
}

export const ActionsButtons: FC<ActionsButtonsProps> = ({
  display,
  document,
  iconOnly,
  size,
  actions = [],
}) => {
  const {
    actionsMenus,
    dropdownButtons,
    iconButtons,
    infoButtons,
    textButtons,
  } = actions.reduce<{
    textButtons: Array<JSX.Element>
    iconButtons: Array<JSX.Element>
    dropdownButtons: Array<JSX.Element>
    actionsMenus: Array<JSX.Element>
    infoButtons: Array<JSX.Element>
  }>(
    (acc, action, idx) => {
      switch (action.type) {
        case ActionButton.TextButton:
          if (isFalsy(iconOnly)) {
            const textButton = makeTextButton({ action, size, display })

            return isNil(textButton)
              ? acc
              : { ...acc, textButtons: [...acc.textButtons, textButton] }
          } else {
            const textButtonIconOnly = makeIconButton({ action, size, display })

            return isNil(textButtonIconOnly)
              ? acc
              : {
                  ...acc,
                  iconButtons: [...acc.iconButtons, textButtonIconOnly],
                }
          }
        case ActionButton.IconButton:
          const iconButton = makeIconButton({ action, size, display })

          return isNil(iconButton)
            ? acc
            : {
                ...acc,
                iconButtons: [...acc.iconButtons, iconButton],
              }
        case ActionButton.DropdownButton:
          const dropdownButton = makeDropdownButton(action)

          return isNil(dropdownButton)
            ? acc
            : {
                ...acc,
                dropdownButtons: [...acc.dropdownButtons, dropdownButton],
              }
        case ActionButton.ActionsMenu:
          const actionsMenu = (
            <ActionsMenu_ key={idx} action={action} document={document} />
          )

          return isNil(actionsMenu)
            ? acc
            : {
                ...acc,
                actionsMenus: [...acc.actionsMenus, actionsMenu],
              }

        case ActionButton.InfoButton:
          const infoButton = makeInfoButton(action)

          return isNil(infoButton)
            ? acc
            : { ...acc, infoButtons: [...acc.infoButtons, infoButton] }
      }
    },
    {
      textButtons: [],
      iconButtons: [],
      dropdownButtons: [],
      infoButtons: [],
      actionsMenus: [],
    },
  )

  return (
    <ActionsButtonsBox>
      {textButtons}
      {iconButtons}
      {dropdownButtons}
      {infoButtons}
      {actionsMenus}
    </ActionsButtonsBox>
  )
}
