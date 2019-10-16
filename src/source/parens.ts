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
  return str.replace(/ *\([^)]*\) */g, '').trim();
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
  return matched ? matched.map(m => m.replace('(', '').replace(')', '')) : [];
}

const parens = {
  inside,
  remove
};

export { parens };
