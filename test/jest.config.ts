import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
  },
  testRegex: '^.+\\.test.ts$',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': '@swc/jest',
  },
  rootDir: process.cwd(),
};

export default config;
