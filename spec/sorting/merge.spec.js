const MergeSort = require('../../src/sorting/merge');

describe('Merge Sort', () => {
    it('returns the sorted array when given an already sorted array', () => {
        alreadySortedArray = [0,1];
        expect(MergeSort(alreadySortedArray)).toEqual([0,1]);
    });
});
