import React from 'react'
import type { Story } from '@storybook/react'

import type { PopupProps } from '@monorail/components'
import { Box, Button, Popup, Typography } from '@monorail/components'

export default { title: 'Utils/Popup', component: Popup }

const Template: Story<Partial<PopupProps>> = args => {
  const [open, setOpen] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    setOpen(previousOpen => !previousOpen)
  }

  const canBeOpen = open && Boolean(anchorEl)
  const id = canBeOpen ? 'transition-popper' : undefined
  return (
    <Box>
      <Button
        size="small"
        aria-describedby={id}
        type="button"
        onClick={handleClick}
      >
        Toggle Popup
      </Button>
      <Popup {...args} id={id} open={open} anchorEl={anchorEl}>
        <Box
          width={200}
          height={200}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography>Popup Content</Typography>
        </Box>
      </Popup>
    </Box>
  )
}
Template.argTypes = {
  placement: {
    type: {
      name: 'enum',
      value: ['bottom', 'top', 'left', 'right'],
    },
  },
}

export const Default: Story<Partial<PopupProps>> = Template.bind({})
Default.args = {}

export const WithArrow: Story<Partial<PopupProps>> = Template.bind({})
WithArrow.args = {
  arrow: true,
}
