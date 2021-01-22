import { generateA11yStoryTests } from '@monorail/testHelpers/a11y'
import * as stories from '@monorail/v2/core/RouterLink/__stories__/RouterLink.stories'

describe('RouterLink', () => {
  generateA11yStoryTests(stories)
})
