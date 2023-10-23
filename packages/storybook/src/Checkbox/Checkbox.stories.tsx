// Edit this file to add new stories
import React from 'react'
import Bookmark from '@mui/icons-material/Bookmark'
import BookmarkBorder from '@mui/icons-material/BookmarkBorder'
import Favorite from '@mui/icons-material/Favorite'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'

import type { CheckboxProps } from '@monorail/components'
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Inputs/Checkbox', component: Checkbox }

const Template = story<CheckboxProps>(args => <Checkbox {...args} />, {
  args: { inputProps: { 'aria-label': 'Checkbox' } },
  muiName: 'MuiCheckbox',
})

export const Default = story(Template)

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

const colors = [
  'default',
  'primary',
  'error',
  'info',
  'success',
  'warning',
] as const

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
    <>
      <div>
        {colors.map(color => (
          <Checkbox
            key={`checkbox-${color}`}
            {...label}
            color={color}
            defaultChecked
            {...args}
          />
        ))}
      </div>
      <div>
        {colors.map(color => (
          <Checkbox
            key={`checkbox-${color}-disabled`}
            {...label}
            color={color}
            defaultChecked
            disabled
            {...args}
          />
        ))}
      </div>
    </>
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
          value="start"
          control={<Checkbox {...args} />}
          label="Start"
          labelPlacement="start"
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
