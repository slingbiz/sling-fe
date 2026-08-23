module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  testMatch: ['**/*.test.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
