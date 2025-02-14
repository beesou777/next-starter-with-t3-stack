/** @type {import("eslint").Linter.Config} */
const config = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": true
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked"
  ],
  "rules": {
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/require-await": "off",
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "react/no-unescaped-entities":"off",
    "@typescript-eslint/no-redundant-type-constituents":"off",
    "@typescript-eslint/prefer-nullish-coalescing":"off",
    "@typescript-eslint/no-base-to-string":"off",
    "@typescript-eslint/prefer-promise-reject-errors": "off",
    "@typescript-eslint/non-nullable-type-assertion-style": "off",
    "@typescript-eslint/consistent-indexed-object-style": "off",
    "@typescript-eslint/prefer-optional-chain": "off",
    "@typescript-eslint/prefer-regexp-exec":"off",
    "@typescript-eslint/dot-notation":"off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": {
          "attributes": false
        }
      }
    ],
  }
}
module.exports = config;