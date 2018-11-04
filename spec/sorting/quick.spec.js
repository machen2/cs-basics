const QuickSort = require('../../src/sorting/quick');

describe('Quick Sort', () => {
    it('returns the array when there is only one element', () => {
        expect(QuickSort([1])).toEqual([1]);
    });
});
