function MergeSort(array) {
    let leftValue = array[0];
    let rightValue = array[1];

    if(leftValue > rightValue) {
        array[0] = rightValue;
        array[1] = leftValue;
    }

    return array;
}

module.exports = MergeSort;
