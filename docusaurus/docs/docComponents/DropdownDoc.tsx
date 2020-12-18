import React from 'react'
import styled, { css } from 'styled-components'

import { ellipsis, flexFlow } from '@monorail/helpers/exports'
import { DropdownItem } from '@monorail/visualComponents/dropdown/DropdownItem'
import {
  DropdownItemType,
  DropdownItemValue,
} from '@monorail/visualComponents/dropdown/helpers'
import {
  DropdownPlaceholder,
  DropdownRender,
  RenderHandlerProps,
  RenderItemProps,
  createCustomHandler,
} from '@monorail/visualComponents/dropdown/render'
import { createDropdownCustomSkin } from '@monorail/visualComponents/dropdown/skin'
import { Icon } from '@monorail/visualComponents/icon/Icon'

type ItemType = DropdownItemType & {
  id: DropdownItemValue
  name: string
  team: string
  disabled: boolean
}

const fighterByTeam = ['Jedi Knight', 'Sith Lord']
const teams = ['Bright Side', 'Dark Side'].map((item, index) => ({
  value: index,
  label: item,
  fighter: fighterByTeam[index],
}))

export const sortItemType = (a, b) => (a.name > b.name ? 1 : -1)

export const dropdownItems = [
  '4-LOM',
  'Aayla Secura',
  'Admiral Ackbar',
  'Admiral Thrawn',
  'Ahsoka Tano',
  'Anakin Solo',
  'Asajj Ventress',
  'Aurra Sing',
  'Senator Bail Organa',
  'Barriss Offee',
  'Bastila Shan',
  'Ben Skywalker',
  'Bib Fortuna',
  'Biggs Darklighter',
  'Boba Fett',
  'Bossk',
  'Brakiss',
  'C-3PO',
  'Cad Bane',
  'Cade Skywalker',
  'Callista Ming',
  'Captain Rex',
  'Carnor Jax',
  'Chewbacca',
  'Clone Commander',
  'Count Dooku',
  'Darth Bane',
  'Darth Krayt',
  'Darth Maul',
  'Darth Nihilus',
  'Darth Vader',
  'Dash Rendar',
  'Dengar',
  'Durge',
  'Emperor Palpatine',
  'Exar Kun',
  'Galen Marek',
  'General Crix Madine',
  'General Dodonna',
  'General Grievous',
  'General Veers',
  'Gilad Pellaeon',
  'Grand Moff Tarkin',
  'Greedo',
  'Han Solo',
  'IG 88',
  'Jabba The Hutt',
  'Jacen Solo',
  'Jaina Solo',
  'Jango Fett',
  'Jarael',
  'Jerec',
  "Joruus C'Baoth",
  'Ki-Adi-Mundi',
  'Kir Kanos',
  'Kit Fisto',
  'Kyle Katarn',
  'Kyp Durron',
  'Lando Calrissian',
  'Luke Skywalker',
  'Luminara Unduli',
  'Lumiya',
  'Mace Windu',
  'Mara Jade',
  'Mission Vao',
  'Natasi Daala',
  'Nom Anor',
  'Obi-Wan Kenobi',
  'Padmé Amidala',
  'Plo Koon',
  'Pre Vizsla',
  'Prince Xizor',
  'Princess Leia',
  'Qui-Gon Jinn',
  'Quinlan Vos',
  'R2-D2',
  'Rahm Kota',
  'Revan',
  'Satele Shan',
  'Savage Opress',
  'Sebulba',
  'Shaak Ti',
  'Shmi Skywalker',
  'Talon Karrde',
  'Ulic Qel-Droma',
  'Visas Marr',
  'Watto',
  'Wedge Antilles',
  'Yoda',
  'Zam Wesell',
  'Zayne Carrick',
  'Zuckuss',
]
  .map((item, index) => ({
    id: index,
    name: item,
    team:
      teams[item.match(/(Darth)|(Count)|(Emperor)|(Grievous)/g) ? 1 : 0].label,
    disabled: false,
    value: index,
    label: item,
  }))
  .sort(sortItemType)

export const getTeamIcon = item =>
  item.disabled
    ? 'person_outline'
    : item.team === 'Bright Side'
    ? 'person'
    : 'adb'

export const renderDropdownHandler = ({
  downshiftProps: { selectedItem: item },
  handlerProps: { placeholder },
}: RenderHandlerProps<ItemType>) => (
  <div
    css={css`
      ${flexFlow('row')};

      overflow: hidden;
    `}
  >
    <Icon
      icon={item ? getTeamIcon(item) : 'help'}
      css={css`
        padding: 0 8px 0 0;
      `}
    />
    {item ? (
      <span css={ellipsis}>
        <b>{item.name}</b>{' '}
        <span
          css={css`
            font-weight: 200;
          `}
        >
          ({item.team})
        </span>
      </span>
    ) : (
      <DropdownPlaceholder>{placeholder}</DropdownPlaceholder>
    )}
  </div>
)

export const renderDropdownItem = ({
  item,
  selected,
  highlighted,
}: RenderItemProps<ItemType>) => (
  <DropdownItem
    selected={selected}
    highlighted={highlighted}
    disabled={item.disabled}
    css={css`
      ${flexFlow('row')};
      align-items: center;
    `}
  >
    <Icon
      icon={getTeamIcon(item)}
      css={css`
        padding-right: 8px;
      `}
    />
    <div>
      <b>{item.name}</b>
      <div>{item.disabled ? 'Disabled' : item.team}</div>
    </div>
  </DropdownItem>
)

export const customItemTypeRender = {
  handler: createCustomHandler(renderDropdownHandler),
  item: renderDropdownItem,
}

export const customItemTypeSkin = createDropdownCustomSkin(customItemTypeRender)

export const CollectionDropdownContainer = styled.div`
  ${flexFlow('row')}
  flex: 0;
`

export const CollectionDropdownLeft = styled.div`
  align-self: center;
`
export const CollectionDropdownRight = styled.div`
  ${flexFlow('row')}

  flex-wrap: wrap;
`
