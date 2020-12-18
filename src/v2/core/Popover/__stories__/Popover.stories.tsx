import React from 'react'
import { action } from '@storybook/addon-actions'

import {
  A11yElement,
  DISABLED_A11Y,
  DISABLED_ACTIONS,
  meta,
  story,
} from '@monorail/helpers/storybook'
import META from '@monorail/v2/core/Popover/__stories__/Popover.meta.json'
import {
  Popover,
  PopoverProps,
  usePopover,
} from '@monorail/v2/core/Popover/Popover'

export default meta(META, {
  title: 'monorail/core/Popover',
  parameters: {
    a11y: {
      element: A11yElement.Popover,
    },
    docs: {
      inlineStories: false,
      iframeHeight: 200,
    },
  },
})

const BOTTOM_LEFT = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left',
  },
} as const

const TOP_RIGHT = {
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
  transformOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
} as const

//#region Helpers
const ExamplePopoverContent = () => (
  <div
    css={`
      padding: 8px 16px;
      display: flex;
      flex-direction: column;
    `}
  >
    The content of the Popover
  </div>
)

const Template = story<PopoverProps>(args => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)

  return (
    <>
      <div
        ref={el => setAnchorEl(el)}
        css={`
          background-color: blue;
          color: white;
          font-weight: bold;
          padding: 2px;
          margin: 64px;
          display: inline-block;
        `}
      >
        Anchor
      </div>
      <Popover
        anchorEl={anchorEl}
        onClose={action('onClose')}
        {...args}
        open={args.open === true && anchorEl !== null}
      >
        <ExamplePopoverContent />
      </Popover>
    </>
  )
})
//#endregion

//#region Hero story in Docs
export const Open = story(Template, {
  args: {
    ...BOTTOM_LEFT,
    open: true,
  },
})
//#endregion

//#region Distinct configurations
export const ClickToOpen = story<PopoverProps>(
  args => {
    const { triggerProps, popoverProps } = usePopover()

    return (
      <>
        <button {...triggerProps}>Click Me</button>
        <Popover {...popoverProps} {...args}>
          <ExamplePopoverContent />
        </Popover>
      </>
    )
  },
  {
    parameters: {
      ...DISABLED_ACTIONS,
      ...DISABLED_A11Y,
      docs: {
        inlineStories: true,
      },
    },
  },
)

export const TopRight = story(Template, {
  args: {
    ...TOP_RIGHT,
    open: true,
  },
})

export const TopRightWithGap = story(Template, {
  args: {
    ...TOP_RIGHT,
    open: true,
    margin: { top: -16, left: 16 },
  },
})
//#endregion
