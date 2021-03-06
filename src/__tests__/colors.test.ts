import { colors } from '../../lib';

describe('tests the various methods for "colors"', () => {
  test('isHex => verifies that string passed is hexidecimal color', () => {
    expect(colors.isHex('#ff00ff')).toBe(true);
    expect(colors.isHex('#fff')).toBe(true);
    expect(colors.isHex('nope')).toBe(false);
    /* tslint:disable */
    // @ts-ignore
    expect(colors.isHex(5)).toBe(false);
    /* tslint:enable */
  });

  test('rgbToHex => converts rgb color to hex', () => {
    expect(colors.rgbToHex(22, 33, 44)).toBe('#16212C');
    expect(colors.rgbToHex('22', '33', '44')).toBe('#16212C');
    expect(colors.rgbToHex('nope', 33, 44)).toBe('#NAN212C');
  });

  test('hexToRgb => converts hex color to rgb', () => {
    expect(colors.hexToRgb('#00ff00')).toContain(255); // [0, 255, 0]
    expect(colors.hexToRgb('00ff00')).toContain(255); // [0, 255, 0]
    expect(colors.hexToRgb('#fff')).toContain(255); // [255, 255, 255]
    expect(colors.hexToRgb('nope')).toBe(null);
  });

  test('luminance => lighten or darken a color', () => {
    expect(colors.luminance('#63C6FF', 40)).toBe('#8affff');
    expect(colors.luminance('#63C6FF', -40)).toBe('#3b7699');
    expect(colors.luminance('nope', -40)).toBe(null);
  });

  test('hexToHsl => converts hex color to hsl', () => {
    expect(colors.hexToHsl('#63C6FF')!['h']).toBe(201.9); // {h: 201.9, s: 100, l: 69.4}
    expect(colors.hexToHsl('#63C6FF')!['s']).toBe(100); // {h: 201.9, s: 100, l: 69.4}
    expect(colors.hexToHsl('63C6FF')!['l']).toBe(69.4);
    expect(colors.hexToHsl('nope')).toBe(null);
  });

  test('rgbToHsl => converts rgb to hsl', () => {
    const hsl = colors.rgbToHsl(99, 198, 255);
    /* tslint:disable */
    // @ts-ignore
    expect(hsl.h).toBe(201.9); // {h: 201.9, s: 100, l: 69.4}
    // @ts-ignore
    expect(hsl.s).toBe(100);
    // @ts-ignore
    expect(hsl.l).toBe(69.4);
    /* tslint:enable */
  });
});
