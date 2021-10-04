module.exports = {
    extends: ['airbnb-typescript'],
    parserOptions: {
        project: './tsconfig.json',
    },
    ignorePatterns: ['jest.setup.ts'],
    rules: {
        "no-underscore-dangle":"off",
        "import/prefer-default-export":"off",
        "no-param-reassign":"off",
        "import/no-cycle":"off",
        "@typescript-eslint/space-infix-ops":"off",
        "import/extensions": "off",
        "react/jsx-filename-extension": "off",
    },
    plugins: ["import"],
};