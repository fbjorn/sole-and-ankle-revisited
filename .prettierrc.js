module.exports = {
  printWidth: 88,
  trailingComma: 'es5',
  useTabs: false,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  endOfLine: 'lf',
  proseWrap: 'always',
  overrides: [
    {
      files: '*.yaml',
      options: {
        proseWrap: 'preserve',
      },
    },
  ],
}
