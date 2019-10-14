import { numbers } from './numbers';

/**
 * Takes rgb color values and returns hexidecimal equivalent
 *
 * Basic usage example:
 * ```js
 * const colors = require('stringman').colors; // or `import {colors} from 'stringman'`;
 * const test = colors.rgbToHex(22, 33, 44);
 * console.log(test); // '#16212C'
 * ```
 *
 * @param {(number | string)} r
 * @param {(number | string)} g
 * @param {(number| string)} b
 * @returns {string}
 */
function rgbToHex(r: number | string, g: number | string, b: number | string): string {
  return '#' + numbers.convertToHex(r) + numbers.convertToHex(g) + numbers.convertToHex(b);
}

/**
 * Takes a string and returns boolean indicating whether it is a valid hexidecimal color
 *
 * Basic usage example:
 * ```js
 * const colors = require('stringman').colors; // or `import {colors} from 'stringman'`;
 * const valid = colors.isHex('16212c');
 * const invalid = colors.isHex('nope');
 * console.log(valid); // true
 * console.log(invalid); // false
 * ```
 *
 * @param {string} color
 * @returns {boolean}
 */
function isHex(color: string): boolean {
  if (typeof color !== 'string') {
    return false;
  }
  return !!color.match(/^#?([a-f0-9]{6}|[a-f0-9]{3})$/);
}

/**
 * Takes a hexidecimal color string and returns the rgb value
 *
 *  Basic usage example:
 * ```js
 * const colors = require('stringman').colors; // or `import {colors} from 'stringman'`;
 * const test = colors.hexToRgb('#16212c');
 * console.log(test); // [22, 33, 44]
 * ```
 *
 * @param {string} hex
 * @returns {(number[] | null)}
 */
function hexToRgb(hex: string): number[] | null {
  if (hex.charAt(0) === '#') {
    hex = hex.substr(1);
  }
  if (hex.length < 2 || hex.length > 6) {
    return null;
  }
  const values = hex.split('');
  let r;
  let g;
  let b;

  if (hex.length === 2) {
    r = parseInt(values[0].toString() + values[1].toString(), 16);
    g = r;
    b = r;
  } else if (hex.length === 3) {
    r = parseInt(values[0].toString() + values[0].toString(), 16);
    g = parseInt(values[1].toString() + values[1].toString(), 16);
    b = parseInt(values[2].toString() + values[2].toString(), 16);
  } else if (hex.length === 6) {
    r = parseInt(values[0].toString() + values[1].toString(), 16);
    g = parseInt(values[2].toString() + values[3].toString(), 16);
    b = parseInt(values[4].toString() + values[5].toString(), 16);
  } else {
    return null;
  }
  return [r, g, b];
}

const colors = {
  hexToRgb,
  isHex,
  rgbToHex
};

export { colors };
