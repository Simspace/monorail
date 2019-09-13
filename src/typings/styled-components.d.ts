import { CSSProp } from '@monorail/helpers/styled-components'

declare module 'react' {
  interface Attributes {
    css?: CSSProp
  }
}
