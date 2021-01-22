import React from 'react'

import { meta, story } from '@monorail/helpers/storybook'
import META from '@monorail/v2/core/RouterLink/__stories__/RouterLink.meta.json'
import {
  Link,
  LinkProps,
  LinkUnstyled,
} from '@monorail/v2/core/RouterLink/RouterLink'
import { styled } from '@monorail/exports'

const WarningText = () => (
  <div
    css={`
      margin-bottom: 16px;
    `}
  >
    <em>
      Warning: Router links may not behave correctly within Storybook since
      React Router is missing.
    </em>
  </div>
)
export default meta(META, {
  title: 'monorail/core/RouterLink',
})

const Template = story<LinkProps>(args => (
  <>
    <WarningText />
    <Link to="/nowhere" {...args}>
      Hello I am a link
    </Link>
  </>
))

//#region Hero story in Docs
export const RouterLink = story(Template)
//#endregion

export const UnstyledLink = story(() => (
  <>
    <WarningText />
    <LinkUnstyled to="/nowhere">I am an unstyled link</LinkUnstyled>
  </>
))
