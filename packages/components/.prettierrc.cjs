module.exports = {
  ...require('@monorail/config/prettier'),
  overrides: [
    {
      files: 'src/ResizableContainer/ResizableContainer.tsx',
      options: {
        printWidth: 120,
      },
    },
  ],
}
