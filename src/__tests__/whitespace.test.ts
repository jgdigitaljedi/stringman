import { whitespace } from '../../lib';

describe('tests various methods of "whitespace"', () => {
  test('removeBreaks => Takes a string and returns that string with all carriage returns and line breaks removed', () => {
    expect(whitespace.removeBreaks('this line\n has a\n dumb amount\r of breaks\n')).toBe(
      'this line has a dumb amount of breaks'
    );
  });
});
