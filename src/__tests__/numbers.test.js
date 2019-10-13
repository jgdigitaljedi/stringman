const numbers = require('../../lib').numbers;

describe('test various methods for "numbers"', () => {
  test('containsNum => determines whether or not a string or number actually contains some digits', () => {
    expect(numbers.containsNum('this has a number 33')).toBe(true);
    expect(numbers.containsNum('this has no numbers')).toBe(false);
    expect(numbers.containsNum(123)).toBe(true);
  });

  test('whole => determines if passed value is a whole number', () => {
    expect(numbers.whole(33)).toBe(true);
    expect(numbers.whole('-33')).toBe(true);
    expect(numbers.whole('33.326')).toBe(false);
    expect(numbers.whole(-33.326)).toBe(false);
    expect(numbers.whole('nope')).toBe(false);
  });

  test('decimal => determines if passed value is a decimal', () => {
    expect(numbers.decimal(33)).toBe(false);
    expect(numbers.decimal('-33')).toBe(false);
    expect(numbers.decimal('33.326')).toBe(true);
    expect(numbers.decimal(-33.326)).toBe(true);
    expect(numbers.decimal('nope')).toBe(false);
  });

  test('fraction => determines if passed value is a fraction', () => {
    expect(numbers.fraction(33)).toBe(false);
    expect(numbers.fraction('-33')).toBe(false);
    expect(numbers.fraction('1/3')).toBe(true);
    expect(numbers.fraction('-22/33')).toBe(true);
    expect(numbers.fraction('nope')).toBe(false);
  });

  test('containsFraction => determines if passed value contains a fraction', () => {
    expect(numbers.containsFraction(33)).toBe(false);
    expect(numbers.containsFraction('-33')).toBe(false);
    expect(numbers.containsFraction('has the fraction 1/3')).toBe(true);
    expect(numbers.containsFraction('has a fraction -22/33')).toBe(true);
    expect(numbers.containsFraction('nope')).toBe(false);
  });

  test('containsDecimal => determines if passed value contains a decimal', () => {
    expect(numbers.containsDecimal(33)).toBe(false);
    expect(numbers.containsDecimal('-33')).toBe(false);
    expect(numbers.containsDecimal('has the decimal 2.4')).toBe(true);
    expect(numbers.containsDecimal('has a decimal -22.44')).toBe(true);
    expect(numbers.containsDecimal(3.4)).toBe(true);
    expect(numbers.containsDecimal('nope')).toBe(false);
  });

  test('convertToHex => takes a number is string or number form and returns the hexidecimal equivalent', () => {
    expect(numbers.convertToHex(255)).toBe('FF');
    expect(numbers.convertToHex('0')).toBe('00');
    expect(numbers.convertToHex('nope')).toBe('NAN');
  });
});
