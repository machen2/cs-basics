const QuickSort = require('../../src/sorting/quick');

describe('Quick Sort', () => {
    it('returns the array when there is only one element', () => {
        expect(QuickSort([1])).toEqual([1]);
    });

    it('returns sorted array when given unsorted two element array', () => {
        let unsortedArray = [2,1];
        const expectedArray = [1,2];
        expect(QuickSort(unsortedArray)).toEqual(expectedArray);
    });
});
