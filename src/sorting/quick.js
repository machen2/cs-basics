function quickSort(array) {
    if(array.length > 1 && array[0] > array[1]) {
        let temp = array[0];
        array[0] = array[1];
        array[1] = temp;
    }

    return array;
}

module.exports = quickSort;