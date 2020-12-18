import React from 'react'

import { meta, NO_GENERATED_META } from '@monorail/helpers/storybook'
import * as Icons from '@monorail/v2/icons/Icons'

export default meta(NO_GENERATED_META, {
  title: 'monorail/core/Icons',
  parameters: {
    docsOnly: true, // Only show Docs for this single-story item
  },
})

/**
 * This is the only story.
 * It is a bit ugly, but serves the purpose well of listing all Icons.
 */
export const All = () => {
  return (
    <div
      css={`
        display: flex;
        flex-direction: column;
        gap: 24px;
        font-size: 48px;
      `}
    >
      {Object.keys(Icons)
        .sort()
        .map((icon, index) => (
          <div
            key={index}
            css={`
              display: flex;
              align-items: center;
              gap: 36px;
            `}
          >
            {// eslint-disable-next-line
            React.createElement((Icons as any)[icon], {})}
            <code
              css={`
                font-size: 14px;
              `}
            >
              {icon}
            </code>
          </div>
        ))}
    </div>
  )
}
