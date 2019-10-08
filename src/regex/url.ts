const urlStr = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gm;

/**
 * Takes string and returns any matches for a valid URL from the string
 *
 * @param {string} str
 * @returns {(string[] | null)}
 */
function retrieve(str: string): string[] | null {
  return str.match(urlStr);
}

/**
 * Takesa string and returns whether string is a valid URL as a boolean
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
 * @param {string} str
 * @returns {string}
 */
function remove(str: string): string {
  return str.replace(urlStr, '').trim();
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
  expression
};

export { url };
