// Edit this file to add new stories
import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import {
  Box,
  Button,
  ButtonGroup,
  ButtonGroupProps,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Stack,
} from '@mui/material'

import { story } from '../../../test-helpers/storybook'

/**
 * Metadata for ButtonGroup stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default { title: 'Inputs/ButtonGroup', component: ButtonGroup }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ButtonGroupProps>(
  args => (
    <ButtonGroup variant="contained" {...args}>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  ),
  {
    args: {},
    parameters: {
      docs: {
        description: {
          story: `The buttons can be grouped by wrapping them with the ButtonGroup component. They need to be immediate children.`,
        },
      },
    },
  },
)
/** Default story for ButtonGroup (edit/remove by hand if needed) */
export const Default = story(Template, { args: { variant: 'contained' } })

export const Outlined = story(Template, { args: { variant: 'outlined' } })
export const Text = story(Template, { args: { variant: 'text' } })

export const Sizes = story<ButtonGroupProps>(
  () => (
    <Stack spacing={2}>
      <ButtonGroup size="small" aria-label="small button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup color="secondary" aria-label="medium secondary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup size="large" aria-label="large button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Stack>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `The size and color props can be used to control the appearance of the button group.`,
        },
      },
    },
  },
)

const colors = [
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error',
] as const

export const Colors = story<ButtonGroupProps>(() => (
  <Stack spacing={2}>
    {colors.map(color => (
      <ButtonGroup
        key={`button-group-${color}`}
        color={color}
        aria-label={`medium ${color} button group`}
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    ))}
  </Stack>
))

export const VerticalGroup = story<ButtonGroupProps>(
  () => (
    <Stack spacing={2} direction="row">
      <ButtonGroup orientation="vertical" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup orientation="vertical" variant="outlined">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup orientation="vertical" variant="text">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Stack>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `The button group can be displayed vertically using the orientation prop.`,
        },
      },
    },
  },
)

export const SplitButton = story<ButtonGroupProps>(
  () => {
    const options = [
      'Create a merge commit',
      'Squash and merge',
      'Rebase and merge',
    ]

    const [open, setOpen] = React.useState(false)
    const anchorRef = React.useRef<HTMLDivElement>(null)
    const [selectedIndex, setSelectedIndex] = React.useState(1)

    const handleClick = () => {
      /* eslint-disable no-console */
      console.info(`You clicked ${options[selectedIndex]}`)
      /* eslint-enable no-console */
    }

    const handleMenuItemClick = (
      event: React.MouseEvent<HTMLLIElement, MouseEvent>,
      index: number,
    ) => {
      setSelectedIndex(index)
      setOpen(false)
    }

    const handleToggle = () => {
      setOpen(prevOpen => !prevOpen)
    }

    const handleClose = (event: Event) => {
      if (
        anchorRef.current &&
        anchorRef.current.contains(event.target as HTMLElement)
      ) {
        return
      }

      setOpen(false)
    }

    return (
      <Box minHeight={180}>
        <ButtonGroup
          variant="contained"
          ref={anchorRef}
          aria-label="split button"
        >
          <Button onClick={handleClick}>{options[selectedIndex]}</Button>
          <Button
            size="small"
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu">
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        disabled={index === 2}
                        selected={index === selectedIndex}
                        onClick={(
                          event: React.MouseEvent<HTMLLIElement, MouseEvent>,
                        ) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `ButtonGroup can also be used to create a split button. The dropdown can change the button action (as in this example) or be used to immediately trigger a related action.`,
        },
      },
    },
  },
)
