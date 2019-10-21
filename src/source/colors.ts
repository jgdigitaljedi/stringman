import { IHsl } from '../models/colors.model';
import { numbers } from './numbers';
import { common } from './utility/common';

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
  return common.isValid(colorCleaned, /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/);
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

/**
 * Takes a hex color string and returns a string array with hex color converted to HSL [H, S, L]
 *
 * Basic usage example:
 * ```js
 * const colors = require('stringman').colors; // or `import {colors} from 'stringman'`;
 * const toHsl = colors.hexToHSL('#63C6FF');
 * console.log(toHsl); // {h: 201.9, s: '100%', l: '69.4%'}
 * ```
 *
 * @param {string} str
 * @returns {(IHsl | null)}
 */
function hexToHsl(str: string): IHsl | null {
  if (isHex(str)) {
    const hex = str.charAt(0) === '#' ? str.slice(1) : str;
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result && result.length) {
      const r = parseInt(result[1], 16);
      const g = parseInt(result[2], 16);
      const b = parseInt(result[3], 16);
      return rgbToHsl(r, g, b);
    } else {
      return null;
    }
  } else {
    return null;
  }
}

/**
 * Takes r, g, and b and numbers in 3 separate agurments, convert to hsl, and returns in object with h, s, and l as keys
 *
 * Basic usage example:
 * ```js
 * const colors = require('stringman').colors; // or `import {colors} from 'stringman'`;
 * const toHsl = colors.rgbToHSL(99, 198, 255);
 * console.log(toHsl); // {h: 201.9, s: '100%', l: '69.4%'}
 * ```
 *
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns {(IHsl | null)}
 */
function rgbToHsl(r: number, g: number, b: number): IHsl | null {
  if (typeof r !== 'number' || typeof g !== 'number' || typeof b !== 'number') {
    return null;
  }
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h;
  let s;
  const l = (max + min) / 2;
  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h = h ? h / 6 : 0;
  }
  return {
    h: parseFloat((h * 360).toFixed(1)),
    l: parseFloat((l * 100).toFixed(1)),
    s: parseFloat((s * 100).toFixed(1))
  };
}

const colors = {
  hexToHsl,
  hexToRgb,
  isHex,
  luminance,
  rgbToHex,
  rgbToHsl
};

export { colors };
