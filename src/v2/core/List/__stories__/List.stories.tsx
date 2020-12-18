import React from 'react'
import { action } from '@storybook/addon-actions'
import { range } from 'fp-ts/lib/ReadonlyArray'

import {
  DISABLED_ACTIONS,
  DISABLED_CONTROLS,
  meta,
  story,
} from '@monorail/helpers/storybook'
import META from '@monorail/v2/core/List/__stories__/List.meta.json'
import { List, ListProps } from '@monorail/v2/core/List/List'
import { ListItem, UnstyledListItem } from '@monorail/v2/core/List/ListItem'
import { ListItemIcon } from '@monorail/v2/core/List/ListItemIcon'
import { ListItemSecondaryAction } from '@monorail/v2/core/List/ListItemSecondaryAction'
import { ListItemText } from '@monorail/v2/core/List/ListItemText'
import { ListSubheader } from '@monorail/v2/core/List/ListSubheader'
import * as Icons from '@monorail/v2/icons/Icons'

export default meta(META, {
  title: 'monorail/core/List',
})

const Template = story<ListProps>(args => {
  return <List {...args} />
})

//#region Hero story in Docs
export const UnstyledList = story(Template, {
  parameters: {
    ...DISABLED_ACTIONS,
    layout: 'fullscreen',
  },
  args: {
    disablePadding: true,
    children: (
      <>
        <UnstyledListItem>Foo</UnstyledListItem>
        <UnstyledListItem>Bar</UnstyledListItem>
        <UnstyledListItem>Baz</UnstyledListItem>
      </>
    ),
  },
})
//#endregion

//#region Distinct configurations
export const EmptyList = story(Template, {
  parameters: {
    ...DISABLED_ACTIONS,
  },
})

export const TextList = story(Template, {
  parameters: {
    ...DISABLED_ACTIONS,
  },
  args: {
    children: (
      <>
        <ListItem>
          <ListItemText primary="Hello!" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Sorry!" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Puppy!" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Hello!" />
        </ListItem>
      </>
    ),
  },
})

export const TextListWithIcons = story(Template, {
  parameters: {
    ...DISABLED_ACTIONS,
  },
  args: {
    children: (
      <>
        <ListItem>
          <ListItemIcon>
            <Icons.Academy />
          </ListItemIcon>
          <ListItemText primary="Hello!" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Icons.Apps />
          </ListItemIcon>
          <ListItemText primary="Sorry!" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Icons.Warning />
          </ListItemIcon>
          <ListItemText primary="Puppy!" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Icons.BarChart />
          </ListItemIcon>
          <ListItemText primary="Hello!" />
        </ListItem>
      </>
    ),
  },
})

export const WithInset = story(Template, {
  parameters: {
    ...DISABLED_ACTIONS,
  },
  args: {
    children: (
      <>
        <ListItem>
          <ListItemIcon>
            <Icons.Academy />
          </ListItemIcon>
          <ListItemText primary="Hello!" />
        </ListItem>
        <ListItem>
          <ListItemText inset primary="No Icon + Inset" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Icons.Warning />
          </ListItemIcon>
          <ListItemText
            inset
            primary="You can use inset + icon, but it will look weird!"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Icons.AspectRatio />
          </ListItemIcon>
          <ListItemText primary="Hello!" />
        </ListItem>
        <ListItem>
          <ListItemText primary="No Icon + No inset" />
        </ListItem>
        <ListItem>
          <ListItemText inset primary="No Icon + Inset" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Icons.CheckCircle />
          </ListItemIcon>
          <ListItemText primary="Hello!" />
        </ListItem>
      </>
    ),
  },
})

export const AsButtons = story(Template, {
  args: {
    children: (
      <>
        <ListItem button onClick={action('onClick')}>
          <ListItemIcon>
            <Icons.Academy />
          </ListItemIcon>
          <ListItemText primary="Hello!" />
        </ListItem>
        <ListItem button onClick={action('onClick')}>
          <ListItemText inset primary="Sorry!" />
        </ListItem>
        <ListItem button onClick={action('onClick')}>
          <ListItemIcon>
            <Icons.Warning />
          </ListItemIcon>
          <ListItemText primary="Puppy!" />
        </ListItem>
        <ListItem button onClick={action('onClick')}>
          <ListItemText inset primary="Hello!" />
        </ListItem>
      </>
    ),
  },
})

export const WithSecondaryActions = story(Template, {
  args: {
    children: (
      <>
        <ListItem button onClick={action('onClick')}>
          <ListItemIcon>
            <Icons.Academy />
          </ListItemIcon>
          <ListItemText primary="Hello!" />
          <ListItemSecondaryAction>
            <Icons.CheckStar />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem button onClick={action('onClick')}>
          <ListItemText inset primary="Sorry!" />
          <ListItemSecondaryAction>
            <Icons.CheckStar />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem button onClick={action('onClick')}>
          <ListItemIcon>
            <Icons.Warning />
          </ListItemIcon>
          <ListItemText primary="Puppy!" />
          <ListItemSecondaryAction>
            <Icons.CheckStar />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem button onClick={action('onClick')}>
          <ListItemText inset primary="Hello!" />
          <ListItemSecondaryAction>
            <Icons.CheckStar />
          </ListItemSecondaryAction>
        </ListItem>
      </>
    ),
  },
})

export const WithTextOverflow = story(Template, {
  args: {
    children: (
      <>
        <ListItem button onClick={action('onClick')}>
          <ListItemIcon>
            <Icons.Academy />
          </ListItemIcon>
          <ListItemText
            primaryTextProps={{ noWrap: true }}
            primary="Hello! I am an item that has a lot of text to display, so much that it will likely cause the text to grow outside its bounding box. Hello! I am an item that has a lot of text to display, so much that it will likely cause the text to grow outside its bounding box. "
          />
          <ListItemSecondaryAction>
            <Icons.CheckStar />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem button onClick={action('onClick')}>
          <ListItemIcon>
            <Icons.CheckStar />
          </ListItemIcon>
          <ListItemText
            primaryTextProps={{ noWrap: true }}
            primary="Hello! I am an item that has a lot of text to display, so much that it will likely cause the text to grow outside its bounding box. Hello! I am an item that has a lot of text to display, so much that it will likely cause the text to grow outside its bounding box. "
          />
        </ListItem>
      </>
    ),
  },
})

export const WithMultiLine = story(Template, {
  args: {
    children: (
      <>
        <ListItem button onClick={action('onClick')}>
          <ListItemIcon>
            <Icons.Academy />
          </ListItemIcon>
          <ListItemText primary="Hello! I am an item that has a lot of text to display, so much that it will likely cause the text to grow outside its bounding box. Hello! I am an item that has a lot of text to display, so much that it will likely cause the text to grow outside its bounding box. " />
          <ListItemSecondaryAction>
            <Icons.CheckStar />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem button onClick={action('onClick')}>
          <ListItemIcon>
            <Icons.CheckStar />
          </ListItemIcon>
          <ListItemText primary="Hello! I am an item that has a lot of text to display, so much that it will likely cause the text to grow outside its bounding box. Hello! I am an item that has a lot of text to display, so much that it will likely cause the text to grow outside its bounding box. " />
        </ListItem>
      </>
    ),
  },
})

export const WithSubHeaders = story(
  () => {
    const SubheaderItem = () => (
      <ListItem button onClick={action('onClick')}>
        <ListItemIcon>
          <Icons.Academy />
        </ListItemIcon>
        <ListItemText
          primaryTextProps={{ noWrap: true }}
          primary="Hello! I am an item that has a lot of text to display, so much that it will likely cause the text to grow outside its bounding box. Hello! I am an item that has a lot of text to display, so much that it will likely cause the text to grow outside its bounding box. "
        />
        <ListItemSecondaryAction>
          <Icons.CheckStar />
        </ListItemSecondaryAction>
      </ListItem>
    )

    return (
      <>
        {range(0, 10).map(i => (
          <List
            key={i}
            subheader={<ListSubheader>List subheader</ListSubheader>}
          >
            {range(0, 10).map(i => (
              <SubheaderItem key={i} />
            ))}
          </List>
        ))}
      </>
    )
  },
  {
    parameters: {
      ...DISABLED_CONTROLS,
      ...DISABLED_ACTIONS,
    },
  },
)
//#endregion
