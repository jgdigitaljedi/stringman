const email = require('../../lib').email;

test('gets email address, if any, from string', () => {
  expect(email.retrieve('my email address is joey@joeyg.me')).toBe('joey@joeyg.me');
});

test('determines if string is valid email address', () => {
  expect(email.isValid('joey@joeyg.me')).toBe(true);
  expect(email.isValid('joey-joeyg.me')).toBe(false);
});

test('remove email address, if any, from string', () => {
  expect(email.remove('my email address is joey@joeyg.me')).toBe('my email address is');
});

test('swaps email address, if any, in string', () => {
  expect(email.swap('my email address is joey@joeyg.me', 'test@test.com')).toBe(
    'my email address is test@test.com'
  );
});
