import { sx } from '@monorail/utils'
import { styled } from '@mui/material'

export const FilterContainer = styled('div')(
  sx(theme => ({
    display: 'flex',
    flexDirection: 'column',
    width: theme.spacing(81),
    padding: theme.spacing(4),
    gap: theme.spacing(4),
  })),
)
