function mergeSort(array) {
    if(array.length === 1)
        return array;

    let midpoint = Math.floor(array.length/2);
    let leftValue = array.slice(0, midpoint);
    let rightValue = array.slice(midpoint);

    mergeSort(leftValue);
    mergeSort(rightValue);

    let index = 0;

    while(leftValue.length && rightValue.length) {
        if(leftValue[0] > rightValue[0]) {
            array[index] = rightValue.shift();
            index += 1;
        } else {
            array[index] = leftValue.shift();
            index += 1;
        }
    }

    while(leftValue.length) {
        array[index] = leftValue.shift();
        index += 1;
    }

    while(rightValue.length) {
        array[index] = leftValue.shift();
        index += 1;
    }

    return array;
}

module.exports = mergeSort;
