module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'react/prop-types': false,
    'react/require-default-props' : false,
    'react/jsx-filename-extension': false,
    'import/prefer-default-export': false,
    'jsx-a11y/click-events-have-key-events': false,
    'jsx-a11y/no-static-element-interactions': false,
    'react/forbid-prop-types': false,
    quotes: ['error', 'single'],
  },
};
