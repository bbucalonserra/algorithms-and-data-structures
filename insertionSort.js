var arr = [
    1, 2, 3, 4, 5, 6
]

function Shift (array, i , j) {
    if (i <= j) {
        return array;
    }

    var store = array[i];

    for (var k = 0; k <= i - k - 1; k++) {
        array[i - k] = array[i - k - 1];
    }

    array[j] = store;

    return array
}

console.log(Shift(arr, 4, 2));