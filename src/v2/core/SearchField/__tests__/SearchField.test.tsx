import { generateA11yStoryTests } from '@monorail/testHelpers/a11y'
import * as stories from '@monorail/v2/core/SearchField/__stories__/SearchField.stories'

describe('SearchField', () => {
  generateA11yStoryTests(stories)
})
