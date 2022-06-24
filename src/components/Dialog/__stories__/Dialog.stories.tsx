// Edit this file to add new stories
import React from 'react'
import Draggable from 'react-draggable'
import { TransitionProps } from '@mui/material/transitions'
import useMediaQuery from '@mui/material/useMediaQuery'

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Paper,
  PaperProps,
  Select,
  SelectChangeEvent,
  Slide,
  Stack,
  Switch,
  TextField,
  useTheme,
} from '../../..'
import { story } from '../../../test-helpers/storybook'
import { longParagraph } from '../../../test-helpers/testData'

export interface SimpleDialogProps {
  open: boolean
  onSimpleDialogClose: () => void
}

const SimpleDialog = ({
  onSimpleDialogClose,
  ...props
}: DialogProps & SimpleDialogProps) => {
  const handleClose = () => {
    onSimpleDialogClose()
  }

  return (
    <Dialog onClose={handleClose} {...props}>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Content goes here. Detach to set a fixed height on the content area.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={handleClose}>
          Medium
        </Button>
        <Button onClick={handleClose} autoFocus>
          Medium
        </Button>
      </DialogActions>
    </Dialog>
  )
}
/**
 * Metadata for Dialog stories - update/extend as needed
 */
export default { title: 'Feedback/Dialog', component: Dialog }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<DialogProps>(
  (args: Partial<DialogProps>) => {
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
      setOpen(true)
    }

    const handleClose = () => {
      setOpen(false)
    }

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <Button onClick={handleClickOpen}>Open simple dialog</Button>
        </div>
        <SimpleDialog open={open} onSimpleDialogClose={handleClose} {...args} />
      </div>
    )
  },
  { args: {}, muiName: 'MuiDialog' },
)

/** Default story for Dialog (edit/remove by hand if needed) */
export const Default = story(Template)

export const Sizes = story<DialogProps>(
  () => {
    const [open, setOpen] = React.useState(false)
    const [fullWidth, setFullWidth] = React.useState(true)
    const [maxWidth, setMaxWidth] =
      React.useState<DialogProps['maxWidth']>('sm')

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
        <Button onClick={handleClickOpen}>Open dialog</Button>
        <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>Sizes</DialogTitle>
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
                  <MenuItem value={''}>false</MenuItem>
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
      <Stack direction="row" spacing={8} justifyContent="center">
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
      </Stack>
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

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>
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
        <Button onClick={handleClickOpen}>Slide in dialog</Button>
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
            <Button variant="text" onClick={handleClose}>
              Disagree
            </Button>
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
        <Button onClick={handleClickOpen}>Open form dialog</Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button variant="text" onClick={handleClose}>
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
          story: `Form dialogs allow users to fill out form fields within a dialog. For example, if your site prompts for potential subscribers to fill in their email address, they can fill out the email field and touch 'Submit'.`,
        },
      },
    },
  },
)

const FullScreenTransition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
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
      <Button onClick={handleClickOpen}>Open full-screen dialog</Button>
      <Dialog
        fullScreen
        maxWidth={false}
        open={open}
        onClose={handleClose}
        TransitionComponent={FullScreenTransition}
      >
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Content goes here. Detach to set a fixed height on the content area.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={handleClose}>
            Medium
          </Button>
          <Button onClick={handleClose} autoFocus>
            Medium
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
})
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
        <Button onClick={handleClickOpen}>Open responsive dialog</Button>
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
        <Button onClick={handleClickOpen}>Open draggable dialog</Button>
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
            <Button autoFocus variant="text" onClick={handleClose}>
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
