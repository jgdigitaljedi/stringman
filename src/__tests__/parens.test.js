const parens = require('../../lib').parens;
// import { parens } from '../../lib';

describe('tests the various methods for "parens"', () => {
  test('remove => removes parenthesis from string and returns string', () => {
    expect(parens.remove('this is a test (and this should go away)')).toBe('this is a test');
  });

  test('inside => returns array of what is inside parenthesis', () => {
    expect(parens.inside('this (is a test) of the (inside function)')[1]).toBe('inside function');
  });
});
