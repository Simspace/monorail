import React, { FC, MouseEvent, ReactNode, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { lookup } from 'fp-ts/lib/Array'
import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'

import {
  Colors,
  FontSizes,
  getColor,
  pageSizePadding,
  Sizes,
  typographyFont,
  visible,
} from '@monorail/helpers/exports'
import { flexFlow } from '@monorail/helpers/flex'
import { CssOverridesType } from '@monorail/types'
import {
  ActionsMenu,
  MenuAction,
} from '@monorail/visualComponents/actionsMenu/ActionsMenu'
import {
  ButtonDisplay,
  ButtonSize,
} from '@monorail/visualComponents/buttons/buttonTypes'
import { IconButton } from '@monorail/visualComponents/buttons/IconButton'
import { Header, HeaderProps } from '@monorail/visualComponents/header/Header'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import { IconType } from '@monorail/visualComponents/icon/IconType'
import {
  TextArea,
  TextAreaInput,
  TextAreaProps,
} from '@monorail/visualComponents/inputs/TextArea'
import { ScrollAnimation } from '@monorail/visualComponents/layout/ScrollAnimation'
import { SimpleListItem } from '@monorail/visualComponents/list/List'
import { Text } from '@monorail/visualComponents/typography/Text'

type Props = {
  title?: string
  headerProps?: Omit<HeaderProps, 'title'>
  header?: () => ReactNode
  children: () => ReactNode
  list: () => ReactNode
  listFooter?: () => ReactNode
}

export const OutlineList = styled.div`
  ${flexFlow('column')};
  background: ${getColor(Colors.White)};
  border-right: 1px solid ${getColor(Colors.Black12a)};
  flex: 1;
  max-width: 256px;
  min-width: 186px;
`

const OutlineContainer = styled.div`
  ${flexFlow('row')};
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`

const OutlineContent = styled.div`
  ${flexFlow('column')};
  flex: 1;
  overflow: hidden;
`

const IconButtonContainer = styled.div`
  ${visible(false)}
`

export const LayoutOutline: FC<Props> = ({
  children,
  header,
  headerProps,
  list,
  listFooter,
  title,
  ...domProps
}: Props) => {
  const renderTitleHeader = (): ReactNode => (
    <Header cssTitle="flex: 1;" {...headerProps} title={title} />
  )

  return (
    <OutlineContainer {...domProps}>
      <OutlineList>
        {pipe(
          O.fromNullable(header),
          O.alt(() =>
            pipe(
              O.fromNullable(title),
              O.map(t => renderTitleHeader),
            ),
          ),
          O.fold(
            () => <></>,
            render => render(),
          ),
        )}
        <ScrollAnimation css="transform: none;">{list()}</ScrollAnimation>
        {listFooter && listFooter()}
      </OutlineList>
      <OutlineContent>{children()}</OutlineContent>
    </OutlineContainer>
  )
}

export const EmptyListBox = styled.div`
  align-items: center;
  justify-content: center;
  margin: auto;
  ${flexFlow('row')}
`

export const EmptyListBoxInner = styled.div`
  min-width: 200px;
  align-items: center;
  justify-content: center;

  ${flexFlow('column')}

  p {
    text-align: center;
  }
`
export const EmptyListButtonsBox = styled.div`
  display: flex;
`

type EmptyLayoutListProps = {
  title?: string
  message?: string
  actions?: ReactNode
}

export const EmptyLayoutContainer = styled.div`
  ${flexFlow('column')};

  background: ${getColor(Colors.Grey96)};
  flex: 1;
  height: 100%;
  overflow: hidden;
`

export const EmptyLayoutList = ({
  title = 'No Selection',
  message = 'Select an item on the left or create a new item',
  actions,
}: EmptyLayoutListProps) => (
  <EmptyListBox>
    <EmptyListBoxInner>
      <Icon icon="empty_syllabus_list" size={120} />
      <Text
        fontWeight={700}
        fontSize={FontSizes.Title1}
        as="p"
        margin="0 0 16px 0"
      >
        {title}
      </Text>
      <Text
        fontWeight={400}
        fontSize={FontSizes.Title3}
        as="p"
        margin="0 0 24px 0"
      >
        {message}
      </Text>
      {actions && <EmptyListButtonsBox>{actions}</EmptyListButtonsBox>}
    </EmptyListBoxInner>
  </EmptyListBox>
)

const titleStyle = (disabled?: boolean) => css`
  max-width: unset;
  flex: 3;
  ${TextAreaInput} {
    ${typographyFont(700, FontSizes.Title1)};

    ${disabled &&
      css`
        border: none;

        &:hover,
        &:focus,
        &:active {
          border: none;
        }
      `}
  }
  margin-right: 8px;
`

export const LayoutContentWrapper = styled.div`
  ${flexFlow('column', 'nowrap')}
  ${pageSizePadding({ paddingTop: 16, paddingBottom: 16 })};

  flex: 1;
  overflow: hidden;
`

export const ColumnLayout = styled.div`
  ${flexFlow('column')}
  flex: 1;
  width: 100%;
`

export const RowLayout = styled.div`
  ${flexFlow('row')}
  flex: 1;
  width: 100%;
  justify-items: center;
  align-items: center;
`

const LayoutDetailHeaderContainer = styled.div`
  ${flexFlow('row')}
  flex: 0;
  height: auto;
  margin-left: -8px;
`

type LayoutDetailHeaderProps = TextAreaProps & {
  actions?: Array<MenuAction>
  containerCssOverrides?: ReturnType<typeof css>
}

export const LayoutDetailHeader = ({
  actions,
  containerCssOverrides,
  ...textAreaProps
}: LayoutDetailHeaderProps) => (
  <LayoutDetailHeaderContainer css={containerCssOverrides}>
    <TextArea
      chromeless
      compact
      cssOverrides={titleStyle(textAreaProps.disabled)}
      placeholder="New Item"
      required
      {...textAreaProps}
    />
    {actions && <ActionsMenu actions={actions} css="margin-top: 4px;" />}
  </LayoutDetailHeaderContainer>
)

// Outline items and actions
export type OutlineItemBaseType = {
  key: string
  content: string | ReactNode
}

export type OutlineActions<T extends OutlineItemBaseType> = {
  update: (key: string, changes: Partial<T>) => void
  create: (key?: string) => void
  delete: (key: string) => void
  select: (key: string) => void
}

export type OutlineControlledProps<T extends OutlineItemBaseType> = {
  items: Array<T>
  actions: OutlineActions<T>
  selectedItem?: T
}

export type OutlineListItemType<T extends OutlineItemBaseType> = {
  item: T
  icon?: IconType
  selected?: boolean
  size?: Sizes
  onClick?: (item: T) => void
  onDelete?: (item: T) => void
  cssOverrides?: CssOverridesType
}

export const OutlineListItem = <T extends OutlineItemBaseType>(
  props: OutlineListItemType<T>,
) => {
  const {
    item,
    selected = false,
    onClick,
    onDelete,
    size = Sizes.DP40,
    icon = 'settings',
    cssOverrides,
  } = props

  return (
    <SimpleListItem
      key={item.key}
      leftIcon={icon}
      primaryText={item.content}
      size={size}
      className={selected ? 'is-active' : ''}
      onClick={() => onClick && onClick(item)}
      cssOverrides={cssOverrides}
      css={css`
        &:hover {
          ${IconButtonContainer} {
            ${visible(true)}
          }
        }
      `}
    >
      {onDelete && (
        <IconButtonContainer>
          <IconButton
            size={ButtonSize.Compact}
            display={ButtonDisplay.Toolbar}
            icon={'delete'}
            onClick={(e: MouseEvent) => {
              e.preventDefault()
              e.stopPropagation()
              onDelete(item)
            }}
          />
        </IconButtonContainer>
      )}
    </SimpleListItem>
  )
}

const baseNewItem = <T extends OutlineItemBaseType>(ndx: number) =>
  ({
    key: `${ndx + 1}`,
    content: `New Item ${ndx + 1}`,
  } as T)

// Controller helper for outline list of items
export const useControlledList = <T extends OutlineItemBaseType>({
  items,
  newItem = baseNewItem,
}: {
  items: Array<T>
  newItem?: (ndx: number) => T
}): OutlineControlledProps<T> => {
  const [selected, setSelected] = useState<T | undefined>()
  const [list, setList] = useState<Array<T>>(items)

  useEffect(() => {
    if (!selected) {
      setSelected(pipe(lookup(0, list), O.toUndefined))
    }
  }, [list, selected])

  const getNewItem = (): T => newItem(list.length)

  const duplicateItem = (item: T): T => {
    const ndx = Math.round(Math.random() * 1000)
    return {
      ...item,
      key: `${item.key}-${ndx}`,
      content: `${item.content}*`,
    }
  }
  const createNewItem = (key?: string): T => {
    const item = key && findItem(key)

    return item ? duplicateItem(item) : getNewItem()
  }

  const findItemIndex = (key: string) =>
    list.findIndex(item => item.key === key)

  const findItem = (key: string) => list.find(item => item.key === key)

  const updateItem = (key: string, changes: Partial<T>) => {
    const oldItem = findItem(key)
    if (oldItem) {
      const updatedItem = { ...oldItem, ...changes }
      setList(list.map(item => (item.key === key ? updatedItem : item)))

      setSelected(updatedItem)
    }
  }

  const createItem = (key?: string) => {
    const item = createNewItem(key)

    setList([...list, item])

    setSelected(item)
  }

  const deleteItem = (key: string) => {
    const ndx = findItemIndex(key)
    if (ndx >= 0) {
      const newList = list.filter(item => item.key !== key)
      setList(newList)

      if (selected && key === selected.key) {
        setSelected(newList[ndx >= newList.length ? newList.length - 1 : ndx])
      }
    }
  }

  const selectItem = (key: string) => {
    setSelected(findItem(key))
  }

  return {
    selectedItem: selected,
    items: list,
    actions: {
      create: createItem,
      delete: deleteItem,
      update: updateItem,
      select: selectItem,
    },
  }
}
