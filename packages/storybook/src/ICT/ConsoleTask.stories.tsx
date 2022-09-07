import React from 'react'
import type { Story } from '@storybook/react'

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  ResizableContainer,
  ResizableElement,
  ResizeHandle,
  Stack,
  Typography,
} from '@monorail/components'

export default {
  title: 'ICT/ConsoleTask',
}

const Template: Story<{}> = () => (
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

    <Container component="main">
      <ResizableContainer>
        <ResizableElement minSize={0.25}>
          <Box p={6}>
            <Paper
              elevation={2}
              sx={[
                {
                  '& > p': { py: 3 },
                  '&': { p: 3 },
                },
              ]}
            >
              <Typography variant="h2" pb={6}>
                Task Content
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
              <Typography variant="body1">
                Mi quis hendrerit dolor magna eget est lorem. A arcu cursus
                vitae congue mauris rhoncus aenean vel.
              </Typography>
              <Typography variant="body1">
                Ut diam quam nulla porttitor massa id neque aliquam. Quis
                eleifend quam adipiscing vitae proin sagittis nisl rhoncus
                mattis. Est ultricies integer quis auctor elit sed.{' '}
              </Typography>
              <Typography variant="body1">
                Integer vitae justo eget magna fermentum iaculis eu non diam.
              </Typography>
            </Paper>
            <Stack py={3} direction="row" justifyContent="space-between">
              <Button variant="outlined">&laquo; Previous</Button>
              <Button>Next &raquo;</Button>
            </Stack>
          </Box>
        </ResizableElement>
        <ResizeHandle />
        <ResizableElement minSize={0.25}>
          <Box flex="0 0 100%" p={6}>
            <Box
              sx={theme => ({
                height: 500,
                backgroundColor: theme.palette.common.black,
              })}
            >
              <Typography sx={theme => ({ color: theme.palette.common.white })}>
                Console
              </Typography>
            </Box>
          </Box>
        </ResizableElement>
      </ResizableContainer>
    </Container>
  </>
)

export const Default = Template.bind({})