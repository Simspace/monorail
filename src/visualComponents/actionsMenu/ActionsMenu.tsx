import React, { ReactNode } from 'react'

import { Sizes } from '@monorail/helpers/size'
import {
  PopOver,
  PopOverToggleProps,
} from '@monorail/metaComponents/popOver/PopOver'
import { FCwDP } from '@monorail/sharedHelpers/react'
import { ButtonDisplay } from '@monorail/visualComponents/buttons/buttonTypes'
import { IconButton } from '@monorail/visualComponents/buttons/IconButton'
import { SimpleListItem } from '@monorail/visualComponents/list/List'
import { Menu } from '@monorail/visualComponents/menu/Menu'

/*
 * Styles
 */

/*
 * Types
 */

export type MenuAction = {
  label: string
  iconName?: string
  /**
   * TODO: get rid of the need to have to pass a callback to close the popover.
   * This onClick should match the signature of all other react onClick.
   * If we weren't depending on asynchronous behavior in components that are consuming
   * ActionsMenu we would just be able to stop propagation on the SyntheticEvent
   */
  onClick: (onClickParent: () => void) => void
  isFeaturedAction?: boolean
  children?: ReactNode
  disabled?: boolean
}

export type ActionsMenuProps = {
  actions: Array<MenuAction>
  document?: Document
}

type DefaultProps = {
  toggle: (props: PopOverToggleProps) => ReactNode
}

/*
 * Components
 */

export const ActionsMenu: FCwDP<ActionsMenuProps, DefaultProps> = ({
  document,
  actions,
  toggle,
  ...domProps
}) => {
  return (
    <>
      {actions.length > 0 && (
        <PopOver
          document={document}
          popOver={({ onClick, ...otherProps }) => (
            <Menu onClick={onClick} {...otherProps}>
              {actions.reduce(
                (filtered, action, idx) => {
                  if (!action.isFeaturedAction) {
                    return filtered.concat(
                      <SimpleListItem
                        key={idx + action.label}
                        size={Sizes.DP32}
                        leftIcon={action.iconName}
                        primaryText={action.label}
                        onClick={e => action.onClick(() => onClick(e))}
                        disabled={action.disabled}
                      >
                        {action.children}
                      </SimpleListItem>,
                    )
                  }

                  return filtered
                },
                [] as Array<ReactNode>,
              )}
            </Menu>
          )}
          toggle={props => toggle({ ...props, ...domProps })}
        />
      )}
    </>
  )
}

ActionsMenu.defaultProps = {
  toggle: props => (
    <IconButton
      icon="more_vert"
      display={ButtonDisplay.Chromeless}
      {...props}
    />
  ),
}
