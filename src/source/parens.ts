import { common } from './utility/common';

/**
 * Takes string and returns string with parenthesis and contain between parenthesis removed
 *
 * Basic usage example:
 * ```js
 * const parens = require('stringman').parens; // or `import {parens} from 'stringman'`;
 * const noParens = parens.remove('this will come back (and this will be removed)');
 * console.log(noParens); // 'this will come back'
 * ```
 *
 * @param {string} str
 * @returns {string}
 */
function remove(str: string): string {
  return common.remove(str, / *\([^)]*\) */g);
}

/**
 * Takes string and returns array of strings containing what was inside any number of sets of parenthesis
 *
 * Basic usage example:
 * ```js
 * const parens = require('stringman').parens; // or `import {parens} from 'stringman'`;
 * const fromInside = parens.inside('this is ignored (and this is returned)');
 * console.log(fromInside); // 'this is returned'
 * ```
 *
 * @param {string} str
 * @returns {(string[])}
 */
function inside(str: string): string[] {
  const matched = str.match(/\(([^()]+)\)/g);
  return matched ? matched.map((m) => m.replace('(', '').replace(')', '')) : [];
}

/**
 * Takes 2 strings, swaps anything in parenthesis INCLUDING THE PARENTHESIS from the first string with the second string
 *
 * Basic usage example:
 * ```js
 * const parens = require('stringman').parens; // or `import {parens} from 'stringman'`;
 * const noParens = parens.swap('this has (stuff) in parens', 'things');
 * const withParens = parens.swap('this has (other stuff) in parens too', '(more things)');
 * console.log(noParens); // 'this has things in parens'
 * console.log(withParens); // 'this has (more things) in parens too'
 * ```
 *
 * @param {string} str
 * @param {string} other
 * @returns {string}
 */
function swap(str: string, other: string): string {
  return common.swap(str, other, /\(([^()]+)\)/g);
}

const parens = {
  inside,
  remove,
  swap
};

export { parens };
