/*
Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

Tip: While the integers in the input array are sorted in increasing order, their squares won't necessarily be as well, because of the possible presence of negative numbers

Sample input:
array = [1,2,3,4,5,6,8,9]

sample output:
[1,4,9,25,36,64,81]
*/
const array = [1, 2, 3, 4, 5, 6, 8, 9]
const array1 = [-7, -5, -4, 3, 6, 8, 9]

// we first separate the values into two arrays; positive and negative values
function sortedSquaredArray(array) {
  const positiveSquares = [];
  const negativeSquares = [];

  for (const value of array) {
    const square = value * value;
    if (value < 0) {
      negativeSquares.push(square);
    } else {
      positiveSquares.push(square);
    }
  }
  console.log(positiveSquares, negativeSquares);
  // passed of to our merge function
  return mergeSortedArrays(positiveSquares, negativeSquares);
}

function mergeSortedArrays(ascendingArray, descendingArray) {
  const mergedArray = [];
  let ascendingIdx = 0;
  let descendingIdx = descendingArray.length - 1;
  // with the arrays separated we can loop through both and pass our pointer values along with the asc/des arrays to our getItemByIdx function
  while (ascendingIdx < ascendingArray.length || descendingIdx >= 0) {
    const ascendingItem = getItemByIdx(ascendingArray, ascendingIdx);
    const descendingItem = getItemByIdx(descendingArray, descendingIdx);

    if (ascendingItem < descendingItem) {
      mergedArray.push(ascendingItem);
      ascendingIdx++;
    } else {
      mergedArray.push(descendingItem);
      descendingIdx--;
    }
  }
  // this return value is then returned to our main function as our output
  return mergedArray;
}

function getItemByIdx(array, idx) {
  return array[idx] === undefined ? Infinity : array[idx];
}

console.log(sortedSquaredArray(array1));