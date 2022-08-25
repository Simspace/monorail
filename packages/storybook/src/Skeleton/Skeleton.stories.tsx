// Edit this file to add new stories
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { styled } from '@mui/material'

import type { SkeletonProps, TypographyProps } from '@monorail/components'
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'
/**
 * Metadata for Skeleton stories - update/extend as needed
 */
export default { title: 'Feedback/Skeleton', component: Skeleton }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<SkeletonProps>(args => <Skeleton {...args} />, {
  args: {},
  muiName: 'MuiSkeleton',
})
/** Default story for Skeleton (edit/remove by hand if needed) */
export const Default = story(Template)

export const Variants = story<SkeletonProps>(
  () => {
    return (
      <Stack spacing={2}>
        <Skeleton variant="text" />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={118} />
      </Stack>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `The component supports 3 shape variants.`,
        },
      },
    },
  },
)

export const Animations = story<SkeletonProps>(
  () => {
    return (
      <Box sx={{ width: 300 }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `By default, the skeleton pulsates, but you can change the animation to a wave or disable it entirely.`,
        },
      },
    },
  },
)

type YouTube = 'src' | 'title' | 'channel' | 'views' | 'createdAt'

const data: Array<Record<YouTube, string>> = [
  {
    src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
    title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
    channel: 'Don Diablo',
    views: '396 k views',
    createdAt: 'a week ago',
  },
  {
    src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
    title: 'Queen - Greatest Hits',
    channel: 'Queen Official',
    views: '40 M views',
    createdAt: '3 years ago',
  },
  {
    src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
    title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
    channel: 'Calvin Harris',
    views: '130 M views',
    createdAt: '10 months ago',
  },
]

interface MediaProps {
  loading?: boolean
}

const YouTube = (props: MediaProps) => {
  const { loading = false } = props

  return (
    <Grid container wrap="nowrap">
      {(loading
        ? Array.from(new Array(3) as Array<Record<YouTube, string>>)
        : data
      ).map((item, index) => (
        <Box key={index} sx={{ width: 210, marginRight: 1, my: 10 }}>
          {item !== undefined ? (
            <img
              style={{ width: 210, height: 118 }}
              alt={item.title}
              src={item.src}
            />
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          )}
          {item !== undefined ? (
            <Box sx={{ pr: 4 }}>
              <Typography gutterBottom variant="body2">
                {item.title}
              </Typography>
              <Typography
                display="block"
                variant="caption"
                color="text.secondary"
              >
                {item.channel}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {`${item.views} • ${item.createdAt}`}
              </Typography>
            </Box>
          ) : (
            <Box sx={{ pt: 1 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
  )
}

export const PulsateExample = story<SkeletonProps>(() => {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <YouTube loading />
      <YouTube />
    </Box>
  )
})

const Facebook = (props: MediaProps) => {
  const { loading = false } = props

  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          ) : (
            <Avatar
              alt="Ted talk"
              src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
            />
          )
        }
        action={
          loading ? null : (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            'Ted'
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            '5 hours ago'
          )
        }
      />
      {loading ? (
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      ) : (
        <CardMedia
          component="img"
          height="140"
          image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
          alt="Nicola Sturgeon on a TED talk stage"
        />
      )}
      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          <Typography variant="body2" color="text.secondary" component="p">
            {
              "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
            }
          </Typography>
        )}
      </CardContent>
    </Card>
  )
}

export const WaveExample = story<SkeletonProps>(() => {
  return (
    <div>
      <Facebook loading />
      <Facebook />
    </div>
  )
})

const variants = ['h1', 'h3', 'body1', 'caption'] as ReadonlyArray<
  TypographyProps['variant']
>

const TypographyDemo = (props: { loading?: boolean }) => {
  const { loading = false } = props

  return (
    <div>
      {variants.map(variant => (
        <Typography component="div" key={variant} variant={variant}>
          {loading ? <Skeleton /> : variant}
        </Typography>
      ))}
    </div>
  )
}

export const InferringDimensions = story<SkeletonProps>(
  () => {
    return (
      <Grid container spacing={8}>
        <Grid item xs>
          <TypographyDemo loading />
        </Grid>
        <Grid item xs>
          <TypographyDemo />
        </Grid>
      </Grid>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `In addition to accepting width and height props, the component can also infer the dimensions.

It works well when it comes to typography as its height is set using em units.`,
        },
      },
    },
  },
)

const Image = styled('img')({
  width: '100%',
})

const SkeletonChildrenDemo = (props: { loading?: boolean }) => {
  const { loading = false } = props

  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ margin: 1 }}>
          {loading ? (
            <Skeleton variant="circular">
              <Avatar />
            </Skeleton>
          ) : (
            <Avatar
              alt="TED"
              src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
            />
          )}
        </Box>
        <Box sx={{ width: '100%' }}>
          {loading ? (
            <Skeleton width="100%">
              <Typography>.</Typography>
            </Skeleton>
          ) : (
            <Typography>Ted</Typography>
          )}
        </Box>
      </Box>
      {loading ? (
        <Skeleton variant="rectangular" width="100%">
          <div style={{ paddingTop: '57%' }} />
        </Skeleton>
      ) : (
        <Image
          src="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
          alt=""
        />
      )}
    </div>
  )
}

export const SkeletonChildren = story<SkeletonProps>(
  () => {
    return (
      <Grid container spacing={8}>
        <Grid item xs>
          <SkeletonChildrenDemo loading />
        </Grid>
        <Grid item xs>
          <SkeletonChildrenDemo />
        </Grid>
      </Grid>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `But when it comes to other components, you may not want to repeat the width and height. In these instances, you can pass children and it will infer its width and height from them.`,
        },
      },
    },
  },
)

export const SkeletonColor = story<SkeletonProps>(
  () => {
    return (
      <Box
        sx={{
          bgcolor: '#121212',
          p: 8,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Skeleton
          sx={{ bgcolor: 'grey.800' }}
          variant="rectangular"
          width={210}
          height={118}
        />
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `The color of the component can be customized by changing its background-color CSS property. This is especially useful when on a black background (as the skeleton will otherwise be invisible).`,
        },
      },
    },
  },
)

export const Accessibility = story<SkeletonProps>(
  () => {
    return <></>
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Skeleton screens provide an alternative to the traditional spinner method. Rather than showing an abstract widget, skeleton screens create anticipation of what is to come and reduce cognitive load.

The background color of the skeleton uses the least amount of luminance to be visible in good conditions (good ambient light, good screen, no visual impairments).

### ARIA
None.

### Keyboard
The skeleton is not focusable.`,
        },
      },
    },
  },
)
