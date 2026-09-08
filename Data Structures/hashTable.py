# Dictionary.
d = {
    "cpf": "12345678912",
    "score": 0.87
}

# What is done inside the dictionary:
# 1. Hash the key.
hashed_cpf = hash("cpf") # E.g. result 4422725942234465411 (hashed value)

# 2. The initial array size from dictionary in CPython has 8 slots, therefore h(k) = k mod m, 
# where k is the hashed value and m the internal array:
index = hashed_cpf % 8 # E.g. result 3 (index)

# 3. When searching, for example d["cpf"]:
#   3.1 Calculate hash("cpf")
#   3.2 Apply h(k) = k mod m (% table_size)
#   3.3 Go to that slot, confirm the stored key is "cpf"
#   3.4 Return value
cpf = d["cpf"]


"""
MEMORY STORAGE: Key-value pairs are stored side-by-side in memory, in the same array slot, where
each slot is a struct with hash, pointer_key and pointer_value, - that points
to the actual values.

COLLISION: When two keys are in the same slot, Python uses open addressing with perturbation, a 
variation of linear probing: instead of sequentialy try slot 1, then slot 2, then slo3 ...
it does not makes clustering, optimising time.
"""

# A set is dictionary without values, only keys.
s = {5, 10, 15}