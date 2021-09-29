module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '.(css|less)$': './style-mock.js'
    },
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.test.json',
        },
    },
    setupFilesAfterEnv:["./jest.setup.ts"]
};