import React from 'react'
import {
  Color as MUIColor,
  PaletteColor,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import Box from '@mui/material/Box'
import {
  CommonColors,
  TypeBackground,
  TypeText,
} from '@mui/material/styles/createPalette'

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
    <Box sx={{ marginBottom: 2 }}>
      <Typography sx={{ minWidth, marginRight: 2 }}>{label}</Typography>
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
  const minWidth = '64px'
  return (
    <Box sx={{ display: 'flex', flexFlow: 'row', alignItems: 'center' }}>
      <Box component="h3" alignSelf="flex-start" sx={{ minWidth: 160 }}>
        {label}
      </Box>
      <Stack direction="row" flexWrap="wrap" alignItems="flex-start">
        <SingleColorBox
          color={paletteColor.light}
          label="Light"
          minWidth={minWidth}
        />
        <SingleColorBox
          color={paletteColor.main}
          label="Main"
          minWidth={minWidth}
        />
        <SingleColorBox
          color={paletteColor.dark}
          label="Dark"
          minWidth={minWidth}
        />
        <SingleColorBox
          color={paletteColor.contrastText}
          label="Contrast Text"
          minWidth={minWidth}
        />
        {'shades' in paletteColor && (
          <>
            <SingleColorBox
              label="50"
              color={paletteColor.shades[50]}
              minWidth={minWidth}
            />
            <SingleColorBox
              label="100"
              color={paletteColor.shades[100]}
              minWidth={minWidth}
            />
            <SingleColorBox
              label="200"
              color={paletteColor.shades[200]}
              minWidth={minWidth}
            />
            <SingleColorBox
              label="300"
              color={paletteColor.shades[300]}
              minWidth={minWidth}
            />
            <SingleColorBox
              label="400"
              color={paletteColor.shades[400]}
              minWidth={minWidth}
            />
            <SingleColorBox
              label="500"
              color={paletteColor.shades[500]}
              minWidth={minWidth}
            />
            <SingleColorBox
              label="600"
              color={paletteColor.shades[600]}
              minWidth={minWidth}
            />
            <SingleColorBox
              label="700"
              color={paletteColor.shades[700]}
              minWidth={minWidth}
            />
            <SingleColorBox
              label="800"
              color={paletteColor.shades[800]}
              minWidth={minWidth}
            />
          </>
        )}
        {'focusRing' in paletteColor && (
          <>
            <SingleColorBox
              color={paletteColor.focusRing.outer}
              label="focus outer"
              minWidth={minWidth}
            />
            <SingleColorBox
              color={paletteColor.focusRing.inner}
              label="focus inner"
              minWidth={minWidth}
            />
          </>
        )}
      </Stack>
    </Box>
  )
}

const CommonColorsBox = ({ commonColors }: { commonColors: CommonColors }) => {
  return (
    <Box sx={{ display: 'flex', flexFlow: 'row', alignItems: 'center' }}>
      <Box component="h3" sx={{ flex: 1 }}>
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
    <Box sx={{ display: 'flex', flexFlow: 'row', alignItems: 'center' }}>
      <Box component="h3" sx={{ flex: 1 }}>
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
    <Box sx={{ display: 'flex', flexFlow: 'row', alignItems: 'center' }}>
      <Box component="h3" sx={{ flex: 1 }}>
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
    <Box sx={{ display: 'flex', flexFlow: 'row', alignItems: 'center' }}>
      <Box component="h3" sx={{ flex: 1 }}>
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
  return (
    <>
      <Typography variant="h1" component="h2" gutterBottom>
        Colors
      </Typography>
      <Box sx={{ display: 'flex', flexFlow: 'column nowrap', mb: 10 }}>
        <PaletteColorBox label="Primary" paletteColor={theme.palette.primary} />
        <PaletteColorBox
          label="Secondary"
          paletteColor={theme.palette.secondary}
        />
        <PaletteColorBox label="Accent" paletteColor={theme.palette.accent} />
        <PaletteColorBox label="Info" paletteColor={theme.palette.info} />
        <PaletteColorBox label="Success" paletteColor={theme.palette.success} />
        <PaletteColorBox label="Warning" paletteColor={theme.palette.warning} />
        <PaletteColorBox label="Error" paletteColor={theme.palette.error} />
      </Box>

      <Typography variant="h1" component="h2" gutterBottom>
        Common
      </Typography>
      <Box sx={{ display: 'flex', flexFlow: 'column nowrap', mb: 10 }}>
        <TextColorsBox typeText={theme.palette.text} />
        <BackgroundColorsBox typeBackground={theme.palette.background} />
        <CommonColorsBox commonColors={theme.palette.common} />
        <SingleColorBox
          label="divider"
          color={theme.palette.divider}
          minWidth={'100%'}
        />
      </Box>

      <Typography variant="h1" component="h2" gutterBottom>
        Score
      </Typography>
      <Box sx={{ display: 'flex', flexFlow: 'column nowrap', mb: 10 }}>
        <PaletteColorBox label="High" paletteColor={theme.palette.score.high} />
        <PaletteColorBox
          label="High Moderate"
          paletteColor={theme.palette.score.highModerate}
        />
        <PaletteColorBox
          label="Moderate"
          paletteColor={theme.palette.score.moderate}
        />
        <PaletteColorBox
          label="Low Moderate"
          paletteColor={theme.palette.score.lowModerate}
        />
        <PaletteColorBox label="Low" paletteColor={theme.palette.score.low} />
      </Box>

      <Typography variant="h1" component="h2" gutterBottom>
        Tiers
      </Typography>
      <Box sx={{ display: 'flex', flexFlow: 'column nowrap', mb: 10 }}>
        <SingleColorBox
          label="One"
          color={theme.palette.tiers.one}
          minWidth={'100%'}
        />
        <SingleColorBox
          label="Two"
          color={theme.palette.tiers.two}
          minWidth={'100%'}
        />
        <SingleColorBox
          label="Three"
          color={theme.palette.tiers.three}
          minWidth={'100%'}
        />
        <SingleColorBox
          label="Four"
          color={theme.palette.tiers.four}
          minWidth={'100%'}
        />
      </Box>

      <Typography variant="h1" component="h2" gutterBottom>
        Chart
      </Typography>
      <ColorShadesBox label="Grey" color={theme.palette.grey} />
      <ColorShadesBox label="Blue" color={theme.palette.chart.blue} />
      <ColorShadesBox label="Fuchsia" color={theme.palette.chart.fuchsia} />
      <ColorShadesBox label="Orange" color={theme.palette.chart.orange} />
      <ColorShadesBox label="Purple" color={theme.palette.chart.purple} />
      <ColorShadesBox label="Teal" color={theme.palette.chart.teal} />
    </>
  )
}
