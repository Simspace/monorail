// eslint-disable-next-line import/no-extraneous-dependencies
import { configureAxe } from 'jest-axe'

import { isNotNil } from '../helpers/typeGuards'
import { renderStory } from './render'
import { A11yElement, Meta, Story } from './storybook'

const axe = configureAxe({
  rules: {
    // Ignore page-level rules
    'landmark-one-main': { enabled: false },
    region: { enabled: false },
    'page-has-heading-one': { enabled: false },
  },
})

function shouldCheckA11y(item: Story) {
  return !item.parameters?.a11y?.disable
}

//#region Type Guards
function isStory(item: Story | Meta): item is Story {
  return typeof item === 'function'
}

function isA11yStoryEntry(
  entry: [string, Story | Meta],
): entry is [string, Story] {
  return isStory(entry[1]) && shouldCheckA11y(entry[1])
}

/**
 * Valid if it exists, and is not an auto-added Storybook element
 *
 * i.e. It is not dependent on Storybook's Preview implementation, so it'll work in JSDom (Jest)
 */
function isValidTargetElement(targetElement?: string): targetElement is string {
  return (
    isNotNil(targetElement) &&
    targetElement !== A11yElement.Root &&
    targetElement !== A11yElement.Component
  )
}
//#endregion

/**
 * Generates Jest a11y tests for all stories in a module
 *
 * Note: `color-contrast` rule is NOT checked, and it is not likely to be fixed soon.
 * - https://github.com/dequelabs/axe-core/issues/2610
 * - https://github.com/jsdom/jsdom#unimplemented-parts-of-the-web-platform
 * - Verify it is/isn't checked with a `console.log(results)` below
 */
export async function generateA11yStoryTests(
  storyModule: Record<string, Story | Meta>,
) {
  const storiesTargetElement = storyModule.default.parameters?.a11y?.element

  Object.entries(storyModule)
    .filter(isA11yStoryEntry)
    .forEach(([storyName, story]) => {
      it(`${storyName} story is accessible`, async () => {
        const targetElement =
          story.parameters?.a11y?.element ?? storiesTargetElement

        const { baseElement, container } = renderStory(story)

        const results = isValidTargetElement(targetElement)
          ? await axe(baseElement.querySelector(targetElement) ?? baseElement)
          : await axe(container)

        expect(results).toHaveNoViolations()
      })
    })
}
