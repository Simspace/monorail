import { generateA11yStoryTests } from '@monorail/testHelpers/a11y'
import * as stories from '@monorail/v2/core/Select/__stories__/Select.stories'

describe('Select', () => {
  generateA11yStoryTests(stories)
})
