import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'

import {
  A11yElement,
  DISABLED_A11Y,
  DISABLED_ACTIONS,
  DISABLED_ARG_TYPE,
  meta,
  story,
} from '@monorail/helpers/storybook'
import META from '@monorail/v2/core/Modal/__stories__/Modal.meta.json'
import { Modal, ModalProps } from '@monorail/v2/core/Modal/Modal'

export default meta(META, {
  title: 'monorail/core/Modal',
  argTypes: {
    ref: DISABLED_ARG_TYPE,
  },
  parameters: {
    a11y: {
      element: A11yElement.Modal,
    },
    docs: {
      inlineStories: false,
      iframeHeight: 200,
    },
  },
})

const BASIC_PROPS = {
  'aria-label': 'Aria Label (needed for role="dialog")',
  onClose: action('onClose'),
}

//#region Helpers
const ExampleModalContent = () => (
  <div
    css={`
      padding: 8px 16px;
      display: flex;
      flex-direction: column;
    `}
  >
    The content of the modal
  </div>
)

const OpenTemplate = story<ModalProps>(
  args => (
    <>
      <Modal {...args} open>
        <ExampleModalContent />
      </Modal>
    </>
  ),
  {
    args: {
      ...BASIC_PROPS,
    },
  },
)

const ClickToOpenTemplate = story<ModalProps>(
  args => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <>
        <button onClick={() => setIsOpen(true)}>Click Me</button>
        <Modal {...args} open={isOpen} onClose={() => setIsOpen(false)}>
          <ExampleModalContent />
        </Modal>
      </>
    )
  },
  {
    args: {
      ...BASIC_PROPS,
    },
  },
)
//#endregion

//#region Hero story in Docs
export const Open = story(OpenTemplate)
//#endregion

//#region Distinct configurations
export const ClickToOpen = story(ClickToOpenTemplate, {
  parameters: {
    ...DISABLED_ACTIONS,
    ...DISABLED_A11Y,
    docs: {
      inlineStories: true,
    },
  },
})

export const Fullscreen = story(OpenTemplate, {
  args: {
    fullScreen: true,
  },
})

export const DisableEscape = story(ClickToOpenTemplate, {
  args: {
    disableEscapeKeyDown: true,
  },
  parameters: {
    ...DISABLED_A11Y,
  },
})
//#endregion
