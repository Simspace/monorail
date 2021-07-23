// Edit this file to add new stories
import React from 'react'
import { Drawer, DrawerProps } from '../Drawer'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './Drawer.stories.gen'
import { Box } from '../../Box/Box'
import { List } from '../../List/List'
import { ListItem } from '../../ListItem/ListItem'
import { ListItemText } from '../../ListItemText/ListItemText'
import { Divider } from '../../Divider/Divider'
import { Button } from '../../Button/Button'
import InboxIcon from '@material-ui/icons/Inbox'
import MailIcon from '@material-ui/icons/Mail'
import { ListItemIcon } from '../../ListItemIcon/ListItemIcon'
import { SwipeableDrawer } from '../../SwipeableDrawer/SwipeableDrawer'
/**
 * Metadata for Drawer stories - update/extend as needed
 */
export default { ...defaultStoryMeta }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<DrawerProps>(args => <Drawer {...args} />, { args: {} })
/** Default story for Drawer (edit/remove by hand if needed) */
export const Default = story(Template)

type Anchor = 'top' | 'left' | 'bottom' | 'right'

export const TemporaryDrawer = story<DrawerProps>(
  () => {
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    })

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
      event: React.KeyboardEvent | React.MouseEvent,
    ) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }

    const list = (anchor: Anchor) => (
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    )

    return (
      <div>
        {(['left', 'right', 'top', 'bottom'] as const).map(anchor => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily above all other content until a section is selected. The Drawer can be cancelled by clicking the overlay or pressing the Esc key. It closes when an item is selected, handled by controlling the open prop.`,
        },
      },
    },
  },
)
