/**
 * Credit to https://github.com/sindresorhus/semver-regex for the regex string
 * I use this and wanted to include it in my own library for convenience
 */

import { common } from './utility/common';

const semverStr = /(?<=^v?|\sv?)(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)(?:-(?:[1-9]\d*|[\da-z-]*[a-z-][\da-z-]*)(?:\.(?:[1-9]\d*|[\da-z-]*[a-z-][\da-z-]*))*)?(?:\+[\da-z-]+(?:\.[\da-z-]+)*)?(?=$|\s)/gi;

/**
 * returns semver from string if present
 *
 * Basic usage example:
 * ```js
 * const semver = require('stringman').semver; // or `import {semver} from 'stringman'`;
 * const justSemver = semver.retrieve('this project started on version 0.1.0');
 * console.log(justSemver); // ['0.1.0']
 * ```
 *
 * @param {string} str
 * @returns {(RegExpMatchArray)}
 */
function retrieve(str: string): RegExpMatchArray {
  return common.retrieve(str, semverStr);
}

/**
 * Tests if argument is valid semver
 *
 * Basic usage example:
 * ```js
 * const semver = require('stringman').semver; // or `import {semver} from 'stringman'`;
 * const valid = semver.isValid('0.1.0');
 * const invalid = semver.isValid('0,1.0-rt');
 * console.log(valid); // true
 * console.log(invalid); // false
 * ```
 *
 * @param {string} str
 * @returns {boolean}
 */
function isValid(str: string): boolean {
  return common.isValid(str, semverStr);
}

/**
 * Removes semver from string, trims, and returns result
 *
 * Basic usage example:
 * ```js
 * const semver = require('stringman').semver; // or `import {semver} from 'stringman'`;
 * const removed = semver.remove('this project started on version 0.1.0');
 * console.log(removed); // 'this project started on version'
 * ```
 *
 * @param {string} str
 * @returns {string}
 */
function remove(str: string): string {
  return common.remove(str, semverStr);
}

/**
 * Takes a string with a semver, a second string, returns first string with semver swapped for second string
 *
 * Basic usage example:
 * ```js
 * const semver = require('stringman').semver; // or `import {semver} from 'stringman'`;
 * const swapped = semver.swapped('this project started on version 0.1.0', '1.5.8');
 * console.log(removed); // 'this project started on version 1.5.8'
 * ```
 *
 * @param {string} str
 * @param {string} newVer
 * @returns {string}
 */
function swap(str: string, newVer: string): string {
  return common.swap(str, newVer, semverStr);
}

/**
 * Returns RegExp variable used to test for semver
 *
 * @returns {RegExp}
 */
function expression(): RegExp {
  return semverStr;
}

const semver = {
  expression,
  isValid,
  remove,
  retrieve,
  swap
};

export { semver };
