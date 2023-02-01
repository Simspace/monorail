import React from 'react'
import { styled } from '@mui/material'

import { Collapse } from '@monorail/components/Collapse'
import { excludeProps } from '@monorail/utils/styled'
import { sx } from '@monorail/utils/sx'

import type { ButtonProps } from '../../../Button.js'
import { Button } from '../../../Button.js'

interface ClearFilterContainerProps {
  isFiltered: boolean
}
export const ClearFilterContainer = styled('div', {
  shouldForwardProp: excludeProps('sx', 'isFiltered'),
})<ClearFilterContainerProps>(({ isFiltered }) =>
  sx({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexShrink: 0,
    mb: isFiltered ? 0 : -4,
    opacity: isFiltered ? 1 : 0,
    transition: `all ${isFiltered ? 'ease-in' : 'ease-out'} 112ms`,
  }),
)

export interface ClearFilterButtonProps extends ButtonProps {
  isFiltered: boolean
}

export function ClearFilterButton(props: ClearFilterButtonProps) {
  const { isFiltered, onClick, sx, children, ...others } = props

  return (
    <ClearFilterContainer sx={sx} isFiltered={isFiltered}>
      <Collapse in={isFiltered} sx={{ width: '100%' }}>
        <Button onClick={onClick} variant="text" fullWidth {...others}>
          {children}
        </Button>
      </Collapse>
    </ClearFilterContainer>
  )
}
