const semver = require('../../lib').semver;

describe('tests various methods of "semver"', () => {
  test('retrieve => returns semver from string', () => {
    expect(semver.retrieve('this is a test v 10.7.8')[0]).toBe('10.7.8');
  });

  test('isValid => verifies string is semver', () => {
    expect(semver.isValid('10.7.8')).toBe(true);
    expect(semver.isValid('not semver 10')).toBe(false);
  });

  test('remove => removes semver from string', () => {
    expect(semver.remove('remove this stuff 10.11.12')).toBe('remove this stuff');
  });
});
