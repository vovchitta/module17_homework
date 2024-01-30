import { getMonth } from './months.js'

describe('test for getMonth fumction'), ()=> {
    it('should return correct month'), ()=> {
        expect(getMonth(1)).toBe('January');
    },
    it('should return correct month'), ()=> {
        expect(getMonth(3)).toBe('December');
    },
    it('should return a fail'), ()=> {
        expect(getMonth(13)).toBe('You did something wrong');
    }
}