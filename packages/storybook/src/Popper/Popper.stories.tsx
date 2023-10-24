// Edit this file to add new stories
import React from 'react'
import { styled } from '@mui/material'

import type { PopperProps } from '@monorail/components'
import {
  Box,
  Button,
  Fade,
  Paper,
  Popper,
  Typography,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Utils/Popper', component: Popper }

const Template = story<PopperProps>(
  args => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(anchorEl ? null : event.currentTarget)
    }

    const open = Boolean(anchorEl)
    const id = open ? 'simple-popper' : undefined
    return (
      <>
        <Button
          size="small"
          aria-describedby={id}
          type="button"
          onClick={handleClick}
        >
          Toggle Popper
        </Button>
        <Popper id={id} open={open} anchorEl={anchorEl} {...args}>
          <Paper elevation={5}>
            <Box
              width={200}
              height={200}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography>Popper Content</Typography>
            </Box>
          </Paper>
        </Popper>
      </>
    )
  },
  { args: {} },
)

/**
 * A Popper can be used to display some content on top of another. It's an alternative to `react-popper`.
 */
export const Default = story(Template)

export const TransitionPopper = story<PopperProps>(
  args => {
    const [open, setOpen] = React.useState(false)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
      setOpen(previousOpen => !previousOpen)
    }

    const canBeOpen = open && Boolean(anchorEl)
    const id = canBeOpen ? 'transition-popper' : undefined
    return (
      <>
        <Button
          size="small"
          aria-describedby={id}
          type="button"
          onClick={handleClick}
        >
          Toggle Popper
        </Button>
        <Popper id={id} open={open} anchorEl={anchorEl} {...args} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps}>
              <Paper elevation={5}>
                <Box
                  width={200}
                  height={200}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography>Popper Content</Typography>
                </Box>
              </Paper>
            </Fade>
          )}
        </Popper>
      </>
    )
  },
  { args: {} },
)

const Arrow = styled('div')({
  position: 'absolute',
  fontSize: 7,
  width: '3em',
  height: '3em',
  '&::before': {
    content: '""',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    borderStyle: 'solid',
  },
})

const PopperWithArrow = styled(Popper)(({ theme }) => ({
  zIndex: 1,
  '& > div': {
    position: 'relative',
  },
  '&[data-popper-placement*="bottom"]': {
    '& .MuiPopper-arrow': {
      top: 0,
      left: 0,
      marginTop: '-0.9em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '0 1em 1em 1em',
        borderColor: `transparent transparent ${theme.palette.background.paper} transparent`,
      },
    },
  },
  '&[data-popper-placement*="top"]': {
    '& .MuiPopper-arrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.9em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '1em 1em 0 1em',
        borderColor: `${theme.palette.background.paper} transparent transparent transparent`,
      },
    },
  },
  '&[data-popper-placement*="right"]': {
    '& .MuiPopper-arrow': {
      left: 0,
      marginLeft: '-0.9em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 1em 1em 0',
        borderColor: `transparent ${theme.palette.background.paper} transparent transparent`,
      },
    },
  },
  '&[data-popper-placement*="left"]': {
    '& .MuiPopper-arrow': {
      right: 0,
      marginRight: '-0.9em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 0 1em 1em',
        borderColor: `transparent transparent transparent ${theme.palette.background.paper}`,
      },
    },
  },
}))

export const Modifiers = () => {
  const [open, setOpen] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const [arrowRef, setArrowRef] = React.useState<HTMLDivElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    setOpen(previousOpen => !previousOpen)
  }

  const canBeOpen = open && Boolean(anchorEl)
  const id = canBeOpen ? 'transition-popper' : undefined
  return (
    <>
      <Button
        size="small"
        aria-describedby={id}
        type="button"
        onClick={handleClick}
      >
        Toggle Popper
      </Button>
      <PopperWithArrow
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, 16],
            },
          },
          {
            name: 'arrow',
            enabled: true,
            options: {
              element: arrowRef,
            },
          },
        ]}
        id={id}
        open={open}
        anchorEl={anchorEl}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <div>
              <Arrow className="MuiPopper-arrow" ref={setArrowRef} />
              <Paper elevation={5}>
                <Box
                  width={200}
                  height={200}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography>Popper Content</Typography>
                </Box>
              </Paper>
            </div>
          </Fade>
        )}
      </PopperWithArrow>
    </>
  )
}
