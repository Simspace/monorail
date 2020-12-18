import React from 'react'
import { action } from '@storybook/addon-actions'

import {
  A11yElement,
  DISABLED_A11Y,
  meta,
  story,
} from '@monorail/helpers/storybook'
import META from '@monorail/v2/components/AlertModal/__stories__/AlertModal.meta.json'
import {
  AlertModal,
  AlertModalProps,
} from '@monorail/v2/components/AlertModal/AlertModal'

export default meta(META, {
  title: 'monorail/component/AlertModal',
  parameters: {
    a11y: {
      element: A11yElement.Modal,
    },
    docs: {
      inlineStories: false,
      iframeHeight: 300,
    },
  },
})

const BASIC_PROP_DATA = {
  title: 'Title',
  description: 'This is a description.',
  primaryAction: 'primary',
  secondaryAction: 'secondary',
} as const

const OpenTemplate = story<AlertModalProps>(
  args => <AlertModal open onClose={action('onClose')} {...args} />,
  {
    args: { open: true },
  },
)

const BasicOpenTemplate = story(OpenTemplate, {
  args: { ...BASIC_PROP_DATA },
})

//#region Hero story in Docs
export const Open = story(BasicOpenTemplate)
//#endregion

//#region Distinct configurations
export const ClickToOpen = story<AlertModalProps>(
  args => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
      <>
        <button onClick={() => setIsOpen(true)}>Click Me</button>
        <AlertModal
          {...args}
          open={args.open || isOpen}
          onClose={() => {
            action('onClose')()
            setIsOpen(false)
          }}
        />
      </>
    )
  },
  {
    args: { ...BASIC_PROP_DATA },
    parameters: {
      ...DISABLED_A11Y,
      docs: {
        inlineStories: true,
      },
    },
  },
)

export const FewerItems = story(OpenTemplate, {
  args: {
    description: BASIC_PROP_DATA.description,
    primaryAction: BASIC_PROP_DATA.primaryAction,
  },
})
//#endregion

//#region Prop showcases
export const InfoType = story(BasicOpenTemplate, {
  args: { type: 'info' },
  storyName: 'Type: Info',
})

export const WarningType = story(BasicOpenTemplate, {
  args: { type: 'warning' },
  storyName: 'Type: Warning',
})

export const ErrorType = story(BasicOpenTemplate, {
  args: { type: 'error' },
  storyName: 'Type: Error',
})

export const SuccessType = story(BasicOpenTemplate, {
  args: { type: 'success' },
  storyName: 'Type: Success',
})
//#endregion
