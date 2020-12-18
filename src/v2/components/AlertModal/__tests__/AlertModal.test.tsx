import { generateA11yStoryTests } from '@monorail/testHelpers/a11y'
import * as stories from '@monorail/v2/components/AlertModal/__stories__/AlertModal.stories'

describe('AlertModal', () => {
  generateA11yStoryTests(stories)
})
