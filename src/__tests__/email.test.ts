// const email = require('../../lib').email;
import { email } from '../../lib';

describe('tests the various methods for "email"', () => {
  test('retrieve => retrieves an email from a string', () => {
    expect(email.retrieve('my email address is joey@joeyg.me')[0]).toBe('joey@joeyg.me');
    expect(
      email.retrieve('this one is a little trickier because @ is in it. joey@joeyg.me')[0]
    ).toBe('joey@joeyg.me');
  });

  test('isValid => determines if string is valid email address', () => {
    expect(email.isValid('joey@joeyg.me')).toBe(true);
    expect(email.isValid('joey-joeyg.me')).toBe(false);
    expect(email.isValid('joey@joeyg')).toBe(false);
  });

  test('remove => remove email address, if any, from string', () => {
    expect(email.remove('my email address is joey@joeyg.me')).toBe('my email address is');
    expect(
      email.remove('my email address is joey@joeyg.me but make it difficult @ with stuff.com')
    ).toBe('my email address is  but make it difficult @ with stuff.com');
  });

  test('swap => swaps email address, if any, in string', () => {
    expect(email.swap('my email address is joey@joeyg.me', 'test@test.com')).toBe(
      'my email address is test@test.com'
    );
  });
});
