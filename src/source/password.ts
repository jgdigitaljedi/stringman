import { IPwOptions, IPwOptionsCount } from '../models/password.model';
import { common } from './utility/common';

/**
 * Takes min, max, and string of special characters and returns a RegExp for validating passwords
 *
 * Basic usage example:
 * ```js
 * const pwd = require('stringman').pwd; // or `import {pwd} from 'stringman'`;
 * const regEx = pwd.buildRegex({cap: true, lc: true, num: true, min: 8, max: 18, special: '-_=+*&'});
 * console.log(regEx); // /^[A-Za-z0-9-_=+*&]{8,18}$/
 * ```
 *
 * @param {IPwOptions} options
 * @returns {RegExp}
 */
function buildRegex(options: IPwOptions): RegExp {
  return new RegExp(
    `^[${options.lc ? 'a-z' : ''}${options.capital ? 'A-Z' : ''}${
      options.num ? '0-9' : ''
    }${options.special || ''}]{${options.min},${options.max}}$`
  );
}

/**
 * Takes parameters for building a regular expression then validates the string sent and returns a boolean value
 *
 * * Basic usage example:
 * ```js
 * const pwd = require('stringman').pwd; // or `import {pwd} from 'stringman'`;
 * const valid = pwd.isValid('Test-12345*', {cap: true, lc: true, num: true, min: 8, max: 18, special: '-_=+*&'});
 * const invalid = pwd.isValid('Test', {cap: true, lc: true, num: true, min: 8, max: 18, special: '-_=+*&'});
 * console.log(valid); // true
 * console.log(invalid); // false
 * ```
 *
 * @param {string} str
 * @param {IPwOptions} options
 * @returns {boolean}
 */
function isValid(str: string, options: IPwOptions): boolean {
  const re = buildRegex(options);
  return common.isValid(str, re);
}

/**
 * Validates using regex like isValid but also checks for specific number of different types of characters
 *
 * Basic usage example:
 * ```js
 * const pwd = require('stringman').pwd; // or `import {pwd} from 'stringman'`;
 * const valid = pwd.isValidAdvanced('Test-12345*', {cap: true, lc: true, num: true, min: 8, max: 18, special: '-_=+*&'}, {cap: 2, num: 2, special: 1});
 * const invalid = pwd.isValidAdvanced('Test', {cap: true, lc: true, num: true, min: 8, max: 18, special: '-_=+*&'}, {cap: 4, num: 2, special: 1});
 * console.log(valid); // true
 * console.log(invalid); // false
 * ```
 *
 * @param {string} str
 * @param {IPwOptions} options
 * @param {IPwOptionsCount} advOptions
 * @returns {boolean}
 */
function isValidAdvanced(str: string, options: IPwOptions, advOptions: IPwOptionsCount): boolean {
  if (isValid(str, options)) {
    if (advOptions) {
      const checkerObj = {
        capital: advOptions.capital ? '[A-Z]' : undefined,
        lc: advOptions.lc ? '[a-z]' : undefined,
        num: advOptions.num ? '[0-9]' : undefined,
        special: options.special && advOptions.special ? `[${options.special}]` : undefined
      };
      return (
        Object.keys(advOptions)
          .map((key: string) => {
            /* tslint:disable */
            // @ts-ignore
            const ex = checkerObj[key];
            const re = new RegExp(ex, 'g');
            const matched = str.match(re);
            // @ts-ignore
            return matched && matched.length >= advOptions[key];
            /* tslint:enable */
          })
          .filter(c => !c).length < 1
      );
    } else {
      return true;
    }
  } else {
    return false;
  }
}

const pwd = {
  buildRegex,
  isValid,
  isValidAdvanced
};

export { pwd };
