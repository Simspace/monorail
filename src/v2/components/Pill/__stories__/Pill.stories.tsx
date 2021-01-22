import React from 'react'
import { action } from '@storybook/addon-actions'

import { DISABLED_CONTROLS, meta, story } from '@monorail/helpers/storybook'
import * as Icons from '@monorail/v2/icons/Icons'

import { Pill, PillAdornment, PillProps } from '../Pill'
import META from './Pill.meta.json'

const LOREM =
  "Once // When I was little someone pointed out to me // Some constellations but the big dippers all I could see // That brontosaurus must have stood a thousand miles high // That brontosaurus laying on its side up in the sky // Bottoms up and this time // Won't you let me be? // Bottled up but this time // Won't you rescue me? // You should have been here last night and heard what the big dipper said to me // Jack thought it twice and thought that that that made it true // Some brains just work that way // that's what chemicals can do // He thought he'd have a beer // he thought he was alone // He thought an Albertson's stir fry dinner would make his apartment a home // Bottoms up and this time // Won't you let me be? // Bottled up but this time // Won't you rescue me? // You should have been here last night and heard what the big dipper said to me // I thought I bored me but I learned to think like you // Now nothing bores me that's that nothing is thought through // Bottoms up and this time // Won't you let me be? // Bottled up but this time // Won't you rescue me? // Thought it out and this time // It's all I can see // You should have been here last night and heard what the big dipper said"

//#region Metadata for ALL stories
export default meta(META, {
  title: 'Monorail/component/Pill',
})
//#endregion

//#region Helpers
const Template = story<PillProps>(args => (
  <Pill {...args} label={args.label ?? 'Hello!'} />
))
//#endregion

//#region Stories

export const Basic = story(Template)

export const LotsOfText = story(args => <Template {...args} />, {
  args: {
    label: LOREM,
  },
})

export const WithAdornments = story(Template, {
  args: {
    label: LOREM,
    startAdornment: (
      <PillAdornment position="start">
        <Icons.CheckCircle />
      </PillAdornment>
    ),
    endAdornment: (
      <PillAdornment position="end">
        <Icons.CheckCircle />
      </PillAdornment>
    ),
  },
})
//#endregion Stories
