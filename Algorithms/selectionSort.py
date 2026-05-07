# Set false if don't want to see the interactio step by step in terminal.
print_interaction = True

# Function SWAP.
def swap(A, i, j):
    print(f"Start swap of array {A} of index {i} and index {j}.")
    temp = A[i]
    A[i] = A[j]
    A[j] = temp

    return A

# Function find position of the minimum value in an array.
def pos_min(A, start, end):
    print(f"Start pos_min with from array {A}, from {start} to {end}") if print_interaction == True else None
    m = start
    print(f"m set as {m}") if print_interaction == True else None

    for k in range(start+1, end):
        print(f"Loop number {k}. Comparing if {A[k]}<{A[m]}") if print_interaction == True else None
        if A[k]<A[m]:
            print(f"{A[k]} is lower than {A[m]}") if print_interaction == True else None
            m = k
    
    return m

# Selection Sort.
def SelectionSort(A, N):
    print(f"Start Selection Sort. Loop from 0 to {N-1}") if print_interaction == True else None
    for i in range(0, N-1):
        min = pos_min(A, i, N)
        swap(A, i, min)

    return A

array = [5, 2, 9, 6, 4]

print(SelectionSort(array, len(array)))