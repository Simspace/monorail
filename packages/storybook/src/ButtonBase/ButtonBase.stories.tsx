// Edit this file to add new stories
import React from 'react'

import type { ButtonBaseProps } from '@monorail/components'
import { ButtonBase } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Inputs/ButtonBase', component: ButtonBase }

const Template = story<ButtonBaseProps>((args) => <ButtonBase {...args} />, {
  args: { children: 'Button Base' },
  muiName: 'MuiButtonBase',
})

/**
 * The Text Buttons, Contained Buttons, Floating Action Buttons and Icon Buttons are built on top of the same component: the ButtonBase. You can take advantage of this lower-level component to build custom interactions.
 */
export const Default = story(Template)
