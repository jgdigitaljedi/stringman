import { common } from './utility/common';

const urlStr = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gm;

const domainExp = /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/\n]+)/im;

/**
 * Takes string and returns any matches for a valid URL from the string
 *
 * Basic usage example:
 * ```js
 * const url = require('stringman').url; // or `import {url} from 'stringman'`;
 * const justUrl = url.retrieve('the url to my portfolio is https://joeyg.me');
 * console.log(justUrl); // 'https://joeyg.me'
 * ```
 *
 * @param {string} str
 * @returns {(string[])}
 */
function retrieve(str: string): string[] {
  return common.retrieve(str, urlStr);
}

/**
 * Takes a string and returns whether string is a valid URL as a boolean
 *
 * Basic usage example:
 * ```js
 * const url = require('stringman').url; // or `import {url} from 'stringman'`;
 * const valid = url.isValid('https://joeyg.me');
 * const invalid = url.isValid('https/joeyg.me');
 * console.log(valid); // true
 * console.log(invalid); // false
 * ```
 *
 * @param {string} str
 * @returns {boolean}
 */
function isValid(str: string): boolean {
  return common.isValid(str, urlStr);
}

/**
 * Takes string, removes any URLs, trims, and returns string
 *
 * Basic usage example:
 * ```js
 * const url = require('stringman').url; // or `import {url} from 'stringman'`;
 * const removed = url.remove('the url to my portfolio is https://joeyg.me');
 * console.log(removed); // 'the url to my portfolio is'
 * ```
 *
 * @param {string} str
 * @returns {string}
 */
function remove(str: string): string {
  return common.remove(str, urlStr);
}

/**
 * takes a string with a url and a second string, swaps any urls in the first string with the second string, and returns the result
 *
 * Basic usage example:
 * ```js
 * const url = require('stringman').url; // or `import {url} from 'stringman'`;
 * const swapped = url.swap('this is a test for https://test.com', 'http://www.fakesite.org');
 * console.log(swapped); // 'this is a test for http://www.fakesite.org'
 * ```
 *
 * @param {string} str
 * @param {string} other
 * @returns {string}
 */
function swap(str: string, other: string): string {
  return common.swap(str, other, urlStr);
}

/**
 * Takes url string, tries to return just the domain
 *
 * Basic usage example:
 * ```js
 * const url = require('stringman').url; // or `import {url} from 'stringman'`;
 * const domain = url.getDomain('https://www.google.com/test');
 * console.log(domain); // '[google.com]'
 * ```
 *
 * @param {string} str
 * @returns {(string[])}
 */
function getDomain(str: string): string[] {
  return common.retrieve(str, domainExp).splice(1);
}

/**
 * Returns RegExp for testing URLs
 *
 * @returns {RegExp}
 */
function expression(): RegExp {
  return urlStr;
}

const url = {
  expression,
  getDomain,
  isValid,
  remove,
  retrieve,
  swap
};

export { url };
