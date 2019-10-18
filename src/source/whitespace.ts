import { IReplaceWith } from '../models/whitespace.model';
import { common } from './utility/common';

/**
 * Takes a string and returns that string with all carriage returns and line breaks removed
 *
 * Basic usage example:
 * ```js
 * import {whitespace} from 'stringman' // or const whitespace = require('stringman').whitespace;
 * const removed = whitespace.removeBreaks('this line\n has a\r dumb amount of\n line breaks');
 * console.log(removed); // 'this line has a dumb amount of line breaks'
 * ```
 *
 * @param {string} str
 * @returns {string}
 */
function removeBreaks(str: string): string {
  return common.remove(str, /\n|\r|\\r|\\n/gim);
}

/**
 * Takes a string, removes tabs, and returns result
 *
 * Basic usage example:
 * ```js
 * import {whitespace} from 'stringman' // or const whitespace = require('stringman').whitespace;
 * const removed = whitespace.removeTabs('this line   has some   tabs of \t multiple kinds');
 * console.log(removed); // 'this line has some tabs of multiple kinds'
 * ```
 *
 * @param {string} str
 * @returns {string}
 */
function removeTabs(str: string): string {
  return common.remove(str, /\t|\\t/gim);
}

/**
 * Takes a string, removes all forms of witespace, and returns result
 *
 * Basic usage example:
 * ```js
 * import {whitespace} from 'stringman' // or const whitespace = require('stringman').whitespace;
 * const removed = whitespace.removeAll('this string\n   is gonne be\r a\t jumbled mess   !');
 * console.log(removed); // 'thisstringisgonnabeajumbledmess!'
 * ```
 *
 * @param {string} str
 * @returns {string}
 */
function removeAll(str: string): string {
  return common.remove(str, /\t|\\t|\n|\\n|\r|\\r| /gim);
}

/**
 * Takes string and replaces any instance of 2 or more consecutive spaces with a single space and returns the result
 *
 * Basic usage example:
 * ```js
 * import {whitespace} from 'stringman' // or const whitespace = require('stringman').whitespace;
 * const single = whitespace.singleSpace('this string  has    a dumb amount  of   extra spaces         !');
 * console.log(single); // 'this string has a dumb amount of extra spaces !'
 * ```
 *
 * @param {string} str
 * @returns {string}
 */
function singleSpace(str: string): string {
  return str.replace(/  +/gm, ' ');
}

/**
 * Takes a string, an enumerable object with boolean values to detrermine what will be replaced, and another string to replace things with and returns the result of replacing
 * the values designated in the 2nd argument with the contents of the 3 argument
 *
 * Basic usage example:
 * ```js
 * import {whitespace} from 'stringman' // or const whitespace = require('stringman').whitespace;
 * const simple = whitespace.replaceWith('gonna just\n remove breaks\n from this\n', {breaks: true}, ' ');
 * const goofy = whitespace.replaceWith('gonna   make\t a   \nridiculous example', {tabs: true, breaks: true, multiSpace: true}, '$');
 * console.log(simple); // 'gonna just  remove breaks  from this '
 * console.log(goofy); // 'gonna$make$ a$$ridiculous example'
 * ```
 *
 * @param {string} str
 * @param {IReplaceWith} toReplace
 * @param {string} newStr
 * @returns {string}
 */
function replaceWith(str: string, toReplace: IReplaceWith, newStr: string): string {
  // I went with self assigning because other there would be a ton of variable declarations which slows things down. I'm not married to it though.
  let result = str;
  if (toReplace.tabs) {
    result = result.replace(/\t|\\t/gim, newStr);
  }
  if (toReplace.breaks) {
    result = result.replace(/\n|\r|\\r|\\n/gim, newStr);
  }
  if (toReplace.multiSpace) {
    result = result.replace(/  +/gm, newStr);
  }
  return result;
}

const whitespace = {
  removeAll,
  removeBreaks,
  removeTabs,
  replaceWith,
  singleSpace
};

export { whitespace };
