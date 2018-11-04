function quickSort(array, leftIndex, rightIndex) {
    if(array.length <= 1)
        return array;

    //------Divide elements in array to partition them
    let pivotValue = array[Math.floor((leftIndex + rightIndex) / 2)]; //check

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
            //Swap values
            let temp = array[leftIndex];
            array[leftIndex] = array[rightIndex];
            array[rightIndex] = temp;

            //Increment/decrement the indexes
            leftIndex += 1;
            rightIndex -= 1;
        }
    }
    //-------End of partitioning

    //Left index after partitioning becomes new pivot point
    let pivotIndex = leftIndex;

    //We know quicksort is over once the left and right indexes have reached the pivot index
    //So we keep comparing until they reach the pivot index
    if(leftIndex < pivotIndex - 1) {
        quickSort(array, leftIndex, pivotIndex - 1);
    }

    if(pivotIndex < rightIndex) {
        quickSort(array, pivotIndex, rightIndex);
    }

    return array;
}

module.exports = quickSort;