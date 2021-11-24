import React from "react";

import { story } from "../../../__tests__/helpers/storybook";
import { TextareaAutosize, TextareaAutosizeProps } from "../TextareaAutosize";
import { defaultStoryMeta } from "./TextareaAutosize.stories.gen";

export default { ...defaultStoryMeta, title: "Inputs/TextareaAutosize" };

const Template = story<TextareaAutosizeProps>(
  (args) => <TextareaAutosize {...args} />,
  { args: {} }
);

export const Default = story(Template);

export const Empty = story(() => (
  <TextareaAutosize
    aria-label="empty textarea"
    placeholder="Empty"
    style={{ width: 200 }}
  />
));

export const MinimumHeight = story(() => (
  <TextareaAutosize
    aria-label="minimum height"
    minRows={3}
    placeholder="Minimum 3 rows"
    style={{ width: 200 }}
  />
));

export const MaximumHeight = story(() => (
  <TextareaAutosize
    maxRows={4}
    aria-label="maximum height"
    placeholder="Maximum 4 rows"
    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua."
    style={{ width: 200 }}
  />
));
