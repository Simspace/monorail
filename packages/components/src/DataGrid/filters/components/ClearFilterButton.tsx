import React from 'react'
import { excludeProps } from '@monorail/utils/styled'
import { sx } from '@monorail/utils/sx'
import { styled, SxProps, Theme } from '@mui/material'

import { Button } from '../../../Button.js'

interface ClearFilterContainerProps {
  isFiltered: boolean
}

export const ClearFilterContainer = styled('div', {
  shouldForwardProp: excludeProps('isFiltered', 'sx'),
})<ClearFilterContainerProps>(({ isFiltered }) =>
  sx(theme => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexShrink: 0,
    visibility: isFiltered ? 'visible' : 'hidden',
    opacity: isFiltered ? 1 : 0,
    transition: `all ${isFiltered ? 'ease-in' : 'ease-out'} 112ms`,
    marginBottom: isFiltered ? '0px' : theme.spacing(-14),
  })),
)

export interface ClearFilterButtonProps {
  isFiltered: boolean
  onClick: () => void
  sx?: SxProps<Theme>
  children: React.ReactNode
}

export function ClearFilterButton(props: ClearFilterButtonProps) {
  const { isFiltered, onClick, sx, children } = props

  return (
    <ClearFilterContainer isFiltered={isFiltered} sx={sx}>
      <Button onClick={onClick} variant="text" fullWidth>
        {children}
      </Button>
    </ClearFilterContainer>
  )
}
