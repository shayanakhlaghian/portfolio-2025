module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindStylesheet: './src/app/(frontend)/globals.css',
  tailwindAttributes: ['class', 'className'],
};
