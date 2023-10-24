// Edit this file to add new stories
import React from 'react'

import type { FormControlLabelProps, RadioProps } from '@monorail/components'
import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  useRadioGroup,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Inputs/Radio', component: Radio }

const Template = story<RadioProps>(
  args => {
    return (
      <>
        <FormControlLabel control={<Radio {...args} />} label="Radio Demo" />
      </>
    )
  },
  { args: {}, muiName: 'MuiRadio' },
)

export const Default = story(Template)

const colors = [
  'default',
  'primary',
  'error',
  'info',
  'success',
  'warning',
] as const

export const RadioButtonsGroup = story<RadioProps>(args => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="female"
          control={<Radio {...args} />}
          label="Female"
        />
        <FormControlLabel
          value="male"
          control={<Radio {...args} />}
          label="Male"
        />
        <FormControlLabel
          value="other"
          control={<Radio {...args} />}
          label="Other"
        />
      </RadioGroup>
    </FormControl>
  )
})

export const RowRadioButtonsGroup = story<RadioProps>(args => {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value="female"
          control={<Radio {...args} />}
          label="Female"
        />
        <FormControlLabel
          value="male"
          control={<Radio {...args} />}
          label="Male"
        />
        <FormControlLabel
          value="other"
          control={<Radio {...args} />}
          label="Other"
        />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio {...args} />}
          label="other"
        />
      </RadioGroup>
    </FormControl>
  )
})

export const ControlledRadioButtonsGroup = story<RadioProps>(args => {
  const [value, setValue] = React.useState('female')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="female"
          control={<Radio {...args} />}
          label="Female"
        />
        <FormControlLabel
          value="male"
          control={<Radio {...args} />}
          label="Male"
        />
      </RadioGroup>
    </FormControl>
  )
})

export const RadioButtons = story<RadioProps>(args => {
  const [selectedValue, setSelectedValue] = React.useState('a')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value)
  }

  return (
    <div>
      <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
        {...args}
      />
      <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
        {...args}
      />
    </div>
  )
})

export const SizeRadioButtons = story<RadioProps>(args => {
  const [selectedValue, setSelectedValue] = React.useState('a')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value)
  }

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: { 'aria-label': item },
  })

  return (
    <div>
      <Radio {...controlProps('a')} size="small" {...args} />
      <Radio {...controlProps('b')} {...args} />
      <Radio
        {...controlProps('c')}
        sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
        }}
        {...args}
      />
    </div>
  )
})

export const ColorRadioButtons = story<RadioProps>(args => {
  const [selectedValue, setSelectedValue] = React.useState('a')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value)
  }

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  })

  return (
    <>
      <div>
        {colors.map(color => (
          <Radio
            key={`radio-${color}`}
            color={color}
            {...controlProps('a')}
            {...args}
          />
        ))}
      </div>
      <div>
        {colors.map(color => (
          <Radio
            key={`radio-${color}-disabled`}
            color={color}
            disabled
            {...controlProps('a')}
            {...args}
          />
        ))}
      </div>
    </>
  )
})

export const FormControlLabelPlacement = story<RadioProps>(args => {
  return (
    <FormControl>
      <FormLabel id="demo-form-control-label-placement">
        Label placement
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-form-control-label-placement"
        name="position"
        defaultValue="start"
      >
        <FormControlLabel
          value="start"
          control={<Radio {...args} />}
          label="Start"
          labelPlacement="start"
          sx={{ mr: 4 }}
        />
        <FormControlLabel
          value="end"
          control={<Radio {...args} />}
          label="End"
        />
      </RadioGroup>
    </FormControl>
  )
})

export const ErrorRadios = story<RadioProps>(args => {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState(false)
  const [helperText, setHelperText] = React.useState('Choose wisely')

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
    setHelperText(' ')
    setError(false)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (value === 'best') {
      setHelperText('You got it!')
      setError(false)
    } else if (value === 'worst') {
      setHelperText('Sorry, wrong answer!')
      setError(true)
    } else {
      setHelperText('Please select an option.')
      setError(true)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <FormLabel id="demo-error-radios">Pop quiz: MUI is...</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel
            value="best"
            control={<Radio {...args} />}
            label="The best!"
          />
          <FormControlLabel
            value="worst"
            control={<Radio {...args} />}
            label="The worst."
          />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 2, mr: 2 }} type="submit" variant="outlined">
          Check Answer
        </Button>
      </FormControl>
    </form>
  )
})

function MyFormControlLabel(props: FormControlLabelProps) {
  const radioGroup = useRadioGroup()

  let checked = false

  if (radioGroup) {
    checked = radioGroup.value === props.value
  }

  return <FormControlLabel checked={checked} {...props} />
}

export const UseRadioGroup = story<RadioProps>(args => {
  return (
    <RadioGroup name="use-radio-group" defaultValue="first">
      <MyFormControlLabel
        value="first"
        label="First"
        control={<Radio {...args} />}
      />
      <MyFormControlLabel
        value="second"
        label="Second"
        control={<Radio {...args} />}
      />
    </RadioGroup>
  )
})
