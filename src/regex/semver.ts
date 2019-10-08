/**
 * Credit to https://github.com/sindresorhus/semver-regex for the regex string
 * I use this and wanted to include it in my own library for convenience
 */

const semverStr = /(?<=^v?|\sv?)(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)(?:-(?:[1-9]\d*|[\da-z-]*[a-z-][\da-z-]*)(?:\.(?:[1-9]\d*|[\da-z-]*[a-z-][\da-z-]*))*)?(?:\+[\da-z-]+(?:\.[\da-z-]+)*)?(?=$|\s)/gi;

const semver = {
  retrieve: (str: string): RegExpMatchArray | null => {
    return str.match(semverStr);
  },
  isValid: (str: string): boolean => {
    return semverStr.test(str);
  }
};

export { semver };
