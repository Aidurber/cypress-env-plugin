import { DotenvConfigOutput } from 'dotenv/types';

export const defaultDotEnv: DotenvConfigOutput = {
  parsed: {
    SECRET: 'SECRET',
    CYPRESS_PASSWORD: 'CYPRESS_PASSWORD',
  },
};
export const plainEnv = {
  SECRET: 'SECRET',
  CYPRESS_PASSWORD: 'CYPRESS_PASSWORD',
};
