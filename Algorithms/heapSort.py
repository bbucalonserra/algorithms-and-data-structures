import heapq

# Data
data = [14, 21, 48, 36, 30, 71, 52, 15]

# Apply heapify.
heapq.heapify(data)

# Create empty list.
ordered_data = list()

# While the list is not empty apply heapfy and get the first value, since
# heapify uses min heap and the first item will always be the lower value
# element.
while len(data) != 0:

    # Apply heapify.
    heapq.heapify(data)

    # Get lower value elememnt.
    ordered_data.append(data[0])

    # Pop first element (because it's already appended).
    data.pop(0)

# Print.
print(ordered_data)