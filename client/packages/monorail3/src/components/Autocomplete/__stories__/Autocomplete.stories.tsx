// Edit this file to add new stories
import React from 'react'
import {
  Autocomplete,
  AutocompleteProps,
  Box,
  Chip,
  Stack,
  TextField,
} from '@mui/material'

import { story } from '../../../__tests__/helpers/storybook'
import {
  countries,
  countryToFlag,
  Movie,
  movies,
} from '../../../__tests__/helpers/testData'
/**
 * Metadata for Autocomplete stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default { title: 'Inputs/Autocomplete', component: Autocomplete }

type MovieAutocompleteProps = AutocompleteProps<
  Movie,
  boolean,
  boolean,
  boolean,
  'div'
>
const MovieAutocomplete = (props: MovieAutocompleteProps) => (
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

export const MultipleValues = story<MovieAutocompleteProps>(() => {
  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
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
      />
      <Autocomplete
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
      />
      <Autocomplete
        multiple
        id="tags-filled"
        options={movies.map(option => option.label)}
        defaultValue={[movies[13].label]}
        freeSolo
        renderTags={(value: readonly string[], getTagProps) =>
          value.map((option: string, index: number) => (
            <Chip
              variant="outlined"
              label={option}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={params => (
          <TextField {...params} label="freeSolo" placeholder="Favorites" />
        )}
      />
      <Autocomplete
        multiple
        id="tags-readOnly"
        options={movies.map(option => option.label)}
        defaultValue={[movies[12].label, movies[13].label]}
        readOnly
        renderInput={params => (
          <TextField {...params} label="readOnly" placeholder="Favorites" />
        )}
      />
    </Stack>
  )
})
