var arr = [
    5, 2, 1
    ]


function swap (array, index1, index2) {
    var x = array[index1]
    array[index1] = array[index2]
    array[index2] = x

    return array
}

function bubbleSort (array) {
    n = array.length;
    count = 0;
    for (i = 0; i <= n - 2; i++) {
        for (j = 0; j <= n - 2; j++) {
            if (array[j] >= array[j + 1]) {
                swap(array, j, j + 1);
                count = count + 1;
            }
            if (count == 0) {
                break;
            }
        }
    }
    return(array)
}

console.log(bubbleSort(arr));