import React from 'react'
import type { CSSObject } from '@mui/material'
import { chipClasses, styled, useThemeProps } from '@mui/material'
import clsx from 'clsx'

import { composeClasses } from '@monorail/utils'

import { Chip } from '../Chip.js'
import type { IconChipClassKey } from './iconChipClasses.js'
import { getIconChipUtilityClass } from './iconChipClasses.js'
import type { IconChipProps } from './iconChipProps.js'

interface IconChipRootProps extends Omit<IconChipProps, 'size'> {
  ownerState: IconChipProps
}

function overridesResolver(
  props: IconChipRootProps,
  styles: Partial<Record<IconChipClassKey, CSSObject>>,
) {
  return [styles.root]
}

const IconChipRoot = styled(Chip, {
  name: 'MonorailIconChip',
  slot: 'Root',
  overridesResolver,
})<IconChipRootProps>(({ theme, ownerState: { size = 'medium' } }) => ({
  height: theme.spacing(9),
  width: theme.spacing(9),
  borderRadius: theme.spacing(9 / 2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ...(size === 'small' && {
    height: theme.spacing(6),
    width: theme.spacing(6),
    borderRadius: theme.spacing(6 / 2),
  }),
  [`& .${chipClasses.icon}`]: {
    marginLeft: 'auto',
    marginRight: 'auto',
    [`& + .${chipClasses.label}`]: {
      display: 'none',
    },
  },
  [`&.${chipClasses.disabled}`]: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    opacity: 1,
    [`& .${chipClasses.icon}`]: {
      color: theme.palette.text.disabled,
    },
  },
}))

/**
 * A wrapped `Chip` that only accepts an icon as a child and is styled to be circular.
 *
 *  Demos:
 *
 * - [IconChip](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/data-display-chip--icon-only)
 */
export const IconChip = React.forwardRef(function IconChip(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MonorailIconChip',
  })

  const { className, ...otherProps } = props

  const classes = useUtilityClasses(props)

  return (
    <IconChipRoot
      className={clsx(classes.root, className)}
      ref={ref}
      ownerState={props}
      {...otherProps}
      clickable={false}
    />
  )
}) as (props: IconChipProps) => JSX.Element

function useUtilityClasses(props: IconChipProps) {
  const { classes } = props

  const slots = {
    root: ['root'],
  }

  return composeClasses(slots, getIconChipUtilityClass, classes)
}
