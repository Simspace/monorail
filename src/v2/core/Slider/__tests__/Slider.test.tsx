import { generateA11yStoryTests } from '@monorail/testHelpers/a11y'
import * as stories from '@monorail/v2/core/Slider/__stories__/Slider.stories'

describe('Slider', () => {
  generateA11yStoryTests(stories)
})
