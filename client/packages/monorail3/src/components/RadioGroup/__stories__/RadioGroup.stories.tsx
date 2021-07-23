// Edit this file to add new stories
import React from 'react'
import { RadioGroup, RadioGroupProps } from '../RadioGroup'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './RadioGroup.stories.gen'
import { FormControl } from '../../FormControl/FormControl'
import { FormLabel } from '../../FormLabel/FormLabel'
import { FormControlLabel } from '../../FormControlLabel/FormControlLabel'
import { Radio, RadioProps } from '../../Radio/Radio'
import { pink } from '@material-ui/core/colors'
import { FormHelperText } from '../../FormHelperText/FormHelperText'
import { Button } from '../../Button/Button'
import { styled } from '@material-ui/core/styles'

/**
 * Metadata for RadioGroup stories - update/extend as needed
 */
export default { ...defaultStoryMeta }

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<RadioGroupProps>(
  args => {
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Lunch Options</FormLabel>
        <RadioGroup
          aria-label="Lunch Options"
          defaultValue="peanut-butter-and-jelly"
          name="radio-buttons-group"
          {...args}
        >
          <FormControlLabel
            value="peanut-butter-and-jelly"
            control={<Radio />}
            label="Peanut Butter & Jelly"
          />
          <FormControlLabel
            value="hot-dog"
            control={<Radio />}
            label="Hot Dog"
          />
          <FormControlLabel
            value="hamburger"
            control={<Radio />}
            label="Hamburger"
          />
        </RadioGroup>
      </FormControl>
    )
  },
  {
    args: {},
  },
)

/** Default story for RadioGroup (edit/remove by hand if needed) */
export const Default = story(Template)

export const Direction = story<RadioGroupProps>(
  () => {
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Choices</FormLabel>
        <RadioGroup row aria-label="Choices" name="row-radio-buttons-group">
          <FormControlLabel value="a" control={<Radio />} label="Option A" />
          <FormControlLabel value="b" control={<Radio />} label="Option B" />
          <FormControlLabel value="c" control={<Radio />} label="Option C" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="Other"
          />
        </RadioGroup>
      </FormControl>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `To lay out the buttons horizontally, set the row prop:`,
        },
      },
    },
  },
)

export const Controlled = story<RadioGroupProps>(
  () => {
    const [value, setValue] = React.useState('a')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
    }

    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Options</FormLabel>
        <RadioGroup
          aria-label="Options"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="a" control={<Radio />} label="Option A" />
          <FormControlLabel value="b" control={<Radio />} label="Option B" />
        </RadioGroup>
      </FormControl>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `You can control the radio with the value and onChange props:`,
        },
      },
    },
  },
)

export const StandaloneRadioButtons = story<RadioGroupProps>(
  () => {
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
        />
        <Radio
          checked={selectedValue === 'b'}
          onChange={handleChange}
          value="b"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'B' }}
        />
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Radio can also be used standalone, without the RadioGroup wrapper.`,
        },
      },
    },
  },
)

export const Size = story<RadioGroupProps>(
  () => {
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
        <Radio {...controlProps('a')} size="small" />
        <Radio {...controlProps('b')} />
        <Radio
          {...controlProps('c')}
          sx={{
            '& .MuiSvgIcon-root': {
              fontSize: 28,
            },
          }}
        />
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Use the size prop or customize the font size of the svg icons to change the size of the radios.`,
        },
      },
    },
  },
)

export const Color = story<RadioGroupProps>(
  () => {
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
      <div>
        <Radio {...controlProps('a')} />
        <Radio {...controlProps('b')} color="secondary" />
        <Radio {...controlProps('c')} color="success" />
        <Radio {...controlProps('d')} color="default" />
        <Radio
          {...controlProps('e')}
          sx={{
            color: pink[800],
            '&.Mui-checked': {
              color: pink[600],
            },
          }}
        />
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Use the color prop to change the colors.`,
        },
      },
    },
  },
)

export const LabelPlacement = story<RadioGroupProps>(
  () => {
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">labelPlacement</FormLabel>
        <RadioGroup
          row
          aria-label="position"
          name="position"
          defaultValue="top"
        >
          <FormControlLabel
            value="top"
            control={<Radio />}
            label="Top"
            labelPlacement="top"
          />
          <FormControlLabel
            value="start"
            control={<Radio />}
            label="Start"
            labelPlacement="start"
          />
          <FormControlLabel
            value="bottom"
            control={<Radio />}
            label="Bottom"
            labelPlacement="bottom"
          />
          <FormControlLabel value="end" control={<Radio />} label="End" />
        </RadioGroup>
      </FormControl>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `You can change the placement of the label with the FormControlLabel component's labelPlacement prop:`,
        },
      },
    },
  },
)

export const ShowError = story<RadioGroupProps>(
  () => {
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
        <FormControl
          sx={{ m: 3 }}
          component="fieldset"
          error={error}
          variant="standard"
        >
          <FormLabel component="legend">Pop quiz: Material-UI is...</FormLabel>
          <RadioGroup
            aria-label="quiz"
            name="quiz"
            value={value}
            onChange={handleRadioChange}
          >
            <FormControlLabel
              value="best"
              control={<Radio />}
              label="The okayest!"
            />
            <FormControlLabel
              value="worst"
              control={<Radio />}
              label="The worst."
            />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
          <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
            Check Answer
          </Button>
        </FormControl>
      </form>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `In general, radio buttons should have a value selected by default. If this is not the case, you can display an error if no value is selected when the form is submitted:`,
        },
      },
    },
  },
)

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark'
        ? 'rgba(57,75,89,.5)'
        : 'rgba(206,217,224,.5)',
  },
}))

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#137cbd',
  backgroundImage:
    'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
  },
})

// Inspired by blueprintjs
function BpRadio(props: RadioProps) {
  return (
    <Radio
      sx={{
        '&:hover': {
          bgcolor: 'transparent',
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  )
}

export const CustomizedRadios = story<RadioGroupProps>(
  () => {
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Choices</FormLabel>
        <RadioGroup
          defaultValue="a"
          aria-label="Choices"
          name="customized-radios"
        >
          <FormControlLabel value="a" control={<BpRadio />} label="Option A" />
          <FormControlLabel value="b" control={<BpRadio />} label="Option B" />
          <FormControlLabel value="other" control={<BpRadio />} label="Other" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<BpRadio />}
            label="(Disabled option)"
          />
        </RadioGroup>
      </FormControl>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Here is an example of customizing the component. You can learn more about this in the overrides documentation page.`,
        },
      },
    },
  },
)
