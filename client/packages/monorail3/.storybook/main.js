// TODO: these are related to the emotion issues noted below
//const path = require('path')
//const toPath = p => path.join(process.cwd(), p)

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
  ],

  typescript: {
    // Generate docs/control table on-the-fly using react-docgen-typescript
    // Note: this is an alternative to using the scripted generation of .meta.json files. The desire was to not have to
    // maintain all the generated .meta.json files, but there is a tradeoff with performance, and sometimes correctness when
    // using the auto-gen like this.
    reactDocgen: 'react-docgen-typescript',
  },

  // Attempt to address and issue with storybook and MUI's emotion versions
  webpackFinal: async config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          // TODO: this was an attempt to get emotion working with storybook, however, this doesn't work b/c of how our workspaces are setup in portal-suite.
          // I also tried the suggested solution of `require.resolve` rather than the `toPath`, but no luck.
          // (We are now using styled-components, so this is not relevant at the moment)
          // See:
          // https://github.com/mui-org/material-ui/issues/24282
          //'@emotion/core': toPath('node_modules/@emotion/react'),
          //'@emotion-theming': toPath('node_modules/@emotion/react'),
          //'@emotion/styled': require.resolve('@emotion/styled'),

          // This alias is required to enable styled-components as the styled engine for MUI.
          // I'm doing this b/c there was a problem with the storybook emotion theme conflicting with the MUI emotion.
          // Also, this kind of makes sense since we are using styled-components already.
          // https://next.material-ui.com/guides/styled-engine/#how-to-switch-to-styled-components
          '@material-ui/styled-engine': '@material-ui/styled-engine-sc',
        },
      },
    }
  },
}
