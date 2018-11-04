function mergeSort(array) {
    if(array.length === 1)
        return array;

    let midpoint = Math.floor(array.length/2);
    let leftArray = array.slice(0, midpoint);
    let rightArray = array.slice(midpoint);

    mergeSort(leftArray);
    mergeSort(rightArray);

    merge(leftArray, rightArray, array);

    return array;
}

function merge(leftArray, rightArray, origArray) {
    let index = 0;

    while(leftArray.length && rightArray.length) {
        if(leftArray[0] > rightArray[0]) {
            origArray[index] = rightArray.shift();
            index += 1;
        } else {
            origArray[index] = leftArray.shift();
            index += 1;
        }
    }

    while(leftArray.length) {
        origArray[index] = leftArray.shift();
        index += 1;
    }

    while(rightArray.length) {
        origArray[index] = rightArray.shift();
        index += 1;
    }
}

module.exports = mergeSort;
