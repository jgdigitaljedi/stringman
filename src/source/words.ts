// import { common } from './utility/common';
import { whitespace } from './whitespace';

const allWords = /\w+/g;
const wordsSplitChars = /(\.|,|\?| |-|!)/gm;

/**
 * Takes 2 strings and returns a number for the number of times the second string exists in the first string; optionally takes third boolean argument to make case sensitive
 *
 * Basic usage example:
 * ```js
 * import {words} from 'stringman'; // or const words = require('stringman').words;
 * const insensitive = words.specificWordCount('Maybe-this will, trip it up! Will it? We WILL see.', 'will');
 * const sensitive = words.specificWordCount('Maybe-this will, trip it up! Will it? We WILL see.', 'will', true);
 * console.log(insensitive); // 3
 * console.log(sensitive); // 1
 * ```
 *
 * @param {string} str
 * @param {string} word
 * @returns {number}
 */
function specificWordCount(str: string, word: string, strict?: boolean): number {
  const strSplit = str.split(wordsSplitChars);
  const cleaned = strSplit.filter(t => {
    return allWords.test(t);
  });
  const counted = cleaned.filter(w => {
    const num = !isNaN(parseFloat(w));
    if (num) {
      return false;
    } else if (strict) {
      return word === w;
    } else {
      return word.toLowerCase() === w.toLowerCase();
    }
  });
  return counted ? counted.length : 0;
}

/**
 * Takes a string and returns the number of words in the string as a number
 *
 * Basic usage example:
 * ```js
 * import {words} from 'stringman'; // or const words = require('stringman').words;
 * const count = words.wordCount('This sentence has 4 words.');
 * const countAgain = words.wordCount('This sentence has five words.');
 * console.log(count); // 4
 * console.log(countAgain); // 5
 * ```
 *
 * @param {string} str
 * @returns {number}
 */
function wordCount(str: string): number {
  const strSplit = str.split(wordsSplitChars);
  const cleaned = strSplit.filter(t => {
    return allWords.test(t);
  });
  if (cleaned && cleaned.length) {
    const counted = cleaned.filter(w => {
      return isNaN(parseFloat(w));
    });
    return counted && counted.length ? counted.length : 0;
  }
  return 0;
}

/**
 * Takes a string, counts all instances of words in the string, and returns an object with each word and the number of occurences
 *
 * Basic usage example:
 * ```js
 * import {words} from 'stringman'; // or const words = require('stringman').words;
 * const test = `This is my stupid test.
 *  Its a small test, but it is my test.
 *  `;
 * const lax = words.allWordCount(test);
 * const strict = words.allWordCount(test, true);
 * console.log(lax); // {"this": 1, "is": 2, "my": 2, "stupid": 1, "test": 3, "its": 1, "a": 1, "small": 1, "but": 1, "it": 1}
 * console.log(strict); // {"This": 1, "is": 2, "my": 2, "stupid": 1, "test": 3, "Its": 1, "a": 1, "small": 1, "but": 1, "it": 1}
 * ```
 *
 * @param {string} str
 * @param {boolean} [strict]
 * @returns {*}
 */
function allWordCount(str: string, strict?: boolean): any {
  const strSplit = whitespace
    .replaceWith(str, { tabs: true, breaks: true, multiSpace: true }, ' ')
    .split(wordsSplitChars);
  if (strSplit && strSplit.length) {
    const cleaned = strSplit.filter(t => {
      return allWords.test(t);
    });
    if (cleaned && cleaned.length) {
      return cleaned.reduce((acc: any, word: string) => {
        if (strict) {
          if (acc[word]) {
            acc[word] += 1;
          } else {
            acc[word] = 1;
          }
        } else {
          const lower = word.toLowerCase();
          if (acc[lower]) {
            acc[lower] += 1;
          } else {
            acc[lower] = 1;
          }
        }
        return acc;
      }, {});
    } else {
      return {};
    }
  } else {
    return {};
  }
}

/**
 * Takes a string and returns with the first character capitalized
 *
 * Basic usage example:
 * ```js
 * import {words} from 'stringman'; // or const words = require('stringman').words;
 * const cap = words.capitalize('test');
 * const failure = words.capitalize(true);
 * console.log(test); // 'Test'
 * console.log(failure); // null
 * ```
 *
 * @param {string} str
 * @returns {(string | null)}
 */
function capitalize(str: string): string | null {
  if (typeof str !== 'string') {
    return null;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Takes a string, the string to replace, the string to replace the other string with, and the optional boolean argument for case sensitivity and returns the
 * original string with the 2nd argument replaced with the 3rd. Can return null if a failure happens along the way.
 *
 * Basic usage example:
 * ```js
 * import {words} from 'stringman'; // or const words = require('stringman').words;
 * const test = 'We hope this works because we put some serious work into this and we are invested.';
 * const sens = words.replaceWord(test, 'we', 'they', true);
 * const ins =  words.replaceWord(test, 'we', 'they');
 * const failure =  words.replaceWord(test, 5, 'they');
 * console.log(sens); // 'They hope this works because they put some serious work into this and they are invested.'
 * console.log(ins); // 'they hope this works because they put some serious work into this and they are invested.'
 * console.log(failure); // null
 * ```
 *
 * @param {string} str
 * @param {string} word
 * @param {string} replaceWith
 * @param {boolean} [cases]
 * @returns {(string | null)}
 */
function replaceWord(
  str: string,
  word: string,
  replaceWith: string,
  cases?: boolean
): string | null {
  if (typeof str !== 'string' || typeof word !== 'string' || typeof replaceWith !== 'string') {
    return null;
  }
  if (cases) {
    const regExp = new RegExp(word, 'gm');
    const capWord = capitalize(word);
    const capRw = capitalize(replaceWith);
    const capExp = capWord ? new RegExp(capWord, 'gm') : null;
    const lc = str.replace(regExp, replaceWith);
    return capExp && capRw ? lc.replace(capExp, capRw) : null;
  } else {
    const insExp = new RegExp(word, 'gim');
    return str.replace(insExp, replaceWith);
  }
}

const words = {
  allWordCount,
  capitalize,
  replaceWord,
  specificWordCount,
  wordCount
};

export { words };
