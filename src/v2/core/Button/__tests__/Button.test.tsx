import { generateA11yStoryTests } from '@monorail/testHelpers/a11y'
import * as stories from '@monorail/v2/core/Button/__stories__/Button.stories'

describe('Button', () => {
  generateA11yStoryTests(stories)
})
