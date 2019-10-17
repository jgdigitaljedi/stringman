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

const whitespace = {
  removeBreaks
};

export { whitespace };
