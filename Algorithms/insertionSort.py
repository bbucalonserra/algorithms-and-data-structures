# Function Insertion Sort.
# Set false if don't want to see the interactio step by step in terminal.
print_interaction = True

def insertionSort(A, N):
    for j in range(1, N): # N is inclusive.
        print(f"Main Loop: Analyzing index {j} (value {A[j]}). Current Array: {A}") if print_interaction == True else None
        
        print(f"Main Loop: Setting key as {A[j]}.") if print_interaction == True else None
        key = A[j]

        print(f"Main Loop: Setting i as {j - 1}.") if print_interaction == True else None
        i = j - 1

        print(f"Checking While condition: is key {key} < A[{i}] ({A[i]})?") if print_interaction == True else None
        while (i >= 0 and key < A[i]):
            print(f"  Inside While: {key} < {A[i]} is True. Shifting {A[i]} to index {i+1}.") if print_interaction == True else None
            A[i + 1] = A[i] # Here is making the one on the right go to the left, duplicating i and i+1 to be the same.
            print(f"  Array after shift: {A}") if print_interaction == True else None

            print(f"  Inside While: Decrementing i to {i-1}.") if print_interaction == True else None
            i = i - 1
            
            print(f"  Re-checking While condition: is key {key} < A[{i}] ({A[i]})?") if (print_interaction == True and i >= 0) else None

        print(f"While Loop finished. Inserting key {key} at index {i + 1}.") if print_interaction == True else None
        A[i + 1] = key
        print(f"Array after insertion: {A}\n") if print_interaction == True else None

    return A

# Example array.
array = [23, 1, 10, 5, 2]

# Print.
print(insertionSort(array, len(array)))