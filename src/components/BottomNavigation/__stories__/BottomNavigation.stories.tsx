// Edit this file to add new stories
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FolderIcon from '@mui/icons-material/Folder'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import RestoreIcon from '@mui/icons-material/Restore'

import {
  Alert,
  BottomNavigation,
  BottomNavigationAction,
  BottomNavigationProps,
  Box,
} from '../../..'
import { story } from '../../../test-helpers/storybook'

/**
 * Metadata for BottomNavigation stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default {
  title: 'Navigation/BottomNavigation',
  component: BottomNavigation,
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<BottomNavigationProps>(
  args => {
    const [value, setValue] = React.useState(0)
    return (
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          value={value}
          onChange={(_, newValue) => setValue(newValue)}
          {...args}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box>
    )
  },
  {
    args: {
      showLabels: true,
    },
    muiName: 'MuiBottomNavigation',
  },
)

/** Default story for BottomNavigation (edit/remove by hand if needed) */
export const Default = story(Template)

export const WithNoLabel = story<BottomNavigationProps>(
  () => {
    const [value, setValue] = React.useState('recents')

    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue)
    }

    return (
      <BottomNavigation
        sx={{ width: 500 }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Recents"
          value="recents"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          label="Folder"
          value="folder"
          icon={<FolderIcon />}
        />
      </BottomNavigation>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `If there are four or five actions, display inactive views as icons only.`,
        },
      },
    },
  },
)

export const FixedBottomNavigation = story<BottomNavigationProps>(
  () => {
    return (
      <Alert severity="warning">
        This example uses an iframe to fix the <code>BottomNavigation</code>.
        See MUI docs.
      </Alert>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `This demo keeps bottom navigation fixed to the bottom, no matter the amount of content on-screen.`,
        },
      },
    },
  },
)
