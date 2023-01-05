// Edit this file to add new stories
import React from 'react'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'

import type { AutocompleteProps } from '@monorail/components'
import {
  Autocomplete,
  Box,
  Checkbox,
  Chip,
  Stack,
  TextField,
  VirtualizedAutocomplete,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'
import type { Movie } from '../helpers/testData.js'
import { countries, countryToFlag, movies } from '../helpers/testData.js'
/**
 * Metadata for Autocomplete stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default { title: 'Inputs/Autocomplete', component: Autocomplete }

type MovieAutocompleteProps = AutocompleteProps<
  Movie,
  boolean,
  false,
  false,
  'div'
>

type MovieAutocompleteFreeSoloProps = AutocompleteProps<
  Movie,
  boolean,
  boolean,
  boolean,
  'div'
>

const MovieAutocomplete = (props: MovieAutocompleteProps) => (
  <Autocomplete {...props} />
)

const MovieAutocompleteFreeSolo = (props: MovieAutocompleteFreeSoloProps) => (
  <Autocomplete<Movie, boolean, boolean, boolean> {...props} />
)

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<MovieAutocompleteProps>(
  args => (
    <MovieAutocomplete
      renderInput={inputProps => <TextField label="Movie" {...inputProps} />}
      options={movies}
      {...args}
    />
  ),
  {
    args: {},
    muiName: 'MuiAutocomplete',
  },
)

/** Default story for Autocomplete (edit/remove by hand if needed) */
export const Default = story(Template)

export const ComboBox = () => (
  <MovieAutocomplete
    disablePortal
    id="combo-box-demo"
    options={movies}
    sx={{ width: 300 }}
    renderInput={params => <TextField {...params} label="Movie" />}
  />
)

export const FancySelectItems = () => (
  <Autocomplete
    id="country-select-demo"
    sx={{ width: 300 }}
    options={countries}
    autoHighlight
    getOptionLabel={option => option.label}
    renderOption={(props, option) => (
      <Box
        component="li"
        sx={{ fontSize: 15, '& > span': { mr: '10px', fontSize: 18 } }}
        {...props}
      >
        <span>{countryToFlag(option.code)}</span>
        {option.label} ({option.code}) +{option.phone}
      </Box>
    )}
    renderInput={params => (
      <TextField
        {...params}
        label="Choose a country"
        inputProps={{
          ...params.inputProps,
          autoComplete: 'new-password', // disable autocomplete and autofill
        }}
      />
    )}
  />
)

export const FreeSolo = () => (
  <>
    <p>
      Free solo mode allows arbitrary input text, in addition to suggestions
    </p>
    <p>As a default TextField</p>
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={movies.map(option => option.label)}
        renderInput={params => <TextField {...params} label="freeSolo" />}
      />
      <p>As a TextField with type=search</p>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={movies.map(option => option.label)}
        renderInput={params => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  </>
)

export const MultipleValues = story<MovieAutocompleteProps>(args => {
  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <MovieAutocomplete
        multiple
        id="tags-standard"
        options={movies}
        getOptionLabel={option => option.label}
        defaultValue={[movies[13]]}
        renderInput={params => (
          <TextField
            {...params}
            label="Multiple values"
            placeholder="Favorites"
          />
        )}
        {...args}
      />
      <MovieAutocomplete
        multiple
        id="tags-outlined"
        options={movies}
        getOptionLabel={option => option.label}
        defaultValue={[movies[13]]}
        filterSelectedOptions
        renderInput={params => (
          <TextField
            {...params}
            label="filterSelectedOptions"
            placeholder="Favorites"
          />
        )}
        {...args}
      />
      <MovieAutocompleteFreeSolo
        multiple
        freeSolo
        id="tags-filled"
        options={movies}
        defaultValue={[movies[13]]}
        // @ts-expect-error -- Incorrect conditional type in @mui/material/Autocomplete
        renderTags={(value, getTagProps) =>
          value.map((option: Movie, index: number) => (
            <Chip
              variant="outlined"
              label={option.label}
              {...getTagProps({ index })}
              key={`${option}-${index}`}
            />
          ))
        }
        renderInput={params => (
          <TextField {...params} label="freeSolo" placeholder="Favorites" />
        )}
        {...args}
      />
      <MovieAutocomplete
        multiple
        id="tags-readOnly"
        options={movies}
        defaultValue={[movies[12], movies[13]]}
        readOnly
        ChipProps={{ clickable: false, variant: 'rectangular' }}
        renderInput={params => (
          <TextField {...params} label="readOnly" placeholder="Favorites" />
        )}
        {...args}
      />
    </Stack>
  )
})

export const Sizes = story(args => {
  return (
    <Stack spacing={2} sx={{ width: 500 }}>
      <Autocomplete
        id="size-small-outlined"
        size="small"
        options={movies}
        getOptionLabel={option => option.label}
        defaultValue={movies[13]}
        renderInput={params => (
          <TextField {...params} label="Size small" placeholder="Favorites" />
        )}
        {...args}
      />
      <Autocomplete
        multiple
        id="size-small-outlined-multi"
        size="small"
        options={movies}
        getOptionLabel={option => option.label}
        defaultValue={[movies[13]]}
        renderInput={params => (
          <TextField {...params} label="Size small" placeholder="Favorites" />
        )}
        {...args}
      />
    </Stack>
  )
})

export const LimitTags = story(args => {
  return (
    <Autocomplete
      multiple
      limitTags={2}
      id="multiple-limit-tags"
      options={movies}
      getOptionLabel={option => option.label}
      defaultValue={[movies[13], movies[12], movies[11]]}
      renderInput={params => (
        <TextField {...params} label="limitTags" placeholder="Favorites" />
      )}
      sx={{ width: '500px' }}
      {...args}
    />
  )
})

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
const checkedIcon = <CheckBoxIcon fontSize="small" />

export const CheckboxesTags = story(args => {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={movies}
      disableCloseOnSelect
      getOptionLabel={option => option.label}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.label}
        </li>
      )}
      style={{ width: 500 }}
      renderInput={params => (
        <TextField {...params} label="Checkboxes" placeholder="Favorites" />
      )}
      {...args}
    />
  )
})

function random(length: number) {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''

  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }

  return result
}

const OPTIONS = Array.from(new Array(10000))
  .map(() => random(10 + Math.ceil(Math.random() * 20)))
  .sort((a: string, b: string) =>
    a.toUpperCase().localeCompare(b.toUpperCase()),
  )

export const Virtualized = () => (
  <VirtualizedAutocomplete
    options={OPTIONS}
    estimatedItemSize={48}
    renderInput={params => (
      <TextField label="Virtualized" placeholder="Virtualized" {...params} />
    )}
    groupBy={option => option[0].toUpperCase()}
  />
)
