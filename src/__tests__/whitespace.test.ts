import { whitespace } from '../../lib';

describe('tests various methods of "whitespace"', () => {
  test('removeBreaks => Takes a string and returns that string with all carriage returns and line breaks removed', () => {
    expect(whitespace.removeBreaks('this line\n has a\n dumb amount\r of breaks\n')).toBe(
      'this line has a dumb amount of breaks'
    );
  });

  test('removeTabs => Takes a string and returns that string with alltabs removed', () => {
    expect(whitespace.removeTabs('this line\t has a\t dumb amount \tof tabs\t')).toBe(
      'this line has a dumb amount of tabs'
    );
  });

  test('removeAll => Takes a string and returns that string with all whitespace removed', () => {
    expect(
      whitespace.removeAll(
        'this line\n has a\n dumb amount\r of breaks\n and\t    tabs    and spaces'
      )
    ).toBe('thislinehasadumbamountofbreaksandtabsandspaces');
  });

  test('singleSpace => Takes a string, replaces all instances or 2 or more consecutive spaces with a single space, and returns string', () => {
    expect(
      whitespace.singleSpace('this   line     will  end   up   being   spaced      normally!')
    ).toBe('this line will end up being spaced normally!');
  });

  test('replaceWith => Takes a string, an enumerable object with boolean values to detrermine what will be replaced, and another string to replace things with and returns the result of replacing the values designated in the 2nd argument with the contents of the 3 argument', () => {
    expect(
      whitespace.replaceWith('gonna just\n remove breaks\n from this\n', { breaks: true }, ' ')
    ).toBe('gonna just  remove breaks  from this ');

    expect(
      whitespace.replaceWith(
        'gonna   make\t a   \nridiculous example',
        { tabs: true, breaks: true, multiSpace: true },
        '$'
      )
    ).toBe('gonna$make$ a$$ridiculous example');
  });
});
