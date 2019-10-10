const numbers = require('../../lib').numbers;

describe('containsNum => determines whether or not a string or number actually contains some digits', () => {
  test('verfies that a string has at least 1 digit', () => {
    expect(numbers.containsNum('this has a number 33')).toBe(true);
    expect(numbers.containsNum('this has no numbers')).toBe(false);
    expect(numbers.containsNum(123)).toBe(true);
  });
});

describe('whole => determines if passed value is a whole number', () => {
  test('verfies that the passed value is a whole number or string that parses to whole number', () => {
    expect(numbers.whole(33)).toBe(true);
    expect(numbers.whole('-33')).toBe(true);
    expect(numbers.whole('33.326')).toBe(false);
    expect(numbers.whole(-33.326)).toBe(false);
    expect(numbers.whole('nope')).toBe(false);
  });
});

describe('decimal => determines if passed value is a decimal', () => {
  test('verfies that the passed value is a decimal or string that parses todecimal', () => {
    expect(numbers.decimal(33)).toBe(false);
    expect(numbers.decimal('-33')).toBe(false);
    expect(numbers.decimal('33.326')).toBe(true);
    expect(numbers.decimal(-33.326)).toBe(true);
    expect(numbers.decimal('nope')).toBe(false);
  });
});