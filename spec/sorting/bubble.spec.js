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
    });

    it('returns sorted array when given partially unsorted array with three elements', () => {
        const unsortedArray = [1,3,2];
        const expectedSortedArray = [1,2,3];
        expect(BubbleSort(unsortedArray)).toEqual(expectedSortedArray);
    });

    it('returns sorted array when given fully unsorted array with three elements', () => {
        const unsortedArray = [2,3,1];
        const expectedSortedArray = [1,2,3];
        expect(BubbleSort(unsortedArray)).toEqual(expectedSortedArray);
    });

    it('returns sorted array when given unsorted array with many elements', () => {
        const unsortedArray = [5,1,7,9,3,6,2,0,8,4];
        const expectedSortedArray = [0,1,2,3,4,5,6,7,8,9];
        expect(BubbleSort(unsortedArray)).toEqual(expectedSortedArray);
    });
});
