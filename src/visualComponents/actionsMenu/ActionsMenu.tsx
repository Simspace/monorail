import React, { FC, ReactNode } from 'react'

import { Sizes } from '@monorail/helpers/size'
import {
  PopOver,
  PopOverToggleProps,
} from '@monorail/metaComponents/popOver/PopOver'
import { ButtonDisplay } from '@monorail/visualComponents/buttons/buttonTypes'
import { IconButton } from '@monorail/visualComponents/buttons/IconButton'
import { IconType } from '@monorail/visualComponents/icon/IconType'
import { SimpleListItem } from '@monorail/visualComponents/list/List'
import { Menu } from '@monorail/visualComponents/menu/Menu'
import { Colors } from '@monorail/helpers/color'

/*
 * Styles
 */

/*
 * Types
 */

export type MenuAction = {
  label: ReactNode
  iconName?: IconType
  iconColor?: Colors
  chromeless?: boolean
  /**
   * TODO: get rid of the need to have to pass a callback to close the popover.
   * This onClick should match the signature of all other react onClick.
   * If we weren't depending on asynchronous behavior in components that are consuming
   * ActionsMenu we would just be able to stop propagation on the SyntheticEvent
   */
  onClick: (
    onClickParent: () => void,
    event: React.MouseEvent<HTMLDivElement>,
  ) => void
  isFeaturedAction?: boolean
  children?: ReactNode
  disabled?: boolean
}

export type ActionsMenuProps = {
  actions: Array<MenuAction>
  document?: Document
  toggle?: (props: PopOverToggleProps) => ReactNode
}

/*
 * Component
 */

export const ActionsMenu: FC<ActionsMenuProps> = props => {
  const {
    document,
    actions,
    toggle = (toggleProps: PopOverToggleProps) => (
      <IconButton
        icon="more_vert"
        display={ButtonDisplay.Chromeless}
        {...toggleProps}
      />
    ),
    ...domProps
  } = props
  return (
    <>
      {actions.length > 0 && (
        <PopOver
          popOver={({ onClick, ...otherProps }) => (
            <Menu onClick={onClick} {...otherProps}>
              {actions.reduce<Array<ReactNode>>((filtered, action, idx) => {
                /**
                 * Setting a field on a menu item to `isFeaturedAction: true`
                 * does not have the intended effect it used to. Better to not
                 * use this field when creating buttons to be used with the
                 * ActionsMenu component.
                 * - AR - 20200716
                 */
                if (!action.isFeaturedAction) {
                  return filtered.concat(
                    <SimpleListItem
                      key={idx}
                      size={Sizes.DP32}
                      leftIcon={action.iconName}
                      leftIconColor={action.iconColor}
                      primaryText={action.label}
                      onClick={e => action.onClick(() => onClick(e), e)}
                      disabled={action.disabled}
                    >
                      {action.children}
                    </SimpleListItem>,
                  )
                }

                return filtered
              }, [])}
            </Menu>
          )}
          toggle={toggleProps => toggle({ ...toggleProps, ...domProps })}
        />
      )}
    </>
  )
}
