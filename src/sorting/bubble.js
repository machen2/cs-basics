function BubbleSort(array) {
    if(array[0] > array[1]) {
        let temp = array[1];
        array[1] = array[0];
        array[0] = temp;
    }
    return array;
}

module.exports = BubbleSort;