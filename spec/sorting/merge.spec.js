const MergeSort = require('../../src/sorting/merge');

describe('Merge Sort', () => {
    it('returns the array when there is only one element', () => {
        expect(MergeSort([1])).toEqual([1]);
    });

    it('returns the sorted array when given an already sorted array', () => {
        alreadySortedArray = [0,1];
        expect(MergeSort(alreadySortedArray)).toEqual([0,1]);
    });
});
