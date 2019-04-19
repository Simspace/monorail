import { FunctionComponent } from 'react'

type HasDefaultProps<DefaultProps> = {
  defaultProps: DefaultProps
}

export type FCwDP<RequiredProps, DefaultProps> = FunctionComponent<
  RequiredProps & DefaultProps
> &
  HasDefaultProps<DefaultProps>
