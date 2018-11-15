// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "for-direction": 2,
    "getter-return": 2,
    "no-await-in-loop": 2,
    "no-extra-parens": 2,
    "no-prototype-builtins": 2,
    "no-template-curly-in-string": 2,
    "array-callback-return": 2,
    "block-scoped-var": 2,
    "consistent-return": 2,
    "default-case": 2,
    "guard-for-in": 2,
    "no-alert": 2,
    "no-caller": 2,
    "no-div-regex": 2,
    "no-else-return": 2,
    "no-empty-function": 2,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-extend-native": 0,
    "no-extra-bind": 2,
    "no-extra-label": 2,
    "no-floating-decimal": 2,
    "no-implicit-coercion": 2,
    "no-implicit-globals": 2,
    "no-implied-eval": 2,
    "no-invalid-this": 2,
    "no-iterator": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-multi-str": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-octal-escape": 2,
    "no-param-reassign": 2,
    "no-proto": 2,
    "no-return-assign": 2,
    "no-return-await": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-unmodified-loop-condition": 2,
    "no-unused-expressions": 1,
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-useless-return": 2,
    "no-void": 2,
    "no-with": 2,
    "require-await": 2,
    "vars-on-top": 1,
    "wrap-iife": 2,
    "yoda": 2,
    "no-shadow": [
      2,
      {
        "builtinGlobals": false,
        "allow": [
          "event"
        ]
      }
    ],
    "no-undef-init": 2,
    "arrow-body-style": [
      2,
      "always"
    ],
    "arrow-parens": [
      1,
      "as-needed"
    ],
    "no-confusing-arrow": 2,
    "no-useless-computed-key": 2,
    "no-useless-constructor": 2,
    "no-useless-rename": 2,
    "object-shorthand": 2,
    "semi": [
      2,
      "always"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "indent": [
      "error",
      4
    ],
    "eqeqeq": 0,
    "space-before-function-paren": [
      0,
      "always"
    ],
    "eol-last": 0,
    "handle-callback-err": "off",
    "no-new": 0
  }
}
