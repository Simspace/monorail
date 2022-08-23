// Edit this file to add new stories
import React from 'react'
import { Hidden, HiddenProps, Typography } from '@monorail/components'

import { story } from '../helpers/storybook'

/**
 * Metadata for Hidden stories - update/extend as needed
 */
export default { title: 'Utils/Hidden', component: Hidden }

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<HiddenProps>(
  (args: HiddenProps) => <Hidden {...args} />,
  {
    args: { children: 'This content may be hidden at certain screen sizes.' },
  },
)

/** Default story for Hidden (edit/remove by hand if needed) */
export const Default = story(Template)

export const Deprecated = story<HiddenProps>(
  () => {
    return (
      <div>
        <Typography>
          Use the <code>sx</code> prop to replace{' '}
          <code>implementation="css"</code>:
        </Typography>

        <pre>
          {`-<Hidden implementation="css" xlUp><Paper /></Hidden>
-<Hidden implementation="css" xlUp><button /></Hidden>
+<Paper sx={{ display: { xl: 'none', xs: 'block' } }} />
+<Box component="button" sx={{ display: { xl: 'none', xs: 'block' } }} />`}
        </pre>

        <pre>{`-<Hidden implementation="css" mdDown><Paper /></Hidden>
-<Hidden implementation="css" mdDown><button /></Hidden>
+<Paper sx={{ display: { xs: 'none', md: 'block' } }} />
+<Box component="button" sx={{ display: { xs: 'none', md: 'block' } }} />`}</pre>

        <Typography>
          Use the <code>useMediaQuery</code> hook to replace{' '}
          <code>implementation="js"</code>:
        </Typography>

        <pre>{`-<Hidden implementation="js" xlUp><Paper /></Hidden>
+const hidden = useMediaQuery(theme => theme.breakpoints.up('xl'));
+return hidden ? null : <Paper />;`}</pre>
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `The \`<Hidden>\` component is deprecated, but was previously used to responsively hide or affect content based on screen size.

The approved way of doing this now is to use the system \`sx\` property, or \`useMediaQuery\`, as shown in this example.`,
        },
      },
    },
  },
)
