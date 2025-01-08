// Edit this file to add new stories
import React from 'react'
import VolumeDown from '@mui/icons-material/VolumeDown'
import VolumeUp from '@mui/icons-material/VolumeUp'
import { styled } from '@mui/material'
import MuiInput from '@mui/material/Input'

import type { SliderProps } from '@monorail/components'
import { Box, Grid, Slider, Stack, Typography } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Inputs/Slider',
  component: Slider,
  parameters: {
    docs: {
      description: {
        story: `https://next.material-ui.com/components/slider/`,
      },
    },
  },
}

const Template = story<SliderProps>((args) => <Slider aria-label='I am aria-labeled' {...args} />, {
  args: {},
  muiName: 'MuiSlider',
})

export const Default = story(Template)

export function ContinuousSlider() {
  const [value, setValue] = React.useState<number>(30)

  const handleChange = (_event: Event, newValue: number | Array<number>) => {
    setValue(newValue as number)
  }

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction='row' sx={{ mb: 1 }} alignItems='center'>
        <VolumeDown />
        <Slider aria-label='Volume' value={value} onChange={handleChange} />
        <VolumeUp />
      </Stack>
      <Slider disabled defaultValue={30} aria-label='Disabled slider' />
    </Box>
  )
}

export function ContinuousSliderLabel() {
  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 50,
      label: '50',
    },
    {
      value: 100,
      label: '100',
    },
  ]

  function valuetext(value: number) {
    return `${value}`
  }

  return (
    <Box sx={{ width: 300, mt: 8 }}>
      <Slider
        aria-label='Always visible'
        defaultValue={80}
        getAriaValueText={valuetext}
        marks={marks}
        valueLabelDisplay='on'
      />
    </Box>
  )
}

export function SliderSizes() {
  return (
    <Box sx={{ width: 300, mt: 8 }}>
      <Slider size='small' defaultValue={70} aria-label='Small' valueLabelDisplay='auto' />
      <Slider defaultValue={50} aria-label='Default' valueLabelDisplay='auto' />
    </Box>
  )
}

export function DiscreteSlider() {
  function valuetext(value: number) {
    return `${value}°C`
  }

  return (
    <Box sx={{ width: 300, mt: 8 }}>
      <Slider
        aria-label='Temperature'
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay='auto'
        step={10}
        marks
        min={10}
        max={110}
        size='small'
      />
      <Slider
        aria-label='Temperature'
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay='auto'
        step={10}
        marks
        min={10}
        max={110}
      />
      <Slider
        aria-label='temperature2'
        defaultValue={30}
        step={10}
        marks
        min={10}
        max={110}
        disabled
      />
    </Box>
  )
}

export const DiscreteSliderSteps = story(
  () => {
    function valuetext(value: number) {
      return `${value}°C`
    }

    return (
      <Box sx={{ width: 300, mt: 8 }}>
        <Slider
          aria-label='Small steps'
          defaultValue={0.00000005}
          getAriaValueText={valuetext}
          step={0.00000001}
          marks
          min={-0.00000005}
          max={0.0000001}
          valueLabelDisplay='auto'
        />
      </Box>
    )
  },
  {
    parameters: {
      a11y: { disable: true }, // Axe does not recognize the min/max/step values as numbers
    },
  },
)

export function DiscreteSliderMarks() {
  const marks = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ]

  function valuetext(value: number) {
    return `${value}°C`
  }

  return (
    <Box sx={{ width: 300, mt: 8 }}>
      <Slider
        aria-label='Custom marks'
        defaultValue={20}
        getAriaValueText={valuetext}
        step={10}
        valueLabelDisplay='auto'
        marks={marks}
      />
    </Box>
  )
}

export function DiscreteSliderValues() {
  const marks = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ]

  function valuetext(value: number) {
    return `${value}°C`
  }

  function valueLabelFormat(value: number) {
    return marks.findIndex((mark) => mark.value === value) + 1
  }
  return (
    <Box sx={{ width: 300, mt: 8 }}>
      <Slider
        aria-label='Restricted values'
        defaultValue={20}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        step={null}
        valueLabelDisplay='auto'
        marks={marks}
      />
    </Box>
  )
}

export function DiscreteSliderLabel() {
  const marks = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ]

  function valuetext(value: number) {
    return `${value}°C`
  }

  return (
    <Box sx={{ width: 300, mt: 8 }}>
      <Slider
        aria-label='Always visible'
        defaultValue={80}
        getAriaValueText={valuetext}
        step={10}
        marks={marks}
        valueLabelDisplay='on'
      />
    </Box>
  )
}

export function RangeSlider() {
  function valuetext(value: number) {
    return `${value}°C`
  }
  const [value, setValue] = React.useState<Array<number>>([20, 37])

  const handleChange = (_event: Event, newValue: number | Array<number>) => {
    setValue(newValue as Array<number>)
  }

  return (
    <Box sx={{ width: 300, mt: 8 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay='auto'
        getAriaValueText={valuetext}
      />
    </Box>
  )
}

export function MinimumDistanceSlider() {
  function valuetext(value: number) {
    return `${value}°C`
  }

  const minDistance = 10

  const [value1, setValue1] = React.useState<Array<number>>([20, 37])

  const handleChange1 = (_event: Event, newValue: number | Array<number>, activeThumb: number) => {
    if (!Array.isArray(newValue)) {
      return
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]])
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)])
    }
  }

  const [value2, setValue2] = React.useState<Array<number>>([20, 37])

  const handleChange2 = (_event: Event, newValue: number | Array<number>, activeThumb: number) => {
    if (!Array.isArray(newValue)) {
      return
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance)
        setValue2([clamped, clamped + minDistance])
      } else {
        const clamped = Math.max(newValue[1], minDistance)
        setValue2([clamped - minDistance, clamped])
      }
    } else {
      setValue2(newValue as Array<number>)
    }
  }

  return (
    <Box sx={{ width: 300, mt: 8 }}>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay='auto'
        getAriaValueText={valuetext}
        disableSwap
      />
      <Slider
        getAriaLabel={() => 'Minimum distance shift'}
        value={value2}
        onChange={handleChange2}
        valueLabelDisplay='auto'
        getAriaValueText={valuetext}
        disableSwap
      />
    </Box>
  )
}

export function InputSlider() {
  const Input = styled(MuiInput)`
    width: 42px;
  `

  const [value, setValue] = React.useState<number | string | Array<number | string>>(30)

  const handleSliderChange = (_event: Event, newValue: number | Array<number>) => {
    setValue(newValue)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value))
  }

  const handleBlur = () => {
    if (typeof value === 'number') {
      if (value < 0) {
        setValue(0)
      } else if (value > 100) {
        setValue(100)
      }
    }
  }

  return (
    <Box sx={{ width: 250 }}>
      <Typography id='input-slider' gutterBottom>
        Volume
      </Typography>
      <Grid container spacing={2} alignItems='center'>
        <Grid item>
          <VolumeUp />
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby='input-slider'
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            size='small'
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export function TrackFalseSlider() {
  const Separator = styled('div')(
    ({ theme }) => `
  height: ${theme.spacing(3)};
`,
  )

  const marks = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ]

  function valuetext(value: number) {
    return `${value}°C`
  }

  return (
    <Box sx={{ width: 250 }}>
      <Typography id='track-false-slider' gutterBottom>
        Removed track
      </Typography>
      <Slider
        track={false}
        aria-labelledby='track-false-slider'
        getAriaValueText={valuetext}
        defaultValue={30}
        marks={marks}
      />
      <Separator />
      <Typography id='track-false-range-slider' gutterBottom>
        Removed track range slider
      </Typography>
      <Slider
        track={false}
        aria-labelledby='track-false-range-slider'
        getAriaValueText={valuetext}
        defaultValue={[20, 37, 50]}
        marks={marks}
      />
    </Box>
  )
}

export function TrackInvertedSlider() {
  const Separator = styled('div')(
    ({ theme }) => `
  height: ${theme.spacing(3)};
`,
  )

  const marks = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ]

  function valuetext(value: number) {
    return `${value}°C`
  }

  return (
    <Box sx={{ width: 250 }}>
      <Typography id='track-inverted-slider' gutterBottom>
        Inverted track
      </Typography>
      <Slider
        track='inverted'
        aria-labelledby='track-inverted-slider'
        getAriaValueText={valuetext}
        defaultValue={30}
        marks={marks}
      />
      <Separator />
      <Typography id='track-inverted-range-slider' gutterBottom>
        Inverted track range
      </Typography>
      <Slider
        track='inverted'
        aria-labelledby='track-inverted-range-slider'
        getAriaValueText={valuetext}
        defaultValue={[20, 37]}
        marks={marks}
      />
    </Box>
  )
}

export function NonLinearSlider() {
  function valueLabelFormat(value: number) {
    const units = ['KB', 'MB', 'GB', 'TB']

    let unitIndex = 0
    let scaledValue = value

    while (scaledValue >= 1024 && unitIndex < units.length - 1) {
      unitIndex += 1
      scaledValue /= 1024
    }

    return `${scaledValue} ${units[unitIndex]}`
  }

  function calculateValue(value: number) {
    return 2 ** value
  }

  const [value, setValue] = React.useState<number>(10)

  const handleChange = (_event: Event, newValue: number | Array<number>) => {
    if (typeof newValue === 'number') {
      setValue(newValue)
    }
  }

  return (
    <Box sx={{ width: 250 }}>
      <Typography id='non-linear-slider' gutterBottom>
        Storage: {valueLabelFormat(calculateValue(value))}
      </Typography>
      <Slider
        value={value}
        min={5}
        step={1}
        max={30}
        scale={calculateValue}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={handleChange}
        valueLabelDisplay='auto'
        aria-labelledby='non-linear-slider'
      />
    </Box>
  )
}
