import type React from 'react'
import type { DistributiveOmit } from '@mui/types'

export type StandardElementProps<
  C extends React.ElementType,
  Removals extends keyof React.ComponentPropsWithRef<C> = never,
> = DistributiveOmit<
  React.ComponentPropsWithRef<C>,
  'classes' | 'children' | Removals
>
