def merge(A, l, mid, r):
    print("Start merge")
    L = A[l : mid + 1]
    R = A[mid + 1 : r + 1]

    i = j = 0
    k = l

    while i < len(L) and j < len(R):
        if L[i] <= R[j]:
            A[k] = L[i]
            i += 1
        else:
            A[k] = R[j]
            j += 1
        k += 1

    while i < len(L):
        A[k] = L[i]
        i += 1
        k += 1

    while j < len(R):
        A[k] = R[j]
        j += 1
        k += 1

l = [5, 3, 8]
r = [1, 4, 2]

array = [5, 3, 8, 1, 4, 2]

print(array[0:3])

def mergeSort(A, l, r):
    print(f"Check if value on the left {l} is higher then on the right {r}.")
    if l < r:
        mid = (l + r) // 2
        print(f"    Mid is {l} + {r} / 2 with no remainder, therefore mid = {mid}, meaning that the array\
              \n    on the left is from index 0 until {mid}, and right the rest from  index {mid+1} until the end.")
        print(f"MERGESORT 1: From array {A}, apply mergesort ON THE LEFT ARRAY that starts in index {l} until index {mid}.")
        mergeSort(A, l, mid)

        print(f"MERGESORT 2: From array {A}, apply mergesort ON THE RIGHT ARRAY that starts on the mid + 1 index {mid+1} until index {r}.")
        mergeSort(A, mid + 1, r)
        merge(A, l, mid, r)

    return A

array = [5, 3, 8, 1, 4, 2]

print(mergeSort(array, 0, len(array) - 1))