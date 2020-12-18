import { generateA11yStoryTests } from '@monorail/testHelpers/a11y'
import * as stories from '@monorail/v2/core/IconButton/__stories__/IconButton.stories'

describe('IconButton', () => {
  generateA11yStoryTests(stories)
})
