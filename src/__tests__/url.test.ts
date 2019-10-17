// const url = require('../../lib').url;
import { url } from '../../lib';

describe('test various methods of "url"', () => {
  test('retrieve => returns url from string', () => {
    expect(url.retrieve('my portfolio: https://joeyg.me')[0]).toBe('https://joeyg.me');
  });

  test('isValid => verfies string is url', () => {
    expect(url.isValid('https://joeyg.me')).toBe(true);
    expect(url.isValid('not a url://')).toBe(false);
  });

  test('remove => removes url from string', () => {
    expect(url.remove('will it remove https://joeyg.me')).toBe('will it remove');
  });

  test('getDomain => gets the domain from a string', () => {
    expect(url.getDomain('https://www.google.com/test')[0]).toBe('google.com');
  });

  test('swap => swaps any URLS with second string', () => {
    expect(url.swap('this is a test at https://test.com', 'https://www.fakesite.com')).toBe(
      'this is a test at https://www.fakesite.com'
    );
  });
});
