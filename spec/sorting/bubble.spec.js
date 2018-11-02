const BubbleSort = require('../../src/sorting/bubble');

describe('Bubble Sort', () => {
    it('returns an unmodified array when the array is already sorted', () => {
        const alreadySortedArray = [1,2,3,4];
        expect(BubbleSort(alreadySortedArray)).toEqual([1,2,3,4]);
    });

    it('returns sorted array when given unsorted array with two elements', () => {
        const unsortedArray = [2,1];
        const expectedSortedArray = [1,2];
        expect(BubbleSort(unsortedArray)).toEqual(expectedSortedArray);
    })
});
