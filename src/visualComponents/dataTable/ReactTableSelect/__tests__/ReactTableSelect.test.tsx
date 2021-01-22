import { waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { generateA11yStoryTests } from '@monorail/testHelpers/a11y'
import { renderStory } from '@monorail/testHelpers/render'
import * as stories from '@monorail/visualComponents/dataTable/ReactTableSelect/__stories__/ReactTableSelect.stories'
import { TestId } from '@monorail/visualComponents/dataTable/ReactTableSelect/SelectionPaginationBar'

// `yarn test ReactTableSelect`
describe('ReactTableSelect', () => {
  generateA11yStoryTests(stories)

  describe('With Pagination', () => {
    it('shows 1 page when showing "All" items', async () => {
      // Arrange
      const { getByRole, getByTestId } = renderStory(stories.WithPagination)
      const selectTrigger = getByTestId(TestId.ItemsPerPage)
      expect(getByTestId(TestId.Pages).childNodes).not.toHaveLength(1)

      // Act - open Select menu
      userEvent.click(selectTrigger)
      await waitFor(() => {
        const allOption = getByRole('option', { name: /All/i })
        expect(allOption).toBeInTheDocument()

        // click the All option
        userEvent.click(allOption)
      })

      // Assert - There is only one page
      expect(getByTestId(TestId.Pages).childNodes).toHaveLength(1)
    })
  })
})
