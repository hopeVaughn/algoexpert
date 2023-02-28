/*
Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you CANNOT create. The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value).

For example, if you're given 'coins = [1,2,5]', the minimum amount of change that you can't create is 4. If you're given no coins, the minimum amount of change that you can't create is 1.

sample input:
coins = [7,7,1,1,2,3,22]

sample output:
20
*/

/*
The brute force approach to this would be to loop through the array and try adding 'k' amount of numbers until we found one that could not be made with the given elements of our input array.

When stuck on a problem involving an array it can sometimes help to sort the input array first to help search for some kind of clue. If we start by initializing a variable 'change' at zero and begin to iterate through our input array we can start to see what amounts of change we can produce by adding the current index to the next, updating our change variable to that sum, and then continuing the iterative step

[5,7,1,1,2,3,22] becomes [1,1,2,3,5,7,22]

'change' starts at 0 the becomes 1 so we know we can make one. The next iteration is 1 and it's added to the current value of 'change'. 'change' now becomes 2 (1+1) so we know we can now make 1 and 2. During the next iteration 'change' becomes 4 (2+2) and we see that we can make both 3 and 4 (1+2) & (change=2 + 2). SO as we continue to ove our pointer through the array we update the value of change and check to see if we can make all the values between our current value and our previous value. As we iterate through the input array if we ever come across a value that is greater then the current value of 'change' + 1 then that number will be the minimum amount that cannot be made. As we added up the elements in the array and adjusted the value of 'change' (up till 22) we never had a value that was greater then the current value of 'change' + 1 until 22.

As long as we don't find a coin that is greater than the value of change + 1 we continue our iteration.

Change is initialized at 0

On first iteration it becomes 1 and we ask is 1 > 0 + 1? no so we continue

Change is 1 and we add the next input which is 1 and change becomes 2
The next element is 2 so we ask if 2 is greater then our current value of change(2) + 1
it's not so we add it to the current value of change(2) + 2 and change becomes 4

The next element is 3 and we ask is 3 > the current value of change(4) + 1? It's not so we add it and move forward again.

We repeat this process until we get to 22. At this point the value of change is 19. Because we know that 22 is greater then the current value of change (19) + 1 we have found our minimum amount that CANNOT be produced by the inputs of the array.
*/


const coins = [7, 7, 1, 1, 2, 3, 22]

function nonConstructibleChange(coins) {
  if (coins.length === 0) return 1
  const change = 0;
  // do something
  return 1;
}

console.log(nonConstructibleChange(coins));