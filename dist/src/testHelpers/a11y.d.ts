import { Meta, Story } from '@monorail/helpers/storybook';
/**
 * Generates Jest a11y tests for all stories in a module
 *
 * Note: `color-contrast` rule is NOT checked, and it is not likely to be fixed soon.
 * - https://github.com/dequelabs/axe-core/issues/2610
 * - https://github.com/jsdom/jsdom#unimplemented-parts-of-the-web-platform
 * - Verify it is/isn't checked with a `console.log(results)` below
 */
export declare function generateA11yStoryTests(storyModule: Record<string, Story | Meta>): Promise<void>;
