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
    expect(url.getDomain('https://www.google.com/test')).toBe('google.com');
  });
});
