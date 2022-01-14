// Edit this file to add new stories
import React from 'react'
import { styled } from '@mui/material/styles'

import { story } from '../../../__tests__/helpers/storybook'
import { Avatar } from '../../Avatar/Avatar'
import { Box } from '../../Box/Box'
import { Paper } from '../../Paper/Paper'
import { Typography } from '../../Typography/Typography'
import { Grid, GridProps } from '../Grid'
import { defaultStoryMeta } from './Grid.stories.gen'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: `1px solid ${theme.palette.grey[300]}`,
}))

/**
 * Metadata for Grid stories - update/extend as needed
 */
export default { ...defaultStoryMeta, title: 'Layout/Grid' }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<GridProps>(
  args => (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} {...args}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  ),
  { args: { container: true, spacing: 2 } },
)
/** Default story for Grid */
export const Default = story(Template)

export const BasicGrid = story(Template, {
  parameters: {
    docs: {
      description: {
        story: `
Column widths are integer values between 1 and 12; they apply at any breakpoint and indicate how many columns are occupied by the component.

A value given to a breakpoint applies to all the other breakpoints wider than it (unless overridden, as you can read later in this page). For example, xs={12} sizes a component to occupy the whole viewport width regardless of its size.
`,
      },
    },
  },
})

export const MultipleBreakpoints = story<GridProps>(
  () => (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
    </Box>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `Components may have multiple widths defined, causing the layout to change at the defined breakpoint. Width values given to larger breakpoints override those given to smaller breakpoints.

For example, xs={12} sm={6} sizes a component to occupy half of the viewport width (6 columns) when viewport width is 600 or more pixels. For smaller viewports, the component fills all 12 available columns.`,
        },
      },
    },
  },
)

export const Spacing = story<GridProps>(
  () => (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={3}>
          {[0, 1, 2].map(value => (
            <Grid key={value} item>
              <Item sx={{ height: 140, width: 100 }} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ),

  {
    parameters: {
      docs: {
        description: {
          story: `To control space between children, use the spacing prop. The spacing value can be any positive number, including decimals and any string. The prop is converted into a CSS property using the theme.spacing() helper.`,
        },
      },
    },
  },
)

export const RowAndColumnSpacing = story<GridProps>(
  () => (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        <Item>1</Item>
      </Grid>
      <Grid item xs={6}>
        <Item>2</Item>
      </Grid>
      <Grid item xs={6}>
        <Item>3</Item>
      </Grid>
      <Grid item xs={6}>
        <Item>4</Item>
      </Grid>
    </Grid>
  ),

  {
    parameters: {
      docs: {
        description: {
          story: `The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. It's similar to the row-gap and column-gap properties of CSS Grid.`,
        },
      },
    },
  },
)

export const AutoSizing = story<GridProps>(
  () => (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=6</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
      </Grid>
    </Box>
  ),

  {
    parameters: {
      docs: {
        description: {
          story: `The Auto-layout makes the items equitably share the available space. That also means you can set the width of one item and the others will automatically resize around it.`,
        },
      },
    },
  },
)

export const NestedGrid = story<GridProps>(
  () => {
    const FormRow = () => (
      <React.Fragment>
        <Grid item xs={4}>
          <Item>Item</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Item</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Item</Item>
        </Grid>
      </React.Fragment>
    )

    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </Box>
    )
  },

  {
    parameters: {
      docs: {
        description: {
          story: `The container and item props are two independent booleans; they can be combined to allow a Grid component to be both a flex container and child.
          
Defining an explicit width to a Grid element that is flex container, flex item, and has spacing at the same time lead to unexpected behavior, avoid doing it. If you must, remove one of the properties.
          `,
        },
      },
    },
  },
)

export const Columns = story<GridProps>(
  () => (
    <Grid container spacing={2} columns={16}>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
    </Grid>
  ),

  {
    parameters: {
      docs: {
        description: {
          story: `You can change the default number of columns (12) with the columns prop.`,
        },
      },
    },
  },
)

export const Limitations = story<GridProps>(
  () => {
    const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `
    return (
      <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
        <Item sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>W</Avatar>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>{message}</Typography>
            </Grid>
          </Grid>
        </Item>
        <Item sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>W</Avatar>
            </Grid>
            <Grid item xs>
              <Typography noWrap>{message}</Typography>
            </Grid>
          </Grid>
        </Item>
        <Item sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>W</Avatar>
            </Grid>
            <Grid item xs>
              <Typography>{message}</Typography>
            </Grid>
          </Grid>
        </Item>
      </Box>
    )
  },

  {
    parameters: {
      docs: {
        description: {
          story: `
#### Negative margin
The spacing between items is implemented with a negative margin. This might lead to unexpected behaviors. For instance, to apply a background color, you need to apply display: flex; to the parent.

#### white-space: nowrap;
The initial setting on flex items is min-width: auto. It's causing a positioning conflict when the children is using white-space: nowrap;. You can experience the issue with:`,
        },
      },
    },
  },
)

export const CSSGridLayout = story<GridProps>(
  () => (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
      <Box gridColumn="span 8">
        <Item>xs=8</Item>
      </Box>
      <Box gridColumn="span 4">
        <Item>xs=4</Item>
      </Box>
      <Box gridColumn="span 4">
        <Item>xs=4</Item>
      </Box>
      <Box gridColumn="span 8">
        <Item>xs=8</Item>
      </Box>
    </Box>
  ),

  {
    parameters: {
      docs: {
        description: {
          story: `The Grid component is using CSS flexbox internally. But as seen below, you can easily use the system and CSS Grid to layout your pages.`,
        },
      },
    },
  },
)
