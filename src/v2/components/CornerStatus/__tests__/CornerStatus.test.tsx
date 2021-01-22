import { generateA11yStoryTests } from '@monorail/testHelpers/a11y'
import * as stories from '@monorail/v2/components/CornerStatus/__stories__/CornerStatus.stories'

describe('CornerStatus', () => {
  generateA11yStoryTests(stories)
})
