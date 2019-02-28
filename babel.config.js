module.exports = {
  only: ['./src'],
  presets: [
    '@babel/preset-react',
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        targets: 'Chrome >= 69',
        modules: 'commonjs',
      },
    ],
  ],
  plugins: [
    [
      /**
       * Rewrite our "shortcut" requires to relative paths so we can package correctly.
       * Transforms `require 'src/foo/bar/baz'` to `require '../baz'`
       */
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@monorail': './src',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
    // [
    //   'styled-components',
    //   {
    //     pure: true,
    //   },
    // ],
    // '@babel/plugin-transform-react-inline-elements',
    // 'transform-react-remove-prop-types',
    // 'transform-react-pure-class-to-function',
  ],
}
