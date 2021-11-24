// Edit this file to add new stories
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";

import { story } from "../../../__tests__/helpers/storybook";
import { AlertTitle } from "../../AlertTitle/AlertTitle";
import { Box } from "../../Box/Box";
import { Button } from "../../Button/Button";
import { Collapse } from "../../Collapse/Collapse";
import { IconButton } from "../../IconButton/IconButton";
import { Snackbar } from "../../Snackbar/Snackbar";
import { Stack } from "../../Stack/Stack";
import { Typography } from "../../Typography/Typography";
import { Alert, AlertProps } from "../Alert";
import { defaultStoryMeta } from "./Alert.stories.gen";

/**
 * Metadata for Alert stories - update/extend as needed
 */
export default { ...defaultStoryMeta, title: "Feedback/Alert" };

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<AlertProps>(
  (args) => (
    <Alert {...args}>This is a test of the emergency broadcast system</Alert>
  ),
  { args: { severity: "warning" } }
);

/** Default story for Alert (edit/remove by hand if needed) */
export const Default = story(Template);

export const Severities = story<AlertProps>(
  () => {
    return (
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="info">Info message</Alert>
        <Alert severity="success">Success message</Alert>
        <Alert severity="warning">Warning message</Alert>
        <Alert severity="error">Error message</Alert>
      </Stack>
    );
  },
  {
    parameters: {
      docs: {
        description: {
          story: `The alert offers four severity levels that set a distinctive icon and color.`,
        },
      },
    },
  }
);

export const WithTitleAndDescriptions = story<AlertProps>(
  () => {
    return (
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          This is a warning alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          This is an info alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      </Stack>
    );
  },
  {
    parameters: {
      docs: {
        description: {
          story: `You can use the AlertTitle component to display a formatted title above the content.`,
        },
      },
    },
  }
);

export const Actions = story<AlertProps>(
  () => {
    return (
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert onClose={() => {}}>
          This is a success alert — check it out!
        </Alert>
        <Alert
          action={
            <Button color="inherit" size="small">
              Undo
            </Button>
          }
        >
          This is a success alert — check it out!
        </Alert>
      </Stack>
    );
  },
  {
    parameters: {
      docs: {
        description: {
          story: `An alert can have an action, such as a close or undo button. It is rendered after the message, at the end of the alert.

If an onClose callback is provided and no action prop is set, a close icon is displayed. The action prop can be used to provide an alternative action, for example using a Button or IconButton.`,
        },
      },
    },
  }
);

export const Transition = story<AlertProps>(
  () => {
    const [open, setOpen] = React.useState(true);

    return (
      <Box sx={{ width: "100%" }}>
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Close me!
          </Alert>
        </Collapse>
        <Button
          disabled={open}
          variant="outlined"
          onClick={() => {
            setOpen(true);
          }}
        >
          Re-open
        </Button>
      </Box>
    );
  },
  {
    parameters: {
      docs: {
        description: {
          story: `You can use a transition component such as Collapse to transition the appearance of the alert.`,
        },
      },
    },
  }
);

export const Icons = story<AlertProps>(
  () => {
    return (
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          This is a success alert — check it out!
        </Alert>
        <Alert
          iconMapping={{
            success: <CheckCircleOutlineIcon fontSize="inherit" />,
          }}
        >
          This is a success alert — check it out!
        </Alert>
        <Alert icon={false} severity="success">
          This is a success alert — check it out!
        </Alert>
      </Stack>
    );
  },
  {
    parameters: {
      docs: {
        description: {
          story: `The icon prop allows you to add an icon to the beginning of the alert component. This will override the default icon for the specified severity.

You can change the default severity to icon mapping with the iconMapping prop. This can be defined globally using theme customization.

Setting the icon prop to false will remove the icon altogether.`,
        },
      },
    },
  }
);

export const Variants = story<AlertProps>(
  () => {
    return (
      <Stack direction="column" spacing={2}>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Typography>standard</Typography>
          <Alert variant="standard" severity="error">
            This is an error alert — check it out!
          </Alert>
          <Alert variant="standard" severity="warning">
            This is a warning alert — check it out!
          </Alert>
          <Alert variant="standard" severity="info">
            This is an info alert — check it out!
          </Alert>
          <Alert variant="standard" severity="success">
            This is a success alert — check it out!
          </Alert>
        </Stack>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Typography>outlined</Typography>
          <Alert variant="outlined" severity="error">
            This is an error alert — check it out!
          </Alert>
          <Alert variant="outlined" severity="warning">
            This is a warning alert — check it out!
          </Alert>
          <Alert variant="outlined" severity="info">
            This is an info alert — check it out!
          </Alert>
          <Alert variant="outlined" severity="success">
            This is a success alert — check it out!
          </Alert>
        </Stack>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Typography>filled</Typography>
          <Alert variant="filled" severity="error">
            This is an error alert — check it out!
          </Alert>
          <Alert variant="filled" severity="warning">
            This is a warning alert — check it out!
          </Alert>
          <Alert variant="filled" severity="info">
            This is an info alert — check it out!
          </Alert>
          <Alert variant="filled" severity="success">
            This is a success alert — check it out!
          </Alert>
        </Stack>
      </Stack>
    );
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Three variants are available – standard, outlined, and filled.`,
        },
      },
    },
  }
);

// TODO: this was copied from the MUI docs, but could probably become its own custom component
const ToastAlert = React.forwardRef<HTMLDivElement, AlertProps>(function (
  props,
  ref
) {
  return <Alert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const WithSnackbar = story<AlertProps>(
  () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
      if (reason === "clickaway") {
        return;
      }
      setOpen(false);
    };

    return (
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Button variant="outlined" onClick={handleClick}>
          Open success snackbar
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          anchorOrigin={{
            horizontal: "right",
            vertical: "top",
          }}
          onClose={handleClose}
        >
          <ToastAlert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            This is a success message!
          </ToastAlert>
        </Snackbar>
      </Stack>
    );
  },
  {
    parameters: {
      docs: {
        description: {
          story: `You can use the Snackbar to display a toast with the Alert.`,
        },
      },
    },
  }
);

export const Color = story<AlertProps>(
  () => {
    return (
      <Alert severity="success" color="info">
        This is a success alert — check it out!
      </Alert>
    );
  },
  {
    parameters: {
      docs: {
        description: {
          story: `The color prop will override the default color for the specified severity.`,
        },
      },
    },
  }
);
