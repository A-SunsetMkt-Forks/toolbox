module.exports = {
  env: {browser: true, es2020: true, node: true, jest: true},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'alloy',
    'alloy/typescript',
    'alloy/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {ecmaVersion: 'latest', sourceType: 'module'},
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    "@typescript-eslint/no-unused-vars": ['error', {"varsIgnorePattern": "^Component"}]
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  root: true,
};
