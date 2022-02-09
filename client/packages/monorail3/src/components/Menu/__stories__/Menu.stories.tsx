// Edit this file to add new stories
import React from 'react'
import Archive from '@mui/icons-material/Archive'
import Check from '@mui/icons-material/Check'
import Cloud from '@mui/icons-material/Cloud'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentPaste from '@mui/icons-material/ContentPaste'
import Drafts from '@mui/icons-material/Drafts'
import Edit from '@mui/icons-material/Edit'
import FileCopy from '@mui/icons-material/FileCopy'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import Logout from '@mui/icons-material/Logout'
import MoreHoriz from '@mui/icons-material/MoreHoriz'
import MoreVert from '@mui/icons-material/MoreVert'
import PersonAdd from '@mui/icons-material/PersonAdd'
import PriorityHigh from '@mui/icons-material/PriorityHigh'
import Send from '@mui/icons-material/Send'
import Settings from '@mui/icons-material/Settings'
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  MenuProps,
  Paper,
  Tooltip,
  Typography,
} from '@mui/material'
import { alpha, styled } from '@mui/material/styles'

import { story } from '../../../__tests__/helpers/storybook'

/**
 * Metadata for Menu stories - update/extend as needed
 */
export default { title: 'Navigation/Menu', component: Menu }

const Template = story<MenuProps>(
  args => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
      setAnchorEl(null)
    }
    return (
      <div>
        <Button
          id="basic-button"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Open Menu
        </Button>
        <Menu {...args} anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
        </Menu>
      </div>
    )
  },
  {
    args: {},
  },
)

/** Default story for Menu */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `A basic menu opens over the anchor element by default (this option can be [changed](https://next.material-ui.com/components/menus/#menu-positioning) via props). When close to a screen edge, a basic menu vertically realigns to make sure that all menu items are completely visible.

Choosing an option should immediately ideally commit the option and close the menu.
        
Disambiguation: In contrast to simple menus, simple dialogs can present additional detail related to the options available for a list item or provide navigational or orthogonal actions related to the primary task. Although they can display the same content, simple menus are preferred over simple dialogs because simple menus are less disruptive to the user's current context.`,
      },
    },
  },
})

export const IconMenu = story<MenuProps>(
  () => (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cut</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentCopy fontSize="small" />
          </ListItemIcon>
          <ListItemText>Copy</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘C
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon>
          <ListItemText>Paste</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘V
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `In desktop viewport, padding is increased to give more space to the menu.`,
        },
      },
    },
  },
)

export const DenseMenu = story<MenuProps>(
  () => (
    <Paper sx={{ width: 320 }}>
      <MenuList dense>
        <MenuItem>
          <ListItemText inset>Single</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>1.15</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Double</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Check />
          </ListItemIcon>
          Custom: 1.2
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Add space before paragraph</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Add space after paragraph</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Custom spacing...</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  ),
  {
    parameters: {
      docs: {
        description: {
          story:
            'For the menu that has long list and long text, you can use the `dense` prop to reduce the padding (this property only affects desktop viewport).',
        },
      },
    },
  },
)

const selectedMenuOptions = [
  'Show sensitive notification content',
  'Show all notification content',
  'Hide sensitive notification content',
  'Hide all notification content',
]

export const SelectedMenu = story<MenuProps>(
  () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const [selectedIndex, setSelectedIndex] = React.useState(1)
    const open = Boolean(anchorEl)
    const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
    }

    const handleMenuItemClick = (index: number) => () => {
      setSelectedIndex(index)
      setAnchorEl(null)
    }

    const handleClose = () => {
      setAnchorEl(null)
    }

    return (
      <div>
        <List
          component="nav"
          aria-label="Device settings"
          sx={{ bgcolor: 'background.paper' }}
        >
          <ListItem
            button
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClickListItem}
          >
            <ListItemText
              primary="When device is locked"
              secondary={selectedMenuOptions[selectedIndex]}
            />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'lock-button',
            role: 'listbox',
          }}
        >
          {selectedMenuOptions.map((option, index) => (
            <MenuItem
              key={option}
              disabled={index === 0}
              selected={index === selectedIndex}
              onClick={handleMenuItemClick(index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    )
  },
  {
    parameters: {
      a11y: { disable: true }, // Axe says aria-controls value is invalid, but this is how MUI controls menus
      docs: {
        description: {
          story:
            'If used for item selection, when opened, simple menus places the initial focus on the selected menu item. The currently selected menu item is set using the `selected` prop (from [ListItem](https://next.material-ui.com/api/list-item/)). To use a selected menu item without impacting the initial focus, set the `variant` prop to "menu".',
        },
      },
    },
  },
)

export const PositionedMenu = story<MenuProps>(
  () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
      setAnchorEl(null)
    }

    return (
      <div>
        <Button
          id="demo-positioned-button"
          aria-controls="demo-positioned-menu"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Dashboard
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    )
  },
  {
    parameters: {
      a11y: { disable: true }, // Axe says aria-controls value is invalid, but this is how MUI controls menus
      docs: {
        description: {
          story:
            'Because the `Menu` component uses the `Popover` component to position itself, you can use the same [positioning props](https://next.material-ui.com/components/popover/#anchor-playground) to position it. For instance, you can display the menu on top of the anchor:',
        },
      },
    },
  },
)

export const AccountMenu = story<MenuProps>(
  () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
      setAnchorEl(null)
    }
    return (
      <React.Fragment>
        <Box
          sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}
        >
          <Typography sx={{ minWidth: 100 }}>Contact</Typography>
          <Typography sx={{ minWidth: 100 }}>Profile</Typography>
          <Tooltip title="Account settings">
            <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem>
            <Avatar /> Profile
          </MenuItem>
          <MenuItem>
            <Avatar /> My account
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </React.Fragment>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story:
            '`Menu` content can be mixed with other components like `Avatar`.',
        },
      },
    },
  },
)

export const CustomizedMenu = story<MenuProps>(
  () => {
    const StyledMenu = styled((props: MenuProps) => (
      <Menu
        elevation={0}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        {...props}
      />
    ))(({ theme }) => ({
      '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
          theme.palette.mode === 'light'
            ? 'rgb(55, 65, 81)'
            : theme.palette.grey[300],
        boxShadow:
          'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
          padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
          '& .MuiSvgIcon-root': {
            fontSize: 18,
            color: theme.palette.text.secondary,
            marginRight: theme.spacing(1.5),
          },
          '&:active': {
            backgroundColor: alpha(
              theme.palette.primary.main,
              theme.palette.action.selectedOpacity,
            ),
          },
        },
      },
    }))

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
      setAnchorEl(null)
    }

    return (
      <div>
        <Button
          id="demo-customized-button"
          aria-controls="demo-customized-menu"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDown />}
        >
          Options
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} disableRipple>
            <Edit />
            Edit
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <FileCopy />
            Duplicate
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleClose} disableRipple>
            <Archive />
            Archive
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <MoreHoriz />
            More
          </MenuItem>
        </StyledMenu>
      </div>
    )
  },
  {
    parameters: {
      a11y: { disable: true }, // Axe says aria-controls value is invalid, but this is how MUI controls menus
      docs: {
        description: {
          story:
            'Here is an example of customizing the component. You can learn more about this in the [overrides documentation page](https://next.material-ui.com/customization/how-to-customize/).',
        },
      },
    },
  },
)

const maxHeightOptions = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
]

const MAX_HEIGHT_MAX_HEIGHT = 48

export const MaxHeight = story<MenuProps>(
  () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
      setAnchorEl(null)
    }

    return (
      <div>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls="long-menu"
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          size="large"
        >
          <MoreVert />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: MAX_HEIGHT_MAX_HEIGHT * 4.5,
              width: '20ch',
            },
          }}
        >
          {maxHeightOptions.map(option => (
            <MenuItem
              key={option}
              selected={option === 'Pyxis'}
              onClick={handleClose}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    )
  },
  {
    parameters: {
      a11y: { disable: true }, // Axe says aria-controls value is invalid, but this is how MUI controls menus
      docs: {
        description: {
          story:
            'If the height of a menu prevents all menu items from being displayed, the menu can scroll internally.',
        },
      },
    },
  },
)

export const Limitations = story<MenuProps>(
  () => (
    <Paper sx={{ width: 230 }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <Send fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">A short message</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PriorityHigh fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">
            A very long text that overflows
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Drafts fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            A very long text that overflows
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  ),
  {
    parameters: {
      docs: {
        description: {
          story:
            'There is [a flexbox bug](https://bugs.chromium.org/p/chromium/issues/detail?id=327437) that prevents `text-overflow: ellipsis` from working in a flexbox layout. You can use the `Typography` component with `noWrap` to workaround this issue:',
        },
      },
    },
  },
)
