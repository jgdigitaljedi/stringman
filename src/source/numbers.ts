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
  if (typeof num === 'number') {
    return true;
  }
  if (typeof num === 'string') {
    return !!num.match(/-?\d/g);
  }
  return false;
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

/**
 * Takes a string and returns boolean indicating whether string contains a decimal somwhere in it
 *
 * Basic usage example:
 * ```js
 * const numbers = require('stringman').numbers; // or `import {numbers} from 'stringman'`;
 * const hasDec = numbers.containsDecimal('has a decimal 123456.789');
 * const noDec = numbers.whole('no decimal 123456');
 * console.log(hasDec); // true
 * console.log(noDec); // false
 * ```
 *
 * @param {string | number} num
 * @returns {boolean}
 */
function containsDecimal(num: string | number): boolean {
  if (typeof num === 'string') {
    return !!num.match(/-?\d*\.\d+/g);
  }
  if (typeof num === 'number') {
    return decimal(num);
  }
  return false;
}

/**
 * Takes a string and returns a boolean for whether it is a valid fraction.
 * ```js
 * const numbers = require('stringman').numbers; // or `import {numbers} from 'stringman'`;
 * const valid = numbers.fraction('1/3');
 * const invalid = numbers.fraction('3.33');
 * console.log(isDec); // true
 * console.log(notDec); // false
 * ```
 *
 * @param {(number | string)} num
 * @returns {boolean}
 */
function fraction(num: string): boolean {
  if (typeof num !== 'string') {
    return false;
  }
  return !!num.toString().match(/^-?\d*\/\d+$/g);
}

/**
 * Takes a string and returns a boolean indicating whether the string contains a fraction
 *
 * Basic usage example:
 * ```js
 * const numbers = require('stringman').numbers; // or `import {numbers} from 'stringman'`;
 * const hasFraction = numbers.containsFraction('this string has a fraction 1/2');
 * const noFraction = numbers.containsFraction('this string does not have a fraction');
 * console.log(hasFraction) // true
 * console.log(noFraction) // false
 * ```
 *
 * @param {string} num
 * @returns {boolean}
 */
function containsFraction(num: string): boolean {
  if (typeof num !== 'string') {
    return false;
  }
  return !!num.match(/-?\d*\/\d+/g);
}

/**
 * Takes a number as a string or number form and returns the hexidecimal equivalent
 *
 * Basic usage example:
 * ```js
 * const numbers = require('stringman').numbers; // or `import {numbers} from 'stringman'`;
 * const hex = numbers.convertToHex('255');
 * const moreHex = numbers.convertToHex(0);
 * const notHex = numbers.convertToHex('nope');
 * console.log(hex) // 'ff'
 * console.log(moreHex) // '00'
 * console.log(notHex) // 'NAN'
 * ```
 *
 * @param {(string | number)} num
 * @returns {(string | null)}
 */
function convertToHex(num: string | number): string | null {
  if (typeof num !== 'string' && typeof num !== 'number') {
    return null;
  }
  const value = typeof num === 'string' ? parseFloat(num) : num;
  const hex = value.toString(16);
  return hex.length === 1 ? '0' + hex.toUpperCase() : hex.toUpperCase();
}

/**
 * Takes a string or number and validates whether it is a valid phone number format.
 *
 * Basic usage example:
 * ```js
 * const numbers = require('stringman').numbers; // or `import {numbers} from 'stringman'`;
 * const valid = numbers.isPhoneNumber('(888) 555-1234');
 * const invalid = numbers.isPhoneNumber('888-55-2345');
 * console.log(valid); // true
 * console.log(invalid); // false
 * ```
 *
 * Valid formats:
 * ```
 * (123) 456-7890
 * (123)456-7890
 * 123-456-7890
 * 123.456.7890
 * 1234567890
 * +31636363634
 * 075-63546725
 * ```
 *
 * @param {(string | number)} str
 * @returns {boolean}
 */
function isPhoneNumber(str: string | number): boolean {
  if (typeof str !== 'string' && typeof str !== 'number') {
    return false;
  }
  const test = typeof str === 'number' ? str.toString() : str;
  return !!test.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
}

const numbers = {
  containsDecimal,
  containsFraction,
  containsNum,
  convertToHex,
  decimal,
  fraction,
  isPhoneNumber,
  whole
};

export { numbers };
