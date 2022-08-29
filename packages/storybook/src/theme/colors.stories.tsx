import React from 'react'
import type { PaletteColor, PaletteMode } from '@mui/material'
import {
  capitalize,
  Card,
  CardContent,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import Box from '@mui/material/Box'
import type { CommonColors, Palette } from '@mui/material/styles/createPalette'

import { Tab, Tabs } from '@monorail/components'
import { RawColor as ClassicDarkRawColors } from '@monorail/themes/classic/theme/dark'
import { RawColor as ClassicLightRawColors } from '@monorail/themes/classic/theme/light'
import { RawColor as MuiRawColors } from '@monorail/themes/mui/theme'
import { RawColor as PcteDarkRawColors } from '@monorail/themes/pcte/theme/dark'
import { RawColor as PcteLightRawColors } from '@monorail/themes/pcte/theme/light'
import { RawColor as RebrandDarkRawColors } from '@monorail/themes/rebrand/theme/dark'
import { RawColor as RebrandLightRawColors } from '@monorail/themes/rebrand/theme/light'

export default {
  title: 'Theme/Colors',
  parameters: {
    layout: 'fullscreen',
  },
}

const colorAliases = [
  'common',
  'primary',
  'secondary',
  'default',
  'accent',
  'success',
  'error',
  'warning',
  'info',
  'text',
  'divider',
  'rating',
  'background',
  'action',
  'chart',
  'score',
  'tiers',
] as const

enum ThemeName {
  ClassicLight = 'classicLight',
  ClassicDark = 'classicDark',
  MUILight = 'muiLight',
  MUIDark = 'muiDark',
  PCTELight = 'pcteLight',
  PCTEDark = 'pcteDark',
  RebrandLight = 'rebrandLight',
  RebrandDark = 'rebrandDark',
}

const ColorSwatchContainer = ({
  children,
}: {
  children: Array<JSX.Element>
}) => (
  <Stack direction="row" flexWrap="wrap" gap={4} mb={10}>
    {children}
  </Stack>
)

const ColorCard = ({
  token,
  mapping,
  colorValue,
  figmaStyle,
  description,
}: {
  token: string
  mapping?: string
  colorValue: string
  figmaStyle: string
  description?: string
}) => {
  return (
    <Card variant="outlined" sx={{ minWidth: 275, width: '32%' }}>
      <CardContent>
        <Stack gap={2}>
          <Box
            sx={{
              width: '100%',
              height: 80,
              bgcolor: colorValue,
            }}
          />
          <Typography variant="h3" sx={{ wordWrap: 'break-word' }}>
            {token}
          </Typography>
          <Typography>{`RawColor.${mapping}`}</Typography>
          <Typography>{colorValue}</Typography>
          <Typography>{figmaStyle}</Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}

const Common = ({
  paletteColor,
  colorMode,
}: {
  paletteColor: CommonColors
  colorMode: PaletteMode
}) => {
  /**
   * TODO:
   *
   * Pull information from Notion.
   * - figmaStyle
   * - description
   *
   * Figure out how to display token variable (Object.key?) instead of typing it out
   *
   * How to display global token assigned to alias instead of the color value?
   *
   *
   */

  return (
    <ColorSwatchContainer>
      <ColorCard
        token="palette.common.white"
        mapping={'White'}
        figmaStyle={`${capitalize(colorMode)}/Common/White`}
        colorValue={paletteColor.white}
        description="Elements that should remain white no matter what theme is used. Example: White text on a blue button."
      />
      <ColorCard
        token="palette.common.black"
        mapping={'Black'}
        figmaStyle={`${capitalize(colorMode)}/Common/Black`}
        colorValue={paletteColor.black}
        description="Elements that should remain black no matter what theme is used. Example: Black text on a yellow button."
      />
    </ColorSwatchContainer>
  )
}

// #region Sentiment Color Cards
const Sentiment = ({
  paletteColor,
  alias,
  colorMode,
  rawColorObj,
}: {
  paletteColor: PaletteColor
  alias: keyof Palette
  colorMode: PaletteMode
  rawColorObj?: Record<string, string>
}) => {
  const getObjectKey = (value: string) => {
    if (rawColorObj !== undefined) {
      return Object.keys(rawColorObj).find(key => rawColorObj[key] === value)
    }
  }
  const capitalizedColorMode = capitalize(colorMode)

  return (
    <>
      <Typography variant="h2">Strong Emphasis</Typography>
      <ColorSwatchContainer>
        <ColorCard
          token={`palette.${alias}.light`}
          mapping={getObjectKey(paletteColor.light)}
          figmaStyle={`${capitalizedColorMode}/${capitalize(alias)}/Light`}
          colorValue={paletteColor.light}
          description="Use to achieve lower contrast on components with Strong Emphasis. Don’t use for state colors."
        />
        <ColorCard
          token={`palette.${alias}.main`}
          mapping={getObjectKey(paletteColor.main)}
          figmaStyle={`${capitalizedColorMode}/${capitalize(alias)}/Main`}
          colorValue={paletteColor.main}
        />
        <ColorCard
          token={`palette.${alias}.dark`}
          mapping={getObjectKey(paletteColor.dark)}
          figmaStyle={`${capitalizedColorMode}/${capitalize(alias)}/Dark`}
          colorValue={paletteColor.dark}
          description="Use to achieve higher contrast on components with Strong Emphasis. Don’t use for state colors."
        />
        <ColorCard
          token={`palette.${alias}.contrastText`}
          mapping={getObjectKey(paletteColor.contrastText)}
          figmaStyle={`${capitalizedColorMode}/${capitalize(
            alias,
          )}/Contrast Text`}
          colorValue={paletteColor.contrastText}
          description="Use for contrast elements on components with Strong Emphasis."
        />
        <ColorCard
          token={`palette.${alias}.hover`}
          mapping={getObjectKey(paletteColor.hover)}
          figmaStyle={`${capitalizedColorMode}/${capitalize(alias)}/Hover`}
          colorValue={paletteColor.hover}
          description="Use for hover states on components with Strong Emphasis."
        />
        <ColorCard
          token={`palette.${alias}.active`}
          mapping={getObjectKey(paletteColor.active)}
          figmaStyle={`${capitalizedColorMode}/${capitalize(alias)}/Acitve`}
          colorValue={paletteColor.active}
          description="Use for active states on components with Strong Emphasis."
        />
      </ColorSwatchContainer>

      <Typography variant="h2">Low Emphasis</Typography>
      <ColorSwatchContainer>
        <ColorCard
          token={`palette.${alias}.lowEmphasis.light`}
          mapping={getObjectKey(paletteColor.lowEmphasis.light)}
          figmaStyle={`${capitalizedColorMode}/${capitalize(
            alias,
          )}/Low Emphasis/Light`}
          colorValue={paletteColor.lowEmphasis.light}
          description="Use to achieve a lower contrast on components with Strong Emphasis. Don’t use for state colors."
        />
        <ColorCard
          token={`palette.${alias}.lowEmphasis.main`}
          mapping={getObjectKey(paletteColor.lowEmphasis.main)}
          figmaStyle={`${capitalizedColorMode}/${capitalize(
            alias,
          )}/Low Emphasis/Main`}
          colorValue={paletteColor.lowEmphasis.main}
        />
        <ColorCard
          token={`palette.${alias}.lowEmphasis.dark`}
          mapping={getObjectKey(paletteColor.lowEmphasis.dark)}
          figmaStyle={`${capitalizedColorMode}/${capitalize(
            alias,
          )}/Low Emphasis/Dark`}
          colorValue={paletteColor.lowEmphasis.dark}
          description="Use to achieve a higher contrast on components with Strong Emphasis. Don’t use for state colors."
        />
        <ColorCard
          token={`palette.${alias}.lowEmphasis.contrastText`}
          mapping={getObjectKey(paletteColor.lowEmphasis.contrastText)}
          figmaStyle={`${capitalizedColorMode}/${capitalize(
            alias,
          )}/Low Emphasis/contrastText`}
          colorValue={paletteColor.lowEmphasis.contrastText}
          description="Use for contrast elements on components with Low Emphasis."
        />
        <ColorCard
          token={`palette.${alias}.lowEmphasis.hover`}
          mapping={getObjectKey(paletteColor.lowEmphasis.hover)}
          figmaStyle={`${capitalizedColorMode}/${capitalize(
            alias,
          )}/Low Emphasis/.Hover`}
          colorValue={paletteColor.lowEmphasis.hover}
          description="Use for hover states on components with Low Emphasis."
        />
        <ColorCard
          token={`palette.${alias}.lowEmphasis.active`}
          mapping={getObjectKey(paletteColor.lowEmphasis.active)}
          figmaStyle={`${capitalizedColorMode}/${capitalize(
            alias,
          )}/Low Emphasis/.Active`}
          colorValue={paletteColor.lowEmphasis.active}
          description="Use for active states on components with Low Emphasis."
        />
      </ColorSwatchContainer>

      <Typography variant="h2">Border</Typography>
      <ColorSwatchContainer>
        <ColorCard
          token={`palette.${alias}.border.light`}
          mapping={getObjectKey(paletteColor.border.light)}
          figmaStyle={`${capitalizedColorMode}/${capitalize(
            alias,
          )}/Border Light`}
          colorValue={paletteColor.light}
        />
        <ColorCard
          token={`palette.${alias}.border.main`}
          mapping={getObjectKey(paletteColor.border.main)}
          figmaStyle={`${capitalizedColorMode}/${capitalize(
            alias,
          )}/Border Main`}
          colorValue={paletteColor.main}
        />
        <ColorCard
          token={`palette.${alias}.border.dark`}
          mapping={getObjectKey(paletteColor.border.dark)}
          figmaStyle={`${capitalizedColorMode}/${capitalize(
            alias,
          )}/Border Dark`}
          colorValue={paletteColor.dark}
        />
      </ColorSwatchContainer>

      <Typography variant="h2">Focus Ring</Typography>
      <ColorSwatchContainer>
        <ColorCard
          token={`palette.${alias}.focusRing.inner`}
          mapping={getObjectKey(paletteColor.focusRing.inner)}
          figmaStyle={`${capitalizedColorMode}/${capitalize(
            alias,
          )}/Inner Focus Ring`}
          colorValue={paletteColor.focusRing.inner}
          description="Pre-defined inner focus ring color"
        />
        <ColorCard
          token={`palette.${alias}.focusRing.outer`}
          mapping={getObjectKey(paletteColor.focusRing.outer)}
          figmaStyle={`${capitalizedColorMode}/${capitalize(
            alias,
          )}/Outer Focus Ring`}
          colorValue={paletteColor.focusRing.outer}
          description="Pre-defined outer focus ring color"
        />
      </ColorSwatchContainer>
    </>
  )
}
// #endregion

function TabPanelV(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      sx={{
        flex: 1,
      }}
      {...other}
    >
      {value === index && (
        <Stack gap={4} sx={{ p: 3 }}>
          {children}
        </Stack>
      )}
    </Box>
  )
}

function a11yPropsV(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

export const Colors = () => {
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const rawColorMapping = React.useMemo(() => {
    switch (theme.name) {
      case ThemeName.ClassicLight:
        return ClassicLightRawColors
      case ThemeName.ClassicDark:
        return ClassicDarkRawColors
      case ThemeName.MUILight:
        return MuiRawColors
      case ThemeName.MUIDark:
        return MuiRawColors
      case ThemeName.PCTELight:
        return PcteLightRawColors
      case ThemeName.PCTEDark:
        return PcteDarkRawColors
      case ThemeName.RebrandLight:
        return RebrandLightRawColors
      case ThemeName.RebrandDark:
        return RebrandDarkRawColors
    }
  }, [theme.name])

  const getTokenMapping = (alias: string) => {
    switch (alias) {
      case 'common':
        return (
          <Common
            paletteColor={theme.palette.common}
            colorMode={theme.palette.mode}
          />
        )
      case 'primary':
        return (
          <Sentiment
            alias="primary"
            paletteColor={theme.palette.primary}
            colorMode={theme.palette.mode}
            rawColorObj={rawColorMapping}
          />
        )
      case 'secondary':
        return (
          <Sentiment
            alias="secondary"
            paletteColor={theme.palette.secondary}
            colorMode={theme.palette.mode}
            rawColorObj={rawColorMapping}
          />
        )
      case 'default':
        return (
          <Sentiment
            alias="default"
            paletteColor={theme.palette.default}
            colorMode={theme.palette.mode}
            rawColorObj={rawColorMapping}
          />
        )
      case 'accent':
        return
      case 'success':
        return (
          <Sentiment
            alias="success"
            paletteColor={theme.palette.success}
            colorMode={theme.palette.mode}
            rawColorObj={rawColorMapping}
          />
        )
      case 'error':
        return (
          <Sentiment
            alias="error"
            paletteColor={theme.palette.error}
            colorMode={theme.palette.mode}
            rawColorObj={rawColorMapping}
          />
        )
      case 'warning':
        return (
          <Sentiment
            alias="warning"
            paletteColor={theme.palette.warning}
            colorMode={theme.palette.mode}
            rawColorObj={rawColorMapping}
          />
        )
      case 'info':
        return (
          <Sentiment
            alias="info"
            paletteColor={theme.palette.info}
            colorMode={theme.palette.mode}
            rawColorObj={rawColorMapping}
          />
        )
      case 'text':
        // return <TextColors />
        return
      case 'grey':
        // return <Scale />
        return
      case 'divider':
        return
      case 'rating':
        // return <SingleColor /> // Click through RGBA, HEX, HSL. Can be copied to clipboard
        return
      case 'background':
        // return <Background />
        return
      case 'action':
        // return <ActionColors />
        return
      case 'chart':
        // return <Scale />
        return
      case 'score':
        // return <Score />
        return
      case 'tiers':
        // return <Tiers />
        return
    }
  }

  return (
    <Stack>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'background.paper',
          display: 'flex',
        }}
      >
        <Tabs
          value={value}
          orientation="vertical"
          variant="scrollable"
          onChange={handleChange}
          sx={{ minWidth: 160 }}
        >
          {colorAliases.map((alias, idx) => (
            <Tab key={alias} label={capitalize(alias)} {...a11yPropsV(idx)} />
          ))}
        </Tabs>
        {colorAliases.map((alias, idx) => (
          <TabPanelV value={value} index={idx} key={idx}>
            {getTokenMapping(alias)}
            {/* 
              - Render alias name
              - Render 
              - If 'text'
              - If 'grey'
              - If 'divider'
              - If 'rating'
              - If 'background'
              - If 'action'
              - If 'chart'
              - If 'score'
              - If 'tiers'
              */}
            {/* <Typography>{theme.palette[alias].shades[100]}</Typography> */}
          </TabPanelV>
        ))}
      </Box>
    </Stack>
  )
}
