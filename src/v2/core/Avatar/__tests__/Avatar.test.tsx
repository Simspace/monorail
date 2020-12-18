import { generateA11yStoryTests } from '@monorail/testHelpers/a11y'
import * as stories from '@monorail/v2/core/Avatar/__stories__/Avatar.stories'

describe('Avatar', () => {
  generateA11yStoryTests(stories)
})
