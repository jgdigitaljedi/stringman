
/**
 * Takes string and returns string with parenthesis and contain between parenthesis removed
 *
 * @param {string} str
 * @returns {string}
 */
function remove(str: string): string {
  return str.replace(/ *\([^)]*\) */g, '').trim();
}

/**
 * Takes string and returns array of strings containing what was inside any number of sets of parenthesis
 *
 * @param {string} str
 * @returns {(string[] | null)}
 */
function inside(str: string): string[] | null {
  const matched = str.match(/\(([^()]+)\)/g);
  return matched ? matched.map(m => m.replace('(', '').replace(')', '')) : null;
}

const parens = {
  remove,
  inside
};

export { parens };
