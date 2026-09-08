import heapq

# Data
data = [14, 21, 48, 36, 30, 71, 52, 15]
print(f"Before becoming a heap: {data}")

# Negative data (to build max-heap, if positive is a min-heap)
neg_data = [-element for element in data]

# Apply heap.
heapq.heapify(neg_data)

# Transform into positive again.
heap = [-element for element in neg_data]

# Final.
print(f"After becoming a heap: {heap}")