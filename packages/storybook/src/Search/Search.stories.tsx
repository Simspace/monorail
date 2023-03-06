import React from 'react'
import Box from '@mui/material/Box'

import type { SearchProps } from '@monorail/components'
import {
  Autocomplete,
  List,
  ListItem,
  ListItemText,
  ScrollShadow,
  Search,
  Stack,
  Typography,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'
import { movies } from '../helpers/testData.js'

export default { title: 'Inputs/Search', component: Search }

const Template = story<SearchProps>(
  (args: Partial<SearchProps>) => (
    <Box component="form" width={300} noValidate autoComplete="off">
      <Search {...args} />
    </Box>
  ),
  {
    args: {
      label: 'Search',
      placeholder: 'Placeholder',
      componentsProps: { input: { 'aria-label': 'Search' } },
      fullWidth: true,
    },
    muiName: 'MonorailSearch',
  },
)

export const Default = story(Template)

export const BasicSearch = story(
  () => (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { mr: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Search id="search-basic" />
    </Box>
  ),
  {
    parameters: {
      docs: {
        description: {
          story:
            'The `Search` wrapper component is a complete form control including a label, input (type="search"), and help text. We only use the outlined variant in Monorail.',
        },
      },
    },
  },
)

export const Sizes = story(
  () => (
    <Box
      component="form"
      sx={{
        '& .MonorailSearch-root': { mr: 4, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <Search label="Small" id="size-small" size="small" />
        <Search label="Medium" id="size-medium" />
      </div>
    </Box>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: 'Fancy smaller inputs? Use the size prop.',
        },
      },
    },
  },
)

export const WithAutocomplete = story<SearchProps>(
  args => {
    return (
      <Box sx={{ width: 300 }}>
        <Autocomplete
          freeSolo
          id="search-with-autocomplete"
          options={movies.map(option => option.label)}
          renderInput={params => (
            <Search
              ref={params.InputProps.ref}
              label="Search movies"
              disableClearable
              componentsProps={{
                Input: params.InputProps,
                input: params.inputProps,
              }}
              fullWidth
              {...args}
            />
          )}
        />
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story:
            "The `renderInput` prop allows you to customize the rendered input. The first argument of this render prop contains props that you need to forward. Pay specific attention to the `ref` and `inputProps` keys. Be sure to set Search's `disableClearable` prop to `true` because Autocomplete provides its own clear button.",
        },
      },
    },
  },
)

export const ControlledVsUncontrolled = story<SearchProps>(args => {
  const [name, setName] = React.useState('Cat in the Hat')
  const handleChange: SearchProps['onChange'] = (_event, value, _reason) => {
    setName(value)
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Search
        id="search-controlled"
        label="Controlled"
        value={name}
        onChange={handleChange}
        componentsProps={{
          clearButton: {
            onClick: () => setName(''),
          },
        }}
        {...args}
      />
      <Search
        id="search-uncontrolled"
        label="Uncontrolled"
        defaultValue="foo"
        {...args}
      />
    </Box>
  )
})

export const DebouncedSearch = story<SearchProps>(args => {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [searchTermDebounced, setSearchTermDebounced] = React.useState('')

  const handleChange: SearchProps['onChange'] = (_event, value, _reason) => {
    setSearchTerm(value)
  }

  const handleChangeDebounced: SearchProps['onChangeDebounced'] = (
    _event,
    value,
    _reason,
  ) => {
    setSearchTermDebounced(value)
  }

  return (
    <Stack
      component="form"
      sx={{ width: 400, gap: 4 }}
      noValidate
      autoComplete="off"
    >
      <Search
        id="search-controlled"
        label="Filter movies"
        value={searchTerm}
        onChange={handleChange}
        onChangeDebounced={handleChangeDebounced}
        debounceTime={1000}
        fullWidth
        componentsProps={{
          clearButton: {
            onClick: () => {
              setSearchTerm('')
            },
          },
        }}
        {...args}
      />
      <ScrollShadow bottom>
        <List sx={{ maxHeight: 400 }}>
          {movies.map(movie => {
            const label = movie.label.toLowerCase()
            const search = searchTerm.toLowerCase()
            if (label.includes(search)) {
              return (
                <ListItem key={`movie-${movie.label}`}>
                  <ListItemText>{movie.label}</ListItemText>
                </ListItem>
              )
            }
          })}
        </List>
      </ScrollShadow>
      <Typography>Debounced Value: {searchTermDebounced}</Typography>
    </Stack>
  )
})
