import { configureAxe } from 'jest-axe'

import { renderStory } from './render'
import { A11yElement, Meta, Story } from './storybook'
import { isNotNil } from './typeGuards'

/**
 * This configures the a11y test framework axe
 */
const axe = configureAxe({
  rules: {
    // Ignore page-level rules
    'landmark-one-main': { enabled: false },
    region: { enabled: false },
    'page-has-heading-one': { enabled: false },
  },
})

/**
 * Checks if a story should be run through the a11y/axe checks.
 *
 * This looks at custom paramters.a11y metadata which might be tacked onto the story component function.
 */
function shouldCheckA11y(item: Story) {
  return item.parameters?.a11y?.disable !== true
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
  jest.setTimeout(60000)
  const storiesTargetElement = storyModule.default.parameters?.a11y?.element

  Object.entries(storyModule)
    .filter(isA11yStoryEntry)
    .forEach(([storyName, story]) => {
      it(`${storyName} story is accessible`, async () => {
        const targetElement =
          story.parameters?.a11y?.element ?? storiesTargetElement
        const rules = story.parameters?.a11y?.config ?? {}

        const { baseElement, container } = renderStory(story)

        const results = isValidTargetElement(targetElement)
          ? await axe(
              baseElement.querySelector(targetElement) ?? baseElement,
              rules,
            )
          : await axe(container, rules)

        expect(results).toHaveNoViolations()
      })
    })
}
