import React from 'react'
import type { Story } from '@storybook/react'

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Popout,
  ResizableContainer,
  ResizableElement,
  ResizableHandle,
  Stack,
  Typography,
} from '@monorail/components'
import {
  ChevronDoubleLeft,
  ChevronDoubleRight,
  ExitToApp,
  OpenInNew,
  PictureInPicture,
} from '@monorail/components/icons'

export default {
  title: 'Patterns/ConsoleTask',
}

const Task1 = () => (
  <>
    <Typography variant="h2" pb={6}>
      Task Content
    </Typography>
    <Typography variant="body1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Typography>
    <Typography variant="body1">
      Mi quis hendrerit dolor magna eget est lorem. A arcu cursus vitae congue
      mauris rhoncus aenean vel.
    </Typography>
    <Typography variant="body1">
      Ut diam quam nulla porttitor massa id neque aliquam. Quis eleifend quam
      adipiscing vitae proin sagittis nisl rhoncus mattis. Est ultricies integer
      quis auctor elit sed.{' '}
    </Typography>
    <Typography variant="body1">
      Integer vitae justo eget magna fermentum iaculis eu non diam.
    </Typography>
  </>
)

const Task2 = () => (
  <>
    <Typography variant="h2" pb={6}>
      Task Content
    </Typography>
    <Typography variant="body1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Typography>
    <Typography variant="body1">
      Mi quis hendrerit dolor magna eget est lorem. A arcu cursus vitae congue
      mauris rhoncus aenean vel.
    </Typography>
    <Typography variant="body1">
      Ut diam quam nulla porttitor massa id neque aliquam. Quis eleifend quam
      adipiscing vitae proin sagittis nisl rhoncus mattis. Est ultricies integer
      quis auctor elit sed.{' '}
    </Typography>
    <Typography variant="body1">
      Integer vitae justo eget magna fermentum iaculis eu non diam.
    </Typography>
    <Typography variant="body1">
      Mi quis hendrerit dolor magna eget est lorem. A arcu cursus vitae congue
      mauris rhoncus aenean vel.
    </Typography>
    <Typography variant="body1">
      Ut diam quam nulla porttitor massa id neque aliquam. Quis eleifend quam
      adipiscing vitae proin sagittis nisl rhoncus mattis. Est ultricies integer
      quis auctor elit sed.{' '}
    </Typography>
    <Typography variant="body1">
      Integer vitae justo eget magna fermentum iaculis eu non diam.
    </Typography>
    <Typography variant="body1">
      Mi quis hendrerit dolor magna eget est lorem. A arcu cursus vitae congue
      mauris rhoncus aenean vel.
    </Typography>
    <Typography variant="body1">
      Ut diam quam nulla porttitor massa id neque aliquam. Quis eleifend quam
      adipiscing vitae proin sagittis nisl rhoncus mattis. Est ultricies integer
      quis auctor elit sed.{' '}
    </Typography>
    <Typography variant="body1">
      Integer vitae justo eget magna fermentum iaculis eu non diam.
    </Typography>
  </>
)

const Template: Story<{}> = () => {
  const [isPopoutOpen, setPopoutOpen] = React.useState(false)
  const [task, setTask] = React.useState(0)
  return (
    <>
      <Container component="header">
        <Grid container p={8}>
          <Grid item xs={8}>
            <Typography variant="h1">Task 2</Typography>
          </Grid>
          <Grid item xs={4} textAlign="right">
            <Button variant="outlined">Stop</Button>
          </Grid>
        </Grid>
        <Divider />
      </Container>

      <Container component="main" sx={{ pt: 4 }}>
        <ResizableContainer>
          <ResizableElement minSize={0.25}>
            <Box pr={8}>
              <Paper
                elevation={4}
                sx={[
                  {
                    '& > p': { py: 3 },
                    '&': { p: 3 },
                  },
                ]}
              >
                {task % 2 === 0 ? <Task1 /> : <Task2 />}
              </Paper>
              <Stack py={3} direction="row" justifyContent="space-between">
                <Button
                  onClick={() => setTask(t => t - 1)}
                  startIcon={<ChevronDoubleLeft />}
                  variant="outlined"
                >
                  Previous
                </Button>
                <Button
                  onClick={() => setTask(t => t + 1)}
                  endIcon={<ChevronDoubleRight />}
                >
                  Next
                </Button>
              </Stack>
            </Box>
          </ResizableElement>
          <ResizableHandle computeSize />
          <ResizableElement minSize={0.25}>
            <Box pl={8}>
              {!isPopoutOpen && (
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={theme => ({
                    height: 500,
                    backgroundColor: theme.palette.common.black,
                  })}
                >
                  <Typography
                    sx={theme => ({ color: theme.palette.common.white })}
                  >
                    Console
                  </Typography>
                  <IconButton
                    aria-label="Open Popout Console"
                    onClick={() => setPopoutOpen(true)}
                  >
                    <OpenInNew
                      sx={theme => ({ color: theme.palette.common.white })}
                    />
                  </IconButton>
                </Stack>
              )}
              {isPopoutOpen && (
                <Stack
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  sx={theme => ({
                    height: 500,
                    backgroundColor: theme.palette.default.lowEmphasis.light,
                  })}
                >
                  <Typography variant="subtitle1" color="text.secondary">
                    The console is open in an external window
                  </Typography>
                  <Button
                    variant="text"
                    onClick={() => setPopoutOpen(false)}
                    sx={{ mt: 4 }}
                    startIcon={<PictureInPicture />}
                  >
                    Redock Console
                  </Button>
                </Stack>
              )}
              <Popout
                title="Console"
                open={isPopoutOpen}
                onWindowClose={() => setPopoutOpen(false)}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={theme => ({
                    height: 500,
                    backgroundColor: theme.palette.common.black,
                  })}
                >
                  <Typography
                    sx={theme => ({ color: theme.palette.common.white })}
                  >
                    Console
                  </Typography>
                  <IconButton
                    aria-label="Close Popout Console"
                    onClick={() => setPopoutOpen(false)}
                  >
                    <ExitToApp
                      sx={theme => ({ color: theme.palette.common.white })}
                    />
                  </IconButton>
                </Stack>
              </Popout>
            </Box>
          </ResizableElement>
        </ResizableContainer>
      </Container>
    </>
  )
}

export const Default = Template.bind({})
