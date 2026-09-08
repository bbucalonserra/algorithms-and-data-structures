from queue import PriorityQueue

# Create priority queue. It becomes a priority queue when ACTIONS WANNA BE DONE: put (insert) or get (remove).
priority_queue = PriorityQueue()

# Data.
data = [50, 66, 58, 22, 28, 7, 8]

# Insert data (must insert as negative since it goes first).
priority_queue.put(-data[0])
priority_queue.put(-data[1])
priority_queue.put(-data[2])
priority_queue.put(-data[3])
priority_queue.put(-data[4])
priority_queue.put(-data[5])
priority_queue.put(-data[6])

# Print the values.
print(f"Internal heap: {[-x for x in priority_queue.queue]}")

# Get data from the queue (and remove from heap).
print(f"First (and higher): {-priority_queue.get()}")
print(f"Second (and top-2): {-priority_queue.get()}")
print(f"Third (and top-3): {-priority_queue.get()}")

# Heap after get the first.
print(f"Internal heap: {[-x for x in priority_queue.queue]}")