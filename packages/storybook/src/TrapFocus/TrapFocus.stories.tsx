import React from 'react'
import Box from '@mui/material/Box'
import Portal from '@mui/material/Portal'

import type { FocusTrapProps } from '@monorail/components'
import { FocusTrap } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Utils/FocusTrap' }

const Template = story<Partial<FocusTrapProps>>(
  args => {
    const [open, setOpen] = React.useState(args.open ?? false)

    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <button type="button" onClick={() => setOpen(true)}>
          Open
        </button>
        {open && (
          <FocusTrap open={open}>
            <Box tabIndex={-1} sx={{ mt: 1, p: 1 }}>
              <label>
                First name: <input type="text" />
              </label>
              <br />
              <button type="button" onClick={() => setOpen(false)}>
                Close
              </button>
            </Box>
          </FocusTrap>
        )}
      </Box>
    )
  },
  { args: { open: false } },
)

export const Default = story(Template, {
  args: { open: false },
  parameters: {
    docs: {
      description: {
        component: `
FocusTrap is a component that manages focus for its descendants. This is useful when implementing overlays such as modal dialogs, which should not allow the focus to escape while open.

When open={true} the trap is enabled, and pressing Tab or Shift+Tab will rotate focus within the inner focusable elements of the component.

https://mui.com/base/react-focus-trap/
`,
      },
    },
  },
})

export const DisableEnforceFocus = story(Template, {
  args: {
    disableEnforceFocus: true,
  },
  parameters: {
    docs: {
      description: {
        story: `
Clicks within the focus trap behave normally, but clicks outside the focus trap are blocked.

You can disable this behavior with the disableEnforceFocus prop.
`,
      },
    },
  },
})

export const LazyActivation = story(Template, {
  args: {
    disableAutoFocus: true,
  },
  parameters: {
    docs: {
      description: {
        story: `
By default, the component moves the focus to its descendants as soon as it opens: open={true}.

You can disable this behavior and make it lazy with the disableAutoFocus prop. When auto focus is disabled, as in the demo below, the component only traps the focus once it gets focused.
`,
      },
    },
  },
})

export const PortalExample = story(
  () => {
    const [open, setOpen] = React.useState(false)
    const [container, setContainer] = React.useState<HTMLElement | null>(null)

    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <button type="button" onClick={() => setOpen(true)}>
          Open
        </button>
        {open && (
          <FocusTrap open>
            <Box tabIndex={-1} sx={{ mt: 1, p: 1 }}>
              <label>
                First name: <input type="text" />
              </label>
              <br />
              <Portal container={container}>
                <label>
                  Last name: <input type="text" />
                </label>
                <br />
              </Portal>
              <button type="button" onClick={() => setOpen(false)}>
                Close
              </button>
            </Box>
          </FocusTrap>
        )}
        <div ref={setContainer} />
      </Box>
    )
  },
  {
    args: {
      disableAutoFocus: true,
    },
    parameters: {
      docs: {
        description: {
          story: `The following demo uses the Portal component to render a subset of the trap focus children into a new "subtree" outside of the current DOM hierarchy; so that they no longer form part of the focus loop.`,
        },
      },
    },
  },
)
