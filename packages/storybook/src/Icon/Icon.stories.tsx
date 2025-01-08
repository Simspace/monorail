import React from 'react'

import type { IconProps } from '@monorail/components'
import { Box, Icon, Typography } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Data Display/Icon', component: Icon }

const Template = story<IconProps>((args: IconProps) => <Icon {...args}>info</Icon>, {
  args: {},
  muiName: 'MuiIcon',
})

export const Default = story(Template)

const IconContainer = ({ icon, label }: { icon: JSX.Element; label: string }) => (
  <Box gridColumn='span 3' display='grid' minHeight={80} sx={{ placeItems: 'center' }}>
    {icon}
    <Typography align='center' mt={2}>
      {label}
    </Typography>
  </Box>
)

const sizes = ['small', 'medium', 'large', 'inherit'] as const

export const Sizes = story<IconProps>(() => (
  <Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gap={8}>
    {sizes.map((size) => (
      <IconContainer
        key={`icon-${size}`}
        label={size}
        icon={<Icon fontSize={size}>settings</Icon>}
      />
    ))}
  </Box>
))
