import React, { PropsWithChildren } from 'react'
import { Helmet, HelmetProps } from 'react-helmet'

const DEFAULT_TITLE = __DEV__ ? '[DEV] SimSpace Portal' : 'SimSpace Portal'
const TITLE_TEMPLATE = `%s - ${DEFAULT_TITLE}`

type HeadProps = PropsWithChildren<HelmetProps>

/**
 * `Head` is a re-export of react-helmet with application defaults
 * @link https://github.com/nfl/react-helmet
 */
export const Head = (props: HeadProps) => (
  <Helmet
    defaultTitle={DEFAULT_TITLE}
    titleTemplate={TITLE_TEMPLATE}
    {...props}
  />
)
