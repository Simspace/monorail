import { generateA11yStoryTests } from '@monorail/testHelpers/a11y'
import * as stories from '@monorail/v2/core/List/__stories__/List.stories'

describe('List', () => {
  generateA11yStoryTests(stories)
})
