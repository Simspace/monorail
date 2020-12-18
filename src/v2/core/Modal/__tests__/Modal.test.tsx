import {
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react'

import { generateA11yStoryTests } from '@monorail/testHelpers/a11y'
import { renderStory } from '@monorail/testHelpers/render'
import * as stories from '@monorail/v2/core/Modal/__stories__/Modal.stories'

describe('Modal', () => {
  generateA11yStoryTests(stories)

  it('reveals when triggered', async () => {
    // Arrange
    const { getByRole, queryByRole } = renderStory(stories.ClickToOpen)

    // Act - Trigger modal
    fireEvent.click(getByRole('button'))

    // Assert - Modal is visible
    await waitFor(() => {
      expect(queryByRole('dialog')).toBeVisible()
    })
  })

  describe('ESC pressed', () => {
    it('closes modal', async () => {
      // Arrange - Modal is visible
      const { getByRole, queryByRole } = renderStory(stories.ClickToOpen)
      fireEvent.click(getByRole('button'))
      await waitFor(() => {
        expect(queryByRole('dialog')).toBeVisible()
      })

      // Act - Press ESC
      fireEvent.keyDown(getByRole('dialog'), { key: 'Escape', code: 'Escape' })

      // Assert - Modal is no longer visible
      await waitForElementToBeRemoved(queryByRole('dialog'))
    })

    it('does nothing when ESC is disabled', async () => {
      // Arrange - Modal is visible
      const { getByRole, queryByRole } = renderStory(stories.DisableEscape)
      fireEvent.click(getByRole('button'))
      await waitFor(() => {
        expect(queryByRole('dialog')).toBeVisible()
      })

      // Act - Press ESC
      fireEvent.keyDown(getByRole('dialog'), { key: 'Escape', code: 'Escape' })

      // Assert - Modal is still visible
      waitForElementToBeRemoved(queryByRole('dialog')).then(() => {
        fail('Dialog should not have been removed!')
      })
    })
  })
})
