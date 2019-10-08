const parens = require('../../lib').parens;

test('removes parenthesis from string and returns string', () => {
  expect(parens.remove('this is a test (and this should go away)')).toBe('this is a test');
});

test('returns array of what is inside parenthesis', () => {
  expect(parens.inside('this (is a test) of the (inside function)')[1]).toBe('inside function');
});
