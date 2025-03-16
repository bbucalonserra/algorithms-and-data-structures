function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] == target) {
          return i; // Return the index of the found element
      }
  }
  return -1; // Return -1 if the element is not found
}

// Example usage:
const numbers = [10, 25, 30, 45, 50];
const target = 30;

console.log(linearSearch([10, 25, 30, 45, 50], 30));
