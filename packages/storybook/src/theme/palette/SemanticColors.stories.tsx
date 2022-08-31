import React from 'react'
import type { Color, PaletteColor } from '@mui/material'
import { capitalize, Stack, Typography, useTheme } from '@mui/material'
import Box from '@mui/material/Box'

import type { TabPanelProps } from '@monorail/components'
import { Tab, Tabs } from '@monorail/components'

import { getRawColorObject } from '../../helpers.js'
import { ColorMap } from './palette.components'
import type {
  ColorCardProps,
  ColorSwatchProps,
  ThemeName,
} from './palette.types'

export default {
  title: 'Theme/Palette/Semantic Colors',
  parameters: {
    layout: 'fullscreen',
  },
}

const colorAliases = [
  'primary',
  'secondary',
  'default',
  'accent',
  'success',
  'error',
  'warning',
  'info',
  'grey',
] as const

// #region Sentiment Color Cards
const Sentiment = ({
  sentiment,
  colorMode,
  rawColorMapping,
}: {
  sentiment: Record<string, Array<ColorCardProps>>
  colorMode: string
  rawColorMapping: ColorSwatchProps['rawColorObj']
}) => {
  return (
    <>
      <Typography variant="h2" gutterBottom>
        Strong Emphasis
      </Typography>
      <ColorMap
        colorMetadata={sentiment.strongEmphasis}
        colorMode={colorMode}
        rawColorObj={rawColorMapping}
      />
      <Typography variant="h2" gutterBottom>
        Low Emphasis
      </Typography>
      <ColorMap
        colorMetadata={sentiment.lowEmphasis}
        colorMode={colorMode}
        rawColorObj={rawColorMapping}
      />
      <Typography variant="h2" gutterBottom>
        Border
      </Typography>
      <ColorMap
        colorMetadata={sentiment.border}
        colorMode={colorMode}
        rawColorObj={rawColorMapping}
      />
      <Typography variant="h2" gutterBottom>
        Focus Ring
      </Typography>
      <ColorMap
        colorMetadata={sentiment.focusRing}
        colorMode={colorMode}
        rawColorObj={rawColorMapping}
      />
      <Typography variant="h2" gutterBottom>
        Shades
      </Typography>
      <Typography gutterBottom>
        Access to global color tokens. Only use when you can't find an alias
        token for your use case.
      </Typography>
      <ColorMap
        colorMetadata={sentiment.shades}
        colorMode={colorMode}
        rawColorObj={rawColorMapping}
      />
    </>
  )
}
// #endregion

function TabPanelV(props: TabPanelProps & { index: string }) {
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
        <Box gap={4} sx={{ p: 4 }}>
          {children}
        </Box>
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

export const SemanticColors = () => {
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  const colorMode = capitalize(theme.palette.mode)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const rawColorMapping = React.useMemo(
    () => getRawColorObject(theme.name as ThemeName),
    [theme.name],
  )

  const greyColors = Object.keys(theme.palette.grey).map(shade => ({
    token: `palette.grey[${shade}]`,
    colorValue: theme.palette.grey[shade as keyof Color],
  }))

  const accentColors = {
    strongEmphasis: [
      {
        token: `palette.accent.light`,
        description:
          'Use to achieve lower contrast on components with Strong Emphasis. Don’t use for state colors.',
        colorValue: theme.palette.accent.light,
        figmaStyle: `Accent/Light`,
      },
      {
        token: `palette.accent.main`,
        colorValue: theme.palette.accent.main,
        figmaStyle: `Accent/Main`,
      },
      {
        token: `palette.accent.dark`,
        colorValue: theme.palette.accent.dark,
        figmaStyle: `Accent/Dark`,
      },
      {
        token: `palette.accent.contrastText`,
        colorValue: theme.palette.accent.contrastText,
        figmaStyle: `Accent/contrastText`,
      },
    ],
    border: [
      {
        token: `palette.accent.border.main`,
        colorValue: theme.palette.accent.border.main,
        figmaStyle: `Accent/Border/Main`,
      },
    ],
    focusRing: [
      {
        token: `palette.accent.focusRing.inner`,
        colorValue: theme.palette.accent.focusRing.inner,
        figmaStyle: `Accent/Inner Focus Ring`,
      },
      {
        token: `palette.accent.focusRing.outer`,
        colorValue: theme.palette.accent.focusRing.outer,
        figmaStyle: `Accent/Outer Focus Ring`,
      },
    ],
  }

  const sentiment = (
    alias: ColorSwatchProps['alias'],
    paletteColor: PaletteColor,
  ): {
    strongEmphasis: Array<ColorCardProps>
    lowEmphasis: Array<ColorCardProps>
    border: Array<ColorCardProps>
    focusRing: Array<ColorCardProps>
    shades: Array<ColorCardProps>
  } => {
    const colorShades = Object.keys(paletteColor.shades).map(shade => {
      const colorValue =
        shade !== undefined ? paletteColor.shades[shade as keyof Color] : ''

      return {
        token: `palette.primary.shades[${shade}]`,
        colorValue,
      }
    })

    return {
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
          figmaStyle: `${capitalize(
            alias as string,
          )}/Low Emphasis/contrastText`,
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
      shades: colorShades,
    }
  }

  const getTokenMapping = (alias: string) => {
    switch (alias) {
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
        return (
          <Sentiment
            sentiment={accentColors}
            colorMode={colorMode}
            rawColorMapping={rawColorMapping}
          />
        )
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
      case 'grey':
        return (
          <ColorMap
            colorMetadata={greyColors}
            colorMode={colorMode}
            rawColorObj={rawColorMapping}
          />
        )
    }
  }

  return (
    <Stack>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'background.paper',
        }}
      >
        <Tabs
          value={value}
          variant="scrollable"
          onChange={handleChange}
          sx={{
            minWidth: 160,
            position: 'sticky',
            top: 0,
            left: 0,
            bgcolor: 'background.paper',
          }}
        >
          {colorAliases.map((alias, idx) => (
            <Tab key={alias} label={capitalize(alias)} {...a11yPropsV(idx)} />
          ))}
        </Tabs>
        {colorAliases.map((alias, idx) => (
          <TabPanelV value={value.toString()} index={idx.toString()} key={idx}>
            {getTokenMapping(alias)}
          </TabPanelV>
        ))}
      </Box>
    </Stack>
  )
}
