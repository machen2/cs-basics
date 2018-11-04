function quickSort(array, leftIndex, rightIndex) {
    if(array.length <= 1)
        return array;

    let origLeftIndex = leftIndex;
    let origRightIndex = rightIndex;

    //Left index after partitioning becomes new pivot point
    let pivotIndex = partition(array, origLeftIndex, origRightIndex);

    //We know quicksort is over once the left and right indexes have reached the pivot index
    //So we keep comparing until they reach the pivot index
    if(origLeftIndex < pivotIndex - 1) {
        quickSort(array, origLeftIndex, pivotIndex - 1);
    }

    if(pivotIndex < origRightIndex) {
        quickSort(array, pivotIndex, origRightIndex);
    }

    return array;
}

function partition(array, leftIndex, rightIndex) {
    let pivotValue = array[Math.floor((leftIndex + rightIndex) / 2)];

    //When the left index is greater than the right index, sorting is finished!
    while(leftIndex <= rightIndex) {

        //When the left value is less than the pivot, increment the right index
        while(array[leftIndex] < pivotValue) {
            leftIndex += 1;
        }

        //When the right value is greater than the pivot, decrement right index
        while(array[rightIndex] > pivotValue) {
            rightIndex -= 1;
        }

        //If the left is larger than the pivot and the right is smaller or equal to the pivot, we swap
        if(leftIndex <= rightIndex) {
            swap(array, leftIndex, rightIndex);

            //Increment/decrement the indexes
            leftIndex += 1;
            rightIndex -= 1;
        }
    }

    return leftIndex;
}

function swap(array, leftIndex, rightIndex) {
    let temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
}

module.exports = quickSort;
