import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  rootDir: process.cwd(),
};

export default config;
