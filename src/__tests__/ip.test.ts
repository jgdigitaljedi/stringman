import { ip } from '../../lib';

describe('test various methods for "ip"', () => {
  test('isValid => determines whether string is valid IP address', () => {
    expect(ip.isValid('192.168.0.1')).toBe(true);
    expect(ip.isValid('0.0.0.0')).toBe(true);
    expect(ip.isValid('255.255.255.256')).toBe(false);
    expect(ip.isValid('192.168.0.1.1')).toBe(false);
    expect(ip.isValid('192.168.0')).toBe(false);
    /* tslint:disable */
    // @ts-ignore
    expect(ip.isValid(true)).toBe(false);
    // @ts-ignore
    expect(ip.isValid(15.15)).toBe(false);
    /* tslint:enable */
  });

  test('retrieve => gets ip address from string', () => {
    expect(ip.retrieve('router at 192.168.0.1')[0]).toBe('192.168.0.1');
    expect(ip.retrieve('router at 192.168.0.1.1')[0]).toBe('192.168.0.1');
  });

  test('swap => swaps ip for a string', () => {
    expect(ip.swap('router at 192.168.0.1', '***.***.***.***')).toBe('router at ***.***.***.***');
  });

  test('remove => removes ip address from string', () => {
    expect(ip.remove('router at 192.168.0.1')).toBe('router at');
  });
});
