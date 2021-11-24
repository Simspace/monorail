// Edit this file to add new stories
import React from "react";

import { story } from "../../../__tests__/helpers/storybook";
import { Button } from "../../Button/Button";
import { CardActions, CardActionsProps } from "../CardActions";
import { defaultStoryMeta } from "./CardActions.stories.gen";
/**
 * Metadata for CardActions stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default { ...defaultStoryMeta, title: "Surfaces/Card/CardActions" };
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<CardActionsProps>(
  (args) => (
    <CardActions {...args}>
      <Button variant="text">Action 1</Button>
      <Button variant="contained">Action 2</Button>
    </CardActions>
  ),
  {
    args: {},
  }
);
/** Default story for CardActions (edit/remove by hand if needed) */
export const Default = story(Template);
// TODO: add more stories below
