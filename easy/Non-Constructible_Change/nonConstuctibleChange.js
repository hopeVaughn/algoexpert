/*
Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you CANNOT create. The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value).

For example, if you're given 'coins = [1,2,5]', the minimum amount of change that you can't create is 4. If you're given no coins, the minimum amount of change that you can't create is 1.

sample input:
coins = [7,7,1,1,2,3,22]

sample output:
20
*/
const coins = [7, 7, 1, 1, 2, 3, 22]

function nonConstructibleChange(coins) {
  if (coins.length === 0) return 1
  // do something
  return 1;
}

console.log(nonConstructibleChange(coins));