import { storiesOf } from '@storybook/react'
import React from 'react'

import { Fragment } from 'src/common/components/Fragment'
import { LogoBox } from 'brand/LogoBox'
import { SimSpaceLogo } from 'brand/Logo'

const filename = __filename.slice(__filename.indexOf('src/'))

const storybook = storiesOf(filename, module)

const stories = [
  {
    storyName: 'LogoBox',
    getStory: () => (
      <Fragment>
        <div style={{ position: 'relative', height: 56 }}>
          <LogoBox>
            <SimSpaceLogo />
          </LogoBox>
        </div>
      </Fragment>
    ),
  },
]

stories.forEach(story => storybook.add(story.storyName, story.getStory))
