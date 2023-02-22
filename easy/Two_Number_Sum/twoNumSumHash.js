/*
Write a function that takes in a non-empty array of distinct integer and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.

You can assume that there will be at most one pair of numbers summing up to the target sum.
*/


function twoNumberSum(array, targetSum) {
  /*
  x + y = targetSum || y = targetSum - x
  loop through the array and preform targetSum - x. Then check to see if my obj contains the result. 
  If not then add the value of the result of that operation 'obj[targetSum - x]' with the key of 'true'
  obj[targetSum - x]: true

  If the value of targetSum - x is present in the object then return the current iteration (x) with the key of the object (obj[y])
  i.e return [x,obj[y]]
  */

  // Empty hash for checking
  let nums = {};
  for (let i = 0; i < array.length; i++) {
    console.log(nums);
    if ((targetSum - array[i]) in nums) {
      return [targetSum - array[i], array[i]];
    } else {
      nums[array[i]] = true
    }
  }
  return [];
}


console.log(twoNumberSum([2, 1, -6, -9, 4], 6)); // [2,4]
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)); // [11,-1]

// time: O(n)
//space: O(n)
