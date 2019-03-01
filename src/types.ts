import { SimpleInterpolation } from 'styled-components'
import { ReactType } from 'react'

export type CommonComponentType = {
  as?: ReactType
  className?: string
  css?: SimpleInterpolation
  id?: string
  tabIndex?: number
}

export type TypographyComponent = {
  margin?: string
}
