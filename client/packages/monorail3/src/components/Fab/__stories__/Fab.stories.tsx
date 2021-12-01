// Edit this file to add new stories
import React from 'react'
import { Fab, FabProps } from '../Fab'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './Fab.stories.gen'
import { Box } from '../../Box/Box'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import FavoriteIcon from '@mui/icons-material/Favorite'
import NavigationIcon from '@mui/icons-material/Navigation'
import { useTheme } from '@mui/material/styles'
import { SxProps } from '@mui/system'
import { Typography } from '../../Typography/Typography'
import { green } from '@mui/material/colors'
import { AppBar } from '../../AppBar/AppBar'
import { Tabs } from '../../Tabs/Tabs'
import { Tab } from '../../Tab/Tab'
import { Zoom } from '../../Zoom/Zoom'
import UpIcon from '@mui/icons-material/KeyboardArrowUp'

/**
 * Metadata for Fab stories - update/extend as needed
 */
export default { ...defaultStoryMeta, title: 'Inputs/Fab' }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<FabProps>(args => <Fab {...args}>FAB</Fab>, {
  args: {},
})
/** Default story for Fab (edit/remove by hand if needed) */
export const Default = story(Template)

export const Basic = story(
  () => (
    <Box
      sx={{
        '& > :not(style)': { m: 1 },
      }}
    >
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>
    </Box>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `
A floating action button appears in front of all screen content, typically as a circular shape with an icon in its center. FABs come in two types: regular, and extended.

Only use a FAB if it is the most suitable way to present a screen's primary action. Only one component is recommended per screen to represent the most common action.`,
        },
      },
    },
  },
)

export const Size = story(
  () => (
    <Box
      sx={{
        '& :not(style)': { m: 1 },
      }}
    >
      <Fab size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab size="medium" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  ),
  {
    parameters: {
      docs: {
        description: {
          story:
            'By default, the size is `large`. Use the `size` prop for smaller floating action buttons.',
        },
      },
    },
  },
)

export const Extended = story(() => (
  <Box
    sx={{
      '& button': { m: 1 },
    }}
  >
    <Fab variant="extended" size="small" color="primary" aria-label="add">
      <NavigationIcon sx={{ mr: 1 }} />
      Extended
    </Fab>
    <Fab variant="extended" size="medium" color="primary" aria-label="add">
      <NavigationIcon sx={{ mr: 1 }} />
      Extended
    </Fab>
    <Fab variant="extended" color="primary" aria-label="add">
      <NavigationIcon sx={{ mr: 1 }} />
      Extended
    </Fab>
  </Box>
))

interface TabPanelProps {
  children?: React.ReactNode
  dir?: string
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  )
}

function a11yProps(index: any) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  }
}

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
}

const fabGreenStyle = {
  color: 'common.white',
  bgcolor: green[500],
  '&:hover': {
    bgcolor: green[600],
  },
}

export const Animation = story(
  () => {
    const theme = useTheme()
    const [value, setValue] = React.useState(0)

    const handleChange = (event: unknown, newValue: number) => {
      setValue(newValue)
    }

    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen,
    }

    const fabs = [
      {
        color: 'primary' as 'primary',
        sx: fabStyle as SxProps,
        icon: <AddIcon />,
        label: 'Add',
      },
      {
        color: 'secondary' as 'secondary',
        sx: fabStyle as SxProps,
        icon: <EditIcon />,
        label: 'Edit',
      },
      {
        color: 'inherit' as 'inherit',
        sx: { ...fabStyle, ...fabGreenStyle } as SxProps,
        icon: <UpIcon />,
        label: 'Expand',
      },
    ]

    return (
      <Box
        sx={{
          bgcolor: 'background.paper',
          width: 500,
          position: 'relative',
          minHeight: 200,
        }}
      >
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="action tabs example"
          >
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
        {fabs.map((fab, index) => (
          <Zoom
            key={index}
            in={value === index}
            timeout={transitionDuration}
            style={{
              transitionDelay: `${
                value === index ? transitionDuration.exit : 0
              }ms`,
            }}
            unmountOnExit
          >
            <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
              {fab.icon}
            </Fab>
          </Zoom>
        ))}
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `
The floating action button animates onto the screen as an expanding piece of material, by default.

A floating action button that spans multiple lateral screens (such as tabbed screens) should briefly disappear, then reappear if its action changes.

The Zoom transition can be used to achieve this. Note that since both the exiting and entering animations are triggered at the same time, we use \`enterDelay\` to allow the outgoing Floating Action Button's animation to finish before the new one enters.`,
        },
      },
    },
  },
)
