module.exports = {
  components: "./packages/components/src/components.ts",
  themes: "./packages/themes/src/index.ts",
  outputPath: "./playroom",
  frameComponent: "./.playroom/Frame.jsx",
  widths: [320, 375, 768, 1024, 'calc(100vw - 120px)'],
  title: "Monorail Playroom",
  exampleCode: `
    <Button>
      Hello World!
    </Button>
  `,
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: [
            {
              loader: require.resolve("babel-loader"),
              options: {
                presets: ["@babel/preset-react", "@babel/preset-typescript"],
              },
            },
          ],
        },
        {
          test: /\.(js|jsx)$/,
          use: [
            {
              loader: require.resolve("babel-loader"),
              options: {
                presets: ["@babel/preset-react"],
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensionAlias: {
        ".js": [".ts", ".tsx", ".js"],
      },
    },
  }),
};
