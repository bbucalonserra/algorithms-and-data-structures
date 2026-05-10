# Function SWAP.
def swap(A, i, j):
    temp = A[i]
    A[i] = A[j]
    A[j] = temp # NOTE: In python we don't need temp variable, we could just: A[i], A[j] = A[j], A[i].

    return A

# Function Bubble Sort.
# Set false if don't want to see the interactio step by step in terminal.
print_interaction = True

def BubbleSort(A, N):
    swapped = True
    print("Var swapped to True.") if print_interaction == True else None
    while swapped:
        print("While initiated.") if print_interaction == True else None
        swapped = False
        print("Var swapped to False.") if print_interaction == True else None
        for i in range(0, N-1): # N-1 since N is not inclusive.
            print(f"Interaction {i}") if print_interaction == True else None
            if (A[i] > A[i+1]):
                print(f"Array before swap: {A}")
                swap(A, i, i+1)
                print(f"Swapped {A[i]} with {A[i+1]}, now array is A: {A}") if print_interaction == True else None
                swapped = True
                print("Var swapped to True.") if print_interaction == True else None
        print("While ended.") if print_interaction == True else None
        N = N - 1
    
    return A

# Example array.
array = [1, 5, 20, 2, 8, 3]

# Print.
print(BubbleSort(array, len(array)))