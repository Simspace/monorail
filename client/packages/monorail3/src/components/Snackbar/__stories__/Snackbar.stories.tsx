// Edit this file to add new stories
import React from 'react'
import { Snackbar, SnackbarProps } from '../Snackbar'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './Snackbar.stories.gen'
import { Button } from '../../Button/Button'
import { IconButton } from '../../IconButton/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { Alert, AlertProps } from '../../Alert/Alert'
import { Stack } from '../../Stack/Stack'
import { SnackbarOrigin } from '@material-ui/core/Snackbar/Snackbar'
import { SnackbarContent } from '../../SnackbarContent/SnackbarContent'
import { TransitionProps } from '@material-ui/core/transitions'
import { Slide } from '../../Slide/Slide'
import { Grow } from '../../Grow/Grow'
import { Fade } from '../../Fade/Fade'

/**
 * Metadata for Snackbar stories - update/extend as needed
 */
export default { ...defaultStoryMeta }

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<SnackbarProps>(
  args => {
    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
      setOpen(true)
    }

    const handleClose = (
      event: React.SyntheticEvent | React.MouseEvent,
      reason?: string,
    ) => {
      if (reason === 'clickaway') {
        return
      }

      setOpen(false)
    }

    const action = (
      <React.Fragment>
        <Button color="secondary" size="small" onClick={handleClose}>
          UNDO
        </Button>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    )

    return (
      <div>
        <Button onClick={handleClick}>Open simple snackbar</Button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Note archived"
          action={action}
          {...args}
        />
      </div>
    )
  },
  {
    args: {},
  },
)

/** Default story for Snackbar (edit/remove by hand if needed) */
export const Default = story(Template)

const ToastAlert = React.forwardRef<HTMLDivElement, AlertProps>(
  function ToastAlert(props, ref) {
    return <Alert elevation={6} ref={ref} variant="filled" {...props} />
  },
)

export const CustomizedSnackbars = story<SnackbarProps>(
  () => {
    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
      setOpen(true)
    }

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
      if (reason === 'clickaway') {
        return
      }

      setOpen(false)
    }

    return (
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Button variant="outlined" onClick={handleClick}>
          Open success snackbar
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <ToastAlert
            onClose={handleClose}
            severity="success"
            sx={{ width: '100%' }}
          >
            This is a success message!
          </ToastAlert>
        </Snackbar>
        <Alert severity="error">This is an error message!</Alert>
        <Alert severity="warning">This is a warning message!</Alert>
        <Alert severity="info">This is an information message!</Alert>
        <Alert severity="success">This is a success message!</Alert>
      </Stack>
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

interface State extends SnackbarOrigin {
  open: boolean
}

export const Positioned = story<SnackbarProps>(
  () => {
    const [state, setState] = React.useState<State>({
      open: false,
      vertical: 'top',
      horizontal: 'center',
    })
    const { vertical, horizontal, open } = state

    const handleClick = (newState: SnackbarOrigin) => () => {
      setState({ open: true, ...newState })
    }

    const handleClose = () => {
      setState({ ...state, open: false })
    }

    const buttons = (
      <React.Fragment>
        <Button
          onClick={handleClick({
            vertical: 'top',
            horizontal: 'center',
          })}
        >
          Top-Center
        </Button>
        <Button
          onClick={handleClick({
            vertical: 'top',
            horizontal: 'right',
          })}
        >
          Top-Right
        </Button>
        <Button
          onClick={handleClick({
            vertical: 'bottom',
            horizontal: 'right',
          })}
        >
          Bottom-Right
        </Button>
        <Button
          onClick={handleClick({
            vertical: 'bottom',
            horizontal: 'center',
          })}
        >
          Bottom-Center
        </Button>
        <Button
          onClick={handleClick({
            vertical: 'bottom',
            horizontal: 'left',
          })}
        >
          Bottom-Left
        </Button>
        <Button
          onClick={handleClick({
            vertical: 'top',
            horizontal: 'left',
          })}
        >
          Top-Left
        </Button>
      </React.Fragment>
    )

    return (
      <div>
        {buttons}
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message="I love snacks"
          key={vertical + horizontal}
        />
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `In wide layouts, snackbars can be left-aligned or center-aligned if they are consistently placed on the same spot at the bottom of the screen, however there may be circumstances where the placement of the snackbar needs to be more flexible. You can control the position of the snackbar by specifying the anchorOrigin prop.`,
        },
      },
    },
  },
)

export const MessageLength = story<SnackbarProps>(
  () => {
    const action = (
      <Button color="secondary" size="small">
        lorem ipsum dolorem
      </Button>
    )

    return (
      <Stack spacing={2} sx={{ maxWidth: 600 }}>
        <SnackbarContent message="I love snacks." action={action} />
        <SnackbarContent
          message={
            'I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate.'
          }
        />
        <SnackbarContent
          message="I love candy. I love cookies. I love cupcakes."
          action={action}
        />
        <SnackbarContent
          message={
            'I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate.'
          }
          action={action}
        />
      </Stack>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Some snackbars with varying message length.`,
        },
      },
    },
  },
)

interface SnackbarMessage {
  message: string
  key: number
}

export const Transitions = story<SnackbarProps>(
  () => {
    const [snackPack, setSnackPack] = React.useState<
      readonly SnackbarMessage[]
    >([])
    const [open, setOpen] = React.useState(false)
    const [messageInfo, setMessageInfo] = React.useState<
      SnackbarMessage | undefined
    >(undefined)

    React.useEffect(() => {
      if (snackPack.length && !messageInfo) {
        // Set a new snack when we don't have an active one
        setMessageInfo({ ...snackPack[0] })
        setSnackPack(prev => prev.slice(1))
        setOpen(true)
      } else if (snackPack.length && messageInfo && open) {
        // Close an active snack when a new one is added
        setOpen(false)
      }
    }, [snackPack, messageInfo, open])

    const handleClick = (message: string) => () => {
      setSnackPack(prev => [...prev, { message, key: new Date().getTime() }])
    }

    const handleClose = (
      event: React.SyntheticEvent | MouseEvent,
      reason?: string,
    ) => {
      if (reason === 'clickaway') {
        return
      }
      setOpen(false)
    }

    const handleExited = () => {
      setMessageInfo(undefined)
    }

    return (
      <div>
        <Button onClick={handleClick('Message A')}>Show message A</Button>
        <Button onClick={handleClick('Message B')}>Show message B</Button>
        <Snackbar
          key={messageInfo ? messageInfo.key : undefined}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          TransitionProps={{ onExited: handleExited }}
          message={messageInfo ? messageInfo.message : undefined}
          action={
            <React.Fragment>
              <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
              </Button>
              <IconButton
                aria-label="close"
                color="inherit"
                sx={{ p: 0.5 }}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
            </React.Fragment>
          }
        />
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `When multiple snackbar updates are necessary, they should appear one at a time. This behavior can be augmented using external libraries like \`notistack\`.`,
        },
      },
    },
  },
)

export const WithFloatingActionButtons = story<SnackbarProps>(() => {
  return (
    <Alert severity="warning">
      Snackbars show above <code>Fab</code>s on mobile- see MUI docs for an
      example.
    </Alert>
  )
})

export const OtherTransitions = story<SnackbarProps>(
  () => {
    function SlideTransition(props: TransitionProps) {
      return <Slide {...props} direction="up" />
    }

    function GrowTransition(props: TransitionProps) {
      return <Grow {...props} />
    }

    const [state, setState] = React.useState<{
      open: boolean
      Transition: React.ComponentType<
        TransitionProps & {
          children?: React.ReactElement<any, any>
        }
      >
    }>({
      open: false,
      Transition: Fade,
    })

    const handleClick = (
      Transition: React.ComponentType<
        TransitionProps & {
          children?: React.ReactElement<any, any>
        }
      >,
    ) => () => {
      setState({
        open: true,
        Transition,
      })
    }

    const handleClose = () => {
      setState({
        ...state,
        open: false,
      })
    }

    return (
      <div>
        <Button onClick={handleClick(GrowTransition)}>Grow Transition</Button>
        <Button onClick={handleClick(Fade)}>Fade Transition</Button>
        <Button onClick={handleClick(SlideTransition)}>Slide Transition</Button>
        <Snackbar
          open={state.open}
          onClose={handleClose}
          TransitionComponent={state.Transition}
          message="I love snacks"
          key={state.Transition.name}
        />
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Grow is the default transition but you can use a different one.`,
        },
      },
    },
  },
)

export const SlideDirection = story<SnackbarProps>(
  () => {
    function TransitionLeft(props: TransitionProps) {
      return <Slide {...props} direction="left" />
    }

    function TransitionUp(props: TransitionProps) {
      return <Slide {...props} direction="up" />
    }

    function TransitionRight(props: TransitionProps) {
      return <Slide {...props} direction="right" />
    }

    function TransitionDown(props: TransitionProps) {
      return <Slide {...props} direction="down" />
    }

    const [open, setOpen] = React.useState(false)
    const [transition, setTransition] = React.useState<
      React.ComponentType<TransitionProps> | undefined
    >(undefined)

    const handleClick = (
      Transition: React.ComponentType<TransitionProps>,
    ) => () => {
      setTransition(() => Transition)
      setOpen(true)
    }

    const handleClose = () => {
      setOpen(false)
    }

    return (
      <div>
        <Button onClick={handleClick(TransitionLeft)}>Right</Button>
        <Button onClick={handleClick(TransitionUp)}>Up</Button>
        <Button onClick={handleClick(TransitionRight)}>Left</Button>
        <Button onClick={handleClick(TransitionDown)}>Down</Button>
        <Snackbar
          open={open}
          onClose={handleClose}
          TransitionComponent={transition}
          message="I love snacks"
          key={transition ? transition.name : ''}
        />
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `You can change the direction of the Slide transition.`,
        },
      },
    },
  },
)
