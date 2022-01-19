// Edit this file to add new stories
import React from 'react'
import { CssBaseline, styled, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

import { story } from '../../../__tests__/helpers/storybook'
import { Box } from '../../Box/Box'
import { Button } from '../../Button/Button'
import { Skeleton } from '../../Skeleton/Skeleton'
import { SwipeableDrawer, SwipeableDrawerProps } from '../SwipeableDrawer'
import { defaultStoryMeta } from './SwipeableDrawer.stories.gen'

/**
 * Metadata for SwipeableDrawer stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: 'Navigation/Drawer/SwipeableDrawer',
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<SwipeableDrawerProps>(
  args => {
    const [open, setOpen] = React.useState(false)
    return (
      <>
        <Typography>
          SwipableDrawer adds the ability to handle mobile touch/swipe gestures
          with the Drawer. View this example in a mobile device emulator (e.g.
          Chrome dev tools). Click `Toggle` to open the Drawer, then swipe in
          the opposite direction or click the backdrop to close.
        </Typography>
        <Button onClick={() => setOpen(!open)}>Toggle</Button>
        <SwipeableDrawer
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          {...args}
        >
          {args.children}
          <Typography>Click or Swipe to close</Typography>
        </SwipeableDrawer>
      </>
    )
  },
  { args: { anchor: 'left' } },
)

/** Default story for SwipeableDrawer (edit/remove by hand if needed) */
export const Default = story(Template)

const drawerBleeding = 56

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
}

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light'
      ? grey[100]
      : theme.palette.background.default,
}))

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}))

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}))

export const SwipeableEdgeDrawer = story<Props>(
  (props: Props) => {
    const { window } = props

    const [visible, setVisible] = React.useState(false)

    const [open, setOpen] = React.useState(false)

    // This is used only for the example
    const container =
      window !== undefined ? () => window().document.body : undefined

    return (
      <Root>
        <CssBaseline />
        {/*
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
        */}
        <style type="text/css">{`
          /* Scope these styles to this example only. This is very hacky and is just to serve as a demonstration. */
          .swipable-edge-drawer.MuiDrawer-root > .MuiPaper-root {
            height: calc(50% - ${drawerBleeding}px);
            overflow: visible;
          }
      `}</style>
        <Box sx={{ textAlign: 'center', pt: 1 }}>
          <Typography>
            View this example in a mobile device emulator (e.g. Chrome dev
            tools). Click the `Show Drawer` button to show the drawer at the
            bottom of the page, then click `Open Drawer` or swipe up to open it.
            Swipe down or click the backdrop to close it.
          </Typography>
          <Button onClick={() => setVisible(!visible)}>
            {visible ? 'Hide' : 'Show'} Drawer
          </Button>
          {visible && (
            <Button onClick={() => setOpen(!open)}>Toggle Drawer</Button>
          )}
        </Box>
        {visible && (
          <SwipeableDrawer
            className="swipable-edge-drawer"
            container={container}
            anchor="bottom"
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            swipeAreaWidth={drawerBleeding}
            disableSwipeToOpen={false}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <StyledBox
              sx={{
                position: 'absolute',
                top: -drawerBleeding,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                visibility: 'visible',
                right: 0,
                left: 0,
              }}
            >
              <Puller />
              <Typography sx={{ p: 2, color: 'text.secondary' }}>
                51 results
              </Typography>
            </StyledBox>
            <StyledBox
              sx={{
                px: 2,
                pb: 2,
                height: '100%',
                overflow: 'auto',
              }}
            >
              <Skeleton variant="rectangular" height="100%" />
            </StyledBox>
          </SwipeableDrawer>
        )}
      </Root>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `You can configure the SwipeableDrawer to have a visible edge when closed.

If you are on a desktop, you can toggle the drawer with the "OPEN" button. If you are on mobile, you can open the demo in CodeSandbox ("edit" icon) and swipe.`,
        },
      },
    },
  },
)
