import React from 'react'
import { styled } from '@mui/material'

import { excludeProps } from '@monorail/utils/styled'
import { sx } from '@monorail/utils/sx'

import type { ButtonProps } from '../../../Button.js'
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

export interface ClearFilterButtonProps extends ButtonProps {
  isFiltered: boolean
}

export function ClearFilterButton(props: ClearFilterButtonProps) {
  const { isFiltered, onClick, sx, children, ...others } = props

  return (
    <ClearFilterContainer isFiltered={isFiltered} sx={sx}>
      <Button onClick={onClick} variant="text" fullWidth {...others}>
        {children}
      </Button>
    </ClearFilterContainer>
  )
}
