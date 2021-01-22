import { generateA11yStoryTests } from '@monorail/testHelpers/a11y'
import * as stories from '@monorail/v2/core/TextField/__stories__/TextField.stories'

describe('TextField', () => {
  generateA11yStoryTests(stories)
})
