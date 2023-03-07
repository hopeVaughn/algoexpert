/**
Write a function that takes in an array of integers and returns a sorted version of that array. Use the insertion Sort algorithm to sort the array.

Sample Input:
const array = [8,5,2,9,5,6,3]

Sample Output:
[2,3,5,5,6,8,9]
 */
const array = [8, 5, 2, 9, 5, 6, 3];
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      swap(array, j, j - 1);
      j--;
    }
  }

  return array;
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}


console.log(insertionSort(array));