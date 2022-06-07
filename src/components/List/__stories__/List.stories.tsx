// Edit this file to add new stories
import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import BeachAccessIcon from '@mui/icons-material/BeachAccess'
import BluetoothIcon from '@mui/icons-material/Bluetooth'
import CommentIcon from '@mui/icons-material/Comment'
import DeleteIcon from '@mui/icons-material/Delete'
import DnsIcon from '@mui/icons-material/Dns'
import DraftsIcon from '@mui/icons-material/Drafts'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import FolderIcon from '@mui/icons-material/Folder'
import HomeIcon from '@mui/icons-material/Home'
import ImageIcon from '@mui/icons-material/Image'
import InboxIcon from '@mui/icons-material/Inbox'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import PeopleIcon from '@mui/icons-material/People'
import PermMediaIcon from '@mui/icons-material/PermMedia'
import PublicIcon from '@mui/icons-material/Public'
import SendIcon from '@mui/icons-material/Send'
import SettingsIcon from '@mui/icons-material/Settings'
import StarIcon from '@mui/icons-material/Star'
import StarBorder from '@mui/icons-material/StarBorder'
import WifiIcon from '@mui/icons-material/Wifi'
import WorkIcon from '@mui/icons-material/Work'
import {
  Alert,
  Avatar,
  Box,
  Checkbox,
  Collapse,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListProps,
  ListSubheader,
  Paper,
  Switch,
  Tooltip,
  Typography,
} from '@mui/material'
import {
  createTheme,
  styled,
  StyledEngineProvider,
  Theme,
  ThemeProvider,
} from '@mui/material/styles'

import { story } from '../../../test-helpers/storybook'
import { IconButton } from '../../IconButton/IconButton'

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

/**
 * Metadata for List stories - update/extend as needed
 */
export default { title: 'Data Display/List', component: List }

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ListProps>(
  args => {
    return (
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <nav aria-label="main mailbox folders">
          <List {...args}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
        <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Trash" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Spam (link)" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    )
  },
  { args: {} },
)

/** Default story for List (edit/remove by hand if needed) */
export const Default = story(Template)

export const NestedList = story<ListProps>(
  () => {
    const [open, setOpen] = React.useState(true)

    const handleClick = () => {
      setOpen(!open)
    }

    return (
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 8 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `List with Buttons, Icons, Text, and Collapse for nesting.`,
        },
      },
    },
  },
)

export const FolderList = story<ListProps>(
  () => {
    return (
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
      </List>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `List with avatars, text, icons.`,
        },
      },
    },
  },
)

function generate(prefix: string, element: (id: string) => React.ReactElement) {
  return [0, 1, 2].map(value => {
    const id = `${prefix}-${value}`
    return React.cloneElement(element(id), {
      key: id,
    })
  })
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}))

export const InteractiveList = story<ListProps>(
  () => {
    const [dense, setDense] = React.useState(false)
    const [secondary, setSecondary] = React.useState(false)

    return (
      <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={dense}
                onChange={event => setDense(event.target.checked)}
              />
            }
            label="Enable dense"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={secondary}
                onChange={event => setSecondary(event.target.checked)}
              />
            }
            label="Enable secondary text"
          />
        </FormGroup>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h3" component="div">
              Text only
            </Typography>
            <Demo>
              <List dense={dense}>
                {generate('interactive-list-item-0', () => (
                  <ListItem>
                    <ListItemText
                      primary="Single-line item"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>
                ))}
              </List>
            </Demo>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h3" component="div">
              Icon with text
            </Typography>
            <Demo>
              <List dense={dense}>
                {generate('interactive-list-item-1', () => (
                  <ListItem
                    secondaryAction={
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        size={dense ? 'small' : 'medium'}
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Single-line item"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>
                ))}
              </List>
            </Demo>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h3" component="div">
              Checkbox with text
            </Typography>
            <Demo>
              <List dense={dense}>
                {generate('interactive-list-item-2', id => (
                  <ListItem>
                    <ListItemIcon>
                      <Checkbox
                        size={dense ? 'small' : 'medium'}
                        inputProps={{ 'aria-labelledby': id }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      id={id}
                      primary="Single-line item"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>
                ))}
              </List>
            </Demo>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h3" component="div">
              Avatar with text and icon
            </Typography>
            <Demo>
              <List dense={dense}>
                {generate('interactive-list-item-3', () => (
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Single-line item"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>
                ))}
              </List>
            </Demo>
          </Grid>
        </Grid>
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Interactive demo.`,
        },
      },
    },
  },
)

export const SelectedListItem = story<ListProps>(
  () => {
    const [selectedIndex, setSelectedIndex] = React.useState(1)

    const handleListItemClick = (index: number) => () => {
      setSelectedIndex(index)
    }

    return (
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={handleListItemClick(0)}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={handleListItemClick(1)}
          >
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </List>
        <Divider />
        <List component="nav" aria-label="secondary mailbox folder">
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={handleListItemClick(2)}
          >
            <ListItemText primary="Trash" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 3}
            onClick={handleListItemClick(3)}
          >
            <ListItemText primary="Spam" />
          </ListItemButton>
        </List>
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Show selected list items.`,
        },
      },
    },
  },
)

export const AlignListItems = story<ListProps>(
  () => {
    return (
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp">
              <Typography fontWeight="bold">RS</Typography>
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard">
              <Typography fontWeight="bold">TH</Typography>
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker">
              <Typography fontWeight="bold">CB</Typography>
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {' — Do you have Paris recommendations? Have you ever…'}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `You should change the list item alignment when displaying 3 lines or more, set the alignItems prop to "flex-start".`,
        },
      },
    },
  },
)

export const ListControlsCheckbox = story<ListProps>(
  () => {
    const [checked, setChecked] = React.useState([0])

    const handleToggle = (value: number) => () => {
      const currentIndex = checked.indexOf(value)
      const newChecked = [...checked]

      if (currentIndex === -1) {
        newChecked.push(value)
      } else {
        newChecked.splice(currentIndex, 1)
      }

      setChecked(newChecked)
    }

    return (
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {[0, 1, 2, 3].map(value => {
          const labelId = `checkbox-list-label-${value}`

          return (
            <ListItem
              key={value}
              secondaryAction={
                <IconButton edge="end" aria-label="comments" shape="circular">
                  <CommentIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={handleToggle(value)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `A checkbox can either be a primary action or a secondary action.

The checkbox is the primary action and the state indicator for the list item. The comment button is a secondary action and a separate target.`,
        },
      },
    },
  },
)

export const ListControlsCheckboxSecondary = story<ListProps>(
  () => {
    const [checked, setChecked] = React.useState([1])

    const handleToggle = (value: number) => () => {
      const currentIndex = checked.indexOf(value)
      const newChecked = [...checked]

      if (currentIndex === -1) {
        newChecked.push(value)
      } else {
        newChecked.splice(currentIndex, 1)
      }

      setChecked(newChecked)
    }

    return (
      <List
        dense
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      >
        {[0, 1, 2, 3].map(value => {
          const labelId = `checkbox-list-secondary-label-${value}`
          return (
            <ListItem
              key={value}
              secondaryAction={
                <Checkbox
                  edge="end"
                  onChange={handleToggle(value)}
                  checked={checked.indexOf(value) !== -1}
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar sx={{ height: 32, width: 32 }}>
                    <Typography
                      sx={{
                        typography: 'body2',
                        fontWeight: 'bold',
                      }}
                    >
                      AA
                    </Typography>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `The checkbox is the secondary action for the list item and a separate target.`,
        },
      },
    },
  },
)

export const ListControlsSwitch = story<ListProps>(
  () => {
    const [checked, setChecked] = React.useState(['wifi'])

    const handleToggle = (value: string) => () => {
      const currentIndex = checked.indexOf(value)
      const newChecked = [...checked]

      if (currentIndex === -1) {
        newChecked.push(value)
      } else {
        newChecked.splice(currentIndex, 1)
      }

      setChecked(newChecked)
    }

    return (
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        subheader={<ListSubheader>Settings</ListSubheader>}
      >
        <ListItem>
          <ListItemIcon>
            <WifiIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
          <Switch
            edge="end"
            onChange={handleToggle('wifi')}
            checked={checked.indexOf('wifi') !== -1}
            inputProps={{
              'aria-labelledby': 'switch-list-label-wifi',
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <BluetoothIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
          <Switch
            edge="end"
            onChange={handleToggle('bluetooth')}
            checked={checked.indexOf('bluetooth') !== -1}
            inputProps={{
              'aria-labelledby': 'switch-list-label-bluetooth',
            }}
          />
        </ListItem>
      </List>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `The switch is the secondary action and a separate target.`,
        },
      },
    },
  },
)

export const StickySubheader = story<ListProps>(
  () => {
    return (
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'auto',
          maxHeight: 300,
          '& ul': { padding: 0 },
        }}
        subheader={<li />}
      >
        {[0, 1, 2, 3, 4].map(sectionId => (
          <li key={`section-${sectionId}`}>
            <ul>
              <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
              {[0, 1, 2].map(item => (
                <ListItem key={`item-${sectionId}-${item}`}>
                  <ListItemText primary={`Item ${item}`} />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Upon scrolling, subheaders remain pinned to the top of the screen until pushed off screen by the next subheader. This feature relies on CSS sticky positioning. (⚠️ no IE 11 support)`,
        },
      },
    },
  },
)

export const InsetListItem = story<ListProps>(
  () => {
    return (
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        aria-label="contacts"
        dense
      >
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <StarIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Chelsea Otakan" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText inset primary="Eric Hoffman" />
          </ListItemButton>
        </ListItem>
      </List>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `The inset prop enables a list item that does not have a leading icon or avatar to align correctly with items that do.`,
        },
      },
    },
  },
)

export const GutterlessListItem = story<ListProps>(
  () => {
    return (
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {[1, 2, 3].map(value => (
          <ListItem
            key={value}
            disableGutters
            secondaryAction={
              <IconButton aria-label="Comment">
                <CommentIcon />
              </IconButton>
            }
          >
            <ListItemText primary={`Line item ${value}`} />
          </ListItem>
        ))}
      </List>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `When rendering a list within a component that defines its own gutters, ListItem gutters can be disabled with disableGutters.`,
        },
      },
    },
  },
)

export const VirtualizedList = story<ListProps>(
  () => {
    return (
      <Alert severity="warning">
        This example requires react-window, which is not installed. See MUI
        docs.
      </Alert>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `In the following example, we demonstrate how to use react-window with the List component. It renders 200 rows and can easily handle more. Virtualization helps with performance issues.`,
        },
      },
    },
  },
)
const data = [
  { icon: <PeopleIcon />, label: 'Authentication' },
  { icon: <DnsIcon />, label: 'Database' },
  { icon: <PermMediaIcon />, label: 'Storage' },
  { icon: <PublicIcon />, label: 'Hosting' },
]

const FireNav = styled(List)<{ component?: React.ElementType }>({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
})

export const CustomizedList = story<ListProps>(
  () => {
    const [open, setOpen] = React.useState(true)
    return (
      <Box sx={{ display: 'flex' }}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider
            theme={createTheme({
              components: {
                MuiListItemButton: {
                  defaultProps: {
                    disableTouchRipple: true,
                  },
                },
              },
              palette: {
                mode: 'dark',
                background: { paper: 'rgb(5, 30, 52)' },
              },
            })}
          >
            <Paper elevation={0} sx={{ maxWidth: 256 }}>
              <FireNav component="nav" disablePadding>
                <ListItemButton component="a" href="#customized-list">
                  <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon>
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="Firebash"
                    primaryTypographyProps={{
                      fontSize: 20,
                      fontWeight: 'medium',
                      letterSpacing: 0,
                    }}
                  />
                </ListItemButton>
                <Divider />
                <ListItem component="div" disablePadding>
                  <ListItemButton sx={{ height: 56 }}>
                    <ListItemIcon>
                      <HomeIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Project Overview"
                      primaryTypographyProps={{
                        color: 'primary',
                        fontWeight: 'medium',
                        variant: 'body2',
                      }}
                    />
                  </ListItemButton>
                  <Tooltip title="Project Settings">
                    <IconButton
                      size="large"
                      sx={{
                        '& svg': {
                          color: 'rgba(255,255,255,0.8)',
                          transition: '0.2s',
                          transform: 'translateX(0) rotate(0)',
                        },
                        '&:hover, &:focus': {
                          bgcolor: 'unset',
                          '& svg:first-of-type': {
                            transform: 'translateX(-4px) rotate(-20deg)',
                          },
                          '& svg:last-of-type': {
                            right: 0,
                            opacity: 1,
                          },
                        },
                        '&:after': {
                          content: '""',
                          position: 'absolute',
                          height: '80%',
                          display: 'block',
                          left: 0,
                          width: '1px',
                          bgcolor: 'divider',
                        },
                      }}
                    >
                      <SettingsIcon />
                      <ArrowRightIcon
                        sx={{ position: 'absolute', right: 4, opacity: 0 }}
                      />
                    </IconButton>
                  </Tooltip>
                </ListItem>
                <Divider />
                <Box
                  sx={{
                    bgcolor: open ? 'rgba(71, 98, 130, 0.2)' : null,
                    pb: open ? 2 : 0,
                  }}
                >
                  <ListItemButton
                    alignItems="flex-start"
                    onClick={() => setOpen(!open)}
                    sx={{
                      px: 3,
                      pt: 2.5,
                      pb: open ? 0 : 2.5,
                      '&:hover, &:focus': {
                        '& svg': { opacity: open ? 1 : 0 },
                      },
                    }}
                  >
                    <ListItemText
                      primary="Build"
                      primaryTypographyProps={{
                        fontSize: 15,
                        fontWeight: 'medium',
                        lineHeight: '20px',
                        mb: '2px',
                      }}
                      secondary="Authentication, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning"
                      secondaryTypographyProps={{
                        noWrap: true,
                        fontSize: 12,
                        lineHeight: '16px',
                        color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                      }}
                      sx={{ my: 0 }}
                    />
                    <KeyboardArrowDownIcon
                      sx={{
                        mr: -1,
                        opacity: 0,
                        transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                        transition: '0.2s',
                      }}
                    />
                  </ListItemButton>
                  {open &&
                    data.map(item => (
                      <ListItemButton
                        key={item.label}
                        sx={{
                          py: 0,
                          minHeight: 32,
                          color: 'rgba(255,255,255,.8)',
                        }}
                      >
                        <ListItemIcon sx={{ color: 'inherit' }}>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={item.label}
                          primaryTypographyProps={{
                            fontSize: 14,
                            fontWeight: 'medium',
                          }}
                        />
                      </ListItemButton>
                    ))}
                </Box>
              </FireNav>
            </Paper>
          </ThemeProvider>
        </StyledEngineProvider>
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Here are some examples of customizing the component. You can learn more about this in the overrides documentation page.`,
        },
      },
    },
  },
)
