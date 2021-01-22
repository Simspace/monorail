import { generateA11yStoryTests } from '@monorail/testHelpers/a11y'
import * as stories from '@monorail/v2/components/IconFrame/__stories__/IconFrame.stories'

describe('IconFrame', () => {
  generateA11yStoryTests(stories)
})
