import { generateA11yStoryTests } from '@monorail/testHelpers/a11y'
import * as stories from '@monorail/v2/core/Popover/__stories__/Popover.stories'

describe('Popover', () => {
  generateA11yStoryTests(stories)
})
