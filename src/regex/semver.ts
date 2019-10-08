/**
 * Credit to https://github.com/sindresorhus/semver-regex for the regex string
 * I use this and wanted to include it in my own library for convenience
 */

const semverStr = /(?<=^v?|\sv?)(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)(?:-(?:[1-9]\d*|[\da-z-]*[a-z-][\da-z-]*)(?:\.(?:[1-9]\d*|[\da-z-]*[a-z-][\da-z-]*))*)?(?:\+[\da-z-]+(?:\.[\da-z-]+)*)?(?=$|\s)/gi;

/**
 * returns semver from string if present
 *
 * @param {string} str
 * @returns {(RegExpMatchArray | null)}
 */
function retrieve(str: string): RegExpMatchArray | null {
  return str.match(semverStr);
}

/**
 * Tests if argument is valid semver
 *
 * @param {string} str
 * @returns {boolean}
 */
function isValid(str: string): boolean {
  return semverStr.test(str);
}

/**
 * Removes semver from string, trims, and returns result
 *
 * @param {string} str
 * @returns {string}
 */
function remove(str: string): string {
  return str.replace(semverStr, '').trim();
}


/**
 * Returns RegExp variable used to test for semver
 *
 * @returns {RegExp}
 */
function expression(): RegExp {
  return semverStr;
}

const semver = {
  retrieve,
  isValid,
  remove,
  expression
};

export { semver };
