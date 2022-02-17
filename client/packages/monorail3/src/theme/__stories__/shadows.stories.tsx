import React from 'react'
import { Paper, Stack, useTheme } from '@mui/material'

export default {
  title: 'Theme/Shadows',
}

export const Shadows = () => {
  const theme = useTheme()
  return (
    <Stack direction="row" gap={16} flexWrap="wrap" sx={{ m: 6 }}>
      {theme.shadows.map((_, idx) => (
        <Paper
          elevation={idx}
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: 160,
            height: 80,
            justifyContent: 'center',
          }}
        >
          Elevation {idx}
        </Paper>
      ))}
    </Stack>
  )
}
