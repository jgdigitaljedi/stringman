import { common } from './utility/common';

const getEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

/**
 * Takes a string and returns a valid email address if one is present in the string
 *
 * Basic usage example:
 * ```js
 * const email = require('stringman').email; // or `import {email} from 'stringman'`;
 * const test = email.retrieve('this is my email address joey@joeyg.me');
 * console.log(test); // '[joey@joeyg.me]'
 * ```
 *
 * @param {string} str
 * @returns {(string[])}
 */
function retrieve(str: string): string[] {
  return common.retrieve(str, getEmail);
}

/**
 * Takes a string and returns boolean to represent whether or not string is a valid email address
 *
 * Basic usage example:
 * ```js
 * const email = require('stringman').email; // or `import {email} from 'stringman'`;
 * const valid = email.isValid('joey@joeyg.me');
 * const invalid = email.isValid('joey-joeyg.me');
 * console.log(valid); // true
 * console.log(invalid); // false
 * ```
 *
 * @param {string} str
 * @returns {boolean}
 */
function isValid(str: string): boolean {
  return common.isValid(str, getEmail);
}

/**
 * Takes a string and returns the string with any email addresses removed
 *
 * Basic usage example:
 * ```js
 * const email = require('stringman').email; // or `import {email} from 'stringman'`;
 * const test = email.remove('my email address is joey@joeyg.me');
 * console.log(test); // 'my email address is';
 * ```
 *
 * @param {string} str
 * @returns {string}
 */
function remove(str: string): string {
  return common.remove(str, getEmail);
}

/**
 * Takes 2 strings (a string with an email address and another string that is a different email address) and returns the first string with the new address swapped
 *
 * Basic usage example:
 * ```js
 * const email = require('stringman').email; // or `import {email} from 'stringman'`;
 * const test = email.swap('my email address is joey@joeyg.me', 'test@test.com');
 * console.log(test); // 'my email address is test@test.com'
 * ```
 *
 * @param {string} str
 * @param {string} newEmail
 * @returns {string}
 */
function swap(str: string, newEmail: string): string {
  return common.swap(str, newEmail, getEmail);
}

const email = {
  isValid,
  remove,
  retrieve,
  swap
};

export { email };
