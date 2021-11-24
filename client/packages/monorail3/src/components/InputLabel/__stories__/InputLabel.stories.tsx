// Edit this file to add new stories
import React from "react";

import { story } from "../../../__tests__/helpers/storybook";
import { Box } from "../../Box/Box";
import { FilledInput } from "../../FilledInput/FilledInput";
import { FormControl } from "../../FormControl/FormControl";
import { FormHelperText } from "../../FormHelperText/FormHelperText";
import { Input } from "../../Input/Input";
import { OutlinedInput } from "../../OutlinedInput/OutlinedInput";
import { InputLabel, InputLabelProps } from "../InputLabel";
import { defaultStoryMeta } from "./InputLabel.stories.gen";

/**
 * Metadata for InputLabel stories - update/extend as needed
 */
export default { ...defaultStoryMeta, title: "Inputs/Input/InputLabel" };

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<InputLabelProps>((args) => <InputLabel {...args} />, {
  args: { children: "The label" },
});

/** Default story for InputLabel (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `InputLabel is a low-level component which can be composed with other components to build things like TextField`,
      },
    },
  },
});

export const Showcase = story<InputLabelProps>(
  () => {
    const [name, setName] = React.useState("Composed TextField");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    };

    return (
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Name</InputLabel>
          <Input id="component-simple" value={name} onChange={handleChange} />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-helper">Name</InputLabel>
          <Input
            id="component-helper"
            value={name}
            onChange={handleChange}
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text">
            Some important helper text
          </FormHelperText>
        </FormControl>
        <FormControl disabled variant="standard">
          <InputLabel htmlFor="component-disabled">Name</InputLabel>
          <Input id="component-disabled" value={name} onChange={handleChange} />
          <FormHelperText>Disabled</FormHelperText>
        </FormControl>
        <FormControl error variant="standard">
          <InputLabel htmlFor="component-error">Name</InputLabel>
          <Input
            id="component-error"
            value={name}
            onChange={handleChange}
            aria-describedby="component-error-text"
          />
          <FormHelperText id="component-error-text">Error</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-outlined">Name</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={name}
            onChange={handleChange}
            label="Name"
          />
        </FormControl>
        <FormControl variant="filled">
          <InputLabel htmlFor="component-filled">Name</InputLabel>
          <FilledInput
            id="component-filled"
            value={name}
            onChange={handleChange}
          />
        </FormControl>
      </Box>
    );
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Showcase of various InputLabels combined with various other components.`,
        },
      },
    },
  }
);
