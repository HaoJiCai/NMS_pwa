module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    "no-restricted-globals": "off",
    "object-curly-newline": "off",
    'max-len': ['error', { code: 200 }],
    "linebreak-style": ["off", "windows"],
  },
};
