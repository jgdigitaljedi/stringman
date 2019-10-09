const url = require('../../lib').url;

test('returns url from string', () => {
  expect(url.retrieve('my portfolio: https://joeyg.me')[0]).toBe('https://joeyg.me');
});

test('verfies string is url', () => {
  expect(url.isValid('https://joeyg.me')).toBe(true);
});

test('verfies string is NOT a url', () => {
  expect(url.isValid('not a url://')).toBe(false);
});

test('removes url from string', () => {
  expect(url.remove('will it remove https://joeyg.me')).toBe('will it remove');
});

test('gets the domain from a string', () => {
  expect(url.getDomain('https://www.google.com/test')).toBe('google.com');
});
