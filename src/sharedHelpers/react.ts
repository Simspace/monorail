import { FunctionComponent } from 'react'

type HasDefaultProps<DefaultProps> = {
  defaultProps: DefaultProps
}

export type FCwDP<Props, DefaultProps> = FunctionComponent<Props> &
  HasDefaultProps<DefaultProps>
