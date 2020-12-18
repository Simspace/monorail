/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import ReactTable, { ReactTableDefaults } from 'react-table'
import Link from '@docusaurus/Link'
import CodeBlock from '@theme/CodeBlock'
import Heading from '@theme/Heading'

import { ThemeProvider } from '@monorail/helpers/styled-components'
import { monorailTheme } from '@monorail/helpers/theme'
import { MonorailReactTableOverrides } from '@monorail/visualComponents/dataTable/ReactTable'

import { DocComponents } from './docComponents'
import { MonorailHelpers } from './helpers'
import { Libs } from './libs'
import { MetaComponents } from './metaComponents'
import { Monoblocks } from './monoblocks'
import { PageComponents } from './pageComponents'
import styles from './styles.module.css'
import { MonorailTypes } from './types'
import { MonorailComponents } from './visualComponents'

/** Setting up default components for `ReactTable` to use so that we don't have to set them on every table. */
Object.assign(ReactTableDefaults, {
  ...MonorailReactTableOverrides,
})

export default {
  code: props => {
    const { children } = props

    const scope = {
      ...React,
      ReactTable,
      ...MonorailComponents,
      ...MetaComponents,
      ...PageComponents,
      ...MonorailHelpers,
      ...MonorailTypes,
      ...DocComponents,
      ...Monoblocks,
      ...Libs,
    }

    if (typeof children === 'string') {
      if (!children.includes('\n')) {
        return (
          <ThemeProvider theme={monorailTheme}>
            <code {...props} />
          </ThemeProvider>
        )
      }
      return (
        <ThemeProvider theme={monorailTheme}>
          <CodeBlock {...props} scope={scope} />
        </ThemeProvider>
      )
    }
    return <ThemeProvider theme={monorailTheme}>{children}</ThemeProvider>
  },
  a: props => {
    if (/\.[^./]+$/.test(props.href)) {
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      return <a {...props} />
    }
    return (
      <ThemeProvider theme={monorailTheme}>
        <Link {...props} />
      </ThemeProvider>
    )
  },
  pre: props => <div className={styles.mdxCodeBlock} {...props} />,
  h1: Heading('h1'),
  h2: Heading('h2'),
  h3: Heading('h3'),
  h4: Heading('h4'),
  h5: Heading('h5'),
  h6: Heading('h6'),
}
