module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'prettier',
    'airbnb',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn',
      { extension: ['.jsx', '.js'] }],
    'import/prefer-default-export': 'off',
  },
};
