import { common } from './utility/common';

const ipAddrOnly = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/m;

const ipAddrContains = /(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/gm;

/**
 * Tests if argument is valid IP address and return boolean
 *
 * Basic usage example:
 * ```js
 * import {ip} from 'stringman'; // or const ip = require('stringman').ip;
 * const valid = ip.isValid('192.168.0.1');
 * const invalid = ip.isValid('192.168.0.256');
 * console.log(valid); // true
 * console.log(invalid); // false
 * ```
 *
 * @param {string} addr
 * @returns {boolean}
 */
function isValid(addr: string): boolean {
  return common.isValid(addr, ipAddrOnly);
}

/**
 * Gets any and all valid IP addresses from a string and returns in array
 *
 * Basic usage example:
 * ```js
 * import {ip} from 'stringman'; // or const ip = require('stringman').ip;
 * const ips = ip.retrieve('my router is at 192.168.0.1');
 * console.log(ips); // ['192.168.0.1'];
 * ```
 *
 * @param {string} str
 * @returns {string[]}
 */
function retrieve(str: string): string[] {
  return common.retrieve(str, ipAddrContains);
}

/**
 * Returns regular expression used to find and verify IP addresses
 *
 * Basic usage example:
 * ```js
 * import {ip} from 'stringman'; // or const ip = require('stringman').ip;
 * const expGlobal = ip.expression(true);
 * const exp = ip.expression();
 * console.log(expGlobal); //  /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?$)/g
 * console.log(exp); //  /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?$)/
 * ```
 *
 * @param {boolean} [global]
 * @returns {RegExp}
 */
function expression(global?: boolean): RegExp {
  if (expression) {
    return new RegExp(ipAddrOnly, 'g');
  }
  return ipAddrOnly;
}

/**
 * Takes a string and returns the string with all valid IP addresses removed
 *
 * Basic usage example:
 * ```js
 * import {ip} from 'stringman'; // or const ip = require('stringman').ip;
 * const removed = ip.remove('my router is at 192.168.0.1');
 * console.log(removed); // 'my router is at'
 * ```
 *
 * @param {string} str
 * @returns {string}
 */
function remove(str: string): string {
  return common.remove(str, ipAddrContains);
}

/**
 * Takes a string with an IP and another string and returns the first string with all IP addresses swapped with the second string
 *
 * Basic usage example:
 * ```js
 * import {ip} from 'stringman'; // or const ip = require('stringman').ip;
 * const swapped = ip.swap('my router is at 192.168.0.1', '***.***.***.***');
 * console.log(swapped); // 'my router is at ***.***.***.***'
 * ```
 *
 * @param {string} str
 * @param {string} newStr
 * @returns {string}
 */
function swap(str: string, newStr: string): string {
  // if (!str || typeof str !== 'string') {
  //   return '';
  // }
  // return str.replace(ipAddrContains, newStr);
  return common.swap(str, newStr, ipAddrContains);
}

const ip = {
  expression,
  isValid,
  remove,
  retrieve,
  swap
};

export { ip };
