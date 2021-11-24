// Edit this file to add new stories
import React from "react";

import { story } from "../../../__tests__/helpers/storybook";
import { Stack } from "../../Stack/Stack";
import { Typography } from "../../Typography/Typography";
import { ClockPicker, ClockPickerProps } from "../ClockPicker";
import { defaultStoryMeta } from "./ClockPicker.stories.gen";
/**
 * Metadata for ClockPicker stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: "Inputs/Date and Time/Time/ClockPicker",
};

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ClockPickerProps<Date>>((args) => {
  const [date, setDate] = React.useState<Date>(
    new Date("2021-01-01T12:34:00.000Z")
  );

  return (
    <Stack spacing={2} direction={"row"}>
      <Typography>{`${date.getHours()}:${date.getMinutes()}`}</Typography>
      <ClockPicker
        date={date}
        onChange={(newDate) => newDate !== null && setDate(newDate)}
        {...args}
      />
    </Stack>
  );
});

/** Default story for ClockPicker (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `ClockPicker is a lower-level sub-component which can be used for building more custom time pickers.`,
      },
    },
  },
});
