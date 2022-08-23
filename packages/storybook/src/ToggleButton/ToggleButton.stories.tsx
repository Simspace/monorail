// Edit this file to add new stories
import React from 'react'
import {
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  ToggleButtonGroupProps,
} from '@monorail/components'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter'
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'

import { story } from '../helpers/storybook'

/**
 * Metadata for ToggleButtonGroup stories - update/extend as needed
 */
export default {
  title: 'Inputs/ToggleButton',
  component: ToggleButton,
}
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ToggleButtonGroupProps>(
  args => {
    const [alignment, setAlignment] = React.useState<string | null>('left')

    const handleAlignment = (
      _event: React.MouseEvent<HTMLElement>,
      newAlignment: string | null,
    ) => {
      setAlignment(newAlignment)
    }

    return (
      <ToggleButtonGroup
        value={alignment}
        exclusive
        aria-label="text alignment"
        {...args}
        onChange={handleAlignment}
      >
        <ToggleButton value="left" aria-label="left aligned">
          <FormatAlignLeftIcon />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <FormatAlignCenterIcon />
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          <FormatAlignRightIcon />
        </ToggleButton>
        <ToggleButton value="justify" aria-label="justified" disabled>
          <FormatAlignJustifyIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    )
  },
  { args: {}, muiName: 'MuiToggleButton' },
)
/** Default story for ToggleButtonGroup (edit/remove by hand if needed) */
export const Default = story(Template)

export const MultipleSelection = story(
  () => {
    const [formats, setFormats] = React.useState(() => ['bold', 'italic'])

    const handleFormat = (
      event: React.MouseEvent<HTMLElement>,
      newFormats: Array<string>,
    ) => {
      setFormats(newFormats)
    }

    return (
      <ToggleButtonGroup
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
      >
        <ToggleButton value="bold" aria-label="bold">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FormatUnderlinedIcon />
        </ToggleButton>
        <ToggleButton value="color" aria-label="color" disabled>
          <FormatColorFillIcon />
          <ArrowDropDownIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    )
  },
  {
    args: { exclusive: false },
    parameters: {
      docs: {
        description: {
          story: `Multiple selection allows for logically-grouped options, like bold, italic, and underline, to have multiple options selected. Simply do not use the "exclusive" prop.`,
        },
      },
    },
  },
)

export const Size = story(
  () => {
    const [alignment, setAlignment] = React.useState('left')

    const handleChange = (
      _event: React.MouseEvent<HTMLElement>,
      newAlignment: string,
    ) => {
      setAlignment(newAlignment)
    }

    const children = [
      <ToggleButton value="left" key="left" aria-label="left">
        <FormatAlignLeftIcon fontSize="small" />
      </ToggleButton>,
      <ToggleButton value="center" key="center" aria-label="center">
        <FormatAlignCenterIcon fontSize="small" />
      </ToggleButton>,
      <ToggleButton value="right" key="right" aria-label="right">
        <FormatAlignRightIcon fontSize="small" />
      </ToggleButton>,
      <ToggleButton value="justify" key="justify" aria-label="justify">
        <FormatAlignJustifyIcon fontSize="small" />
      </ToggleButton>,
    ]

    const control = {
      value: alignment,
      onChange: handleChange,
      exclusive: true,
    }

    return (
      <Stack spacing={2} alignItems={'center'}>
        <ToggleButtonGroup size="small" {...control}>
          {children}
        </ToggleButtonGroup>
        <ToggleButtonGroup {...control}>{children}</ToggleButtonGroup>
        <ToggleButtonGroup size="large" {...control}>
          {children}
        </ToggleButtonGroup>
      </Stack>
    )
  },
  {
    args: { exclusive: false },
    parameters: {
      docs: {
        description: {
          story: `For larger or smaller buttons, use the size prop.`,
        },
      },
    },
  },
)
