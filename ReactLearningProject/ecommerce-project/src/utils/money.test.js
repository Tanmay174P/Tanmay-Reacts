import { it, expect, describe } from 'vitest';
import { formatMoney } from './money';

// descibe -> groups test together
// group of tests => test suite(connected rooms)

// it('Name of the test');
// expect -> checks if output match the expectation (true or false basically)
//// expect methods --> toBe('result');

// Integration Test -->  test multiple units of code working together


describe('formatMoney', () => {
    it('formats 1999 cents as $19.99', () => {
        expect(formatMoney(1999)).toBe('$19.99')
    });

    it('display 2 decimals', () => {
        expect(formatMoney(1090)).toBe('$10.90');
        // expect(formatMoney(100)).toBe('$1.0'); // failed
        expect(formatMoney(100)).toBe('$1.00');
    });
})

