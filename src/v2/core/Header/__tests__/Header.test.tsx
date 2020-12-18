import { generateA11yStoryTests } from '@monorail/testHelpers/a11y'
import * as stories from '@monorail/v2/core/Header/__stories__/Header.stories'

describe('Header', () => {
  generateA11yStoryTests(stories)
})
