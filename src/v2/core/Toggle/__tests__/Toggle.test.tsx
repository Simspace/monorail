import { generateA11yStoryTests } from '@monorail/testHelpers/a11y'
import * as stories from '@monorail/v2/core/Toggle/__stories__/Toggle.stories'

describe('Toggle', () => {
  generateA11yStoryTests(stories)
})
