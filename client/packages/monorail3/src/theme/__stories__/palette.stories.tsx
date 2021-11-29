import React from 'react'
import { Color as MUIColor,PaletteColor } from '@mui/material'
import {
  CommonColors,
  TypeBackground,
  TypeText,
} from '@mui/material/styles/createPalette'

import { Box } from '../../components/Box/Box'
import { useTheme } from '../useTheme'

export default {
  title: 'Theme/Palette',
}

const SingleColorBox = ({
  color,
  label,
  minWidth,
}: {
  color: string
  label: string
  minWidth: string
}) => {
  return (
    <Box sx={{ marginBottom: '8px' }}>
      <Box sx={{ minWidth }}>{label}</Box>
      <Box
        sx={{
          height: '40px',
          backgroundColor: color,
          border: '1px solid black',
        }}
      />
      <Box sx={{ fontSize: '60%', fontWeight: 100 }}>{color || '???'}</Box>
    </Box>
  )
}

const PaletteColorBox = ({
  label,
  paletteColor,
}: {
  label: string
  paletteColor: PaletteColor
}) => {
  return (
    <Box sx={{ display: 'flex', flexFlow: 'row' }}>
      <Box component="h2" sx={{ flex: 1 }}>
        {label}
      </Box>
      <SingleColorBox
        color={paletteColor.light}
        label="Light"
        minWidth="150px"
      />
      <SingleColorBox color={paletteColor.main} label="Main" minWidth="150px" />
      <SingleColorBox color={paletteColor.dark} label="Dark" minWidth="150px" />
      <SingleColorBox
        color={paletteColor.contrastText}
        label="Contrast Text"
        minWidth="150px"
      />
    </Box>
  )
}

const CommonColorsBox = ({ commonColors }: { commonColors: CommonColors }) => {
  return (
    <Box sx={{ display: 'flex', flexFlow: 'row' }}>
      <Box component="h2" sx={{ flex: 1 }}>
        Common
      </Box>
      <SingleColorBox
        label="white"
        color={commonColors.white}
        minWidth="150px"
      />
      <SingleColorBox
        label="black"
        color={commonColors.black}
        minWidth="150px"
      />
    </Box>
  )
}

const ColorShadesBox = ({
  label,
  color,
}: {
  label: string
  color: MUIColor
}) => {
  const minWidth = '50px'
  return (
    <Box sx={{ display: 'flex', flexFlow: 'row' }}>
      <Box component="h2" sx={{ flex: 1 }}>
        {label}
      </Box>
      <SingleColorBox label="50" color={color[50]} minWidth={minWidth} />
      <SingleColorBox label="100" color={color[100]} minWidth={minWidth} />
      <SingleColorBox label="200" color={color[200]} minWidth={minWidth} />
      <SingleColorBox label="300" color={color[300]} minWidth={minWidth} />
      <SingleColorBox label="400" color={color[400]} minWidth={minWidth} />
      <SingleColorBox label="500" color={color[500]} minWidth={minWidth} />
      <SingleColorBox label="600" color={color[600]} minWidth={minWidth} />
      <SingleColorBox label="700" color={color[700]} minWidth={minWidth} />
      <SingleColorBox label="800" color={color[800]} minWidth={minWidth} />
      <SingleColorBox label="900" color={color[900]} minWidth={minWidth} />
      <SingleColorBox label="A100" color={color.A100} minWidth={minWidth} />
      <SingleColorBox label="A200" color={color.A200} minWidth={minWidth} />
      <SingleColorBox label="A400" color={color.A400} minWidth={minWidth} />
      <SingleColorBox label="A700" color={color.A700} minWidth={minWidth} />
    </Box>
  )
}

const TextColorsBox = ({ typeText }: { typeText: TypeText }) => {
  const minWidth = '150px'
  return (
    <Box sx={{ display: 'flex', flexFlow: 'row' }}>
      <Box component="h2" sx={{ flex: 1 }}>
        Text
      </Box>
      <SingleColorBox
        label="Primary"
        color={typeText.primary}
        minWidth={minWidth}
      />
      <SingleColorBox
        label="Secondary"
        color={typeText.secondary}
        minWidth={minWidth}
      />
      <SingleColorBox
        label="Disabled"
        color={typeText.disabled}
        minWidth={minWidth}
      />
    </Box>
  )
}

const BackgroundColorsBox = ({
  typeBackground,
}: {
  typeBackground: TypeBackground
}) => {
  const minWidth = '150px'
  return (
    <Box sx={{ display: 'flex', flexFlow: 'row' }}>
      <Box component="h2" sx={{ flex: 1 }}>
        Background
      </Box>
      <SingleColorBox
        label="Default"
        color={typeBackground.default}
        minWidth={minWidth}
      />
      <SingleColorBox
        label="Paper"
        color={typeBackground.paper}
        minWidth={minWidth}
      />
    </Box>
  )
}

export const Palette = () => {
  const theme = useTheme()
  console.log(theme)
  return (
    <>
      <h1>Colors</h1>
      <Box sx={{ display: 'flex', flexFlow: 'column nowrap' }}>
        <PaletteColorBox label="Primary" paletteColor={theme.palette.primary} />
        <PaletteColorBox
          label="Secondary"
          paletteColor={theme.palette.secondary}
        />
        {/*<PaletteColorBox label="Accent" paletteColor={theme.palette.accent} />*/}
        <PaletteColorBox label="Info" paletteColor={theme.palette.info} />
        <PaletteColorBox label="Success" paletteColor={theme.palette.success} />
        <PaletteColorBox label="Warning" paletteColor={theme.palette.warning} />
        <PaletteColorBox label="Error" paletteColor={theme.palette.error} />
      </Box>

      <CommonColorsBox commonColors={theme.palette.common} />

      <ColorShadesBox label="Grey" color={theme.palette.grey} />
      <ColorShadesBox label="Blue" color={theme.palette.colors.blue} />
      <ColorShadesBox label="Fuschia" color={theme.palette.colors.fuschia} />
      <ColorShadesBox label="Orange" color={theme.palette.colors.orange} />
      <ColorShadesBox label="Purple" color={theme.palette.colors.purple} />
      <ColorShadesBox label="Teal" color={theme.palette.colors.teal} />

      <TextColorsBox typeText={theme.palette.text} />

      <SingleColorBox
        label="divider"
        color={theme.palette.divider}
        minWidth={'100%'}
      />

      <BackgroundColorsBox typeBackground={theme.palette.background} />
    </>
  )
}
