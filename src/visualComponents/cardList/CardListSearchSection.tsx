import React from 'react'

import { Colors, getColor } from '@monorail/helpers/exports'
import { useRefFocusOnRender } from '@monorail/helpers/hooks'
import styled, { css } from '@monorail/helpers/styled-components'
import { Search } from '@monorail/visualComponents/inputs/Search'

type CardListSearchSectionProps = {
  onSearchValueChange: (searchValue: string) => void
  placeholder?: string
  searchValue: string
}

export const CardListSearchSection = (props: CardListSearchSectionProps) => {
  const { onSearchValueChange, placeholder, searchValue } = props

  const searchRef = useRefFocusOnRender<HTMLInputElement>()

  return (
    <RowSection>
      <Search
        css={css`
          width: auto;
        `}
        placeholder={placeholder}
        value={searchValue}
        onChange={onSearchValueChange}
        searchRef={searchRef}
      />
    </RowSection>
  )
}

const RowSection = styled.section`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;

  position: relative; /* So the ::after content is positioned properly */
  padding: 8px 16px;
  background: ${getColor(Colors.Gray04)};

  /* This matches the border on the Header component 
     packages/monorail/src/visualComponents/header/Header.tsx */
  &::after {
    content: '';
    background: ${getColor(Colors.Gray08)};
    bottom: 0;
    height: 1px;
    left: 0;
    position: absolute;
    right: 0;
  }
`
