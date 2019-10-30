// const parens = require('../../lib').parens;
import { parens } from '../../lib';

describe('tests the various methods for "parens"', () => {
  test('remove => removes parenthesis from string and returns string', () => {
    expect(parens.remove('this is a test (and this should go away)')).toBe('this is a test');
    expect(parens.remove('with only one paren ( it should do nothing')).toBe(
      'with only one paren ( it should do nothing'
    );
  });

  test('inside => returns array of what is inside parenthesis', () => {
    expect(parens.inside('this (is a test) of the (inside function)')[1]).toBe('inside function');
    expect(
      parens.inside('this (is a test) of the (inside function without a second closing paren')[1]
    ).toBe(undefined);
  });

  test('swap => Takes 2 strings, swaps anything in parenthesis INCLUDING THE PARENTHESIS from the first string with the second string', () => {
    expect(parens.swap('replaces things (inside) parens with other things', 'within')).toBe(
      'replaces things within parens with other things'
    );
    /* tslint:disable */
    // @ts-ignore
    expect(parens.swap('replaces things (inside) parens with other things', 5)).toBe(
      'replaces things 5 parens with other things'
    );
    /* tslint:enable */
  });
});
