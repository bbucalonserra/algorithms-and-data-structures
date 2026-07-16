class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next


class Stack:
    def __init__(self):
        self.top = None

    def push(self, data):
        self.top = Node(data, self.top)

    def pop(self):
        if self.is_empty():
            raise IndexError("pop from empty stack")
        data = self.top.data
        self.top = self.top.next
        return data

    def peek(self):
        if self.is_empty():
            raise IndexError("peek from empty stack")
        return self.top.data

    def is_empty(self):
        return self.top is None

    def __repr__(self):
        items = []
        curr = self.top
        while curr:
            items.append(str(curr.data))
            curr = curr.next
        return " -> ".join(items) + " -> None"

s = Stack()
s.push(1)
s.push(2)
s.push(3)
print(s)        # 3 -> 2 -> 1 -> None
print(s.peek()) # 3
print(s.pop())  # 3
print(s.pop())  # 2
print(s)        # 1 -> None
print(s.is_empty())  # False
s.pop()
print(s.is_empty())  # True