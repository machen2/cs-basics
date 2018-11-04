const MergeSort = require('../../src/sorting/merge');

describe('Merge Sort', () => {
    it('returns the array when there is only one element', () => {
        expect(MergeSort([1])).toEqual([1]);
    });

    it('returns the sorted array when given an already sorted array', () => {
        alreadySortedArray = [0,1];
        expect(MergeSort(alreadySortedArray)).toEqual([0,1]);
    });

    it('returns sorted array when given unsorted array with two elements', () => {
        const unsortedArray = [2,1];
        const expectedSortedArray = [1,2];
        expect(MergeSort(unsortedArray)).toEqual(expectedSortedArray);
    });

    it('returns sorted array when given unsorted array with three elements', () => {
        const unsortedArray = [3,2,1];
        const expectedSortedArray = [1,2,3];
        expect(MergeSort(unsortedArray)).toEqual(expectedSortedArray);
    });

    it('returns sorted array when given a long unsorted array', () => {
        const unsortedArray = [4,6,2,1,8,0,4,2,3,7,8,7];
        const expectedSortedArray = [0,1,2,2,3,4,4,6,7,7,8,8];
        expect(MergeSort(unsortedArray)).toEqual(expectedSortedArray);
    });
});
