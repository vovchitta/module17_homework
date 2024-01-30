import { reverseString } from './reverse.js';

describe('test for reverseString', () => {
    it('should reverse string', () => {
        expect(reverseString('skillfactory')).toBe('yrotcaflliks');
    });
});