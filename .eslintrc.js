module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vuejs-accessibility/recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['vuejs-accessibility', 'prettier'],
  // add your custom rules here
  rules: {
    'vue/html-self-closing': 0,
    'vue/singleline-html-element-content-newline': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  globals: {
    $nuxt: true,
  },
}
