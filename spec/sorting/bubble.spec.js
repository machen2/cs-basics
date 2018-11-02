const BubbleSort = require('../../src/sorting/bubble');

describe('Bubble Sort', () => {
    it('returns an unmodified array when the array is already sorted', () => {
        expect(BubbleSort([1,2,3,4])).toEqual([1,2,3,4]);
    });
});
