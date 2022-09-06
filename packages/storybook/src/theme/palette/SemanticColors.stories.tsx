import React from 'react'
import type { Color, PaletteColor } from '@mui/material'
import { capitalize, Typography, useTheme } from '@mui/material'
import Box from '@mui/material/Box'

import type { TabPanelProps } from '@monorail/components'
import { Tab, Tabs } from '@monorail/components'

import { getRawColorObject } from '../../helpers.js'
import { ColorTokenTable } from './palette.components'
import type {
  ColorTokenRowProps,
  ColorTokenTableProps,
  ThemeName,
} from './palette.types'

export default {
  title: 'Theme/Palette/Semantic Colors',
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
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
  alias,
  sentiment,
  rawColorMapping,
}: {
  alias: string
  sentiment: Record<string, Array<ColorTokenRowProps>>
  colorMode: string
  rawColorMapping: ColorTokenTableProps['rawColorObj']
}) => {
  return (
    <>
      <Box mb={10}>
        <Typography variant="h2" gutterBottom>
          {`${capitalize(alias)} Colors`}
        </Typography>
        <Typography gutterBottom>{`theme.palette.${alias}`}</Typography>
      </Box>
      <Typography variant="h3" gutterBottom>
        Strong Emphasis
      </Typography>
      <ColorTokenTable
        colorMetadata={sentiment.strongEmphasis}
        rawColorObj={rawColorMapping}
      />
      {sentiment.lowEmphasis !== undefined && (
        <>
          <Typography variant="h3" gutterBottom>
            Low Emphasis
          </Typography>
          <ColorTokenTable
            colorMetadata={sentiment.lowEmphasis}
            rawColorObj={rawColorMapping}
          />
        </>
      )}
      <Typography variant="h3" gutterBottom>
        Border
      </Typography>
      <ColorTokenTable
        colorMetadata={sentiment.border}
        rawColorObj={rawColorMapping}
      />
      <Typography variant="h3" gutterBottom>
        Focus Ring
      </Typography>
      <ColorTokenTable
        colorMetadata={sentiment.focusRing}
        rawColorObj={rawColorMapping}
      />
      {sentiment.lowEmphasis !== undefined && (
        <>
          <Typography variant="h3" gutterBottom>
            Shades
          </Typography>
          <Typography gutterBottom>
            Access to global color tokens. Only use when you can't find an alias
            token for your use case. For charts, use theme.palette.chart.
          </Typography>
          <ColorTokenTable
            colorMetadata={sentiment.shades}
            rawColorObj={rawColorMapping}
          />
        </>
      )}
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

  const accentColors: {
    strongEmphasis: Array<ColorTokenRowProps>
    border: Array<ColorTokenRowProps>
    focusRing: Array<ColorTokenRowProps>
  } = {
    strongEmphasis: [
      {
        token: `.light`,
        description:
          'Use to achieve lower contrast on components with Strong Emphasis. Don’t use for state colors.',
        colorValue: theme.palette.accent.light,
        figmaStyle: `Accent/Light`,
      },
      {
        token: `.main`,
        colorValue: theme.palette.accent.main,
        figmaStyle: `Accent/Main`,
      },
      {
        token: `.dark`,
        colorValue: theme.palette.accent.dark,
        figmaStyle: `Accent/Dark`,
        description:
          'Use to achieve higher contrast on components with Strong Emphasis. Don’t use for state colors.',
      },
      {
        token: `.contrastText`,
        colorValue: theme.palette.accent.contrastText,
        figmaStyle: `Accent/contrastText`,
        description:
          'Use for contrast text and icons on components with Low Emphasis.',
      },
    ],
    border: [
      {
        token: `.border.main`,
        colorValue: theme.palette.accent.border.main,
        figmaStyle: `Accent/Border/Main`,
      },
    ],
    focusRing: [
      {
        token: `.focusRing.inner`,
        colorValue: theme.palette.accent.focusRing.inner,
        figmaStyle: `Accent/Inner Focus Ring`,
        description: 'Pre-defined inner focus ring color.',
      },
      {
        token: `.focusRing.outer`,
        colorValue: theme.palette.accent.focusRing.outer,
        figmaStyle: `Accent/Outer Focus Ring`,
        description: 'Pre-defined inner focus ring color.',
      },
    ],
  }

  const sentiment = (
    alias: ColorTokenTableProps['alias'],
    paletteColor: PaletteColor,
  ): {
    strongEmphasis: Array<ColorTokenRowProps>
    lowEmphasis: Array<ColorTokenRowProps>
    border: Array<ColorTokenRowProps>
    focusRing: Array<ColorTokenRowProps>
    shades: Array<ColorTokenRowProps>
  } => {
    const colorShades = Object.keys(paletteColor.shades).map(shade => {
      const colorValue =
        shade !== undefined ? paletteColor.shades[shade as keyof Color] : ''

      return {
        token: `.shades[${shade}]`,
        colorValue,
      }
    })

    return {
      strongEmphasis: [
        {
          token: `.light`,
          colorValue: paletteColor.light,
          figmaStyle: `${capitalize(alias as string)}/Light`,
          description:
            'Use to achieve lower contrast on components with Strong Emphasis. Don’t use for state colors.',
        },
        {
          token: `.main`,
          colorValue: paletteColor.main,
          figmaStyle: `${capitalize(alias as string)}/Main`,
        },
        {
          token: `.dark`,
          colorValue: paletteColor.dark,
          figmaStyle: `${capitalize(alias as string)}/Dark`,
          description:
            'Use to achieve higher contrast on components with Strong Emphasis. Don’t use for state colors.',
        },
        {
          token: `.contrastText`,
          colorValue: paletteColor.contrastText,
          figmaStyle: `${capitalize(alias as string)}/contrastText`,
          description:
            'Use for contrast text and icons on components with Strong Emphasis.',
        },
        {
          token: `.hover`,
          colorValue: paletteColor.hover,
          figmaStyle: `${capitalize(alias as string)}/Hover`,
          description:
            'Use for hover states on components with Strong Emphasis.',
        },
        {
          token: `.active`,
          colorValue: paletteColor.active,
          figmaStyle: `${capitalize(alias as string)}/Active`,
          description:
            'Use for active states on components with Strong Emphasis.',
        },
      ],
      lowEmphasis: [
        {
          token: `.lowEmphasis.light`,
          colorValue: paletteColor.lowEmphasis.light,
          figmaStyle: `${capitalize(alias as string)}/Low Emphasis/Light`,
          description:
            'Use to achieve lower contrast on components with Strong Emphasis. Don’t use for state colors.',
        },
        {
          token: `.lowEmphasis.main`,
          colorValue: paletteColor.lowEmphasis.main,
          figmaStyle: `${capitalize(alias as string)}/Low Emphasis/Main`,
        },
        {
          token: `.lowEmphasis.dark`,
          colorValue: paletteColor.lowEmphasis.dark,
          figmaStyle: `${capitalize(alias as string)}/Low Emphasis/Dark`,
          description:
            'Use to achieve a higher contrast on components with Strong Emphasis. Don’t use for state colors.',
        },
        {
          token: `.lowEmphasis.contrastText`,
          colorValue: paletteColor.lowEmphasis.contrastText,
          figmaStyle: `${capitalize(
            alias as string,
          )}/Low Emphasis/contrastText`,
          description:
            'Use for contrast text and icons on components with Low Emphasis.',
        },
        {
          token: `.lowEmphasis.hover`,
          colorValue: paletteColor.lowEmphasis.hover,
          figmaStyle: `${capitalize(alias as string)}/Low Emphasis/.Hover`,
          description: 'Use for hover states on components with Low Emphasis.',
        },
        {
          token: `.lowEmphasis.active`,
          colorValue: paletteColor.lowEmphasis.active,
          figmaStyle: `${capitalize(alias as string)}/Low Emphasis/.Active`,
          description: 'Use for active states on components with Low Emphasis.',
        },
      ],
      border: [
        {
          token: `.border.light`,
          colorValue: paletteColor.border.light,
          figmaStyle: `${capitalize(alias as string)}/Border/Light`,
        },
        {
          token: `.border.main`,
          colorValue: paletteColor.border.main,
          figmaStyle: `${capitalize(alias as string)}/Border/Main`,
        },
        {
          token: `.border.dark`,
          colorValue: paletteColor.border.dark,
          figmaStyle: `${capitalize(alias as string)}/Border/Dark`,
        },
      ],
      focusRing: [
        {
          token: `.focusRing.inner`,
          colorValue: paletteColor.focusRing.inner,
          figmaStyle: `${capitalize(alias as string)}/Inner Focus Ring`,
          description: 'Pre-defined inner focus ring color.',
        },
        {
          token: `.focusRing.outer`,
          colorValue: paletteColor.focusRing.outer,
          figmaStyle: `${capitalize(alias as string)}/Outer Focus Ring`,
          description: 'Pre-defined outer focus ring color.',
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
            alias={alias}
            sentiment={sentiment('primary', theme.palette.primary)}
            colorMode={colorMode}
            rawColorMapping={rawColorMapping}
          />
        )
      case 'secondary':
        return (
          <Sentiment
            alias={alias}
            sentiment={sentiment('secondary', theme.palette.secondary)}
            colorMode={colorMode}
            rawColorMapping={rawColorMapping}
          />
        )
      case 'default':
        return (
          <Sentiment
            alias={alias}
            sentiment={sentiment('default', theme.palette.default)}
            colorMode={colorMode}
            rawColorMapping={rawColorMapping}
          />
        )
      case 'accent':
        return (
          <Sentiment
            alias={alias}
            sentiment={accentColors}
            colorMode={colorMode}
            rawColorMapping={rawColorMapping}
          />
        )
      case 'success':
        return (
          <Sentiment
            alias={alias}
            sentiment={sentiment('success', theme.palette.success)}
            colorMode={colorMode}
            rawColorMapping={rawColorMapping}
          />
        )
      case 'error':
        return (
          <Sentiment
            alias={alias}
            sentiment={sentiment('error', theme.palette.error)}
            colorMode={colorMode}
            rawColorMapping={rawColorMapping}
          />
        )
      case 'warning':
        return (
          <Sentiment
            alias={alias}
            sentiment={sentiment('warning', theme.palette.warning)}
            colorMode={colorMode}
            rawColorMapping={rawColorMapping}
          />
        )
      case 'info':
        return (
          <Sentiment
            alias={alias}
            sentiment={sentiment('info', theme.palette.info)}
            colorMode={colorMode}
            rawColorMapping={rawColorMapping}
          />
        )
      case 'grey':
        return (
          <ColorTokenTable
            colorMetadata={greyColors}
            rawColorObj={rawColorMapping}
          />
        )
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          position: 'sticky',
          left: 0,
          top: 0,
        }}
      >
        <Tabs
          value={value}
          variant="scrollable"
          onChange={handleChange}
          sx={{
            minWidth: 160,
            bgcolor: 'background.paper',
          }}
        >
          {colorAliases.map((alias, idx) => (
            <Tab key={alias} label={capitalize(alias)} {...a11yPropsV(idx)} />
          ))}
        </Tabs>
      </Box>
      {colorAliases.map((alias, idx) => (
        <TabPanelV value={value.toString()} index={idx.toString()} key={idx}>
          {getTokenMapping(alias)}
        </TabPanelV>
      ))}
    </Box>
  )
}
