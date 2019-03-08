import React, {
  Component,
  createRef,
  MouseEvent,
  ReactNode,
  StatelessComponent,
} from 'react'
import { SidebarDropDown } from '@monorail/sidebar/SidebarDropDown'
import { PopOverChildProps } from '@monorail/popOver/PopOver'
import { Search, SearchRefType } from '@monorail/inputs/Search'
import {
  ListContainer,
  ListItemGraphic,
  LinkProps,
  ListItem,
  ListItemPrimaryText,
  ListItemText,
  ListItemSecondaryText,
} from '@monorail/list/List'
import Link from 'react-router/lib/Link'
import {
  Colors,
  colors,
  ellipsis,
  flexFlow,
  FontSizes,
  Sizes,
  typography,
} from '@monorail/CommonStyles'
import styled, { css } from 'styled-components'
import { CommonComponentType } from '@monorail/types'
import { SearchController } from '@monorail/inputs/SearchController'
import { array, isEmpty } from 'fp-ts/lib/Array'
import { some, none } from 'fp-ts/lib/Option'
import { isEmptyString, isNil } from '@monorail/CoreUtils/primitive-guards'

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`

const MenuHeader = styled<CommonComponentType, 'span'>('span')`
  ${typography(500, FontSizes.Title5, '12px')};
  ${ellipsis};

  color: ${colors(Colors.Black62)};
  flex-shrink: 0;

  ${({ cssOverrides }) => cssOverrides};
`

const MenuItemIconRow = styled('div')`
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
    cssOverrides={css`
      padding: 0 6px;

      ${cssOverrides};
    `}
    {...otherProps}
  >
    {!isNil(leftIcon) && (
      <ListItemGraphic
        icon={leftIcon}
        dense={dense}
        cssOverrides={css`
          margin-top: 12px;
        `}
      />
    )}

    {isNil(secondaryText) && isNil(meta) ? (
      <ListItemPrimaryText
        cssOverrides={css`
          margin-top: 12px;
        `}
      >
        {primaryText}
      </ListItemPrimaryText>
    ) : (
      <ListItemText>
        <ListItemPrimaryText
          cssOverrides={css`
            margin-top: 6px;
          `}
        >
          {primaryText}
        </ListItemPrimaryText>
        {isNil(secondaryText) ? null : (
          <ListItemSecondaryText
            cssOverrides={css`
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

type Props = PopOverChildProps & {
  contextItems: Array<{
    title: string
    items: Array<{
      description: string
      icons?: ReactNode
      isLabelActive?: boolean
      key: number | string
      link: string
      title: string
    }>
  }>
  icon: string
  renderFilter: () => ReactNode
  width?: number
}

export class ContextMenu extends Component<Props> {
  static defaultProps = {
    renderFilter: () => null,
  }

  searchRef = createRef<SearchRefType>()

  componentDidUpdate(prevProps: Readonly<Props>) {
    const searchRef = this.searchRef.current

    if (!isNil(searchRef) && !prevProps.isOpen && this.props.isOpen) {
      window.setTimeout(() => searchRef.focus(), 50)
    }
  }

  renderContextMenuItems = (
    compareSearch: (stringToCompare: string) => boolean,
  ) => {
    const { contextItems, icon, onClick } = this.props

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
            as={({ as: _as, cssOverrides: _cssOverrides, ...linkProps }) => (
              <Link {...linkProps} />
            )}
            key={item.key}
            leftIcon={icon}
            primaryText={item.title}
            secondaryText={item.description}
            size={Sizes.DP40}
            to={item.link}
            onClick={onClick}
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
      isOpen,
      position,
      onClick,
      renderFilter,
      togglePopOver,
      width,
    } = this.props

    return (
      <SidebarDropDown
        isOpen={isOpen}
        position={position}
        onClick={onClick}
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
                    cssOverrides={css`
                      flex-grow: 1;
                      margin: 12px;
                    `}
                    searchRef={this.searchRef}
                  />

                  {renderFilter()}
                </SearchContainer>

                <ListContainer
                  cssOverrides={css`
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
