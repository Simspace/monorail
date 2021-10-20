// Edit this file to add new stories
import React from 'react'
import { pink } from '@mui/material/colors'
import { alpha, styled } from '@mui/material/styles'

import { story } from '../../../__tests__/helpers/storybook'
import { FormControl } from '../../FormControl/FormControl'
import { FormControlLabel } from '../../FormControlLabel/FormControlLabel'
import { FormGroup } from '../../FormGroup/FormGroup'
import { FormHelperText } from '../../FormHelperText/FormHelperText'
import { FormLabel } from '../../FormLabel/FormLabel'
import { Switch, SwitchProps } from '../Switch'
import { defaultStoryMeta } from './Switch.stories.gen'

/**
 * Metadata for Switch stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: 'Inputs/Switch',
}
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<SwitchProps>(args => <Switch {...args} />, { args: {} })
/** Default story for Switch (edit/remove by hand if needed) */
export const Default = story(Template)

const label = { inputProps: { 'aria-label': 'Switch demo' } }

export const BasicSwitches = story(() => (
  <div>
    <Switch {...label} defaultChecked />
    <Switch {...label} />
    <Switch {...label} disabled defaultChecked />
    <Switch {...label} disabled />
  </div>
))

const GreenSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[600],
    '&:hover': {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[600],
  },
}))

export const ColorSwitches = story(() => (
  <div>
    <Switch {...label} defaultChecked />
    <Switch {...label} defaultChecked color="secondary" />
    <Switch {...label} defaultChecked color="warning" />
    <Switch {...label} defaultChecked color="default" />
    <GreenSwitch {...label} defaultChecked />
  </div>
))

export const ControlledSwitches = story(() => {
  const [checked, setChecked] = React.useState(true)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  )
})

export const FormControlLabelPosition = story(() => (
  <FormControl component="fieldset">
    <FormLabel component="legend">Label placement</FormLabel>
    <FormGroup aria-label="position" row>
      <FormControlLabel
        value="top"
        control={<Switch color="primary" />}
        label="Top"
        labelPlacement="top"
      />
      <FormControlLabel
        value="start"
        control={<Switch color="primary" />}
        label="Start"
        labelPlacement="start"
      />
      <FormControlLabel
        value="bottom"
        control={<Switch color="primary" />}
        label="Bottom"
        labelPlacement="bottom"
      />
      <FormControlLabel
        value="end"
        control={<Switch color="primary" />}
        label="End"
        labelPlacement="end"
      />
    </FormGroup>
  </FormControl>
))

export const SwitchLabels = story(() => (
  <FormGroup>
    <FormControlLabel control={<Switch defaultChecked />} label="Label" />
    <FormControlLabel disabled control={<Switch />} label="Disabled" />
  </FormGroup>
))

export const SwitchesGroup = story(() => {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: true,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    })
  }

  return (
    <FormControl component="fieldset" variant="standard">
      <FormLabel component="legend">Assign responsibility</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={state.gilad}
              onChange={handleChange}
              name="gilad"
            />
          }
          label="Gilad Gray"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.jason}
              onChange={handleChange}
              name="jason"
            />
          }
          label="Jason Killian"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.antoine}
              onChange={handleChange}
              name="antoine"
            />
          }
          label="Antoine Llorca"
        />
      </FormGroup>
      <FormHelperText>Be careful</FormHelperText>
    </FormControl>
  )
})

export const SwitchesSize = story(() => (
  <div>
    <Switch {...label} defaultChecked size="small" />
    <Switch {...label} defaultChecked />
  </div>
))
