function BubbleSort(array) {
    let isSorted = false;

    while(!isSorted) {
        isSorted = true;

        for(let i = 0; i < array.length; i++) {
            if(array[i] > array[i+1]) {
                isSorted = false;

                //swap elements
                let temp = array[i+1];
                array[i+1] = array[i];
                array[i] = temp;
            }
        }
    }
    
    return array;
}

module.exports = BubbleSort;