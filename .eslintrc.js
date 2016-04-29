module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    'no-undef': 2,
    'no-unused-vars': [2, { vars: 'all', args: 'none' }],
  },
};
