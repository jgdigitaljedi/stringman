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
 * @returns {(string[] | null)}
 */
function retrieve(str: string): string[] | null {
  return str.match(urlStr);
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
  return urlStr.test(str);
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
  return str.replace(urlStr, '').trim();
}

/**
 * Takes url string, tries to return just the domain
 *
 * Basic usage example:
 * ```js
 * const url = require('stringman').url; // or `import {url} from 'stringman'`;
 * const domain = url.getDomain('https://www.google.com/test');
 * console.log(domain); // 'google.com'
 * ```
 *
 * @param {string} str
 * @returns {(string | null)}
 */
function getDomain(str: string): string | null {
  const matched = str.match(domainExp);
  return matched && matched.length ? matched[1] : null;
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
  retrieve,
  isValid,
  remove,
  getDomain,
  expression
};

export { url };
