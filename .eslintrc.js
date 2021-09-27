module.exports = {
    extends: ['airbnb-typescript'],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        "no-underscore-dangle":"off",
        "import/prefer-default-export":"off",
        "no-param-reassign":"off",
        "import/no-cycle":"off",
        "@typescript-eslint/space-infix-ops":"off",
        "import/extensions": "off",
    },
    plugins: ["import"],
};