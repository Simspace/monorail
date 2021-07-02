import { addons } from '@storybook/addons'

/**
 * Fixes addons panel not showing
 * https://www.gitmemory.com/issue/storybookjs/storybook/8383/693527059
 */
addons.setConfig({
  showPanel: true,
  panelPosition: 'bottom',
})
