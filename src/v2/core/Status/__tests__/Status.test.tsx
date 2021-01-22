import { generateA11yStoryTests } from '@monorail/testHelpers/a11y'
import * as stories from '@monorail/v2/core/Status/__stories__/Status.stories'

describe('Status', () => {
  generateA11yStoryTests(stories)
})
