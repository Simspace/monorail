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
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },

  // Attempt to address and issue with storybook and MUI's emotion versions
  webpackFinal: async (config: any) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          // @mui/x-data-grid still references the legacy MUI paths - this works-around that for now
          '@material-ui/core': '@mui/material',

          // this is the solution used by chakra-ui to prevent storybook from wrecking the emotion theme set by mui
          // see: https://github.com/chakra-ui/chakra-ui/blob/a5abb6f9477d87a1cbc0c2d784e009d2bc8a8c6d/.storybook/main.js
          // see: https://github.com/storybookjs/storybook/issues/10231#issuecomment-728038867
          // see: https://github.com/mui/material-ui/issues/24282
          '@emotion/core': '@emotion/react',
          'emotion-theming': '@emotion/react',
        },
      },
      optimization: {
        minimizer: config.optimization.minimizer
      },
    }
  },
}
