import { generateA11yStoryTests } from '@monorail/testHelpers/a11y'
import * as stories from '@monorail/v2/core/Modal/__stories__/ModalHeader.stories'

describe('ModalHeader', () => {
  generateA11yStoryTests(stories)
})
