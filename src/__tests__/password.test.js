const pwd = require('../../lib').pwd;

describe('isValid => validates a password with the given params', () => {
  test('retutrns true when password meets params', () => {
    expect(
      pwd.isValid('Test_-123', {
        capital: true,
        lc: true,
        num: true,
        min: 8,
        max: 12,
        special: '-_'
      })
    ).toBe(true);
  });

  test('returns false when password does not meet given params', () => {
    // does not meet min requirement
    expect(
      pwd.isValid('Test_-123', {
        capital: true,
        lc: true,
        num: true,
        min: 12,
        max: 15,
        special: '-_'
      })
    ).toBe(false);

    // does not meet max requirement
    expect(
      pwd.isValid('Test_-123', {
        capital: true,
        lc: true,
        num: true,
        min: 1,
        max: 6,
        special: '-_'
      })
    ).toBe(false);

    // does not meet special requirement
    expect(pwd.isValid('Test_-123', { capital: true, lc: true, num: true, min: 8, max: 12 })).toBe(
      false
    );

    // does not meet capital letter requirement
    expect(
      pwd.isValid('Test_-123', {
        capital: false,
        lc: true,
        num: true,
        min: 8,
        max: 12,
        special: '-_'
      })
    ).toBe(false);
  });

  test('returns expected value when doing advanced tests', () => {
    // password has minimum requirements
    expect(
      pwd.isValidAdvanced(
        'Test-1234_A',
        {
          capital: true,
          lc: true,
          num: true,
          min: 10,
          max: 15,
          special: '-_'
        },
        {
          capital: 2,
          num: 2,
          special: 1
        }
      )
    ).toBe(true);

    // password does not have minimum requirements
    expect(
      pwd.isValidAdvanced(
        'Test-1234_A',
        {
          capital: true,
          lc: true,
          num: true,
          min: 10,
          max: 15,
          special: '-_'
        },
        {
          capital: 4,
          num: 2,
          special: 1
        }
      )
    ).toBe(false);

    // meets 3rd argument requirements but not options requirements
    expect(
      pwd.isValidAdvanced(
        'Test-1234_A',
        {
          capital: true,
          lc: true,
          num: true,
          min: 22,
          max: 55,
          special: '-_'
        },
        {
          capital: 4,
          num: 2,
          special: 1
        }
      )
    ).toBe(false);
  });
});
