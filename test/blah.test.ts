import { createEnvPlugin } from '../src';
import { defaultDotEnv, plainEnv } from './__fixtures__/env';

describe(createEnvPlugin.name, () => {
  let testConfig: any;
  beforeEach(() => {
    testConfig = {
      env: {},
    };
  });
  it('should inject dotenv', () => {
    const result: any = createEnvPlugin({ env: defaultDotEnv })(testConfig).env;
    expect(result.PASSWORD).toEqual('CYPRESS_PASSWORD');
    expect(result.SECRET).not.toBeDefined();
  });
  it('should not use prefix if prefix is null', () => {
    const result: any = createEnvPlugin({
      env: defaultDotEnv,
      prefix: null,
    })(testConfig).env;
    expect(result.CYPRESS_PASSWORD).toEqual('CYPRESS_PASSWORD');
    expect(result.SECRET).toEqual('SECRET');
  });
  it('should handle plain object', () => {
    const result: any = createEnvPlugin({ env: plainEnv })(testConfig).env;
    expect(result.PASSWORD).toEqual('CYPRESS_PASSWORD');
    expect(result.SECRET).not.toBeDefined();
  });

  it('should throw if no environment is supplied', () => {
    expect(() => {
      //@ts-ignore
      createEnvPlugin({})(testConfig);
    }).toThrow('No environment supplied to cypress-env-plugin');
  });
});
