// Edit this file to add new stories
import React from 'react'
import Bookmark from '@mui/icons-material/Bookmark'
import BookmarkBorder from '@mui/icons-material/BookmarkBorder'
import Favorite from '@mui/icons-material/Favorite'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import {
  Box,
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  styled,
} from '@mui/material'
import { pink } from '@mui/material/colors'

import { story } from '../../../__tests__/helpers/storybook'

/**
 * Metadata for Checkbox stories - update/extend as needed
 */
export default { title: 'Inputs/Checkbox', component: Checkbox }

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<CheckboxProps>(args => <Checkbox {...args} />, {
  args: { inputProps: { 'aria-label': 'Checkbox' } },
})

/** Default story for Checkbox (edit/remove by hand if needed) */
export const Default = story(Template)

// TODO: add more stories below
const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

export const Checkboxes = story<CheckboxProps>(args => {
  return (
    <div>
      <Checkbox {...label} defaultChecked {...args} />
      <Checkbox {...label} {...args} />
      <Checkbox {...label} disabled {...args} />
      <Checkbox {...label} disabled checked {...args} />
    </div>
  )
})

export const CheckboxLabels = story<CheckboxProps>(args => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox defaultChecked {...args} />}
        label="Label"
      />
      <FormControlLabel
        disabled
        control={<Checkbox {...args} />}
        label="Disabled"
      />
    </FormGroup>
  )
})

export const SizeCheckboxes = story<CheckboxProps>(args => {
  return (
    <div>
      <Checkbox {...label} defaultChecked size="small" {...args} />
      <Checkbox {...label} defaultChecked {...args} />
      <Checkbox
        {...label}
        defaultChecked
        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
        {...args}
      />
    </div>
  )
})

export const ColorCheckboxes = story<CheckboxProps>(args => {
  return (
    <div>
      <Checkbox {...label} defaultChecked {...args} />
      <Checkbox {...label} defaultChecked color="secondary" {...args} />
      <Checkbox {...label} defaultChecked color="success" {...args} />
      <Checkbox {...label} defaultChecked color="default" {...args} />
      <Checkbox
        {...label}
        defaultChecked
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
        {...args}
      />
    </div>
  )
})

export const IconCheckboxes = story<CheckboxProps>(args => {
  return (
    <div>
      <Checkbox
        {...label}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        {...args}
      />
      <Checkbox
        {...label}
        icon={<BookmarkBorder />}
        checkedIcon={<Bookmark />}
        {...args}
      />
    </div>
  )
})

export const ControlledCheckbox = story<CheckboxProps>(args => {
  const [checked, setChecked] = React.useState(true)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      {...args}
    />
  )
})

export const IndeterminateCheckbox = story<CheckboxProps>(args => {
  const [checked, setChecked] = React.useState([true, false])

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked])
  }

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]])
  }

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked])
  }

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 6 }}>
      <FormControlLabel
        label="Child 1"
        control={
          <Checkbox checked={checked[0]} onChange={handleChange2} {...args} />
        }
      />
      <FormControlLabel
        label="Child 2"
        control={
          <Checkbox checked={checked[1]} onChange={handleChange3} {...args} />
        }
      />
    </Box>
  )

  return (
    <div>
      <FormControlLabel
        label="Parent"
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
            {...args}
          />
        }
      />
      {children}
    </div>
  )
})

export const CheckboxesGroup = story<CheckboxProps>(args => {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    })
  }

  const { gilad, jason, antoine } = state
  const error = [gilad, jason, antoine].filter(v => v).length !== 2

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 6 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={gilad}
                onChange={handleChange}
                name="gilad"
                {...args}
              />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={jason}
                onChange={handleChange}
                name="jason"
                {...args}
              />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={antoine}
                onChange={handleChange}
                name="antoine"
                {...args}
              />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
      <FormControl
        required
        error={error}
        component="fieldset"
        sx={{ m: 6 }}
        variant="standard"
      >
        <FormLabel component="legend">Pick two</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={gilad}
                onChange={handleChange}
                name="gilad"
                {...args}
              />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={jason}
                onChange={handleChange}
                name="jason"
                {...args}
              />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={antoine}
                onChange={handleChange}
                name="antoine"
                {...args}
              />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText>
      </FormControl>
    </Box>
  )
})

export const FormControlLabelPosition = story<CheckboxProps>(args => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Label placement</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="top"
          control={<Checkbox {...args} />}
          label="Top"
          labelPlacement="top"
        />
        <FormControlLabel
          value="start"
          control={<Checkbox {...args} />}
          label="Start"
          labelPlacement="start"
        />
        <FormControlLabel
          value="bottom"
          control={<Checkbox {...args} />}
          label="Bottom"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox {...args} />}
          label="End"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
  )
})

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: 3,
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
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
  },
})

// Inspired by blueprintjs
const BpCheckbox = (props: CheckboxProps) => {
  return (
    <Checkbox
      sx={{
        '&:hover': { bgcolor: 'transparent' },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      {...props}
    />
  )
}

export const CustomizedCheckbox = story<CheckboxProps>(args => {
  return (
    <div>
      <BpCheckbox {...args} />
      <BpCheckbox defaultChecked {...args} />
      <BpCheckbox disabled {...args} />
    </div>
  )
})
