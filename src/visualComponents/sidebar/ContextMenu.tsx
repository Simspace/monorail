import { array, isEmpty } from 'fp-ts/lib/Array'
import { none, some } from 'fp-ts/lib/Option'
import React, {
  Component,
  createRef,
  MouseEvent,
  ReactNode,
  StatelessComponent,
} from 'react'
import Link from 'react-router/lib/Link'
import styled, { css } from 'styled-components'

import {
  Colors,
  ellipsis,
  flexFlow,
  FontSizes,
  getColor,
  Sizes,
  typography,
} from '@monorail/helpers/exports'
import { PopOverChildProps } from '@monorail/metaComponents/popOver/PopOver'
import { isNil } from '@monorail/sharedHelpers/typeGuards'
import { CommonComponentType, LinkProps } from '@monorail/types'
import { Search } from '@monorail/visualComponents/inputs/Search'
import { SearchController } from '@monorail/visualComponents/inputs/SearchController'
import {
  ListContainer,
  ListItem,
  ListItemGraphic,
  ListItemPrimaryText,
  ListItemSecondaryText,
  ListItemText,
} from '@monorail/visualComponents/list/List'
import { SidebarDropDown } from '@monorail/visualComponents/sidebar/SidebarDropDown'

const SearchContainer = styled.div`
  ${flexFlow('row')};

  align-items: center;
  flex-shrink: 0;
`

const MenuHeader = styled.span<CommonComponentType>(
  ({ cssOverrides }) => css`
    ${typography(500, FontSizes.Title5, '12px')};
    ${ellipsis};

    color: ${getColor(Colors.Black62)};
    flex-shrink: 0;

    ${cssOverrides};
  `,
)

const MenuItemIconRow = styled.div`
  ${flexFlow('row')};

  flex: 1 1 100%;
  margin: 8px 6px 12px;
`

type SimpleListItemProps = CommonComponentType &
  LinkProps & {
    dense?: boolean
    disabled?: boolean
    leftIcon?: string
    onClick?: (event: MouseEvent<HTMLDivElement>) => void
    primaryText?: ReactNode
    rightIcon?: string
    secondaryText?: ReactNode
    size?: Sizes
    meta?: ReactNode
  }

const ContextMenuItem: StatelessComponent<SimpleListItemProps> = ({
  leftIcon,
  rightIcon,
  primaryText,
  secondaryText,
  children,
  dense,
  meta,
  size,
  cssOverrides,
  ...otherProps
}) => (
  <ListItem
    dense={dense}
    size={size}
    css={css`
      padding: 0 6px;
    `}
    {...otherProps}
  >
    {!isNil(leftIcon) && (
      <ListItemGraphic
        icon={leftIcon}
        dense={dense}
        css={css`
          color: ${getColor(Colors.Black62)};
          margin-top: 12px;
        `}
      />
    )}

    {isNil(secondaryText) && isNil(meta) ? (
      <ListItemPrimaryText
        css={css`
          margin-top: 12px;
        `}
      >
        {primaryText}
      </ListItemPrimaryText>
    ) : (
      <ListItemText>
        <ListItemPrimaryText
          css={css`
            margin-top: 6px;
          `}
        >
          {primaryText}
        </ListItemPrimaryText>
        {isNil(secondaryText) ? null : (
          <ListItemSecondaryText
            css={css`
              margin-bottom: 6px;
            `}
          >
            {secondaryText}
          </ListItemSecondaryText>
        )}

        {meta}
      </ListItemText>
    )}

    {!isNil(rightIcon) && <ListItemGraphic icon={rightIcon} dense={dense} />}
    {children}
  </ListItem>
)

export type ContextMenuItemProps = {
  description: string
  icons?: ReactNode
  isLabelActive?: boolean
  key: number | string
  link: string
  title: string
}

export type ContextMenuItems = Array<{
  title: string
  items: Array<ContextMenuItemProps>
}>

type Props = PopOverChildProps & {
  onItemClick?: (item: ContextMenuItemProps) => void
  contextItems: ContextMenuItems
  icon: string
  renderFilter: () => ReactNode
  width?: number
}

export class ContextMenu extends Component<Props> {
  static defaultProps = {
    renderFilter: () => null,
  }

  searchRef = createRef<HTMLInputElement>()

  componentDidUpdate(prevProps: Readonly<Props>) {
    const searchRef = this.searchRef.current

    if (!isNil(searchRef) && !prevProps.isOpen && this.props.isOpen) {
      window.setTimeout(() => searchRef.focus(), 50)
    }
  }

  renderContextMenuItems = (
    compareSearch: (stringToCompare: string) => boolean,
  ) => {
    const { contextItems, icon, onClick, onItemClick } = this.props

    return contextItems.map(event => {
      const groupHeader = (
        <MenuHeader key={event.title}>{event.title}</MenuHeader>
      )

      const items = event.items
        .filter(
          item =>
            compareSearch(item.title) ||
            compareSearch(item.description) ||
            compareSearch(event.title),
        )
        .map(item => (
          <ContextMenuItem
            // TODO(unsafe-any): Fix unsafe anys
            // tslint:disable no-unsafe-any
            as={({ as: _as, cssOverrides: _cssOverrides, ...linkProps }) => (
              <Link {...linkProps} />
            )}
            // tslint:enable
            key={item.key}
            leftIcon={icon}
            primaryText={item.title}
            secondaryText={item.description}
            size={Sizes.DP40}
            to={item.link}
            onClick={(e: MouseEvent<HTMLDivElement>) => {
              onClick(e)
              if (onItemClick) {
                onItemClick(item)
              }
            }}
            tabIndex={1}
            meta={
              isNil(item.icons) ? null : (
                <MenuItemIconRow>{item.icons}</MenuItemIconRow>
              )
            }
          />
        ))

      return items.length > 0 ? some([groupHeader, items]) : none
    })
  }

  render() {
    const {
      closingAnimationCompleted,
      isOpen,
      onClick,
      position,
      renderFilter,
      togglePopOver,
      width,
    } = this.props

    return (
      <SidebarDropDown
        closingAnimationCompleted={closingAnimationCompleted}
        isOpen={isOpen}
        onClick={onClick}
        position={position}
        togglePopOver={togglePopOver}
        width={width}
      >
        <SearchController>
          {({ compareSearch, value, onChange }) => {
            const contextMenuItems = array.compact(
              this.renderContextMenuItems(compareSearch),
            )

            return (
              <>
                <SearchContainer>
                  <Search
                    value={value}
                    onChange={onChange}
                    css={css`
                      flex-grow: 1;
                      margin: 12px;
                      flex-shrink: unset;
                    `}
                    searchRef={this.searchRef}
                  />

                  {renderFilter()}
                </SearchContainer>

                <ListContainer
                  css={css`
                    padding: 0 0 4px;
                  `}
                  emptyText="Loading..."
                >
                  {isEmpty(contextMenuItems) ? (
                    <ContextMenuItem
                      size={Sizes.DP40}
                      primaryText="No results."
                    />
                  ) : (
                    contextMenuItems
                  )}
                </ListContainer>
              </>
            )
          }}
        </SearchController>
      </SidebarDropDown>
    )
  }
}
