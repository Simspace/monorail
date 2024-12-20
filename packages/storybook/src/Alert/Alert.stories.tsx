// Edit this file to add new stories
import React from 'react'
import CheckIcon from '@mui/icons-material/Check'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import CloseIcon from '@mui/icons-material/Close'

import type { AlertProps } from '@monorail/components'
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Collapse,
  IconButton,
  Snackbar,
  Stack,
  Typography,
} from '@monorail/components'
import { useTheme } from '@monorail/utils'

import { isMeteorTheme } from '../helpers.js'
import { story } from '../helpers/storybook.js'

export default { title: 'Feedback/Alert', component: Alert }

// Story controls
const argTypes = {
  variant: {
    options: ['filled (N/A in Meteor)', 'outlined', 'standard (N/A in Meteor)', 'text'],
    mapping: {
      ['filled (N/A in Meteor)']: 'filled',
      outlined: 'outlined',
      ['standard (N/A in Meteor)']: 'standard',
      text: 'text',
    },
    control: {
      type: 'radio',
    },
  },
  disableGutters: {
    control: {
      type: 'boolean',
    },
  },
}

const Template = story<AlertProps>(
  (args) => <Alert {...args}>This is a test of the emergency broadcast system</Alert>,
  {
    muiName: 'MuiAlert',
    argTypes,
    args: { severity: 'warning', variant: 'outlined' },
  },
)

export const Default = story(Template)

/**
 * The alert offers four severity levels that set a distinctive icon and color.
 */
export const Severities = story<AlertProps>(
  (args) => {
    return (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity='info' onClose={() => {}} {...args}>
          Info message
        </Alert>
        <Alert severity='success' {...args}>
          Success message
        </Alert>
        <Alert severity='warning' {...args}>
          Warning message
        </Alert>
        <Alert severity='error' {...args}>
          Error message
        </Alert>
      </Stack>
    )
  },
  {
    argTypes,
  },
)

/**
 * You can use the `AlertTitle` component to display a formatted title above the content.
 */
export const WithTitleAndDescriptions = story<AlertProps>(
  (args) => {
    return (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity='error' onClose={() => {}} {...args}>
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity='warning' onClose={() => {}} {...args}>
          <AlertTitle>Warning</AlertTitle>
          This is a warning alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity='info' onClose={() => {}} {...args}>
          <AlertTitle>Info</AlertTitle>
          This is an info alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity='success' onClose={() => {}} {...args}>
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      </Stack>
    )
  },
  {
    argTypes,
  },
)

/**
 * An alert can have an action, such as a close or undo button. It is rendered after the message, at the end of the alert.
 *
 * If an `onClose` callback is provided and no action prop is set, a close icon is displayed. The action prop can be used to provide an alternative action, for example using a `Button` or `IconButton`.
 */
export const Actions = story<AlertProps>(
  (args) => {
    return (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert
          variant='outlined'
          severity='error'
          action={
            <Button size='small' color='primary'>
              Action
            </Button>
          }
          {...args}
        >
          This is an error alert — check it out!
        </Alert>
        <Alert
          variant='outlined'
          severity='warning'
          action={
            <Button size='small' color='primary'>
              Action
            </Button>
          }
          {...args}
        >
          This is a warning alert — check it out!
        </Alert>
        <Alert
          variant='outlined'
          severity='info'
          action={
            <Button size='small' color='primary'>
              Action
            </Button>
          }
          {...args}
        >
          This is an info alert — check it out!
        </Alert>
        <Alert
          variant='outlined'
          severity='success'
          action={
            <Button size='small' color='primary'>
              Action
            </Button>
          }
          {...args}
        >
          This is a success alert — check it out!
        </Alert>
      </Stack>
    )
  },
  {
    argTypes,
  },
)

/**
 * You can use a transition component such as `Collapse` to transition the appearance of the alert.
 */
export const Transition = story<AlertProps>(
  (args) => {
    const [open, setOpen] = React.useState(true)

    return (
      <Box sx={{ width: '100%' }}>
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label='close'
                color='inherit'
                size='small'
                onClick={() => {
                  setOpen(false)
                }}
              >
                <CloseIcon fontSize='inherit' />
              </IconButton>
            }
            sx={{ mb: 2 }}
            {...args}
          >
            Close me!
          </Alert>
        </Collapse>
        <Button
          disabled={open}
          variant='outlined'
          onClick={() => {
            setOpen(true)
          }}
        >
          Re-open
        </Button>
      </Box>
    )
  },
  {
    argTypes,
  },
)

/**
 * The `icon` prop allows you to add an icon to the beginning of the alert component. This will override the default icon for the specified severity.
 *
 * You can change the default severity to icon mapping with the `iconMapping` prop. This can be defined globally using theme customization.
 *
 * Setting the `icon` prop to `false` will remove the icon altogether.
 */
export const Icons = story<AlertProps>(
  (args) => {
    return (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert icon={<CheckIcon fontSize='inherit' />} severity='success' {...args}>
          This is a success alert — check it out!
        </Alert>
        <Alert
          iconMapping={{
            success: <CheckCircleOutlineIcon fontSize='inherit' />,
          }}
          {...args}
        >
          This is a success alert — check it out!
        </Alert>
        <Alert icon={false} severity='success' {...args}>
          This is a success alert — check it out!
        </Alert>
      </Stack>
    )
  },
  {
    argTypes,
  },
)

/**
 * Four variants are available – `standard`, `outlined`, `filled`, and `text`. Only `outlined` and `text` are available in Meteor theme.
 */
export const Variants = story<AlertProps>(
  (args) => {
    const theme = useTheme()
    return (
      <Stack direction='column' spacing={2}>
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Typography>Outlined (Default)</Typography>
          <Alert variant='outlined' severity='error' onClose={() => {}} {...args} disableGutters>
            This is an error alert — check it out!
          </Alert>
          <Alert variant='outlined' severity='warning' onClose={() => {}} {...args}>
            This is a warning alert — check it out!
          </Alert>
          <Alert variant='outlined' severity='info' onClose={() => {}} {...args}>
            This is an info alert — check it out!
          </Alert>
          <Alert variant='outlined' severity='success' onClose={() => {}} {...args}>
            This is a success alert — check it out!
          </Alert>
        </Stack>
        {isMeteorTheme(theme.name) ? (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Typography>Text</Typography>
            <Alert variant='text' severity='error' {...args}>
              This is an error alert — check it out!
            </Alert>
            <Alert variant='text' severity='warning' {...args}>
              This is a warning alert — check it out!
            </Alert>
            <Alert variant='text' severity='info' {...args}>
              This is an info alert — check it out!
            </Alert>
            <Alert variant='text' severity='success' {...args}>
              This is a success alert — check it out!
            </Alert>
          </Stack>
        ) : (
          <>
            <Stack sx={{ width: '100%' }} spacing={2}>
              <Typography>Standard</Typography>
              <Alert variant='standard' severity='error' onClose={() => {}} {...args}>
                This is an error alert — check it out!
              </Alert>
              <Alert variant='standard' severity='warning' onClose={() => {}} {...args}>
                This is a warning alert — check it out!
              </Alert>
              <Alert variant='standard' severity='info' onClose={() => {}} {...args}>
                This is an info alert — check it out!
              </Alert>
              <Alert variant='standard' severity='success' onClose={() => {}} {...args}>
                This is a success alert — check it out!
              </Alert>
            </Stack>
            <Stack sx={{ width: '100%' }} spacing={2}>
              <Typography>Filled</Typography>
              <Alert variant='filled' severity='error' onClose={() => {}} {...args}>
                This is an error alert — check it out!
              </Alert>
              <Alert variant='filled' severity='warning' onClose={() => {}} {...args}>
                This is a warning alert — check it out!
              </Alert>
              <Alert variant='filled' severity='info' onClose={() => {}} {...args}>
                This is an info alert — check it out!
              </Alert>
              <Alert variant='filled' severity='success' onClose={() => {}} {...args}>
                This is a success alert — check it out!
              </Alert>
            </Stack>
          </>
        )}
      </Stack>
    )
  },
  {
    argTypes,
  },
)

// TODO: this was copied from the MUI docs, but could probably become its own custom component
const ToastAlert = React.forwardRef<HTMLDivElement, AlertProps>(function (props, ref) {
  return <Alert elevation={6} ref={ref} {...props} />
})

/**
 * You can use the `Snackbar` to display a toast with the `Alert`.
 */
export const WithSnackbar = story<AlertProps>((args) => {
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Button variant='outlined' onClick={handleClick}>
        Open success snackbar
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
        onClose={handleClose}
      >
        <ToastAlert onClose={handleClose} severity='success' sx={{ width: '100%' }} {...args}>
          This is a success message!
        </ToastAlert>
      </Snackbar>
    </Stack>
  )
})

/**
 * The `color` prop will override the default color for the specified severity.
 */
export const Color = story<AlertProps>((args) => {
  return (
    <Alert severity='success' color='info' {...args}>
      This is a success alert — check it out!
    </Alert>
  )
})
