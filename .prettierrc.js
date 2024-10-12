module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  importOrderParserPlugins: ['typescript', 'decorators-legacy'],
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};
