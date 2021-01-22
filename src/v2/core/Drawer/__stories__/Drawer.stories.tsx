import React from 'react'

import { styled } from '@monorail/exports'
import { A11yElement, meta, story } from '@monorail/helpers/storybook'
import META from '@monorail/v2/core/Drawer/__stories__/Drawer.meta.json'
import { Drawer, DrawerProps } from '@monorail/v2/core/Drawer/Drawer'

export default meta(META, {
  title: 'monorail/core/Drawer',
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

const PaddedDiv = styled.div`
  padding: 16px;
`

const DrawerTestContent = () => <PaddedDiv>Hello!</PaddedDiv>

const Template = story<DrawerProps>(args => (
  <Drawer {...args}>
    <DrawerTestContent />
  </Drawer>
))

//#region Hero story in Docs
export const Open = story(Template, { args: { open: true } })

export const Toggled = story(() => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open</button>
      <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
        <DrawerTestContent />
      </Drawer>
    </>
  )
})
//#endregion
