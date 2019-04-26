import { CSSProperties, ReactType } from 'react'
import { SimpleInterpolation } from 'styled-components'

export type CommonComponentType = {
  as?: ReactType
  className?: string
  cssOverrides?: SimpleInterpolation
  id?: string
  tabIndex?: number
}

export type TypographyComponent = {
  margin?: string
}

export type LinkProps = {
  activeClassName?: string
  activeStyle?: CSSProperties
  onlyActiveOnIndex?: boolean
  to?: string
}
