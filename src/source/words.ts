// import { common } from './utility/common';

const allWords = /\w+/g;
const wordsSplitChars = /(\.|,|\?| |-|!)/gm;

/**
 * Takes 2 strings and returns a number for the number of times the second string exists in the first string; optionally takes third boolean argument to make case sensitive
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
 * @param {string} str
 * @returns {number}
 */
function wordCount(str: string): number {
  const strSplit = str.split(wordsSplitChars);
  const cleaned = strSplit.filter(t => {
    return allWords.test(t);
  });
  const counted = cleaned.filter(w => {
    return isNaN(parseFloat(w));
  });
  return counted && counted.length ? counted.length : 0;
}

const words = {
  specificWordCount,
  wordCount
};

export { words };
