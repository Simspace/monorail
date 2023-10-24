// Edit this file to add new stories
import React from 'react'
import type {
  DraggableProvided,
  DraggableStateSnapshot,
  DroppableProvided,
  DropResult,
} from 'react-beautiful-dnd'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import type { ListChildComponentProps } from 'react-window'
import { FixedSizeList } from 'react-window'
import BeachAccessIcon from '@mui/icons-material/BeachAccess'
import BluetoothIcon from '@mui/icons-material/Bluetooth'
import CommentIcon from '@mui/icons-material/Comment'
import DeleteIcon from '@mui/icons-material/Delete'
import DraftsIcon from '@mui/icons-material/Drafts'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import FolderIcon from '@mui/icons-material/Folder'
import ImageIcon from '@mui/icons-material/Image'
import InboxIcon from '@mui/icons-material/Inbox'
import SendIcon from '@mui/icons-material/Send'
import StarIcon from '@mui/icons-material/Star'
import StarBorder from '@mui/icons-material/StarBorder'
import WifiIcon from '@mui/icons-material/Wifi'
import WorkIcon from '@mui/icons-material/Work'
import type { Theme } from '@mui/material'
import { styled } from '@mui/material'

import type { ListProps } from '@monorail/components'
import {
  Avatar,
  Box,
  Checkbox,
  Collapse,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
  Switch,
  Typography,
} from '@monorail/components'
import { DragIndicator, WarningAmber } from '@monorail/components/icons'
import { useTheme } from '@monorail/utils'

import { story } from '../helpers/storybook.js'

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

export default { title: 'Data Display/List', component: List }

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
          <List {...args}>
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
  { args: {}, muiName: 'MuiList' },
)

export const Default = story(Template)

/**
 * List with `Buttons`, `Icons`, `Text`, and `Collapse` for nesting.
 */
export const NestedList = story<ListProps>(args => {
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
      {...args}
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
})

/**
 * List with avatars, text, icons.
 */
export const FolderList = story<ListProps>(args => {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      {...args}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar size="small">
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar size="small">
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar size="small">
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
  )
})

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

/**
 * Interactive demo.
 */
export const InteractiveList = story<ListProps>(() => {
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
                    <IconButton edge="end" aria-label="delete" size="small">
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
                      size="small"
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
                    <Avatar size={dense ? 'small' : 'medium'}>
                      <FolderIcon fontSize={dense ? 'medium' : 'large'} />
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
})

/**
 * Show selected list items.
 */
export const SelectedListItem = story<ListProps>(args => {
  const [selectedIndex, setSelectedIndex] = React.useState(1)

  const handleListItemClick = (index: number) => () => {
    setSelectedIndex(index)
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="main mailbox folders" {...args}>
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
      <List component="nav" aria-label="secondary mailbox folder" {...args}>
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
})

/**
 * You should change the list item alignment when displaying 3 lines or more, set the `alignItems` prop to `"flex-start"`.
 */
export const AlignListItems = story<ListProps>(args => {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      {...args}
    >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar size="small" alt="Remy Sharp">
            RS
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
          <Avatar size="small" alt="Travis Howard">
            TH
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
          <Avatar size="small" alt="Cindy Baker">
            CB
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
})

/**
 * A checkbox can either be a primary action or a secondary action.
 *
 * The checkbox is the primary action and the state indicator for the list item. The comment button is a secondary action and a separate target.
 */
export const ListControlsCheckbox = story<ListProps>(args => {
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
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      {...args}
    >
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
                  size="small"
                  edge="start"
                  security="small"
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
})

/**
 * The checkbox is the secondary action for the list item and a separate target.
 */
export const ListControlsCheckboxSecondary = story<ListProps>(args => {
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
      {...args}
    >
      {[0, 1, 2, 3].map(value => {
        const labelId = `checkbox-list-secondary-label-${value}`
        return (
          <ListItem
            key={value}
            secondaryAction={
              <Checkbox
                size="small"
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
                <Avatar size="small">AA</Avatar>
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
})

/**
 * The switch is the secondary action and a separate target.
 */
export const ListControlsSwitch = story<ListProps>(args => {
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
      {...args}
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
})

/**
 * Upon scrolling, subheaders remain pinned to the top of the screen until pushed off screen by the next subheader. This feature relies on CSS sticky positioning. (⚠️ no IE 11 support)
 */
export const StickySubheader = story<ListProps>(args => {
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
      {...args}
    >
      {[0, 1, 2, 3, 4].map(sectionId => (
        <li key={`section-${sectionId}`}>
          <ul>
            <ListSubheader
              sx={{ bgcolor: 'background.paper', top: -1 }}
            >{`I'm sticky ${sectionId}`}</ListSubheader>
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
})

/**
 * The `inset` prop enables a list item that does not have a leading icon or avatar to align correctly with items that do.
 */
export const InsetListItem = story<ListProps>(args => {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      aria-label="contacts"
      dense
      {...args}
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
})

/**
 * When rendering a list within a component that defines its own gutters, `ListItem` gutters can be disabled with `disableGutters`.
 */
export const GutterlessListItem = story<ListProps>(args => {
  return (
    <List
      sx={{ width: '100%', maxWidth: 240, bgcolor: 'background.paper' }}
      {...args}
    >
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
})

/**
 * In the following example, we demonstrate how to use `react-window` with the List component. It renders 200 rows and can easily handle more. Virtualization helps with performance issues.
 */
export const VirtualizedList = story<ListProps>(() => {
  const theme = useTheme()
  const itemSize = theme.name.includes('legacy') ? 24 : 48
  return (
    <Box
      sx={{
        width: '100%',
        height: 400,
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <FixedSizeList
        height={400}
        width={360}
        itemSize={itemSize}
        itemCount={200}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  )
})

function renderRow(props: ListChildComponentProps) {
  const { index, style } = props

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  )
}

export const NumberedList = story<ListProps>(() => {
  return (
    <Box sx={{ width: 360 }}>
      <Typography variant="h3">Instructions</Typography>
      <List component="ol" sx={{ listStyle: 'auto', pl: 6 }}>
        {[1, 2, 3, 4, 5].map(item => (
          <ListItem key={item} sx={{ display: 'list-item' }}>
            <ListItemText
              sx={{ display: 'inline-block' }}
            >{`Step ${item}`}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  )
})

const initialListItems = [
  { id: 'draggable-list-item-1', primaryText: 'Item 1' },
  { id: 'draggable-list-item-2', primaryText: 'Item 2' },
  {
    id: 'draggable-list-item-3',
    primaryText: 'Item 3',
    secondaryText: 'Warning message',
  },
  { id: 'draggable-list-item-4', primaryText: 'Item 4' },
  { id: 'draggable-list-item-5', primaryText: 'Item 5' },
  { id: 'draggable-list-item-6', primaryText: 'Item 6' },
]

export const DraggableList = story<ListProps>(() => {
  const [listItems, setListItems] = React.useState(initialListItems)
  const [toggleScrollContainer, setToggleScrollContainer] =
    React.useState(false)

  const onDragEnd = ({ destination, source }: DropResult) => {
    // dropped outside the list
    if (destination === null || destination === undefined) {
      return
    }

    const newItems = reorder(listItems, source.index, destination.index)

    setListItems(newItems)
  }

  return (
    <Stack gap={4}>
      <FormControlLabel
        control={
          <Switch
            checked={toggleScrollContainer}
            onChange={() => {
              setToggleScrollContainer(!toggleScrollContainer)
            }}
          />
        }
        label="Toggle scroll container"
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable-list">
          {(provided: DroppableProvided) => (
            <List
              ref={provided.innerRef}
              {...provided.droppableProps}
              sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
                isolation: 'isolate',
                ...(toggleScrollContainer && {
                  overflow: 'auto',
                  maxHeight: 240,
                }),
              }}
            >
              {listItems.map((item, index) => {
                const hasWarning = item.secondaryText !== undefined

                return (
                  <Draggable key={item.id} index={index} draggableId={item.id}>
                    {(
                      provided: DraggableProvided,
                      snapshot: DraggableStateSnapshot,
                    ) => (
                      <ListItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        dense
                        aria-label={`Draggable item: ${item.primaryText}`}
                        sx={theme => ({
                          ...provided.draggableProps.style,
                          position: 'relative',
                          bgcolor: hasWarning
                            ? theme.palette.warning.lowEmphasis.light
                            : theme.palette.background.paper,
                          ...(snapshot.isDragging && {
                            bgcolor: hasWarning
                              ? theme.palette.warning.lowEmphasis.main
                              : theme.palette.default.lowEmphasis.light,
                          }),
                          '&:hover': {
                            '.drag-handle': {
                              opacity: 1,
                            },
                          },
                        })}
                      >
                        <Box
                          {...provided.dragHandleProps}
                          aria-label={`Draggable handle for ${item.primaryText}`}
                          className="drag-handle"
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            position: 'absolute',
                            left: 0,
                            opacity: 0,
                            cursor: 'grab',
                            zIndex: 1,
                            '&:focus': {
                              opacity: 1,
                            },
                            '&:active': {
                              opacity: 1,
                              cursor: 'grabbing',
                            },
                          }}
                        >
                          <DragIndicator />
                        </Box>
                        <ListItemIcon>
                          <Checkbox
                            security="small"
                            disableRipple
                            inputProps={{ 'aria-labelledby': item.id }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          id={item.id}
                          primary={item.primaryText}
                          secondary={
                            hasWarning && (
                              <>
                                <WarningAmber
                                  fontSize="inherit"
                                  sx={{
                                    color: 'warning.lowEmphasis.contrastText',
                                  }}
                                />
                                <Typography
                                  component="span"
                                  variant="inherit"
                                  color="inherit"
                                >
                                  {item.secondaryText}
                                </Typography>
                              </>
                            )
                          }
                          secondaryTypographyProps={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                          }}
                        />
                      </ListItem>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
    </Stack>
  )
})

function reorder<T>(
  list: Array<T>,
  startIndex: number,
  endIndex: number,
): Array<T> {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}
