const colors = require('../../lib').colors;

describe('tests the various methods for "colors"', () => {
  test('isHex => verifies that string passed is hexidecimal color', () => {
    expect(colors.isHex('#ff00ff')).toBe(true);
    expect(colors.isHex('nope')).toBe(false);
  });

  test('rgbToHex => converts rgb color to hex', () => {
    expect(colors.rgbToHex(22, 33, 44)).toBe('#16212C');
    expect(colors.rgbToHex('22', '33', '44')).toBe('#16212C');
    expect(colors.rgbToHex('nope', 33, 44)).toBe('#NAN212C');
  });

  test('hexToRgb => converts hex color to rgb', () => {
    expect(colors.hexToRgb('#00ff00')).toContain(255);
    expect(colors.hexToRgb('nope')).toBe(null);
  });
});
