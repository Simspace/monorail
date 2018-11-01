import { storiesOf } from '@storybook/react'
import React from 'react'
import { css } from 'styled-components'

import { Fragment } from 'src/common/components/Fragment'
import {
  ListContainer,
  ListItem,
} from 'list/List'

const filename = __filename.slice(__filename.indexOf('src/'))

const storybook = storiesOf(filename, module)

const stories = [
  {
    storyName: 'List',
    getStory: () => (
      <Fragment>
        <ListContainer
          css={css`
            width: 256px;
          `}
        >
          <ListItem>List Item</ListItem>
          <ListItem>
            Demolitione barbatus eleates est. Demolitione barbatus eleates est.
            Demolitione barbatus eleates est.
          </ListItem>
          <ListItem>List Item</ListItem>
        </ListContainer>

        <ListContainer
          css={css`
            width: 256px;
          `}
        >
          <ListItem leftIcon="add">List Item</ListItem>
          <ListItem leftIcon="add">
            Demolitione barbatus eleates est. Demolitione barbatus eleates est.
            Demolitione barbatus eleates est.
          </ListItem>
          <ListItem leftIcon="add">List Item</ListItem>
        </ListContainer>

        <ListContainer
          css={css`
            width: 256px;
          `}
        >
          <ListItem dense>List Item</ListItem>
          <ListItem dense>
            Demolitione barbatus eleates est. Demolitione barbatus eleates est.
            Demolitione barbatus eleates est.
          </ListItem>
          <ListItem dense>List Item</ListItem>
        </ListContainer>

        <ListContainer
          css={css`
            width: 256px;
          `}
        >
          <ListItem leftIcon="add" dense>
            List Item
          </ListItem>
          <ListItem leftIcon="add" dense>
            Demolitione barbatus eleates est. Demolitione barbatus eleates est.
            Demolitione barbatus eleates est.
          </ListItem>
          <ListItem leftIcon="add" dense>
            List Item
          </ListItem>
        </ListContainer>
      </Fragment>
    ),
  },
]

stories.forEach(story => storybook.add(story.storyName, story.getStory))
