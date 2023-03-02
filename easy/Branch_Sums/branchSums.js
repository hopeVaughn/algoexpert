/*
Write a function that takes in a Binary Tree and returns a list of its branch sums ordered from leftmost branch sum to rightmost branch sum.

A branch sum is the sum of all values in a binary Tree branch. A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node.

Each BinaryTree node has an integer value, a lef child node, and a right child node. Children nodes can either be BinaryTree nodes themselves of None/null.

Sample input:

                1
             /    \
            2      3
          /  \   /  \
         4   5  6    7
       / \  /
      8  9 10

Sample Output:
[15,16,18,10,11]
15 == 1 + 2 + 4 + 8
16 == 1 + 2 + 4 + 9
18 == 1 + 2 + 5 + 10
10 == 1 + 3 + 6
11 == 1 + 3 + 7
*/

// initialize class
class BinaryTree {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  console.log(root);
}

// extend class to build tree for challenge
class BinaryTreeInit extends BinaryTree {
  constructor (value) {
    super(value);
  }

  insert(values, i = 0) {
    if (i >= values.length) return;
    const queue = [this];
    while (queue.length > 0) {
      let current = queue.shift();
      if (current.left === null) {
        current.left = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.left);
      if (current.right === null) {
        current.right = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.right);
    }
    this.insert(values, i + 1);
    return this;
  }
}
const tree = new BinaryTreeInit(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10]);
// test cases
console.log(branchSums(tree));