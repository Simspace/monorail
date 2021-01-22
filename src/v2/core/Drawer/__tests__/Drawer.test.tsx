import { generateA11yStoryTests } from '@monorail/testHelpers/a11y'
import * as stories from '@monorail/v2/core/Drawer/__stories__/Drawer.stories'

describe('Drawer', () => {
  generateA11yStoryTests(stories)
})
