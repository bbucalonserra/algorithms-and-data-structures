# Function SWAP.
def swap(A, i, j):
    temp = A[i]
    A[i] = A[j]
    A[j] = temp

    return A

# Function Bubble Sort.
def BubbleSort(A, N):
    swapped = True
    print("Var swapped to True.")
    while swapped:
        print("While initiated.")
        swapped = False
        print("Var swapped to False.")
        for i in range(len(A) - 1):
            print(f"interaction {i}")
            if (A[i] > A[i+1]):
                swap(A, i, i+1)
                print(f"Swapped {A[i]} with {A[i+1]}")
                swapped = True
                print("Var swapped to True.")
        print("While ended.")
        N = N - 1
    
    return A

# Example array.
array = [1, 5, 20, 2, 8, 3]

# Print.
print(BubbleSort(array, len(array)))