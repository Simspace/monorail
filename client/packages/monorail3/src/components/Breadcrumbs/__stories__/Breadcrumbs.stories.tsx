// Edit this file to add new stories
import React from 'react'
import GrainIcon from '@mui/icons-material/Grain'
import HomeIcon from '@mui/icons-material/Home'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import {
  Breadcrumbs,
  BreadcrumbsProps,
  Link,
  Stack,
  Typography,
} from '@mui/material'
import { action } from '@storybook/addon-actions'

import { story } from '../../../__tests__/helpers/storybook'

/**
 * Metadata for Breadcrumbs stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default { title: 'Navigation/Breadcrumbs', component: Breadcrumbs }

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<BreadcrumbsProps>(
  args => (
    <Breadcrumbs {...args}>
      <Link href="/">Material-UI</Link>
      <Link href="/getting-started/installation/">Core</Link>
      <Typography color="text.primary">Breadcrumbs</Typography>
    </Breadcrumbs>
  ),
  {
    args: {},
  },
)

/** Default story for Breadcrumbs (edit/remove by hand if needed) */
export const Default = story(Template)

export const CustomSeparator = story<BreadcrumbsProps>(
  () => {
    const breadcrumbs = [
      <Link key="1" href="#link1" onClick={action('Root Click')}>
        Material-UI
      </Link>,
      <Link key="2" href="#link2" onClick={action('Core Click')}>
        Core
      </Link>,
      <Typography key="3" color="text.primary">
        Breadcrumb
      </Typography>,
    ]

    return (
      <Stack spacing={2}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <Breadcrumbs separator="-" aria-label="breadcrumb2">
          {breadcrumbs}
        </Breadcrumbs>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb3"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `In the following examples, we are using two string separators and an SVG icon.`,
        },
      },
    },
  },
)

export const BreadcrumbsWithIcons = story<BreadcrumbsProps>(
  () => {
    return (
      <div role="presentation" onClick={action('Click')}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link sx={{ display: 'flex', alignItems: 'center' }} href="/">
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Material-UI
          </Link>
          <Link
            sx={{ display: 'flex', alignItems: 'center' }}
            href="/getting-started/installation/"
          >
            <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Core
          </Link>
          <Typography
            sx={{ display: 'flex', alignItems: 'center' }}
            color="text.primary"
          >
            <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Breadcrumb
          </Typography>
        </Breadcrumbs>
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Use icons as separators.`,
        },
      },
    },
  },
)

export const Collapsed = story<BreadcrumbsProps>(
  () => {
    return (
      <div role="presentation" onClick={action('Click')}>
        <Breadcrumbs maxItems={2} aria-label="breadcrumb">
          <Link href="#">Home</Link>
          <Link href="#">Catalog</Link>
          <Link href="#">Accessories</Link>
          <Link href="#">New Collection</Link>
          <Typography color="text.primary">Belts</Typography>
        </Breadcrumbs>
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Collapse longer breadcrumb paths.`,
        },
      },
    },
  },
)
