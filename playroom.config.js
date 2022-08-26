module.exports = {
  components: "./packages/components/src/components.ts",
  themes: "./packages/themes/src/index.ts",
  outputPath: "./playroom",
  frameComponent: "./.playroom/Frame.jsx",
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
