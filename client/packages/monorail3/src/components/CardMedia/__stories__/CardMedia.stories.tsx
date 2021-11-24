// Edit this file to add new stories
import React from "react";

import { story } from "../../../__tests__/helpers/storybook";
import { images } from "../../../__tests__/helpers/testData";
import { CardMedia, CardMediaProps } from "../CardMedia";
import { defaultStoryMeta } from "./CardMedia.stories.gen";
/**
 * Metadata for CardMedia stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: "Surfaces/Card/CardMedia",
  parameters: {
    creevey: {
      skip: "Images are unreliable",
    },
  },
};
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<CardMediaProps>((args) => <CardMedia {...args} />, {
  args: {
    image: images.paella.url,
    sx: {
      height: 160,
    },
  },
});
/** Default story for CardMedia (edit/remove by hand if needed) */
export const Default = story(Template);
// TODO: add more stories below
