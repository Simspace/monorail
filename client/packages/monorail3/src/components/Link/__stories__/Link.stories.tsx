// Edit this file to add new stories
import React from "react";

import { story } from "../../../__tests__/helpers/storybook";
import { Stack } from "../../Stack/Stack";
import { Link, LinkProps } from "../Link";
import { defaultStoryMeta } from "./Link.stories.gen";

/**
 * Metadata for Link stories - update/extend as needed
 */
export default { ...defaultStoryMeta, title: "Navigation/Link" };
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<LinkProps>((args) => <Link {...args} />, {
  args: { children: "A Simple Link" },
});
/** Default story for Link (edit/remove by hand if needed) */
export const Default = story(Template);
// TODO: add more stories below

export const Basic = story<LinkProps>(
  () => (
    <Stack direction="row" spacing={2}>
      <Link href="#">Link</Link>
      <Link href="#" color="inherit">
        {'color="inherit"'}
      </Link>
      <Link href="#" variant="body2">
        {'variant="body2"'}
      </Link>
    </Stack>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `The Link component is built on top of the Typography component, meaning that you can use its props.`,
        },
      },
    },
  }
);

export const Underline = story<LinkProps>(
  () => (
    <Stack direction="row" spacing={2}>
      <Link href="#" underline="none">
        {'underline="none"'}
      </Link>
      <Link href="#" underline="hover">
        {'underline="hover"'}
      </Link>
      <Link href="#" underline="always">
        {'underline="always"'}
      </Link>
    </Stack>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `The underline prop can be used to set the underline behavior. The default is hover.`,
        },
      },
    },
  }
);
