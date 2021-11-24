// Edit this file to add new stories
import React from "react";

import { story } from "../../../__tests__/helpers/storybook";
import { TableSortLabel, TableSortLabelProps } from "../TableSortLabel";
import { defaultStoryMeta } from "./TableSortLabel.stories.gen";

export default {
  ...defaultStoryMeta,
  title: "Data Display/Table/TableSortLabel",
};

const Template = story<TableSortLabelProps>(
  (args) => {
    const [direction, setDirection] = React.useState<"asc" | "desc">("asc");

    return (
      <TableSortLabel
        direction={direction}
        onClick={() => setDirection(direction === "asc" ? "desc" : "asc")}
        {...args}
      />
    );
  },
  { args: { children: "Title" } }
);

export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `TableSortLabel is a button used for toggling the sort direction on a column`,
      },
    },
  },
});
