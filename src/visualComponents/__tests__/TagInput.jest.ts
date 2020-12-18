import { shouldShowNewSuggestion } from '@monorail/visualComponents/inputs/TagInput'

describe('shouldShowNewSuggestion', () => {
  it('should not show new suggestion if there is an empty search value', () => {
    expect(
      shouldShowNewSuggestion(
        '',
        ['these', 'are', 'suggestions'],
        ['these', 'are options'],
      ),
    ).toBe(false)
  })

  it('should not show new suggestion if there is a case insensitive perfect match between search value and a suggestion', () => {
    expect(
      shouldShowNewSuggestion('Search', ['search', 'etc'], ['option']),
    ).toBe(false)
  })

  it('should not show new suggestion if already selected', () => {
    expect(
      shouldShowNewSuggestion(
        'already selected suggestion',
        ['already selected suggestion', 'etc'],
        ['option', 'already selected suggestion'],
      ),
    ).toBe(false)
  })

  it('should show new suggestion if there is a search value that is not a perfect match to a suggestion and no suggestions are in the selected options', () => {
    expect(
      shouldShowNewSuggestion(
        'a search term',
        ['imperfect match to a search term', 'etc'],
        ['option', 'not match to any suggestion'],
      ),
    ).toBe(true)
  })
})
