import { array } from 'fp-ts/lib/Array'
import { left, right } from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/function'
import React, { FC, ReactNode } from 'react'
import { css } from 'styled-components'

import { PopOverToggleProps } from '@monorail/metaComponents/popOver/PopOver'
import { map } from '@monorail/sharedHelpers/fp-ts-ext/Array'
import {
  ActionsMenu,
  ActionsMenuProps,
} from '@monorail/visualComponents/actionsMenu/ActionsMenu'
import { Button } from '@monorail/visualComponents/buttons/Button'
import {
  ButtonDisplay,
  ButtonSize,
} from '@monorail/visualComponents/buttons/buttonTypes'
import { IconButton } from '@monorail/visualComponents/buttons/IconButton'

export type ActionButton = Omit<
  ActionsMenuProps['actions'][0],
  'featuredAction'
>

export type ActionsButtonsProps = {
  display?: ButtonDisplay
  actions?: Array<ActionButton>
  size?: ButtonSize
  iconOnly?: boolean
  document?: Document
  toggle?: (props: PopOverToggleProps) => ReactNode
}

export const ActionsButtons: FC<ActionsButtonsProps> = ({
  display,
  document,
  iconOnly,
  size,
  actions = [],
}) => {
  const { left: standardActions, right: featuredActions } = pipe(
    map((action: ActionButton) =>
      action.isFeaturedAction
        ? right<ActionButton, ReactNode>(
            iconOnly ? (
              <IconButton
                key={`${action.label}-${action.iconName}`}
                icon={action.iconName}
                title={action.label}
                size={size}
                display={display}
                onClick={() => action.onClick(() => {})}
                css={css`
                  ${actions.length > 1 && `margin-right: 8px;`}
                `}
              />
            ) : (
              <Button
                key={`${action.label}-${action.iconName}`}
                size={size}
                display={display}
                iconLeft={action.iconName}
                // hacky because of the onClick type of ActionMenu's menu items
                onClick={() => action.onClick(() => {})}
                css={css`
                  ${actions.length > 1 && `margin-right: 8px;`}
                `}
              >
                {action.label}
              </Button>
            ),
          )
        : left<ActionButton, ReactNode>(action),
    ),
    array.separate,
  )(actions)

  return (
    <>
      {featuredActions}
      {standardActions && (
        <ActionsMenu document={document} actions={standardActions} />
      )}
    </>
  )
}
