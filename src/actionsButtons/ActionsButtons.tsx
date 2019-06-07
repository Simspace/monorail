import React, { FC, ReactNode } from 'react'
import { css } from 'styled-components'

import {
  ActionsMenu,
  ActionsMenuProps,
} from '@monorail/actionsMenu/ActionsMenu'
import { Button } from '@monorail/buttons/Button'
import { ButtonDisplay, ButtonSize } from '@monorail/buttons/buttonTypes'
import { IconButton } from '@monorail/buttons/IconButton'
import { PopOverToggleProps } from '@monorail/popOver/PopOver'

export type ActionsButtonsProps = {
  display?: ButtonDisplay
  featuredActions?: Array<
    Omit<ActionsMenuProps['menuItems'][0], 'featuredAction'>
  >
  standardActions?: Array<
    Omit<ActionsMenuProps['menuItems'][0], 'featuredAction'>
  >
  size?: ButtonSize
  iconOnly?: boolean
  document?: Document
  toggle?: (props: PopOverToggleProps) => ReactNode
}

const combineActions = (
  standardActions: ActionsButtonsProps['standardActions'] = [],
  featuredActions: ActionsButtonsProps['featuredActions'] = [],
) =>
  featuredActions
    .map(
      (action): ActionsMenuProps['menuItems'][0] => ({
        ...action,
        featuredAction: true,
        /**
         * Remapping onClick to be able to close the action menu.
         * This wouldn't be necessary if the interfaces were the same
         */
        onClick: (parentClick: () => void) => {
          action.onClick(() => {})
          parentClick()
        },
      }),
    )
    .concat(standardActions)

export const ActionsButtons: FC<ActionsButtonsProps> = ({
  display,
  document,
  featuredActions,
  iconOnly,
  size,
  standardActions,
}) => (
  <>
    {featuredActions &&
      featuredActions.map(action =>
        iconOnly ? (
          <IconButton
            key={`${action.label}-${action.iconName}`}
            icon={action.iconName}
            title={action.label}
            size={size}
            display={display}
            onClick={() => action.onClick(() => {})}
          />
        ) : (
          <Button
            key={`${action.label}-${action.iconName}`}
            size={size}
            display={display}
            iconLeft={action.iconName}
            // hacky because of the onClick type of ActionMenu's menu items
            onClick={() => action.onClick(() => {})}
          >
            {action.label}
          </Button>
        ),
      )}
    {standardActions && (
      <ActionsMenu
        css={css`
          margin-left: 8px;
        `}
        document={document}
        menuItems={combineActions(standardActions, featuredActions)}
      />
    )}
  </>
)
