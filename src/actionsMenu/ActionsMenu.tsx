import React, { ReactNode } from 'react'
import { css } from 'styled-components'

import { ButtonDisplay, IconButtonShape } from '@monorail/buttons/buttonTypes'
import { IconButton } from '@monorail/buttons/IconButton'
import { Divider } from '@monorail/divider/Divider'
import { Sizes } from '@monorail/helpers/size'
import { SimpleListItem } from '@monorail/list/List'
import { Menu } from '@monorail/menu/Menu'
import { PopOver, PopOverToggleProps } from '@monorail/popOver/PopOver'
import { FCwDP } from '@monorail/sharedHelpers/react'

/*
 * Styles
 */

/*
 * Types
 */

export type ActionsMenuProps = {
  menuItems: Array<{
    label: string
    iconName?: string
    /**
     * TODO: get rid of the need to have to pass a callback to close the popover.
     * This onClick should match the signature of all other react onClick.
     * If we weren't depending on asynchronous behavior in components that are consuming
     * ActionsMenu we would just be able to stop propagation on the SyntheticEvent
     */
    onClick: (onClickParent: () => void) => void
    featuredAction?: boolean // Will be implemented later
    children?: ReactNode
  }>
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
  menuItems,
  toggle,
  ...domProps
}) => {
  const featuredItems = menuItems.filter(x => x.featuredAction)
  const standardItems = menuItems.filter(x => !x.featuredAction)
  return (
    <>
      {menuItems.length > 0 && (
        <PopOver
          document={document}
          popOver={({ onClick, ...otherProps }) => (
            <Menu onClick={onClick} {...otherProps}>
              {featuredItems.map((menuItem, idx) => (
                <SimpleListItem
                  key={idx + menuItem.label}
                  size={Sizes.DP32}
                  leftIcon={menuItem.iconName}
                  primaryText={menuItem.label}
                  onClick={e => menuItem.onClick(() => onClick(e))}
                >
                  {menuItem.children}
                </SimpleListItem>
              ))}
              <Divider
                css={css`
                  margin: 4px 0 3px;
                `}
              />
              {standardItems.map((menuItem, idx) => (
                <SimpleListItem
                  key={idx + menuItem.label}
                  size={Sizes.DP32}
                  leftIcon={menuItem.iconName}
                  primaryText={menuItem.label}
                  onClick={e => menuItem.onClick(() => onClick(e))}
                >
                  {menuItem.children}
                </SimpleListItem>
              ))}
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
