// Edit this file to add new stories
import React from 'react'
import { Autocomplete, AutocompleteProps } from '../Autocomplete'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './Autocomplete.stories.gen'
import { TextField } from '../../TextField/TextField'
import { Movie, movies } from '../../../__tests__/helpers/testData'
/**
 * Metadata for Autocomplete stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default { ...defaultStoryMeta }

type MovieAutocompleteProps = AutocompleteProps<
  Movie,
  boolean,
  boolean,
  boolean,
  'div'
>
const MovieAutocomplete = (props: MovieAutocompleteProps) => (
  <Autocomplete<Movie, boolean, boolean, boolean, 'div'> {...props} />
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
// TODO: add more stories below
