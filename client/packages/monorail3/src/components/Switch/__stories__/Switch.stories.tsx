// Edit this file to add new stories
import React from 'react'
import { Switch, SwitchProps } from '../Switch'
import { story } from '../../../__tests__/helpers/storybook'
import BasicSwitchesEx from './examples/BasicSwitches'
import ColorSwitchesEx from './examples/ColorSwitches'
import ControlledSwitchesEx from './examples/ControlledSwitches'
import CustomizedSwitchesEx from './examples/CustomizedSwitches'
import FormControlLabelPositionEx from './examples/FormControlLabelPosition'
import SwitchesGroupEx from './examples/SwitchesGroup'
import SwitchesSizeEx from './examples/SwitchesSize'
import SwitchLabelsEx from './examples/SwitchLabels'
import { defaultStoryMeta } from './Switch.stories.gen'
/**
 * Metadata for Switch stories - update/extend as needed
 */
export default { ...defaultStoryMeta }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<SwitchProps>(args => <Switch {...args} />, { args: {} })
/** Default story for Switch (edit/remove by hand if needed) */
export const Default = story(Template)

export const BasicSwitches = story(() => <BasicSwitchesEx />)

export const ColorSwitches = story(() => <ColorSwitchesEx />)

export const ControlledSwitches = story(() => <ControlledSwitchesEx />)

export const CustomizedSwitches = story(() => <CustomizedSwitchesEx />)

export const FormControlLabelPosition = story(() => <FormControlLabelPositionEx />)

export const SwitchLabels = story(() => <SwitchLabelsEx />)

export const SwitchesGroup = story(() => <SwitchesGroupEx />)

export const SwitchesSize = story(() => <SwitchesSizeEx />)
        