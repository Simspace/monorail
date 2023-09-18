import React from 'react'
import type { LinkTypeMap as MuiLinkTypeMap } from '@mui/material'
import { Link as MuiLink } from '@mui/material'

import type { OverridableComponent } from '@monorail/types'
import { combineSxProps, getLineClampStyles } from '@monorail/utils'

import type { TypographyProps } from '../Typography.js'

export interface LinkExtraProps {
  lineClamp?: TypographyProps['lineClamp']
}

/**
 *
 * Demos:
 *
 * - [Link](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/navigation-link--default)
 * - [Breadcrumbs (MUI)](https://mui.com/material-ui/react-breadcrumbs/)
 * - [Links (MUI)](https://mui.com/material-ui/react-link/)
 *
 * API:
 *
 * - [Link API](https://mui.com/material-ui/api/link/)
 * - inherits [Typography API](https://mui.com/material-ui/api/typography/)
 */
export const Link = React.forwardRef(function Link(props, ref) {
  const { lineClamp, sx: sxProp, ...other } = props
  return (
    <MuiLink
      {...other}
      ref={ref}
      sx={combineSxProps(
        {
          ...(lineClamp !== undefined && getLineClampStyles(lineClamp)),
        },
        sxProp,
      )}
    />
  )
}) as OverridableComponent<MuiLinkTypeMap<LinkExtraProps>>

export * from '@mui/material/Link'
