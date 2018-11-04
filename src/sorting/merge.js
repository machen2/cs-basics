function mergeSort(array) {
    if(array.length === 1)
        return array;

    let midpoint = Math.floor(array.length/2);
    let leftArray = array.slice(0, midpoint);
    let rightArray = array.slice(midpoint);

    mergeSort(leftArray);
    mergeSort(rightArray);

    let index = 0;

    while(leftArray.length && rightArray.length) {
        if(leftArray[0] > rightArray[0]) {
            array[index] = rightArray.shift();
            index += 1;
        } else {
            array[index] = leftArray.shift();
            index += 1;
        }
    }

    while(leftArray.length) {
        array[index] = leftArray.shift();
        index += 1;
    }

    while(rightArray.length) {
        array[index] = rightArray.shift();
        index += 1;
    }

    return array;
}

module.exports = mergeSort;
