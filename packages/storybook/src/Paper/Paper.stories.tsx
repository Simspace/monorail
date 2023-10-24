// Edit this file to add new stories
import React from 'react'
import type { Theme } from '@mui/material'
import {
  createTheme,
  styled,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material'

import type { PaperProps } from '@monorail/components'
import { Box, Grid, Paper } from '@monorail/components'

import { story } from '../helpers/storybook.js'

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

export default { title: 'Surfaces/Paper', component: Paper }

const Template = story<PaperProps>(args => <Paper {...args} />, {
  args: { children: 'The content' },
  muiName: 'MuiPaper',
})

export const Default = story(Template)

export const BasicPaper = story<PaperProps>(() => (
  <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: 128,
        height: 128,
      },
    }}
  >
    <Paper elevation={0} />
    <Paper />
    <Paper elevation={3} />
  </Box>
))

/**
 * If you need an outlined surface, use the `variant` prop.
 */
export const Variants = story<PaperProps>(() => (
  <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: 128,
        height: 128,
      },
    }}
  >
    <Paper variant="outlined" />
    <Paper variant="outlined" square />
  </Box>
))

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}))

const darkTheme = createTheme({ palette: { mode: 'dark' } })
const lightTheme = createTheme({ palette: { mode: 'light' } })

/**
 * The elevation can be used to establish a hierarchy between other content. In practical terms, the elevation controls the size of the shadow applied to the surface. In dark mode, raising the elevation also makes the surface lighter.
 */
export const Elevation = story<PaperProps>(() => (
  <Grid container spacing={2}>
    {[lightTheme, darkTheme].map((theme, index) => (
      <Grid item xs={6} key={index}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
              }}
            >
              {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map(elevation => (
                <Item key={elevation} elevation={elevation}>
                  {`elevation=${elevation}`}
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </StyledEngineProvider>
      </Grid>
    ))}
  </Grid>
))
