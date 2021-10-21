// Edit this file to add new stories
import React from 'react'
import Draggable from 'react-draggable'
import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import PersonIcon from '@mui/icons-material/Person'
import { blue } from '@mui/material/colors'
import { SelectChangeEvent } from '@mui/material/Select'
import { styled, useTheme } from '@mui/material/styles'
import { TransitionProps } from '@mui/material/transitions'
import useMediaQuery from '@mui/material/useMediaQuery'

import { story } from '../../../__tests__/helpers/storybook'
import { longParagraph } from '../../../__tests__/helpers/testData'
import { AppBar } from '../../AppBar/AppBar'
import { Avatar } from '../../Avatar/Avatar'
import { Box } from '../../Box/Box'
import { Button } from '../../Button/Button'
import { DialogActions } from '../../DialogActions/DialogActions'
import { DialogContent } from '../../DialogContent/DialogContent'
import { DialogContentText } from '../../DialogContentText/DialogContentText'
import { DialogTitle } from '../../DialogTitle/DialogTitle'
import { Divider } from '../../Divider/Divider'
import { FormControl } from '../../FormControl/FormControl'
import { FormControlLabel } from '../../FormControlLabel/FormControlLabel'
import { IconButton } from '../../IconButton/IconButton'
import { InputLabel } from '../../InputLabel/InputLabel'
import { List } from '../../List/List'
import { ListItem } from '../../ListItem/ListItem'
import { ListItemAvatar } from '../../ListItemAvatar/ListItemAvatar'
import { ListItemText } from '../../ListItemText/ListItemText'
import { MenuItem } from '../../MenuItem/MenuItem'
import { Paper, PaperProps } from '../../Paper/Paper'
import { Radio } from '../../Radio/Radio'
import { RadioGroup } from '../../RadioGroup/RadioGroup'
import { Select } from '../../Select/Select'
import { Slide } from '../../Slide/Slide'
import { Switch } from '../../Switch/Switch'
import { TextField } from '../../TextField/TextField'
import { Toolbar } from '../../Toolbar/Toolbar'
import { Typography } from '../../Typography/Typography'
import { Dialog, DialogProps } from '../Dialog'
import { defaultStoryMeta } from './Dialog.stories.gen'

const emails = ['username@gmail.com', 'user02@gmail.com']

export interface SimpleDialogProps {
  open: boolean
  selectedValue: string
  onSimpleDialogClose: (value: string) => void
}

const SimpleDialog = (props: SimpleDialogProps) => {
  const { onSimpleDialogClose, selectedValue, open } = props

  const handleClose = () => {
    onSimpleDialogClose(selectedValue)
  }

  const handleListItemClick = (value: string) => {
    onSimpleDialogClose(value)
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map(email => (
          <ListItem
            button
            onClick={() => handleListItemClick(email)}
            key={email}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}
        <ListItem
          autoFocus
          button
          onClick={() => handleListItemClick('addAccount')}
        >
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List>
    </Dialog>
  )
}
/**
 * Metadata for Dialog stories - update/extend as needed
 */
export default { ...defaultStoryMeta, title: 'Feedback/Dialog' }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<DialogProps>(
  args => {
    const [open, setOpen] = React.useState(false)
    const [selectedValue, setSelectedValue] = React.useState(emails[1])

    const handleClickOpen = () => {
      setOpen(true)
    }

    const handleClose = (/* _event: unknown, */ value: string) => {
      setOpen(false)
      setSelectedValue(value)
    }

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <Typography variant="subtitle1" component="div">
            Selected: {selectedValue}
          </Typography>
          <br />
          <Button variant="outlined" onClick={handleClickOpen}>
            Open simple dialog
          </Button>
        </div>
        <SimpleDialog
          selectedValue={selectedValue}
          open={open}
          onSimpleDialogClose={handleClose}
          {...args}
        />
      </div>
    )
  },
  { args: {} },
)
/** Default story for Dialog (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below

export const AlertDialog = story<DialogProps>(
  () => {
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
      setOpen(true)
    }

    const handleClose = () => {
      setOpen(false)
    }

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open alert dialog
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.

Most alerts don't need titles. They summarize a decision in a sentence or two by either:

- Asking a question (e.g. "Delete this conversation?")
- Making a statement related to the action buttons
Use title bar alerts only for high-risk situations, such as the potential loss of connectivity. Users should be able to understand the choices based on the title and button text alone.

If a title is required:

- Use a clear question or statement with an explanation in the content area, such as "Erase USB storage?".
- Avoid apologies, ambiguity, or questions, such as "Warning!" or "Are you sure?"`,
        },
      },
    },
  },
)

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children?: React.ReactElement<unknown>
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

export const Transitions = story<DialogProps>(
  () => {
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
      setOpen(true)
    }

    const handleClose = () => {
      setOpen(false)
    }

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="outlined" onClick={handleClickOpen}>
          Slide in alert dialog
        </Button>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose}>Agree</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story:
            'You can also swap out the transition, the next example uses `Slide`.',
        },
      },
    },
  },
)

export const FormDialog = story<DialogProps>(
  () => {
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
      setOpen(true)
    }

    const handleClose = () => {
      setOpen(false)
    }

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open form dialog
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Form dialogs allow users to fill out form fields within a dialog. For example, if your site prompts for potential subscribers to fill in their email address, they can fill out the email field and touch 'Submit'.`,
        },
      },
    },
  },
)

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

export interface DialogTitleProps {
  id: string
  children?: React.ReactNode
  onClose: () => void
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500],
          }}
          size="large"
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

export const CustomizedDialogs = story<DialogProps>(
  () => {
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
      setOpen(true)
    }
    const handleClose = () => {
      setOpen(false)
    }

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open dialog
        </Button>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            Modal title
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </Typography>
            <Typography gutterBottom>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </Typography>
            <Typography gutterBottom>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Save changes
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story:
            'Here is an example of customizing the component. You can learn more about this in the [overrides documentation page](https://next.material-ui.com/customization/how-to-customize/). The dialog has a close button added to aide usability.',
        },
      },
    },
  },
)

const FullScreenTransition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children?: React.ReactElement
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

export const FullScreenDialog = story<DialogProps>(() => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={FullScreenTransition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              size="large"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List>
      </Dialog>
    </div>
  )
})

export const OptionalSizes = story<DialogProps>(
  () => {
    const [open, setOpen] = React.useState(false)
    const [fullWidth, setFullWidth] = React.useState(true)
    const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>(
      'sm',
    )

    const handleClickOpen = () => {
      setOpen(true)
    }

    const handleClose = () => {
      setOpen(false)
    }

    const handleMaxWidthChange = (
      event: SelectChangeEvent<DialogProps['maxWidth']>,
    ) => {
      setMaxWidth(event.target.value as DialogProps['maxWidth'])
    }

    const handleFullWidthChange = (
      event: React.ChangeEvent<HTMLInputElement>,
    ) => {
      setFullWidth(event.target.checked)
    }

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open max-width dialog
        </Button>
        <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>Optional sizes</DialogTitle>
          <DialogContent>
            <DialogContentText>
              You can set my maximum width and whether to adapt or not.
            </DialogContentText>
            <Box
              noValidate
              component="form"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                m: 'auto',
                width: 'fit-content',
              }}
            >
              <FormControl sx={{ mt: 2, minWidth: 120 }}>
                <InputLabel htmlFor="max-width">maxWidth</InputLabel>
                <Select
                  autoFocus
                  value={maxWidth}
                  onChange={handleMaxWidthChange}
                  label="maxWidth"
                  inputProps={{
                    name: 'max-width',
                    id: 'max-width',
                  }}
                >
                  <MenuItem value={false}>false</MenuItem>
                  <MenuItem value="xs">xs</MenuItem>
                  <MenuItem value="sm">sm</MenuItem>
                  <MenuItem value="md">md</MenuItem>
                  <MenuItem value="lg">lg</MenuItem>
                  <MenuItem value="xl">xl</MenuItem>
                </Select>
              </FormControl>
              <FormControlLabel
                sx={{ mt: 1 }}
                control={
                  <Switch
                    checked={fullWidth}
                    onChange={handleFullWidthChange}
                  />
                }
                label="Full width"
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story:
            'You can set a dialog maximum width by using the `maxWidth` enumerable in combination with the `fullWidth` boolean. When the `fullWidth` prop is true, the dialog will adapt based on the `maxWidth` value.',
        },
      },
    },
  },
)

export const ResponsiveDialog = story<DialogProps>(
  () => {
    const [open, setOpen] = React.useState(false)
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('xl'))

    const handleClickOpen = () => {
      setOpen(true)
    }

    const handleClose = () => {
      setOpen(false)
    }

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open responsive dialog
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Disagree
            </Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story:
            'You may make a dialog responsively full screen using [useMediaQuery](https://next.material-ui.com/components/use-media-query/#usemediaquery).',
        },
      },
    },
  },
)

const options = [
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

export interface ConfirmationDialogRawProps {
  id: string
  keepMounted: boolean
  value: string
  open: boolean
  onClose: (value?: string) => void
}

const ConfirmationDialogRaw = React.forwardRef<
  HTMLDivElement,
  ConfirmationDialogRawProps
>(props => {
  const { onClose, value: valueProp, open, ...other } = props
  const [value, setValue] = React.useState(valueProp)
  const radioGroupRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp)
    }
  }, [valueProp, open])

  const handleEntering = () => {
    if (radioGroupRef.current !== null) {
      radioGroupRef.current.focus()
    }
  }

  const handleCancel = () => {
    onClose()
  }

  const handleOk = () => {
    onClose(value)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
      TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
    >
      <DialogTitle>Phone Ringtone</DialogTitle>
      <DialogContent dividers>
        <RadioGroup
          ref={radioGroupRef}
          aria-label="ringtone"
          name="ringtone"
          value={value}
          onChange={handleChange}
        >
          {options.map(option => (
            <FormControlLabel
              value={option}
              key={option}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  )
})

export const ConfirmationDialog = story<DialogProps>(
  () => {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState('Dione')

    const handleClickListItem = () => {
      setOpen(true)
    }

    const handleClose = (newValue?: string) => {
      setOpen(false)

      if (newValue) {
        setValue(newValue)
      }
    }

    return (
      <Box
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          margin: 'auto',
        }}
      >
        <List component="div" role="group">
          <ListItem button divider disabled>
            <ListItemText primary="Interruptions" />
          </ListItem>
          <ListItem
            button
            divider
            aria-haspopup="true"
            aria-controls="ringtone-menu"
            aria-label="phone ringtone"
            onClick={handleClickListItem}
          >
            <ListItemText primary="Phone ringtone" secondary={value} />
          </ListItem>
          <ListItem button divider disabled>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
          <ConfirmationDialogRaw
            id="ringtone-menu"
            keepMounted
            open={open}
            onClose={handleClose}
            value={value}
          />
        </List>
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story:
            'Confirmation dialogs require users to explicitly confirm their choice before an option is committed. For example, users can listen to multiple ringtones but only make a final selection upon touching "OK".<br/><br/>Touching "Cancel" in a confirmation dialog, or pressing Back, cancels the action, discards any changes, and closes the dialog.',
        },
      },
    },
  },
)

const PaperComponent = (props: PaperProps) => {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  )
}

export const DraggableDialog = story<DialogProps>(
  () => {
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
      setOpen(true)
    }

    const handleClose = () => {
      setOpen(false)
    }

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open draggable dialog
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
            Subscribe
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleClose}>Subscribe</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story:
            'You can create a draggable dialog by using [react-draggable](https://github.com/mzabriskie/react-draggable). To do so, you can pass the imported `Draggable` component as the `PaperComponent` of the `Dialog` component. This will make the entire dialog draggable.',
        },
      },
    },
  },
)

export const ScrollDialog = story<DialogProps>(
  () => {
    const [open, setOpen] = React.useState(false)
    const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper')

    const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
      setOpen(true)
      setScroll(scrollType)
    }

    const handleClose = () => {
      setOpen(false)
    }

    const descriptionElementRef = React.useRef<HTMLElement>(null)
    React.useEffect(() => {
      if (open) {
        const { current: descriptionElement } = descriptionElementRef
        if (descriptionElement !== null) {
          descriptionElement.focus()
        }
      }
    }, [open])

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={handleClickOpen('paper')}>scroll=paper</Button>
        <Button onClick={handleClickOpen('body')}>scroll=body</Button>
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
          <DialogContent dividers={scroll === 'paper'}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              {longParagraph}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story:
            "When dialogs become too long for the user's viewport or device, they scroll. `scroll=paper` the content of the dialog scrolls within the paper element. `scroll=body` the content of the dialog scrolls within the body element. Try the demo below to see what we mean:",
        },
      },
    },
  },
)
