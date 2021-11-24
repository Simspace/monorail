// Edit this file to add new stories
import React from "react";

import { story } from "../../../__tests__/helpers/storybook";
import { SpeedDialAction, SpeedDialActionProps } from "../SpeedDialAction";
import { defaultStoryMeta } from "./SpeedDialAction.stories.gen";
/**
 * Metadata for SpeedDialAction stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: "Navigation/SpeedDial/SpeedDialAction",
};
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<SpeedDialActionProps>(
  (args) => <SpeedDialAction {...args} />,
  { args: {} }
);
/** Default story for SpeedDialAction (edit/remove by hand if needed) */
export const Default = story(Template);
// TODO: add more stories below
