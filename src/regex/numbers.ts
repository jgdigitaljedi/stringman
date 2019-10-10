
/**
 * Takes string and returns boolean for whether string contains at least 1 number
 * 
 * Basic usage example:
 * ```js
 * const numbers = require('stringman').numbers; // or `import {numbers} from 'stringman'`;
 * const yes = numbers.containsNum('this has a number 33');
 * const no = numbers.containsNum('this has a number 33');
 * console.log(yes); // true
 * console.log(no); // false
 * ```
 *
 * @param {string} str
 * @returns {boolean}
 */
function containsNum(num: string | number): boolean {
  return !!num.toString().match(/-?\d/g);
}

/**
 * Takes a string or a number and returns boolean for whether it is a valid whole number
 * 
 * Basic usage example:
 * ```js
 * const numbers = require('stringman').numbers; // or `import {numbers} from 'stringman'`;
 * const isWhole = numbers.whole(123456);
 * const notWhole = numbers.whole(123456.789);
 * console.log(isWhole); // true
 * console.log(notWhole); // false
 * ```
 *
 * @param {(string | number)} num
 * @returns {boolean}
 */
function whole(num: string | number): boolean {
  if (typeof num !== 'string' && typeof num !== 'number') {
    return false;
  }
  return !!num.toString().match(/^-?\d+$/g);
}

/**
 * Takes a string or a number and returns a boolean for whether it is a valid decimal
 * 
 * Basic usage example:
 * ```js
 * const numbers = require('stringman').numbers; // or `import {numbers} from 'stringman'`;
 * const isDec = numbers.decimal(123456.789);
 * const notDec = numbers.whole(123456);
 * console.log(isDec); // true
 * console.log(notDec); // false
 * ```
 *
 * @param {(string | number)} num
 * @returns {boolean}
 */
function decimal(num: string | number): boolean {
  if (typeof num !== 'string' && typeof num !== 'number') {
    return false;
  }
  return !!num.toString().match(/^-?\d*\.\d+$/g);
}

const numbers = {
  containsNum,
  decimal,
  whole
};

export { numbers };