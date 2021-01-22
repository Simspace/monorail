import { waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { generateA11yStoryTests } from '@monorail/testHelpers/a11y'
import { renderStory } from '@monorail/testHelpers/render'
import * as stories from '@monorail/visualComponents/dataTable/ReactTableSelect/__stories__/SelectionPaginationBar.stories'
import { TestId } from '@monorail/visualComponents/dataTable/ReactTableSelect/SelectionPaginationBar'

// `yarn test SelectionPaginationBar`
describe('SelectionPaginationBar', () => {
  generateA11yStoryTests(stories)

  describe('Selection Summary', () => {
    it('is visible when there is a selection', async () => {
      // Arrange
      const { getByTestId } = renderStory(stories.Basic)

      // Assert - Selection summary is visible
      expect(getByTestId(TestId.TotalSelectedLabel)).toBeVisible()
    })

    it('is hidden when nothing is selected', async () => {
      // Arrange
      const { queryByTestId } = renderStory(stories.NoneSelected)

      // Assert - Selection summary is not visible
      expect(queryByTestId(TestId.TotalSelectedLabel)).toBeNull()
    })
  })

  describe('Pagination', () => {
    it('has Previous button when there are prior pages available', async () => {
      // Arrange
      const { queryByTestId } = renderStory(stories.OnLastPage)

      // Assert - Previous button is not disabled
      expect(queryByTestId(TestId.PreviousPage)).not.toBeDisabled()
    })

    it('has Next button when there are subsequent pages available', async () => {
      // Arrange
      const { queryByTestId } = renderStory(stories.OnFirstPage)

      // Assert - Next button is not disabled
      expect(queryByTestId(TestId.NextPage)).not.toBeDisabled()
    })

    it('has disabled Previous button when on first page', async () => {
      // Arrange
      const { queryByTestId } = renderStory(stories.OnFirstPage)

      // Assert - Previous button is disabled
      expect(queryByTestId(TestId.PreviousPage)).toBeDisabled()
    })

    it('has disabled Next button when on last page', async () => {
      // Arrange
      const { queryByTestId } = renderStory(stories.OnLastPage)

      // Assert - Next button is disabled
      expect(queryByTestId(TestId.NextPage)).toBeDisabled()
    })
  })

  describe('Results Shown Per Page', () => {
    it('has 20, 50, 100, and "All" options', async () => {
      // Arrange
      const expectedOptions = [20, 50, 100, 'All']
      const { getByTestId, getAllByRole } = renderStory(stories.Basic)
      const selectTrigger = getByTestId(TestId.ItemsPerPage)
      expect(selectTrigger).toBeVisible()

      // Act - open Select
      userEvent.click(selectTrigger)

      // Assert
      await waitFor(() => {
        const options = getAllByRole('option')

        // there are options...
        expect(options).toHaveLength(expectedOptions.length)

        // ...and they have the correct labels
        options.forEach((option, index) => {
          const { getByText } = within(option)
          expect(getByText(expectedOptions[index])).toBeInTheDocument()
        })
      })
    })
  })
})
