// eslint-disable-next-line no-restricted-imports
import * as MUI from '@material-ui/core'

/**
 * Constructs the `components` overrides using a subset of the overall theme that includes everything except `components`
 */
export const getThemeComponents = (
  _theme: Omit<MUI.ThemeOptions, 'components'>,
): MUI.ThemeOptions['components'] => ({
  // TODO: we may want to split these into separate files - one theme override per component? Or maybe we just do it all here for consistency
  MuiButton: {
    variants: [
      // Styles for custom size extraSmall
      {
        props: { size: 'extraSmall' },
        style: {
          // TODO: these styles are just for demo purposes at this time
          fontSize: 11,
          height: 18,
          padding: '8px 0',
        },
      },
    ],
  },
})
