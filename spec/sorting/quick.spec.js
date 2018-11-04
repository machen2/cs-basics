const QuickSort = require('../../src/sorting/quick');

describe('Quick Sort', () => {
    it('returns the array when there is only one element', () => {
        expect(QuickSort([1])).toEqual([1]);
    });

    it('returns sorted array when given sorted two element array', () => {
        const sortedArray = [1,2];
        expect(QuickSort(sortedArray)).toEqual([1,2]);
    });

    it('returns sorted array when given unsorted two element array', () => {
        const unsortedArray = [2,1];
        const leftIndex = 0;
        const rightIndex = 1;
        const expectedArray = [1,2];
        expect(QuickSort(unsortedArray, leftIndex, rightIndex)).toEqual(expectedArray);
    });

    // it('returns sorted array when given unsorted three element array', () => {
    //     let unsortedArray = [2,3,1];
    //     const expectedArray = [1,2,3];
    //     expect(QuickSort(unsortedArray)).toEqual(expectedArray);
    // });
});
