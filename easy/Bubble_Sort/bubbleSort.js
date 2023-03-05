/*
Write a function that takes in an array of integers adn returns a sorted version of that array. Use the Bubble Sort algorithm to sort the array.

Sample Input:
const array = [8,5,2,9,5,6,3]

Sample Output: [2,3,5,5,6,8,9]
*/
const array = [8, 5, 2, 9, 5, 6, 3]
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1]
        arr[j + 1] = temp;
        noSwaps = false
      }
    }
    if (noSwaps) break
  }
  return arr
}

console.log(bubbleSort(array));

// time: O(n^2)
// space: O(1)
