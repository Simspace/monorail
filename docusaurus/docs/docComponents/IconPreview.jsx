import * as React from 'react'
import styled from 'styled-components'

import { getColor, Colors } from '@monorail/helpers/color'
import { MaterialIconList } from '@monorail/visualComponents/icon/MaterialIconType'
import { CustomIconList } from '@monorail/visualComponents/icon/CustomIconType'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import { TextField } from '@monorail/visualComponents/inputs/TextField'

const tagSource = source => name => ({ source, name })

const allIcons = MaterialIconList.map(tagSource('material'))
  .concat(CustomIconList.filter(n => n !== '').map(tagSource('custom')))
  .sort(({ name: nameA }, { name: nameB }) => (nameA < nameB ? -1 : 1))

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 64px);
  grid-gap: 32px;
  max-height: 400px;
  overflow-y: auto;
  justify-content: center;
`

const IconDisplay = styled.div`
  border: ${props =>
    props.source === 'custom'
      ? `1px solid ${getColor(Colors.BrandLightBlue)}`
      : 'none'};
  border-radius: 8px;
  text-align: center;
  overflow-x: hidden;
`

export const IconPreview = () => {
  const [search, setSearch] = React.useState('')
  const updateSearch = React.useCallback((/** @type React.ChangeEvent */ e) => {
    setSearch(e.currentTarget.value)
  }, [])
  const filteredIcons = React.useMemo(
    () =>
      allIcons
        .filter(({ name }) => name.includes(search))
        .map(({ source, name }) => (
          <IconDisplay source={source}>
            <Icon icon={name} size={64} />
            <div>{name}</div>
          </IconDisplay>
        )),
    [search],
  )
  return (
    <>
      <TextField
        iconLeft="search"
        value={search}
        onChange={updateSearch}
        placeholder="Search icons..."
      />
      <IconGrid>{filteredIcons}</IconGrid>
    </>
  )
}
