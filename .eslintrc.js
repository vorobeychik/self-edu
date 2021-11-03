module.exports = {
  extends: ['airbnb', 'airbnb-typescript'],
  parserOptions: {
    project: 'tsconfig.json',
  },
  rules: {
      "max-len": ["error", { "code": 120 }],
      "no-underscore-dangle":"off",
      "react/jsx-no-bind": "off",
      "import/prefer-default-export":"off",
      "no-param-reassign":"off",
      "import/no-cycle":"off",
      "@typescript-eslint/space-infix-ops":"off",
      "import/extensions": "off",
      "react/jsx-filename-extension": "off",
  },
  plugins: ["import"],
};