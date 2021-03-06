module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true
  },
  "extends": ["plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12
  },
  "plugins": ["@typescript-eslint"],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "ignorePatterns": ["build/**"],
  "rules": {
    "comma-dangle": ["error", {
      "functions": "never",
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "exports": "always-multiline",
      "imports": "always-multiline"
    }],
    "react/display-name": "off",
    "no-undef": "off",
    "react/jsx-max-props-per-line": [1, {
      "when": "multiline"
    }],
    "no-use-before-define": "off",
    "no-void": "off",
    "react/jsx-tag-spacing": [1, {
      "beforeSelfClosing": "always",
      "afterOpening": "never",
      "beforeClosing": "never"
    }],
    "no-debugger": "warn",
    "@typescript-eslint/no-use-before-define": [0],
    "no-unused-vars": [0],
    "react/prop-types": [0],
    "no-mixed-operators": [0],
    "react-hooks/exhaustive-deps": [0],
    "@typescript-eslint/no-explicit-any": [0],
    "@typescript-eslint/explicit-module-boundary-types": [0],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "dot-notation": "off",
    "operator-linebreak": "off"
  }
};