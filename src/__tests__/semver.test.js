const semver = require('../../lib').semver;

test('returns semver from string', () => {
  expect(semver.retrieve('this is a test v 10.7.8')[0]).toBe('10.7.8');
});

test('verifies string is semver', () => {
  expect(semver.isValid('10.7.8')).toBe(true);
});

test('verifies string is NOT semver', () => {
  expect(semver.isValid('not semver 10')).toBe(false);
});

test('removes semver from string', () => {
  expect(semver.remove('remove this stuff 10.11.12')).toBe('remove this stuff');
});
