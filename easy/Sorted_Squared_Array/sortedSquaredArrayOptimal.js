/*
Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

Tip: While the integers in the input array are sorted in increasing order, their squares won't necessarily be as well, because of the possible presence negative numbers

Sample input:
array = [1,2,3,4,5,6,8,9]

sample output:
[1,4,9,25,36,64,81]
*/
const array = [1, 2, 3, 4, 5, 6, 8, 9]
const array1 = [-7, -5, -4, 3, 6, 8, 9]

function sortedSquaredArray(array) {
  const sortedSquares = new Array(array.length).fill(0);
  let smallerValueIdx = 0;
  let largerValueIdx = array.length - 1;

  for (let idx = array.length - 1; idx >= 0; idx--) {
    const smallerValue = array[smallerValueIdx];
    const largerValue = array[largerValueIdx];
    if (Math.abs(smallerValue) >= Math.abs(largerValue)) {
      sortedSquares[idx] = smallerValue * smallerValue;
      smallerValueIdx++;
    } else {
      sortedSquares[idx] = largerValue * largerValue;
      largerValueIdx--;
    }
  }

  return sortedSquares;
}

console.log(sortedSquaredArray(array));

