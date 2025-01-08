// Edit this file to add new stories
import React from 'react'
import CheckIcon from '@mui/icons-material/Check'
import ErrorIcon from '@mui/icons-material/Error'
import { styled } from '@mui/material'
import type { TransitionProps } from '@mui/material/transitions'
import type { VariantType } from 'notistack'
import { SnackbarProvider, useSnackbar } from 'notistack'

import type { SnackbarOrigin, SnackbarProps } from '@monorail/components'
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Chip,
  Fade,
  Grid,
  Grow,
  Slide,
  Snackbar,
  Stack,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Feedback/Snackbar', component: Snackbar }

const Template = story<SnackbarProps>(
  (args) => {
    const [open, setOpen] = React.useState(false)
    const [transition, setTransition] = React.useState<
      React.ComponentType<TransitionPropsWithChild> | undefined
    >(undefined)

    function TransitionRight(props: TransitionPropsWithChild) {
      return <Slide {...props} direction='left' />
    }
    const handleClick = (Transition: React.ComponentType<TransitionPropsWithChild>) => () => {
      setTransition(() => Transition)
      setOpen(true)
    }

    const handleClose = (_event: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return
      }

      setOpen(false)
    }

    return (
      <div>
        <Button onClick={handleClick(TransitionRight)}>Open simple snackbar</Button>
        <Snackbar open={open} autoHideDuration={6000} TransitionComponent={transition} {...args}>
          <Alert severity='success' onClose={handleClose}>
            <AlertTitle>Success!</AlertTitle>
            Note archived
          </Alert>
        </Snackbar>
      </div>
    )
  },
  {
    args: {},
    muiName: 'MuiSnackbar',
  },
)

export const Default = story(Template)

export const Toast = story<SnackbarProps>(() => {
  const [open, setOpen] = React.useState(false)
  const [transition, setTransition] = React.useState<
    React.ComponentType<TransitionPropsWithChild> | undefined
  >(undefined)

  function TransitionRight(props: TransitionPropsWithChild) {
    return <Slide {...props} direction='left' />
  }

  const handleClick = (Transition: React.ComponentType<TransitionPropsWithChild>) => () => {
    setTransition(() => Transition)
    setOpen(true)
  }

  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <Stack>
      <Button onClick={handleClick(TransitionRight)} sx={{ mb: 4, alignSelf: 'center' }}>
        Open snackbar
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        TransitionComponent={transition}
      >
        <Alert severity='error' onClose={handleClose}>
          <AlertTitle>Error</AlertTitle>This is an error message!
        </Alert>
      </Snackbar>
      <Stack spacing={4}>
        <Alert severity='error' onClose={() => {}}>
          This is an error message!
        </Alert>
        <Alert severity='warning' onClose={() => {}}>
          This is a warning message!
        </Alert>
        <Alert severity='info' onClose={() => {}}>
          This is an information message!
        </Alert>
        <Alert severity='success' onClose={() => {}}>
          This is a success message!
        </Alert>
      </Stack>
    </Stack>
  )
})

interface State extends SnackbarOrigin {
  open: boolean
}

/**
 * In wide layouts, snackbars can be left-aligned or center-aligned if they are consistently placed on the same spot at the bottom of the screen, however there may be circumstances where the placement of the snackbar needs to be more flexible. You can control the position of the snackbar by specifying the `anchorOrigin` prop.
 */
export const Positioned = story<SnackbarProps>(() => {
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
      <Grid container justifyContent='center'>
        <Grid item>
          <Button
            variant='text'
            onClick={handleClick({
              vertical: 'top',
              horizontal: 'left',
            })}
          >
            Top-Left
          </Button>

          <Button
            variant='text'
            onClick={handleClick({
              vertical: 'top',
              horizontal: 'center',
            })}
          >
            Top-Center
          </Button>

          <Button
            variant='text'
            onClick={handleClick({
              vertical: 'top',
              horizontal: 'right',
            })}
          >
            Top-Right
          </Button>
        </Grid>
      </Grid>
      <Grid container justifyContent='center'>
        <Grid item>
          <Button
            variant='text'
            onClick={handleClick({
              vertical: 'bottom',
              horizontal: 'left',
            })}
          >
            Bottom-Left
          </Button>
          <Button
            variant='text'
            onClick={handleClick({
              vertical: 'bottom',
              horizontal: 'center',
            })}
          >
            Bottom-Center
          </Button>
          <Button
            variant='text'
            onClick={handleClick({
              vertical: 'bottom',
              horizontal: 'right',
            })}
          >
            Bottom-Right
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )

  return (
    <Box>
      {buttons}
      <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} key={vertical + horizontal}>
        <Chip label='I love snacks' onDelete={handleClose} />
      </Snackbar>
    </Box>
  )
})

type PillStatus = 'success' | 'error'

export const Autosave = story<SnackbarProps>(() => {
  const [state, setState] = React.useState<{
    open: boolean
    status: PillStatus
  }>({
    open: false,
    status: 'success',
  })
  const [transition, setTransition] = React.useState<
    React.ComponentType<TransitionPropsWithChild> | undefined
  >(undefined)

  function TransitionDown(props: TransitionPropsWithChild) {
    return <Slide {...props} direction='up' />
  }

  const handleClick =
    (status: PillStatus, Transition: React.ComponentType<TransitionPropsWithChild>) => () => {
      setState({ ...state, open: true, status })
      setTransition(() => Transition)
      // setOpen(true)
    }

  const handleClose = (_event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setState({ ...state, open: false })
  }

  return (
    <div>
      <Button variant='text' onClick={handleClick('success', TransitionDown)}>
        Show autosave success
      </Button>
      <Button variant='text' onClick={handleClick('error', TransitionDown)}>
        Show autosave fail
      </Button>
      <Snackbar
        open={state.open}
        autoHideDuration={6000}
        onClose={handleClose}
        TransitionComponent={transition}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        {state.status === 'success' ? (
          <Chip icon={<CheckIcon color='success' />} label='Changes Saved' />
        ) : (
          <Chip icon={<ErrorIcon color='error' />} label='Failed To Save Changes' />
        )}
      </Snackbar>
    </div>
  )
})

// This type exists because the action transition components (e.g. Slide, Fade)
// are incompatible with TransitionProps as defined in MUI because they have a
// non-optional children prop.
type TransitionPropsWithChild = TransitionProps & {
  children: React.ReactElement<unknown>
}

/**
 * `Grow` is the default transition but you can use a different one.
 */
export const OtherTransitions = story<SnackbarProps>(() => {
  function SlideTransition(props: TransitionPropsWithChild) {
    return <Slide {...props} direction='left' />
  }

  function GrowTransition(props: TransitionPropsWithChild) {
    return <Grow {...props} />
  }

  const [state, setState] = React.useState<{
    open: boolean
    Transition: React.ComponentType<TransitionPropsWithChild>
  }>({
    open: false,
    Transition: Fade,
  })

  const handleClick =
    (
      Transition: React.ComponentType<
        TransitionProps & {
          children: React.ReactElement<unknown>
        }
      >,
    ) =>
    () => {
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
      <Button variant='text' onClick={handleClick(GrowTransition)}>
        Grow Transition
      </Button>
      <Button variant='text' onClick={handleClick(Fade)}>
        Fade Transition
      </Button>
      <Button variant='text' onClick={handleClick(SlideTransition)}>
        Slide Transition
      </Button>
      <Snackbar
        open={state.open}
        TransitionComponent={state.Transition}
        key={state.Transition.name}
      >
        <Alert severity='info' onClose={handleClose}>
          I love snacks
        </Alert>
      </Snackbar>
    </div>
  )
})

/**
 * You can change the direction of the `Slide` transition.
 */
export const SlideDirection = story<SnackbarProps>(() => {
  function TransitionLeft(props: TransitionPropsWithChild) {
    return <Slide {...props} direction='left' />
  }

  function TransitionUp(props: TransitionPropsWithChild) {
    return <Slide {...props} direction='up' />
  }

  function TransitionRight(props: TransitionPropsWithChild) {
    return <Slide {...props} direction='right' />
  }

  function TransitionDown(props: TransitionPropsWithChild) {
    return <Slide {...props} direction='down' />
  }

  const [open, setOpen] = React.useState(false)
  const [transition, setTransition] = React.useState<
    React.ComponentType<TransitionPropsWithChild> | undefined
  >(undefined)

  const handleClick = (Transition: React.ComponentType<TransitionPropsWithChild>) => () => {
    setTransition(() => Transition)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant='text' onClick={handleClick(TransitionLeft)}>
        Right
      </Button>
      <Button variant='text' onClick={handleClick(TransitionUp)}>
        Up
      </Button>
      <Button variant='text' onClick={handleClick(TransitionRight)}>
        Left
      </Button>
      <Button variant='text' onClick={handleClick(TransitionDown)}>
        Down
      </Button>
      <Snackbar
        open={open}
        TransitionComponent={transition}
        key={transition ? transition.name : ''}
      >
        <Alert severity='success' onClose={handleClose}>
          I love snacks
        </Alert>
      </Snackbar>
    </div>
  )
})

const StyledAlert = styled(Alert)`
  min-width: 480px;
`

const MyApp = () => {
  const { enqueueSnackbar } = useSnackbar()

  const handleClick = () => {
    enqueueSnackbar('This is an error message.', {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
      content: (key, message) => (
        <StyledAlert severity='error' key={key}>
          <AlertTitle>Error</AlertTitle>
          {message}
        </StyledAlert>
      ),
    })
  }

  const handleClickVariant = (variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('This is a success message!', {
      variant,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
      content: (key, message) => (
        <StyledAlert severity='success' key={key}>
          <AlertTitle>Success</AlertTitle>
          {message}
        </StyledAlert>
      ),
    })
  }

  return (
    <React.Fragment>
      <Button variant='text' onClick={handleClick}>
        Show error toast
      </Button>
      <Button variant='text' onClick={handleClickVariant('success')}>
        Show success toast
      </Button>
    </React.Fragment>
  )
}

/**
 * This example demonstrates how to use [notistack](https://github.com/iamhosseindhv/notistack). notistack has an imperative API that makes it easy to display snackbars, without having to handle their open/close state. It also enables you to stack them on top of one another (although this is discouraged by the Material Design guidelines).
 */
export const ConsecutiveSnackbars = story<SnackbarProps>(() => {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  )
})
