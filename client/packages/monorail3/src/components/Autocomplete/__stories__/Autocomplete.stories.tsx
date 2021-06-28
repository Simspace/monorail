// Edit this file to add new stories
import React from 'react'
import { Autocomplete, AutocompleteProps } from '../Autocomplete'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './Autocomplete.storyHelpers'
import { TextField } from '../../TextField/TextField'

/** Metadata for these stories - update/extend as needed */
export default { ...defaultStoryMeta }

type Movie = { label: string; year: number }

const movies: Array<Movie> = [
  { label: 'Star Wars', year: 1977 },
  { label: 'Pulp Fiction', year: 1994 },
]

/** Story template - update as needed */
const Template = story<
  AutocompleteProps<Movie, boolean, boolean, boolean, 'div'>
>(
  args => (
    <Autocomplete<Movie, boolean, boolean, boolean, 'div'>
      renderInput={params => <TextField label="Movie" {...params} />}
      options={movies}
      {...args}
    />
  ),
  {
    args: {},
  },
)

export const Default = story(Template, {})
