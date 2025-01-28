var arr = [
    1, 3, 5, 7, 10, 12
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

function binarySearch(array, x) {
    var r = array.length - 1
    var l = 0

    while(r>=l) {
       var m = Math.floor((l + r) / 2)
       if (array[m] == x) {
        return true
       }
       else if (array[m] > x) {
        r = m - 1;
       }
       else {
        l = m + 1;
       }
    }
    return false;
}

console.log(binarySearch(bubbleSort(arr), 5))