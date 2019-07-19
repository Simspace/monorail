import { Ref } from 'react'
import { IndexLinkProps, LinkProps } from 'react-router'

declare module 'react-router' {
  export interface LinkProps extends IndexLinkProps {
    onlyActiveOnIndex?: boolean
    innerRef?: Ref<HTMLAnchorElement>
  }
}
