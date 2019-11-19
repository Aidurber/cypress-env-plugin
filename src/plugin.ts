import { DotenvConfigOutput } from 'dotenv';
import { CypressConfiguration, Dictionary } from './types';
import { DEFAULT_PREFIX } from './constants';
interface DotEnvPluginConfig {
  /**
   * Environment prefix i.e. CYPRESS_
   *
   * @type {string} [prefix=CYPRESS_]
   * @memberof DotEnvPluginConfig
   */
  prefix?: string | null;
  /**
   * Dotenv config parse result
   *
   * @type {DotenvConfigOutput}
   * @memberof DotEnvPluginConfig
   */
  env?: DotenvConfigOutput | object;
}
/**
 * Create the Cypress environment plugin
 *
 * @export
 * @param {DotEnvPluginConfig} { prefix, env }
 * @returns
 */
export function createEnvPlugin({ prefix, env }: DotEnvPluginConfig) {
  const usePrefix: boolean = prefix !== null;
  const internalPrefix: string = prefix || DEFAULT_PREFIX;

  return (config: CypressConfiguration): CypressConfiguration => {
    const internalConfig = { ...config };
    const variables = extractVariables(env);
    for (const key in variables) {
      if (usePrefix && !key.includes(internalPrefix)) continue;
      const strippedKey = usePrefix ? key.replace(internalPrefix, '') : key;
      (internalConfig.env as any)[strippedKey] = variables[key];
    }
    return internalConfig;
  };
}

function extractVariables(
  env: DotenvConfigOutput | object | undefined
): Dictionary {
  if (typeof env === 'undefined' || env === null) {
    throw new Error('No environment supplied to cypress-env-plugin');
  }
  if (isDotEnvOutput(env)) {
    return (env as DotenvConfigOutput).parsed as Dictionary;
  }
  return env as Dictionary;
}

const isDotEnvOutput = (env: any): boolean => env.hasOwnProperty('parsed');
