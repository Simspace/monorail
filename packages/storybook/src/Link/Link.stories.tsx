// Edit this file to add new stories
import React from 'react'

import type { LinkProps } from '@monorail/components'
import { Link, Stack } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Navigation/Link', component: Link }

const Template = story<LinkProps>((args) => <Link {...args} />, {
  args: { children: 'A Simple Link' },
  muiName: 'MuiLink',
})

export const Default = story(Template)

/**
 * The `Link` component is built on top of the `Typography` component, meaning that you can use its props.
 */
export const Basic = story<LinkProps>(() => (
  <Stack direction='row' spacing={2}>
    <Link href='#'>Link</Link>
    <Link href='#' color='inherit'>
      {'color="inherit"'}
    </Link>
    <Link href='#' variant='body2'>
      {'variant="body2"'}
    </Link>
    <Stack direction='column' maxWidth={100}>
      <Link lineClamp={1} href='#'>
        Truncated link
      </Link>
    </Stack>
  </Stack>
))

/**
 * The `underline` prop can be used to set the underline behavior. The default is hover.
 */
export const Underline = story<LinkProps>(() => (
  <Stack direction='row' spacing={2}>
    <Link href='#' underline='none'>
      {'underline="none"'}
    </Link>
    <Link href='#' underline='hover'>
      {'underline="hover"'}
    </Link>
    <Link href='#' underline='always'>
      {'underline="always"'}
    </Link>
  </Stack>
))
