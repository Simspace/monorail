// Edit this file to add new stories
import React from 'react'
import Person from '@mui/icons-material/Person'
import {
  Box,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
} from '@mui/material'

import { story } from '../../../__tests__/helpers/storybook'

export default { title: 'Inputs/Select', component: Select }

const Template = story<SelectProps<string>>(
  args => {
    const [age, setAge] = React.useState('')

    const handleChange = (event: SelectChangeEvent<string>) => {
      setAge(event.target.value)
    }

    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            {...args}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    )
  },
  {
    args: {},
  },
)
/** Default story for Select (edit/remove by hand if needed) */
export const Default = story(Template)

export const BasicSelect = story(Template, {
  parameters: {
    docs: {
      description: {
        story: `Menus are positioned over their emitting elements such that the currently selected menu item appears on top of the emitting element. [Docs](https://next.material-ui.com/components/selects/#main-content)`,
      },
    },
  },
})

export const Sizes = story<SelectProps<string>>(() => {
  const [age, setAge] = React.useState('')

  const handleChange = (event: SelectChangeEvent<string>) => {
    setAge(event.target.value)
  }

  return (
    <div>
      <FormControl sx={{ m: 2, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-small-label">Small</InputLabel>
        <Select
          size="small"
          labelId="demo-simple-select-small-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Small"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 2, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-medium-label">Medium</InputLabel>
        <Select
          labelId="demo-simple-select-medium-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
})

export const LabelsAndHelperText = story<SelectProps<string>>(() => {
  const [age, setAge] = React.useState('')

  const handleChange = (event: SelectChangeEvent<string>) => {
    setAge(event.target.value)
  }

  return (
    <div>
      <FormControl sx={{ m: 4, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          displayEmpty
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 4, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 4, display: 'inline-flex', flexDirection: 'row' }}>
        <InputLabel
          sx={{ fontWeight: 700, m: 0, mt: 3, mr: 3, left: 0 }}
          id="label-on-left"
        >
          Select
        </InputLabel>
        <div>
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Label on left</FormHelperText>
        </div>
      </FormControl>
    </div>
  )
})

export const Adornments = story<SelectProps<string>>(() => {
  const [age, setAge] = React.useState('')

  const handleChange = (event: SelectChangeEvent<string>) => {
    setAge(event.target.value)
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          startAdornment={
            <InputAdornment position="start">
              <Person />
            </InputAdornment>
          }
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
})

export const AutoWidth = story<SelectProps<string>>(() => {
  const [age, setAge] = React.useState('')

  const handleChange = (event: SelectChangeEvent<string>) => {
    setAge(event.target.value)
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
})

export const OtherProps = story<SelectProps<string>>(() => {
  const [age, setAge] = React.useState('')

  const handleChange = (event: SelectChangeEvent<string>) => {
    setAge(event.target.value)
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} disabled>
        <InputLabel id="demo-simple-select-disabled-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-disabled-label"
          id="demo-simple-select-disabled"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Disabled</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} error>
        <InputLabel id="demo-simple-select-error-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-error-label"
          id="demo-simple-select-error"
          value={age}
          label="Age"
          onChange={handleChange}
          renderValue={value => `${value}`}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Error</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-readonly-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly"
          value={age}
          label="Age"
          onChange={handleChange}
          inputProps={{ readOnly: true }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Read only</FormHelperText>
      </FormControl>
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          label="Age *"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
    </div>
  )
})
