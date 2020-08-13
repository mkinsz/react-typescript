module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018, // allows for the parsing of modern ECMAScript features
    sourceType: 'module', // allows for the use of imports
    ecmaFeatures: {
      jsx: true, // allow for the parsing of JSX
      modules: true
    }
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
  },
  env: {
    browser: true
}
};
