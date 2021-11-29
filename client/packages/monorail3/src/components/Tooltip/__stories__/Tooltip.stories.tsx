// Edit this file to add new stories
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import { styled } from '@mui/styles'

import { story } from '../../../__tests__/helpers/storybook'
import { Box } from '../../Box/Box'
import { Button } from '../../Button/Button'
import { ClickAwayListener } from '../../ClickAwayListener/ClickAwayListener'
import { Fade } from '../../Fade/Fade'
import { Grid } from '../../Grid/Grid'
import { IconButton } from '../../IconButton/IconButton'
import { Typography } from '../../Typography/Typography'
import { Zoom } from '../../Zoom/Zoom'
import { Tooltip, tooltipClasses,TooltipProps } from '../Tooltip'
import { defaultStoryMeta } from './Tooltip.stories.gen'

/**
 * Metadata for Tooltip stories - update/extend as needed
 */
export default { ...defaultStoryMeta, title: 'Feedback/Tooltip' }

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<TooltipProps>(
  args => (
    <Tooltip title="Tooltip title" {...args}>
      <>Tooltip children</>
    </Tooltip>
  ),
  {
    args: {},
  },
)

/** Default story for Tooltip (edit/remove by hand if needed) */
export const Default = story(Template)

export const BasicTooltip = story<TooltipProps>(() => (
  <Tooltip title="Delete">
    <IconButton size="large">
      <DeleteIcon />
    </IconButton>
  </Tooltip>
))

export const PositionedTooltips = story<TooltipProps>(
  () => (
    <Box sx={{ width: 500 }}>
      <Grid container justifyContent="center">
        <Grid item>
          <Tooltip title="Add" placement="top-start">
            <Button>top-start</Button>
          </Tooltip>
          <Tooltip title="Add" placement="top">
            <Button>top</Button>
          </Tooltip>
          <Tooltip title="Add" placement="top-end">
            <Button>top-end</Button>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={6}>
          <Tooltip title="Add" placement="left-start">
            <Button>left-start</Button>
          </Tooltip>
          <br />
          <Tooltip title="Add" placement="left">
            <Button>left</Button>
          </Tooltip>
          <br />
          <Tooltip title="Add" placement="left-end">
            <Button>left-end</Button>
          </Tooltip>
        </Grid>
        <Grid item container xs={6} alignItems="flex-end" direction="column">
          <Grid item>
            <Tooltip title="Add" placement="right-start">
              <Button>right-start</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Add" placement="right">
              <Button>right</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Add" placement="right-end">
              <Button>right-end</Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item>
          <Tooltip title="Add" placement="bottom-start">
            <Button>bottom-start</Button>
          </Tooltip>
          <Tooltip title="Add" placement="bottom">
            <Button>bottom</Button>
          </Tooltip>
          <Tooltip title="Add" placement="bottom-end">
            <Button>bottom-end</Button>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `The Tooltip has 12 placements choice. They don't have directional arrows; instead, they rely on motion emanating from the source to convey direction.`,
        },
      },
    },
  },
)

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}))

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))

export const CustomizedTooltips = story<TooltipProps>(
  () => (
    <div>
      <LightTooltip title="Add">
        <Button>Light</Button>
      </LightTooltip>
      <BootstrapTooltip title="Add">
        <Button>Bootstrap</Button>
      </BootstrapTooltip>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Tooltip with HTML</Typography>
            <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
            {"It's very engaging. Right?"}
          </React.Fragment>
        }
      >
        <Button>HTML</Button>
      </HtmlTooltip>
    </div>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `Here are some examples of customizing the component. You can learn more about this in the overrides documentation page.`,
        },
      },
    },
  },
)

export const ArrowTooltips = story<TooltipProps>(
  () => (
    <Tooltip title="Add" arrow>
      <Button>Arrow</Button>
    </Tooltip>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `You can use the arrow prop to give your tooltip an arrow indicating which element it refers to.`,
        },
      },
    },
  },
)

export const TriggersTooltips = story<TooltipProps>(
  () => {
    const [open, setOpen] = React.useState(false)

    const handleTooltipClose = () => {
      setOpen(false)
    }

    const handleTooltipOpen = () => {
      setOpen(true)
    }
    return (
      <div>
        <Grid container justifyContent="center">
          <Grid item>
            <Tooltip disableFocusListener title="Add">
              <Button>Hover or touch</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip disableHoverListener title="Add">
              <Button>Focus or touch</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip disableFocusListener disableTouchListener title="Add">
              <Button>Hover</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <ClickAwayListener onClickAway={handleTooltipClose}>
              <div>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  onClose={handleTooltipClose}
                  open={open}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  title="Add"
                >
                  <Button onClick={handleTooltipOpen}>Click</Button>
                </Tooltip>
              </div>
            </ClickAwayListener>
          </Grid>
        </Grid>
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `You can define the types of events that cause a tooltip to show.`,
        },
      },
    },
  },
)

export const ControlledTooltips = story<TooltipProps>(
  () => {
    const [open, setOpen] = React.useState(false)

    const handleClose = () => {
      setOpen(false)
    }

    const handleOpen = () => {
      setOpen(true)
    }
    return (
      <Tooltip
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        title="Add"
      >
        <Button>Controlled</Button>
      </Tooltip>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `You can use the open, onOpen and onClose props to control the behavior of the tooltip.`,
        },
      },
    },
  },
)

const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500,
  },
})

const NoMaxWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 'none',
  },
})

const longText = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
`

export const VariableWidth = story<TooltipProps>(
  () => (
    <div>
      <Tooltip title={longText}>
        <Button sx={{ m: 1 }}>Default Width [300px]</Button>
      </Tooltip>
      <CustomWidthTooltip title={longText}>
        <Button sx={{ m: 1 }}>Custom Width [500px]</Button>
      </CustomWidthTooltip>
      <NoMaxWidthTooltip title={longText}>
        <Button sx={{ m: 1 }}>No wrapping</Button>
      </NoMaxWidthTooltip>
    </div>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `The Tooltip wraps long text by default to make it readable.`,
        },
      },
    },
  },
)

export const NotInteractiveTooltips = story<TooltipProps>(
  () => (
    <Tooltip title="Add" disableInteractive>
      <Button>Not interactive</Button>
    </Tooltip>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `Tooltips are interactive by default (to pass WCAG 2.1 success criterion 1.4.13). It won't close when the user hovers over the tooltip before the leaveDelay is expired. You can disable this behavior (thus failing the success criterion which is required to reach level AA) by passing disableInteractive.`,
        },
      },
    },
  },
)

export const DisabledTooltips = story<TooltipProps>(
  () => (
    <Tooltip title="You don't have permission to do this">
      <span>
        <Button disabled>A Disabled Button</Button>
      </span>
    </Tooltip>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `By default disabled elements like <button> do not trigger user interactions so a Tooltip will not activate on normal events like hover. To accommodate disabled elements, add a simple wrapper element, such as a span.`,
        },
      },
    },
  },
)

export const TransitionsTooltips = story<TooltipProps>(
  () => (
    <div>
      <Tooltip title="Add">
        <Button>Grow</Button>
      </Tooltip>
      <Tooltip
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        title="Add"
      >
        <Button>Fade</Button>
      </Tooltip>
      <Tooltip TransitionComponent={Zoom} title="Add">
        <Button>Zoom</Button>
      </Tooltip>
    </div>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `Use a different transition.`,
        },
      },
    },
  },
)

export const FollowCursorTooltips = story<TooltipProps>(
  () => (
    <Tooltip title="You don't have permission to do this" followCursor>
      <Box sx={{ bgcolor: 'text.disabled', color: 'background.paper', p: 2 }}>
        Disabled Action
      </Box>
    </Tooltip>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `You can enable the tooltip to follow the cursor by setting followCursor={true}.`,
        },
      },
    },
  },
)

export const DelayTooltips = story<TooltipProps>(
  () => (
    <Tooltip title="Add" enterDelay={500} leaveDelay={200}>
      <Button>[500ms, 200ms]</Button>
    </Tooltip>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `The tooltip is normally shown immediately when the user's mouse hovers over the element, and hides immediately when the user's mouse leaves. A delay in showing or hiding the tooltip can be added through the enterDelay and leaveDelay props, as shown in the Controlled Tooltips demo above. On mobile, the tooltip is displayed when the user longpresses the element and hides after a delay of 1500ms. You can disable this feature with the disableTouchListener prop.`,
        },
      },
    },
  },
)
