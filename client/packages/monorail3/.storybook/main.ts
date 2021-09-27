export default {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    //'@storybook/addon-docs', // included by default
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    //'@storybook/addon-controls', // included by default
    '@storybook/addon-a11y',
    'creevey',
  ],

  typescript: {
    // Generate docs/control table on-the-fly using react-docgen-typescript
    // Note: this is an alternative to using the scripted generation of .meta.json files. The desire was to not have to
    // maintain all the generated .meta.json files, but there is a tradeoff with performance, and sometimes correctness when
    // using the auto-gen like this.
    reactDocgen: 'react-docgen-typescript',
  },

  // Attempt to address and issue with storybook and MUI's emotion versions
  webpackFinal: async (config: any) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          // This alias is required to enable styled-components as the styled engine for MUI.
          // I'm doing this b/c there was a problem with the storybook emotion theme conflicting with the MUI emotion.
          // Also, this kind of makes sense since we are using styled-components already.
          // https://next.material-ui.com/guides/styled-engine/#how-to-switch-to-styled-components
          '@mui/styled-engine': '@mui/styled-engine-sc',
        },
      },
    }
  },
}
