/*
Write a function that takes in a Binary Search Tree(BST) and a target integer value and returns the closest value to that target value contained in the BST.

You can assume that there will only be one closest value.

Each BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or None/null. 

Sample Input:
tree =  10
        /\
      5   15
     /\   /\
    2  5 13 22
  /       \
 1        14

target: 12


*/

function findClosestValueInBst(tree, target) {
  // Write your code here.
  let closest = Infinity;
  return findClosestValueInBstHelper(tree, target, closest)
  console.log(tree);
}
function findClosestValueInBstHelper(tree, target, closest) {
  let currentNode = tree;
  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value
    }

    if (target < currentNode.value) {
      currentNode = currentNode.left
    } else if (target > currentNode.value) {
      currentNode = currentNode.right
    } else {
      break;
    }
  }
  return closest;
}
// This is the class of the input tree. Do not edit.
class BST {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.left = new BST(13);
root.right.left.right = new BST(14);
root.right.right = new BST(22);

console.log(findClosestValueInBst(root, 12));
// average time: O(log(n))
// worst case time: O(n)  *if we only have one branch in our tree
// if solved iteratively space: O(1)
// worst case space: O(n) 