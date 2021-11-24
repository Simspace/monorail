// Edit this file to add new stories
import React from "react";

import { story } from "../../../__tests__/helpers/storybook";
import { TableCell } from "../../TableCell/TableCell";
import { TableRow } from "../../TableRow/TableRow";
import { TableFooter, TableFooterProps } from "../TableFooter";
import { defaultStoryMeta } from "./TableFooter.stories.gen";

export default { ...defaultStoryMeta, title: "Data Display/Table/TableFooter" };

const Template = story<TableFooterProps>((args) => (
  <TableFooter {...args}>
    <TableRow>
      <TableCell>Cell 1</TableCell>
      <TableCell>Cell 2</TableCell>
      <TableCell>Cell 3</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Cell 1</TableCell>
      <TableCell>Cell 2</TableCell>
      <TableCell>Cell 3</TableCell>
    </TableRow>
  </TableFooter>
));

export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `TableFooter is a sub-component of Table which wraps the footer row(s) of the Table`,
      },
    },
  },
});
