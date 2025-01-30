var arr = [3, 2, 5, 1, 2];

function Shift(array, i, j) {
    if (i <= j) {
        return array;
    }

    var store = array[i];

    for (let k = i; k > j; k--) {
        array[k] = array[k - 1];
    }

    array[j] = store;

    return array;
}

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let j = i;

        while (j > 0 && array[j - 1] > array[i]) {
            j--;
        }

        Shift(array, i, j); 
    }
    return array;
}

console.log(insertionSort(arr));