// Edit this file to add new stories
import React from 'react'
import { AppBar, AppBarProps } from '../AppBar'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './AppBar.stories.gen'
import { Box } from '../../Box/Box'
import { Toolbar } from '../../Toolbar/Toolbar'
import { Button } from '../../Button/Button'
import { IconButton } from '../../IconButton/IconButton'
import { Typography } from '../../Typography/Typography'
import { styled, alpha } from '@mui/material/styles'
import { InputBase } from '../../InputBase/InputBase'
import { Menu } from '../../Menu/Menu'
import { MenuItem } from '../../MenuItem/MenuItem'
import { Badge } from '../../Badge/Badge'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MailIcon from '@mui/icons-material/Mail'
import AddIcon from '@mui/icons-material/Add'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MoreIcon from '@mui/icons-material/MoreVert'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { FormGroup } from '../../FormGroup/FormGroup'
import { FormControlLabel } from '../../FormControlLabel/FormControlLabel'
import { Switch } from '../../Switch/Switch'
import { Fab } from '../../Fab/Fab'
import { CssBaseline } from '../../CssBaseline/CssBaseline'
import { Paper } from '../../Paper/Paper'
import { List } from '../../List/List'
import { ListSubheader } from '../../ListSubheader/ListSubheader'
import { ListItem } from '../../ListItem/ListItem'
import { ListItemAvatar } from '../../ListItemAvatar/ListItemAvatar'
import { Avatar } from '../../Avatar/Avatar'
import { ListItemText } from '../../ListItemText/ListItemText'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import { Slide } from '../../Slide/Slide'
import { Container } from '../../Container/Container'
import { Zoom } from '../../Zoom/Zoom'

/**
 * Metadata for AppBar stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: 'Surfaces/AppBar',
  parameters: {
    docs: {
      iframeHeight: 400,
    },
  },
}

//#region styles
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

const StyledInputBaseVariant = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 128,
  },
}))

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
})
//#endregion

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<AppBarProps>(
  args => {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar {...args}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    )
  },
  { args: { position: 'static' } },
)

/** Default story for AppBar (edit/remove by hand if needed) */
export const Default = story(Template)

export const WithPrimarySearchField = story<AppBarProps>(
  args => {
    //#region Styles that would live outside of component

    //#endregion

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const [
      mobileMoreAnchorEl,
      setMobileMoreAnchorEl,
    ] = React.useState<null | HTMLElement>(null)

    const isMenuOpen = Boolean(anchorEl)
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
    }

    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null)
    }

    const handleMenuClose = () => {
      setAnchorEl(null)
      handleMobileMenuClose()
    }

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
      setMobileMoreAnchorEl(event.currentTarget)
    }

    const menuId = 'primary-search-account-menu'
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
    )

    const mobileMenuId = 'primary-search-account-menu-mobile'
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    )

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar {...args}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Material-UI
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    )
  },
  {
    args: { position: 'static' },
    parameters: {
      docs: {
        description: {
          story: `A primary searchbar.`,
        },
      },
    },
  },
)

export const WithMenu = story<AppBarProps>(
  args => {
    const [auth, setAuth] = React.useState(true)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setAuth(event.target.checked)
    }

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
      setAnchorEl(null)
    }

    return (
      <Box sx={{ flexGrow: 1 }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={auth}
                onChange={handleChange}
                aria-label="login switch"
              />
            }
            label={auth ? 'Logout' : 'Login'}
          />
        </FormGroup>
        <AppBar {...args}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Photos
            </Typography>
            {auth && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    )
  },
  {
    args: { position: 'static' },
  },
)

export const WithSearchField = story<AppBarProps>(
  args => (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar {...args}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Material-UI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBaseVariant
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  ),
  {
    args: { position: 'static' },
    parameters: {
      docs: {
        description: {
          story: `A side searchbar.`,
        },
      },
    },
  },
)

export const Dense = story<AppBarProps>(
  args => (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar {...args}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            size="large"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  ),
  {
    args: { position: 'static' },
    parameters: {
      docs: {
        description: {
          story: `Dense (desktop only).`,
        },
      },
    },
  },
)

export const Prominent = story<AppBarProps>(
  args => (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar {...args}>
        <StyledToolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
          >
            Material-UI
          </Typography>
          <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </StyledToolbar>
      </AppBar>
    </Box>
  ),
  {
    args: { position: 'static' },
    parameters: {
      docs: {
        description: {
          story: `A prominent app bar.`,
        },
      },
    },
  },
)

export const BottomBar = story<AppBarProps>(
  args => {
    //#region this would live outside of component
    const messages = [
      {
        id: 1,
        primary: 'Brunch this week?',
        secondary:
          "I'll be in the neighbourhood this week. Let's grab a bite to eat",
        person: '/static/images/avatar/5.jpg',
      },
      {
        id: 2,
        primary: 'Birthday Gift',
        secondary: `Do you have a suggestion for a good present for John on his work
          anniversary. I am really confused & would love your thoughts on it.`,
        person: '/static/images/avatar/1.jpg',
      },
      {
        id: 3,
        primary: 'Recipe to try',
        secondary:
          'I am try out this new BBQ recipe, I think this might be amazing',
        person: '/static/images/avatar/2.jpg',
      },
      {
        id: 4,
        primary: 'Yes!',
        secondary: 'I have the tickets to the ReactConf for this year.',
        person: '/static/images/avatar/3.jpg',
      },
      {
        id: 5,
        primary: "Doctor's Appointment",
        secondary:
          'My appointment for the doctor was rescheduled for next Saturday.',
        person: '/static/images/avatar/4.jpg',
      },
      {
        id: 6,
        primary: 'Discussion',
        secondary: `Menus that are generated by the bottom app bar (such as a bottom
          navigation drawer or overflow menu) open as bottom sheets at a higher elevation
          than the bar.`,
        person: '/static/images/avatar/5.jpg',
      },
      {
        id: 7,
        primary: 'Summer BBQ',
        secondary: `Who wants to have a cookout this weekend? I just got some furniture
          for my backyard and would love to fire up the grill.`,
        person: '/static/images/avatar/1.jpg',
      },
    ]
    //#endregion

    return (
      <React.Fragment>
        <CssBaseline />
        <Paper square sx={{ pb: '50px' }}>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{ p: 2, pb: 0 }}
          >
            Inbox
          </Typography>
          <List sx={{ mb: 2 }}>
            {messages.map(({ id, primary, secondary, person }) => (
              <React.Fragment key={id}>
                {id === 1 && (
                  <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                    Today
                  </ListSubheader>
                )}
                {id === 3 && (
                  <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                    Yesterday
                  </ListSubheader>
                )}
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar alt="Profile Picture" src={person} />
                  </ListItemAvatar>
                  <ListItemText primary={primary} secondary={secondary} />
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </Paper>
        <AppBar {...args}>
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" size="large">
              <MenuIcon />
            </IconButton>
            <StyledFab color="secondary" aria-label="add">
              <AddIcon />
            </StyledFab>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton color="inherit" size="large">
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit" size="large">
              <MoreIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    )
  },
  {
    args: {
      position: 'fixed',
      color: 'primary',
      sx: { top: 'auto', bottom: 0 },
    },
    parameters: {
      docs: {
        inlineStories: false,
      },
    },
  },
)

export const HidesOnScroll = story<AppBarProps>(
  args => {
    //#region this would live outside of component
    function HideOnScroll(props: {
      window?: () => Window
      children: React.ReactElement
    }) {
      const { children, window } = props
      // Note that you normally won't need to set the window ref as useScrollTrigger
      // will default to window.
      // This is only being set here because the demo is in an iframe.
      const trigger = useScrollTrigger({
        target: window ? window() : undefined,
      })

      return (
        <Slide appear={false} direction="down" in={!trigger}>
          {children}
        </Slide>
      )
    }
    //#endregion

    return (
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll>
          <AppBar {...args}>
            <Toolbar>
              <Typography variant="h6" component="div">
                Scroll to Hide App Bar
              </Typography>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
        <Container>
          <Box sx={{ my: 2 }}>
            {new Array(12)
              .fill(
                `Cras mattis consectetur purus sit amet fermentum.
              Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')}
          </Box>
        </Container>
      </React.Fragment>
    )
  },
  {
    parameters: {
      docs: {
        inlineStories: false,
        description: {
          story: `The app bar hides on scroll down to leave more space for reading.`,
        },
      },
    },
  },
)

export const ElevateOnScroll = story<AppBarProps>(
  args => {
    //#region this would live outside of component
    function ElevationScroll(props: {
      window?: () => Window
      children: React.ReactElement
    }) {
      const { children, window } = props
      // Note that you normally won't need to set the window ref as useScrollTrigger
      // will default to window.
      // This is only being set here because the demo is in an iframe.
      const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
      })

      return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    }
    //#endregion

    return (
      <React.Fragment>
        <CssBaseline />
        <ElevationScroll>
          <AppBar {...args}>
            <Toolbar>
              <Typography variant="h6" component="div">
                Scroll to Elevate App Bar
              </Typography>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Toolbar />
        <Container>
          <Box sx={{ my: 2 }}>
            {new Array(12)
              .fill(
                `Cras mattis consectetur purus sit amet fermentum.
              Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')}
          </Box>
        </Container>
      </React.Fragment>
    )
  },
  {
    parameters: {
      docs: {
        inlineStories: false,
        description: {
          story: `The app bar elevates on scroll to communicate that the user is not at the top of the page.`,
        },
      },
    },
  },
)

export const BackToTop = story<AppBarProps>(
  args => {
    //#region this would live outside of component
    function ScrollTop(props: {
      window?: () => Window
      children: React.ReactElement
    }) {
      const { children, window } = props
      // Note that you normally won't need to set the window ref as useScrollTrigger
      // will default to window.
      // This is only being set here because the demo is in an iframe.
      const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
      })

      const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = (
          (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector('#back-to-top-anchor')

        if (anchor) {
          anchor.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          })
        }
      }
      return (
        <Zoom in={trigger}>
          <Box
            onClick={handleClick}
            role="presentation"
            sx={{ position: 'fixed', bottom: 16, right: 16 }}
          >
            {children}
          </Box>
        </Zoom>
      )
    }
    //#endregion
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar {...args}>
          <Toolbar>
            <Typography variant="h6" component="div">
              Scroll to see button
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
        <Container>
          <Box sx={{ my: 2 }}>
            {new Array(12)
              .fill(
                `Cras mattis consectetur purus sit amet fermentum.
              Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')}
          </Box>
        </Container>
        <ScrollTop>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </React.Fragment>
    )
  },
  {
    parameters: {
      docs: {
        inlineStories: false,
        description: {
          story: `TA floating action buttons appears on scroll to make it easy to get back to the top of the page.`,
        },
      },
    },
  },
)
