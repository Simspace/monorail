import React from "react";

import { story } from "../../../__tests__/helpers/storybook";
import { Box } from "../../Box/Box";
import { Step } from "../../Step/Step";
import { StepLabel } from "../../StepLabel/StepLabel";
import { Stepper } from "../../Stepper/Stepper";
import { StepConnector, StepConnectorProps } from "../StepConnector";
import { defaultStoryMeta } from "./StepConnector.stories.gen";
/**
 * Metadata for StepConnector stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: "Navigation/Stepper/StepConnector",
};

export const Default = story<StepConnectorProps>(
  (args) => (
    <Box sx={{ width: "100%" }}>
      <Stepper connector={<StepConnector {...args} />}>
        <Step>
          <StepLabel>Click me</StepLabel>
        </Step>
        <Step>
          <StepLabel>Not me</StepLabel>
        </Step>
        <Step>
          <StepLabel>Click me</StepLabel>
        </Step>
      </Stepper>
    </Box>
  ),
  {
    parameters: {
      docs: {
        description: {
          component: `
A line that connects steps visually. Reacts to things like orientation and active state of a given \`Step\`.
`,
        },
      },
    },
  }
);

export const Custom = story(
  () => (
    <Box sx={{ width: "100%" }}>
      <Stepper
        connector={
          <div style={{ border: "1px solid red", flex: "1 1 auto" }} />
        }
      >
        <Step>
          <StepLabel>Click me</StepLabel>
        </Step>
        <Step>
          <StepLabel>Not me</StepLabel>
        </Step>
        <Step>
          <StepLabel>Click me</StepLabel>
        </Step>
      </Stepper>
    </Box>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `
The \`Stepper\` component has a \`connector\` prop, which can be any JSX element. Careful with the flex!
`,
        },
      },
    },
  }
);
