import React, { VFC } from 'react'
import type { PaletteColor, PaletteMode } from '@mui/material'
import {
  alpha,
  capitalize,
  Card,
  CardContent,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import Box from '@mui/material/Box'
import type { CommonColors, Palette } from '@mui/material/styles/createPalette'

import { Tab, TabPanel, Tabs } from '@monorail/components'
import { RawColor } from '@monorail/themes/classic/theme/light'

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

const ColorSwatchContainer = ({
  children,
}: {
  children: Array<JSX.Element>
}) => (
  <Stack direction="row" flexWrap="wrap" gap={4} mb={10}>
    {children}
  </Stack>
)

const ColorSwatch = ({
  token,
  mapping,
  colorValue,
  figmaStyle,
  description,
}: {
  token: string
  mapping: string
  colorValue: string
  figmaStyle: string
  description: string
}) => {
  return (
    <Card variant="outlined" sx={{ minWidth: 275, width: '32%' }}>
      <CardContent>
        <Stack gap={2}>
          <Box
            sx={theme => ({
              width: '100%',
              height: 80,
              bgcolor: colorValue,
              boxShadow: `inset 0 0 0 1px ${theme.palette.getContrastText(
                colorValue,
              )}`,
            })}
          />
          <Typography variant="h3" sx={{ wordWrap: 'break-word' }}>
            {token}
          </Typography>
          <Typography>{mapping}</Typography>
          <Typography>{colorValue}</Typography>
          <Typography>{figmaStyle}</Typography>
          <Typography>{description}</Typography>
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
      <ColorSwatch
        token="palette.common.white"
        mapping={'White'}
        figmaStyle={`${capitalize(colorMode)}/Common/White`}
        colorValue={paletteColor.white}
        description="Elements that should remain white no matter what theme is used. Example: White text on a blue button."
      />
      <ColorSwatch
        token="palette.common.black"
        mapping={'Black'}
        figmaStyle={`${capitalize(colorMode)}/Common/Black`}
        colorValue={paletteColor.black}
        description="Elements that should remain black no matter what theme is used. Example: Black text on a yellow button."
      />
    </ColorSwatchContainer>
  )
}

const Sentiment = ({
  paletteColor,
  alias,
  colorMode,
}: {
  paletteColor: PaletteColor
  alias: keyof Palette
  colorMode: PaletteMode
}) => {
  return (
    <>
      <Typography variant="h2">Strong Emphasis</Typography>
      <ColorSwatchContainer>
        <ColorSwatch
          token={`palette.${alias}.light`}
          mapping={'Blue400'}
          figmaStyle={`${colorMode}/${capitalize(alias)}/Light`}
          colorValue={paletteColor.light}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa"
        />
        <ColorSwatch
          token={`palette.${alias}.main`}
          mapping={'Blue600'}
          figmaStyle={`${colorMode}/${capitalize(alias)}/Main`}
          colorValue={paletteColor.main}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa"
        />
        <ColorSwatch
          token={`palette.${alias}.dark`}
          mapping={'Blue700'}
          figmaStyle={`${colorMode}/${capitalize(alias)}/Dark`}
          colorValue={paletteColor.dark}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa"
        />
        <ColorSwatch
          token={`palette.${alias}.contrastText`}
          mapping={'Blue700'}
          figmaStyle={`${colorMode}/${capitalize(alias)}/Contrast Text`}
          colorValue={paletteColor.contrastText}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa"
        />
        <ColorSwatch
          token={`palette.${alias}.hover`}
          mapping={'Blue700'}
          figmaStyle={`${colorMode}/${capitalize(alias)}/Hover`}
          colorValue={paletteColor.hover}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa"
        />
        <ColorSwatch
          token={`palette.${alias}.active`}
          mapping={'Blue800'}
          figmaStyle={`${colorMode}/${capitalize(alias)}/Acitve`}
          colorValue={paletteColor.active}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa"
        />
      </ColorSwatchContainer>
      <Typography variant="h2">Low Emphasis</Typography>
      <ColorSwatchContainer>
        <ColorSwatch
          token={`palette.${alias}.lowEmphasis.light`}
          mapping={'Blue400'}
          figmaStyle={`${colorMode}/${capitalize(alias)}/Low Emphasis/Light`}
          colorValue={paletteColor.lowEmphasis.light}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa"
        />
        <ColorSwatch
          token={`palette.${alias}.lowEmphasis.main`}
          mapping={'Blue600'}
          figmaStyle={`${colorMode}/${capitalize(alias)}/Low Emphasis/Main`}
          colorValue={paletteColor.lowEmphasis.main}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa"
        />
        <ColorSwatch
          token={`palette.${alias}.lowEmphasis.dark`}
          mapping={'Blue700'}
          figmaStyle={`${colorMode}/${capitalize(alias)}/Low Emphasis/Dark`}
          colorValue={paletteColor.lowEmphasis.dark}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa"
        />
        <ColorSwatch
          token={`palette.${alias}.lowEmphasis.contrastText`}
          mapping={'Blue700'}
          figmaStyle={`${colorMode}/${capitalize(
            alias,
          )}/Low Emphasis/contrastText`}
          colorValue={paletteColor.lowEmphasis.contrastText}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa"
        />
        <ColorSwatch
          token={`palette.${alias}.lowEmphasis.hover`}
          mapping={'Blue700'}
          figmaStyle={`${colorMode}/${capitalize(alias)}/Low Emphasis/.Hover`}
          colorValue={paletteColor.lowEmphasis.hover}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa"
        />
        <ColorSwatch
          token={`palette.${alias}.lowEmphasis.active`}
          mapping={'Blue800'}
          figmaStyle={`${colorMode}/${capitalize(alias)}/Low Emphasis/.Acitve`}
          colorValue={paletteColor.lowEmphasis.active}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa"
        />
      </ColorSwatchContainer>
      <Typography variant="h2">Border</Typography>
      <ColorSwatchContainer>
        <ColorSwatch
          token={`palette.${alias}.border.light`}
          mapping={'Blue400'}
          figmaStyle={`${colorMode}/${capitalize(alias)}/Low Emphasis/Light`}
          colorValue={paletteColor.light}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa"
        />
        <ColorSwatch
          token={`palette.${alias}.border.main`}
          mapping={'Blue600'}
          figmaStyle={`${colorMode}/${capitalize(alias)}/Main`}
          colorValue={paletteColor.main}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa"
        />
        <ColorSwatch
          token={`palette.${alias}.border.dark`}
          mapping={'Blue700'}
          figmaStyle={`${colorMode}/${capitalize(alias)}/Dark`}
          colorValue={paletteColor.dark}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa"
        />
      </ColorSwatchContainer>
      <Typography variant="h2">Focus Ring</Typography>
      <ColorSwatchContainer>
        <ColorSwatch
          token={`palette.${alias}.focusRing.inner`}
          mapping={'Blue400'}
          figmaStyle={`${colorMode}/${capitalize(alias)}/Low Emphasis/Light`}
          colorValue={paletteColor.focusRing.inner}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa"
        />
        <ColorSwatch
          token={`palette.${alias}.focusRing.outer`}
          mapping={'Blue600'}
          figmaStyle={`${colorMode}/${capitalize(alias)}/Main`}
          colorValue={paletteColor.focusRing.outer}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa"
        />
      </ColorSwatchContainer>
    </>
  )
}

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
          />
        )
      case 'secondary':
        return (
          <Sentiment
            alias="secondary"
            paletteColor={theme.palette.secondary}
            colorMode={theme.palette.mode}
          />
        )
      case 'default':
        return (
          <Sentiment
            alias="default"
            paletteColor={theme.palette.default}
            colorMode={theme.palette.mode}
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
          />
        )
      case 'error':
        return (
          <Sentiment
            alias="error"
            paletteColor={theme.palette.error}
            colorMode={theme.palette.mode}
          />
        )
      case 'warning':
        return (
          <Sentiment
            alias="warning"
            paletteColor={theme.palette.warning}
            colorMode={theme.palette.mode}
          />
        )
      case 'info':
        return (
          <Sentiment
            alias="info"
            paletteColor={theme.palette.info}
            colorMode={theme.palette.mode}
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

  // console.log(theme.)
  console.log(Object.entries(RawColor))

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
