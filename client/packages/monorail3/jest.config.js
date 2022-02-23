const { defaults } = require('jest-config')

const jestConfig = {
  setupFiles: ['<rootDir>/jest/jest.setup.ts'],
  moduleNameMapper: {
    '@mui/styled-engine': '@mui/styled-engine-sc',
    '@material-ui/core': '@mui/material',
  },
  testEnvironment: 'jsdom',
  coverageReporters: [...defaults.coverageReporters, 'cobertura'],

  globalSetup: '@simspace/configs/jest/jest.globalSetup.js',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],

  modulePathIgnorePatterns: [
    '.npm',
    '.yarn',
    'dist',
    'npm-cache',
    'yarn-cache',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest/jest.postsetup.ts'],
  // TODO: this test regex disables `*.gen.*` tests, because of a timeout issue with a11y tests in CI
  testRegex: '^(?!.*gen\\.(?:test|jest)).+\\.(test|jest)\\.(ts|tsx|js|jsx)$',
  testURL: 'http://localhost/',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|xml)$':
      '@simspace/configs/jest/jest.assetTransformer.js',
  },
  transformIgnorePatterns: ['node_modules/(?!@mui|@babel)'],
}

module.exports = jestConfig
