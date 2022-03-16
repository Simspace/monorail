import React from 'react'
import * as MUI from '@mui/material'
import { styled } from '@mui/material/styles'

export interface IconButtonProps extends MUI.IconButtonProps {
  variant?: 'contained' | 'outlined' | 'chromeless'
  shape?: 'circular' | 'rounded'
}

const StyledIconButton = styled(MUI.IconButton)``

export const IconButton = (props: IconButtonProps) => (
  <StyledIconButton variant="chromeless" shape="circular" {...props} />
)
