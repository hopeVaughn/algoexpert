/*
Write a function that takes in a non-empty array of distinct integer and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.

You can assume that there will be at most one pair of numbers summing up to the target sum.
*/


function twoNumberSum(array, targetSum) {
  /*
If we sort the array first then we don't need to use a hash table and we can use the two pointer technique.
Once the array is sorted then we have one pointer at the start of the array and one at the end. If the resulting
result of the operation (left + right) is less then the targetSum then left++. Transversely if the result of the operation
(left + right) is greater then the targetSum then right--
  */
  const arr = array.sort((a, b) => a - b);
  console.log(arr);
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === targetSum) {
      return [arr[left], arr[right]];
    }

    if (targetSum > currentSum) {
      left++; // we need a pair with a bigger sum
    } else {
      right--; // we need a pair with a smaller sum
    }
  }
  return [];
}



// console.log(twoNumberSum([2, 1, -6, -9, 4], 6)); // [2,4]
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)); // [11,-1]

// time complexity: O(n log(n))
// space complexity: O(1)