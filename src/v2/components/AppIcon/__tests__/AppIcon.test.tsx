import { generateA11yStoryTests } from '@monorail/testHelpers/a11y'
import * as stories from '@monorail/v2/components/AppIcon/__stories__/AppIcon.stories'

describe('AppIcon', () => {
  generateA11yStoryTests(stories)
})
