import React from 'react'
import * as tlr from '@testing-library/react'
import { constant, E, pipe } from '@monorail/sharedHelpers/fp-ts-imports'

import { isNotNil } from '@monorail/sharedHelpers/typeGuards'
import { generateA11yStoryTests } from '@monorail/testHelpers/a11y'
import { renderWithTheme } from '@monorail/testHelpers/render'
import * as stories from '@monorail/v2/components/TreeGrid/__stories__/TreeGrid.stories'
import { TreeGrid } from '@monorail/v2/components/TreeGrid/TreeGrid'

import '@testing-library/jest-dom/extend-expect'

import {
  EMPTY_VIEW_TEXT_CONTENT,
  mockTreeGridProps,
} from '../__mocks__/TreeGridProps.mock'

describe('TreeGrid', () => {
  /**
   * Note from https://www.w3.org/TR/wai-aria-practices-1.1/examples/treegrid/treegrid-1.html
   * "Due to an error in the ARIA 1.1 specification, the aria-posinset and
   * aria-setsize properties are not supported on row elements. This is being
   * corrected in ARIA 1.2. Consequently, when validating the HTML in this
   * example, errors are generated.""
   */
  // generateA11yStoryTests(stories)

  it('virtualizes rendering of rows', () => {
    renderWithTheme(
      <div style={{ height: '500px' }}>
        <TreeGrid {...mockTreeGridProps} />
      </div>,
    )

    const rows = tlr.screen.getAllByRole('row')
    expect(rows.length).toBeGreaterThan(
      1, // because the header row is always there
    )
    expect(rows.length).toBeLessThan(
      pipe(
        mockTreeGridProps.content,
        E.fold(constant(0), xs => xs.length),
      ),
    )
  })

  it('expands and collapses parent rows on button click', () => {
    const _rendered = renderWithTheme(
      <div style={{ height: '500px' }}>
        <TreeGrid {...mockTreeGridProps} />
      </div>,
    )

    const allVisibleRowsAreLevel1 = tlr.screen
      .getAllByRole('row')
      .map(row => row.getAttribute('aria-level'))
      .filter(isNotNil)
      .every(rowLevel => rowLevel === '1')

    expect(allVisibleRowsAreLevel1).toBe(true)

    const expandBtns = tlr.screen.getAllByRole('button', {
      name: 'Expand',
    })

    expandBtns.forEach(btn => {
      tlr.fireEvent.click(btn)
    })

    const someVisibleRowsAreLevel2 = tlr.screen
      .getAllByRole('row')
      .map(row => row.getAttribute('aria-level'))
      .filter(isNotNil)
      .some(rowLevel => rowLevel === '2')

    expect(someVisibleRowsAreLevel2).toBe(true)

    expandBtns.forEach(btn => {
      tlr.fireEvent.click(btn)
    })

    const allVisibleRowsAreLevel1Again = tlr.screen
      .getAllByRole('row')
      .map(row => row.getAttribute('aria-level'))
      .filter(isNotNil)
      .every(rowLevel => rowLevel === '1')

    expect(allVisibleRowsAreLevel1Again).toBe(true)
  })

  it('renders arbitrary jsx when props.content is Left<JSX>', () => {
    const rendered = renderWithTheme(
      <div style={{ height: '500px' }}>
        <TreeGrid
          {...mockTreeGridProps}
          content={E.left(<>{EMPTY_VIEW_TEXT_CONTENT}</>)}
        />
      </div>,
    )

    expect(rendered.container).toHaveTextContent(EMPTY_VIEW_TEXT_CONTENT)
  })
})
