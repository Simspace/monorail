import React from 'react'
import { Box } from '../../components/Box/Box'
import { useTheme } from '../useTheme'
import * as MUI from '@material-ui/core'
import {
  CommonColors,
  TypeAction,
  TypeBackground,
  TypeText,
} from '@material-ui/core/styles/createPalette'

export default {
  title: 'Theme/Palette',
}

const SingleColorBox = ({ color, label }: { color: string; label: string }) => {
  return (
    <Box sx={{ marginBottom: '8px' }}>
      <Box sx={{ minWidth: '160px' }}>{label}</Box>
      <Box
        sx={{
          width: '80px',
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
  paletteColor: MUI.PaletteColor
}) => {
  return (
    <Box sx={{ display: 'flex', flexFlow: 'column' }}>
      <h2>{label}</h2>
      <SingleColorBox color={paletteColor.lightest} label="Lightest" />
      <SingleColorBox color={paletteColor.lighter} label="Lighter" />
      <SingleColorBox color={paletteColor.light} label="Light" />
      <SingleColorBox color={paletteColor.main} label="Main" />
      <SingleColorBox color={paletteColor.dark} label="Dark" />
      <SingleColorBox color={paletteColor.darker} label="Darker" />
      <SingleColorBox color={paletteColor.darkest} label="Darkest" />
      <SingleColorBox color={paletteColor.contrastText} label="Contrast Text" />
    </Box>
  )
}

const CommonColorsBox = ({ commonColors }: { commonColors: CommonColors }) => {
  return (
    <>
      <h2>Common</h2>
      <SingleColorBox label="white" color={commonColors.white} />
      <SingleColorBox label="black" color={commonColors.black} />
    </>
  )
}

const ColorShadesBox = ({
  label,
  color,
}: {
  label: string
  color: MUI.Color
}) => {
  return (
    <>
      <h2>{label}</h2>
      <SingleColorBox label="50" color={color[50]} />
      <SingleColorBox label="100" color={color[100]} />
      <SingleColorBox label="200" color={color[200]} />
      <SingleColorBox label="300" color={color[300]} />
      <SingleColorBox label="400" color={color[400]} />
      <SingleColorBox label="500" color={color[500]} />
      <SingleColorBox label="600" color={color[600]} />
      <SingleColorBox label="700" color={color[700]} />
      <SingleColorBox label="800" color={color[800]} />
      <SingleColorBox label="900" color={color[900]} />
      <SingleColorBox label="A100" color={color['A100']} />
      <SingleColorBox label="A200" color={color['A200']} />
      <SingleColorBox label="A400" color={color['A400']} />
      <SingleColorBox label="A700" color={color['A700']} />
    </>
  )
}

const TextColorsBox = ({ typeText }: { typeText: TypeText }) => {
  return (
    <>
      <h2>Text</h2>
      <SingleColorBox label="Primary" color={typeText.primary} />
      <SingleColorBox label="Secondary" color={typeText.secondary} />
      <SingleColorBox label="Disabled" color={typeText.disabled} />
    </>
  )
}

const ActionColorsBox = ({ typeAction }: { typeAction: TypeAction }) => {
  return (
    <>
      <h2>Action</h2>
      <SingleColorBox label="Active" color={typeAction.active} />
      <SingleColorBox label="Hover" color={typeAction.hover} />
      <SingleColorBox label="Selected" color={typeAction.selected} />
      <SingleColorBox label="Disabled" color={typeAction.disabled} />
      <SingleColorBox
        label="Disabled Background"
        color={typeAction.disabledBackground}
      />
      <SingleColorBox label="Focus" color={typeAction.focus} />
    </>
  )
}

const BackgroundColorsBox = ({
  typeBackground,
}: {
  typeBackground: TypeBackground
}) => {
  return (
    <>
      <h2>Background</h2>
      <SingleColorBox label="Default" color={typeBackground.default} />
      <SingleColorBox label="Paper" color={typeBackground.paper} />
    </>
  )
}

export const Palette = () => {
  const theme = useTheme()
  console.log(theme)
  return (
    <>
      <h1>Semantic colors</h1>
      <Box sx={{ display: 'flex', flexFlow: 'row nowrap' }}>
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

      <TextColorsBox typeText={theme.palette.text} />

      <SingleColorBox label="divider" color={theme.palette.divider} />

      <ActionColorsBox typeAction={theme.palette.action} />

      <BackgroundColorsBox typeBackground={theme.palette.background} />
    </>
  )
}
