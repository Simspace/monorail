import { storiesOf } from '@storybook/react'
import React from 'react'
import { css } from 'styled-components'

import { Fragment } from 'src/common/components/Fragment'

import {
  BBModalBackground,
  BBModalFooter,
  BBModalHeader,
} from 'modals/Modals'
import { Button } from '../buttons/Button'
import { Search } from '../inputs/Search'
import { ButtonDisplay } from 'buttons/buttonTypes'

const filename = __filename.slice(__filename.indexOf('src/'))

const storybook = storiesOf(filename, module)

const stories = [
  {
    storyName: 'Modal',
    getStory: () => (
      <Fragment>
        <BBModalBackground
          css={css`
            margin: 16px;
          `}
          mini
        >
          <BBModalHeader mini iconLeft="add" title="Modal Title" />
          <p style={{ margin: '12px' }}>Modal Content</p>
          <BBModalFooter>
            <Button
              display={ButtonDisplay.Chromeless}
              css={css`
                margin-right: 8px;
              `}
            >
              Cancel
            </Button>
            <Button>Submit</Button>
          </BBModalFooter>
        </BBModalBackground>

        <BBModalBackground
          css={css`
            margin: 16px;
          `}
          mini
        >
          <BBModalHeader mini iconLeft="add" title="Modal Title">
            <Search darkMode value="" onChange={() => ''} />
          </BBModalHeader>
          <p style={{ margin: '12px' }}>Modal Content</p>
          <BBModalFooter>
            <Button
              display={ButtonDisplay.Chromeless}
              css={css`
                margin-right: 8px;
              `}
            >
              Cancel
            </Button>
            <Button>Submit</Button>
          </BBModalFooter>
        </BBModalBackground>

        <BBModalBackground
          css={css`
            margin: 16px;
          `}
        >
          <BBModalHeader iconLeft="add" title="Modal Title" />
          <p style={{ margin: '12px' }}>Modal Content</p>
          <BBModalFooter>
            <Button
              display={ButtonDisplay.Chromeless}
              css={css`
                margin-right: 8px;
              `}
            >
              Cancel
            </Button>
            <Button>Submit</Button>
          </BBModalFooter>
        </BBModalBackground>

        <BBModalBackground
          css={css`
            margin: 16px;
          `}
        >
          <BBModalHeader iconLeft="add" title="Modal Title">
            <Search darkMode value="" onChange={() => ''} />
          </BBModalHeader>
          <p style={{ margin: '12px' }}>Modal Content</p>
          <BBModalFooter>
            <Button
              display={ButtonDisplay.Chromeless}
              css={css`
                margin-right: 8px;
              `}
            >
              Cancel
            </Button>
            <Button>Submit</Button>
          </BBModalFooter>
        </BBModalBackground>
      </Fragment>
    ),
  },
]

stories.forEach(story => storybook.add(story.storyName, story.getStory))
