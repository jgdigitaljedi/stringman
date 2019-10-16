// const pwd = require('../../lib').pwd;
import { pwd } from '../../lib';

describe('tests the various methods of "password"', () => {
  test('isValid => basic validity check to see if password meets given params', () => {
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

  test('isValidAdvanced => takes password and more complicated validation arguments and checks if password meets requirements', () => {
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
