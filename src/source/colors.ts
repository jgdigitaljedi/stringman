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
  const colorCleaned = color.charAt(0) === '#' ? color.slice(1) : color;
  return !!colorCleaned.match(/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/);
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

/**
 * Takes a hex color value and a percentage and returns a hex color string that is the result of lightening or darkening the original color by the percentage
 * NOTE: this does not work on black or white!
 *
 * Basic usage example:
 * ```js
 * const colors = require('stringman').colors; // or `import {colors} from 'stringman'`;
 * const lightened = colors.luminance('#63C6FF', 40);
 * const darkened = colors.luminance('#63C6FF', -40);
 * console.log(lightened); // '#8affff'
 * console.log(darkened); // '#3b7699'
 * ```
 *
 * @param {string} color
 * @param {number} percent
 * @returns {string}
 */
function luminance(color: string, percent: number): string | null {
  // if color argument isn't actually a color
  if (!isHex(color)) {
    return null;
  }
  // convert to hex
  const Rhex = parseInt(color.substring(1, 3), 16);
  const Ghex = parseInt(color.substring(3, 5), 16);
  const Bhex = parseInt(color.substring(5, 7), 16);

  // lighten or darken
  const Rcon = (Rhex * (100 + percent)) / 100;
  const Gcon = (Ghex * (100 + percent)) / 100;
  const Bcon = (Bhex * (100 + percent)) / 100;

  // make sure values aren't greater than 255 (max hex value)
  const R = Rcon < 255 ? parseInt(Rcon.toString(), 10) : 255;
  const G = Gcon < 255 ? parseInt(Gcon.toString(), 10) : 255;
  const B = Bcon < 255 ? parseInt(Bcon.toString(), 10) : 255;

  // make sure each color value is 2 characters and convert back to hex
  const RR = R.toString(16).length === 1 ? '0' + R.toString(16) : R.toString(16);
  const GG = G.toString(16).length === 1 ? '0' + G.toString(16) : G.toString(16);
  const BB = B.toString(16).length === 1 ? '0' + B.toString(16) : B.toString(16);

  return '#' + RR + GG + BB;
}

const colors = {
  hexToRgb,
  isHex,
  luminance,
  rgbToHex
};

export { colors };
