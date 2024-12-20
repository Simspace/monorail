import React from 'react'
import type {
  DividerProps as MuiDividerProps,
  DividerTypeMap,
} from '@mui/material'
import { Divider as MuiDivider } from '@mui/material'
import clsx from 'clsx'

import type { OverridableComponent } from '@monorail/types'
import { capitalize } from '@monorail/utils'

export interface DividerExtraProps {
  /**
   * Adds spacing to the divider.
   *
   * @default false
   */
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false
}

export type DividerProps<
  D extends React.ElementType = DividerTypeMap['defaultComponent'],
  P = {},
> = MuiDividerProps<D, DividerExtraProps & P>

/**
 * Demos:
 *
 * - [Divider](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/data-display-divider--default)
 */
export const Divider = React.forwardRef(
  ({ className, spacing = false, ...props }, ref) => (
    <MuiDivider
      ref={ref}
      className={clsx(
        spacing !== false && `MonorailDivider-spacing${capitalize(spacing)}`,
        className,
      )}
      {...props}
    />
  ),
) as OverridableComponent<DividerTypeMap<DividerExtraProps, 'hr'>>

// @ts-expect-error -- assigning muiName
Divider.muiName = MuiDivider.muiName

export * from '@mui/material/Divider'
