module.exports = {
    verbose: true,
    globals: {
        'ts-jest': {
            tsConfig: '<rootDir>/tsconfig.json',
            // this is required otherwise ts-jest throw warning for not able to
            // find project root
            // https://github.com/kulshekhar/ts-jest/issues/823#issuecomment-515529012
            packageJson: 'package.json',
        },
    },
    transform: {
        '^.+\\.(ts)$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    testRegex: '.test\\.[tj]s$',
    restoreMocks: true,
    clearMocks: true,
    // Use stdout for logging, only use stderr for error.
    // TODO(minor) Although this seems to conflict with TestEnvironment in e2e. With
    // TestEnvironment, we still output to stderr.
    reporters: ['jest-standard-reporter'],
};
