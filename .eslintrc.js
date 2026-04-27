module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'warn',
    'no-useless-escape': 'warn',
    'no-dupe-keys': 'warn',
    'vue/no-dupe-keys': 'warn',
    'vue/multi-word-component-names': 'off',
    'vue/no-lone-template': 'warn',
    'vue/require-default-prop': 'warn'
  }
}
