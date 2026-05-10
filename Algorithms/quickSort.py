def quicksort(arr, left, right):
    if left < right:
        pivot = partition(arr, left, right)
        quicksort(arr, left, pivot - 1)
        quicksort(arr, pivot + 1, right)
    
    return arr

def partition(arr, left, right):
    pivot = arr[right]
    print(f"Selecting the value {pivot} from array as pivot.")

    i = left - 1
    print(f"The iteration i starts in {i}.")

    # The loop is to rearrage the values to the left that are equal or lower than the pivot, then return the index of the pivot.
    # For example in arr = [3, 5, 8, 1, 2, 4], the new value would be [3, 1, 2, 5, 8, 4], note that 3, 1 and 2 are lower than
    # the pivot 4, the i = 2, therefore all numbers from i=0 to i=2 are less or equal than pivot 4, and the location of the
    # pivot is i+1 = 3.
    for j in range(left, right):
        if arr[j] <= pivot:
            i = i + 1
            arr[i], arr[j] = arr[j], arr[i]

    # Here, the pivot is placed in the correct position (i+1). Since it's in the right, just swap between i+1 and right.
    arr[i+1], arr[right] = arr[right], arr[i+1]

    # This is the correct location of the pivot.
    return i + 1


array = [2, 1, 5, 1, 10, 3]

print(quicksort(array, 0, len(array)-1))