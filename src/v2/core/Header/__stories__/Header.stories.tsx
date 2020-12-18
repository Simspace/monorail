import React from 'react'

import {
  A11Y_ELEMENT__COMPONENT,
  DISABLED_ACTIONS,
  meta,
  story,
} from '@monorail/helpers/storybook'
import META from '@monorail/v2/core/Header/__stories__/Header.meta.json'
import {
  Header,
  HeaderAdornment,
  HeaderProps,
} from '@monorail/v2/core/Header/Header'
import { Bam } from '@monorail/v2/icons/Icons'

export default meta(META, {
  title: 'monorail/core/Header',
  parameters: {
    ...DISABLED_ACTIONS,
    ...A11Y_ELEMENT__COMPONENT,
    layout: 'fullscreen',
  },
})

const Template = story<HeaderProps>(args => (
  <Header {...args}>My Header Title</Header>
))

//#region Hero story in Docs
export const SimpleHeader = story(Template)
//#endregion

//#region Distinct configurations
export const HiddenBorder = story(
  args => <Header {...args}>My Header Title</Header>,
  {
    args: { hideBorder: true },
  },
)

export const StartAdornment = story(args => (
  <Header
    startAdornment={
      <HeaderAdornment position="start">
        <Bam />
      </HeaderAdornment>
    }
    {...args}
  >
    My Header Title
  </Header>
))

export const EndAdornment = story(args => (
  <Header
    endAdornment={
      <HeaderAdornment position="end">
        <Bam />
      </HeaderAdornment>
    }
    {...args}
  >
    My Header Title
  </Header>
))

export const LongTitle = story(args => (
  <Header
    startAdornment={
      <HeaderAdornment position="start">
        <Bam />
      </HeaderAdornment>
    }
    endAdornment={
      <HeaderAdornment position="end">
        <Bam />
      </HeaderAdornment>
    }
    {...args}
  >
    Duis incididunt excepteur sit pariatur veniam duis nostrud. Eiusmod eiusmod
    sunt tempor dolor ad. Occaecat laboris elit sunt ipsum consectetur duis do.
    Consectetur ipsum dolor proident Lorem exercitation veniam sit officia minim
    ea minim nostrud laborum. Aliqua consectetur Lorem Lorem excepteur
    exercitation labore elit laboris incididunt veniam. Enim dolor dolore
    pariatur officia voluptate labore reprehenderit voluptate in. Reprehenderit
    excepteur culpa consequat ea sunt voluptate consequat ea non. Pariatur elit
    voluptate sit sunt laborum nulla. Cillum ipsum aliqua sunt mollit esse
    consectetur magna magna enim ea tempor occaecat ullamco consequat.
    Adipisicing sunt deserunt fugiat culpa ad eu irure officia esse sit labore
    nisi tempor est. Laborum aute tempor incididunt proident veniam eiusmod.
    Incididunt reprehenderit nisi pariatur cupidatat sit elit ex labore anim.
  </Header>
))
//#endregion
