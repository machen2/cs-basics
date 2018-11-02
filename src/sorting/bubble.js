function BubbleSort(array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] > array[i+1]) {
            let temp = array[i+1];
            array[i+1] = array[i];
            array[i] = temp;
        }
    }
    return array;
}

module.exports = BubbleSort;