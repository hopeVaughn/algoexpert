/*
Write a function that takes in a sorted array of integers as well as a target integer. The function should use the Binary Search algorithm to determine if the target integer is contained in the array and should return its index if it is, otherwise -1,

Sample Input: 
array = [0,1,21,33,45,61,71,72,73]
target = 33

Sample output: 3
*/
const array = [0, 1, 21, 33, 45, 61, 71, 72, 73];
const target = 33
function binarySearch(array, target) {
  //do something
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (array[middle] !== target && start <= end) {
    if (target < array[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2)
  }
  return array[middle] === target ? middle : -1
}

console.log(binarySearch(array, target));