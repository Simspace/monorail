import React from 'react'
import { alpha, PaletteColor, PaletteMode } from '@mui/material'
import {
  capitalize,
  Card,
  CardContent,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import Box from '@mui/material/Box'
import type {
  CommonColors,
  Palette,
  PaletteOptions,
  TypeDivider,
  TypeText,
} from '@mui/material/styles/createPalette'

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

type ColorCard = {
  token: string
  mapping?: string
  colorValue: string
  figmaStyle: string
  description?: string
}

type ColorSwatch = {
  alias?: keyof Palette
  paletteColor?: PaletteOptions
  colorMode: string
  rawColorObj?: Record<string, string>
  data?: Array<ColorCard>
}

const ColorSwatchContainer = ({
  children,
}: {
  children: Array<JSX.Element> | JSX.Element
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
}: ColorCard) => {
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

const ColorMap = ({ data, colorMode, rawColorObj }: ColorSwatch) => {
  const getObjectKey = (value: string) => {
    if (rawColorObj !== undefined) {
      return Object.keys(rawColorObj).find(key => rawColorObj[key] === value)
    }
  }

  return (
    <>
      {data !== undefined ? (
        data.map(color => (
          <ColorCard
            key={color.token}
            token={color.token}
            mapping={getObjectKey(color.colorValue)}
            colorValue={color.colorValue}
            figmaStyle={`${colorMode}/${color.figmaStyle}`}
            description={color.description}
          />
        ))
      ) : (
        <Typography color="error">No Colors</Typography>
      )}
    </>
  )
}

// #region Sentiment Color Cards
const Sentiment = ({
  sentiment,
  colorMode,
  rawColorMapping,
}: {
  sentiment: Record<string, Array<ColorCard>>
  colorMode: string
  rawColorMapping: ColorSwatch['rawColorObj']
}) => {
  return (
    <>
      <Typography variant="h2">Strong Emphasis</Typography>
      <ColorSwatchContainer>
        <ColorMap
          data={sentiment.strongEmphasis}
          colorMode={colorMode}
          rawColorObj={rawColorMapping}
        />
      </ColorSwatchContainer>
      <Typography variant="h2">Low Emphasis</Typography>
      <ColorSwatchContainer>
        <ColorMap
          data={sentiment.lowEmphasis}
          colorMode={colorMode}
          rawColorObj={rawColorMapping}
        />
      </ColorSwatchContainer>
      <Typography variant="h2">Border</Typography>
      <ColorSwatchContainer>
        <ColorMap
          data={sentiment.border}
          colorMode={colorMode}
          rawColorObj={rawColorMapping}
        />
      </ColorSwatchContainer>
      <Typography variant="h2">Focus Ring</Typography>
      <ColorSwatchContainer>
        <ColorMap
          data={sentiment.focusRing}
          colorMode={colorMode}
          rawColorObj={rawColorMapping}
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

  const colorMode = capitalize(theme.palette.mode)

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

  const common = [
    {
      token: 'palette.common.white',
      description:
        'Elements that should remain white no matter what theme is used. Example: White text on a blue button.',
      colorValue: theme.palette.common.white,
      figmaStyle: 'Common/White',
    },
    {
      token: 'palette.common.black',
      description:
        'Elements that should remain black no matter what theme is used. Example: Black text on a yellow button.',
      colorValue: theme.palette.common.black,
      figmaStyle: 'Common/Black',
    },
  ]

  const sentiment = (
    alias: ColorSwatch['alias'],
    paletteColor: PaletteColor,
  ) => ({
    strongEmphasis: [
      {
        token: `palette.${alias}.light`,
        description:
          'Use to achieve lower contrast on components with Strong Emphasis. Don’t use for state colors.',
        colorValue: paletteColor.light,
        figmaStyle: `${capitalize(alias as string)}/Light`,
      },
      {
        token: `palette.${alias}.main`,
        colorValue: paletteColor.main,
        figmaStyle: `${capitalize(alias as string)}/Main`,
      },
      {
        token: `palette.${alias}.dark`,
        colorValue: paletteColor.dark,
        figmaStyle: `${capitalize(alias as string)}/Dark`,
      },
      {
        token: `palette.${alias}.contrastText`,
        colorValue: paletteColor.contrastText,
        figmaStyle: `${capitalize(alias as string)}/contrastText`,
      },
      {
        token: `palette.${alias}.hover`,
        colorValue: paletteColor.hover,
        figmaStyle: `${capitalize(alias as string)}/Hover`,
      },
      {
        token: `palette.${alias}.active`,
        colorValue: paletteColor.active,
        figmaStyle: `${capitalize(alias as string)}/Active`,
      },
    ],
    lowEmphasis: [
      {
        token: `palette.${alias}.lowEmphasis.light`,
        description:
          'Use to achieve lower contrast on components with Strong Emphasis. Don’t use for state colors.',
        colorValue: paletteColor.lowEmphasis.light,
        figmaStyle: `${capitalize(alias as string)}/Low Emphasis/Light`,
      },
      {
        token: `palette.${alias}.lowEmphasis.main`,
        colorValue: paletteColor.lowEmphasis.main,
        figmaStyle: `${capitalize(alias as string)}/Low Emphasis/Main`,
      },
      {
        token: `palette.${alias}.lowEmphasis.dark`,
        colorValue: paletteColor.lowEmphasis.dark,
        figmaStyle: `${capitalize(alias as string)}/Low Emphasis/Dark`,
      },
      {
        token: `palette.${alias}.lowEmphasis.contrastText`,
        colorValue: paletteColor.lowEmphasis.contrastText,
        figmaStyle: `${capitalize(alias as string)}/Low Emphasis/contrastText`,
      },
      {
        token: `palette.${alias}.lowEmphasis.hover`,
        colorValue: paletteColor.lowEmphasis.hover,
        figmaStyle: `${capitalize(alias as string)}/Low Emphasis/.Hover`,
      },
      {
        token: `palette.${alias}.lowEmphasis.active`,
        colorValue: paletteColor.lowEmphasis.active,
        figmaStyle: `${capitalize(alias as string)}/Low Emphasis/.Active`,
      },
    ],
    border: [
      {
        token: `palette.${alias}.border.light`,
        colorValue: paletteColor.border.light,
        figmaStyle: `${capitalize(alias as string)}/Border/Light`,
      },
      {
        token: `palette.${alias}.border.main`,
        colorValue: paletteColor.border.main,
        figmaStyle: `${capitalize(alias as string)}/Border/Main`,
      },
      {
        token: `palette.${alias}.border.dark`,
        colorValue: paletteColor.border.dark,
        figmaStyle: `${capitalize(alias as string)}/Border/Dark`,
      },
    ],
    focusRing: [
      {
        token: `palette.${alias}.focusRing.inner`,
        colorValue: paletteColor.focusRing.inner,
        figmaStyle: `${capitalize(alias as string)}/Inner Focus Ring`,
      },
      {
        token: `palette.${alias}.focusRing.outer`,
        colorValue: paletteColor.focusRing.outer,
        figmaStyle: `${capitalize(alias as string)}/Outer Focus Ring`,
      },
    ],
    shades: [],
  })

  const text = [
    {
      token: 'palette.text.primary',
      description: 'Use for most texts. Headings, paragraphs, labels.',
      colorValue: theme.palette.text.primary,
      figmaStyle: 'Text/Primary',
    },
    {
      token: 'palette.text.secondary',
      description: '',
      colorValue: theme.palette.text.secondary,
      figmaStyle: 'Text/Secondary',
    },
    {
      token: 'palette.text.disabled',
      description: '',
      colorValue: theme.palette.text.disabled,
      figmaStyle: 'Text/Disabled',
    },
  ]

  const divider = [
    {
      token: 'palette.divider',
      description: '',
      colorValue: theme.palette.divider,
      figmaStyle: 'Divider',
    },
  ]

  const rating = [
    {
      token: 'palette.rating',
      description: 'Use when Rating component is filled.',
      colorValue: theme.palette.rating,
      figmaStyle: 'Rating',
    },
  ]

  const background = [
    {
      token: 'palette.background.default',
      colorValue: theme.palette.background.default,
      figmaStyle: 'Background/Default',
    },
    {
      token: 'palette.background.paper',
      colorValue: theme.palette.background.paper,
      description:
        'Commonly used on surfaces. As a rule of thumb, if the background should turn from light to dark when switching from light to dark mode, use background.paper.',
      figmaStyle: 'Background/Default',
    },
  ]

  const action: Array<ColorCard> = [
    {
      token: 'palette.action.activatedOpacity',
      colorValue: alpha(
        theme.palette.primary.main,
        theme.palette.action.activatedOpacity,
      ),
      figmaStyle: 'N/A',
      description:
        'alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity)',
    },
    {
      token: 'palette.action.active',
      colorValue: theme.palette.action.active,
      figmaStyle: 'N/A',
    },
    {
      token: 'palette.action.disabled',
      colorValue: theme.palette.action.disabled,
      figmaStyle: 'N/A',
    },
    {
      token: 'palette.action.disabledBackground',
      colorValue: theme.palette.action.disabledBackground,
      figmaStyle: 'N/A',
    },
    {
      token: 'palette.action.disabledOpacity',
      colorValue: alpha(
        theme.palette.primary.main,
        theme.palette.action.disabledOpacity,
      ),
      figmaStyle: 'N/A',
      description:
        'alpha(theme.palette.primary.main, theme.palette.action.disabledOpacity)',
    },
    {
      token: 'palette.action.focus',
      colorValue: theme.palette.action.focus,
      figmaStyle: 'N/A',
    },
    {
      token: 'palette.action.focusOpacity',
      colorValue: alpha(
        theme.palette.primary.main,
        theme.palette.action.focusOpacity,
      ),
      figmaStyle: 'N/A',
      description:
        'alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)',
    },
    {
      token: 'palette.action.hover',
      colorValue: theme.palette.action.hover,
      figmaStyle: 'N/A',
    },
    {
      token: 'palette.action.hoverOpacity',
      colorValue: alpha(
        theme.palette.primary.main,
        theme.palette.action.hoverOpacity,
      ),
      figmaStyle: 'N/A',
      description:
        'alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)',
    },
    {
      token: 'palette.action.selected',
      colorValue: theme.palette.action.selected,
      figmaStyle: 'N/A',
    },
    {
      token: 'palette.action.selectedOpacity',
      colorValue: alpha(
        theme.palette.primary.main,
        theme.palette.action.selectedOpacity,
      ),
      figmaStyle: 'N/A',
      description:
        'alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)',
    },
  ]

  const getTokenMapping = (alias: string) => {
    switch (alias) {
      case 'common':
        return (
          <ColorSwatchContainer>
            <ColorMap
              data={common}
              colorMode={colorMode}
              rawColorObj={rawColorMapping}
            />
          </ColorSwatchContainer>
        )
      case 'primary':
        return (
          <Sentiment
            sentiment={sentiment('primary', theme.palette.primary)}
            colorMode={colorMode}
            rawColorMapping={rawColorMapping}
          />
        )
      case 'secondary':
        return (
          <Sentiment
            sentiment={sentiment('secondary', theme.palette.secondary)}
            colorMode={colorMode}
            rawColorMapping={rawColorMapping}
          />
        )
      case 'default':
        return (
          <Sentiment
            sentiment={sentiment('default', theme.palette.default)}
            colorMode={colorMode}
            rawColorMapping={rawColorMapping}
          />
        )
      case 'accent':
        return
      case 'success':
        return (
          <Sentiment
            sentiment={sentiment('success', theme.palette.success)}
            colorMode={colorMode}
            rawColorMapping={rawColorMapping}
          />
        )
      case 'error':
        return (
          <Sentiment
            sentiment={sentiment('error', theme.palette.error)}
            colorMode={colorMode}
            rawColorMapping={rawColorMapping}
          />
        )
      case 'warning':
        return (
          <Sentiment
            sentiment={sentiment('warning', theme.palette.warning)}
            colorMode={colorMode}
            rawColorMapping={rawColorMapping}
          />
        )
      case 'info':
        return (
          <Sentiment
            sentiment={sentiment('info', theme.palette.info)}
            colorMode={colorMode}
            rawColorMapping={rawColorMapping}
          />
        )
      case 'text':
        return (
          <ColorSwatchContainer>
            <ColorMap
              data={text}
              colorMode={colorMode}
              rawColorObj={rawColorMapping}
            />
          </ColorSwatchContainer>
        )
      case 'grey':
        // return <Scale />
        return
      case 'divider':
        return (
          <ColorSwatchContainer>
            <ColorMap
              data={divider}
              colorMode={colorMode}
              rawColorObj={rawColorMapping}
            />
          </ColorSwatchContainer>
        )
      case 'rating':
        return (
          <ColorSwatchContainer>
            <ColorMap
              data={rating}
              colorMode={colorMode}
              rawColorObj={rawColorMapping}
            />
          </ColorSwatchContainer>
        )
      case 'background':
        return (
          <ColorSwatchContainer>
            <ColorMap
              data={background}
              colorMode={colorMode}
              rawColorObj={rawColorMapping}
            />
          </ColorSwatchContainer>
        )
      case 'action':
        return (
          <ColorSwatchContainer>
            <ColorMap
              data={action}
              colorMode={colorMode}
              rawColorObj={rawColorMapping}
            />
          </ColorSwatchContainer>
        )
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
