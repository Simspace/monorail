import { generateA11yStoryTests } from '@monorail/testHelpers/a11y'

import * as stories from '../__stories__/Pill.stories'

describe('Pill', () => {
  generateA11yStoryTests(stories)
})
