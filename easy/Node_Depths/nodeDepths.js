/*
The distance between a node in a Binary Tree and the tree's root is called the node's depth.

Write a function that takes in a Binary Tree and returns the sum of it's node's depths.

Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or none/null 

Sample input:

                      1
                    /  \
                  2     3
                /  \   / \
               4   5  6   7
              / \
            8    9

Sample output: 16
The depth of the node with value 2 is 1
The depth of the node with value 3 is 1
The depth of the node with value 4 is 2
The depth of the node with value 5 is 2
Etc....
Summing all of these depths yields 16
*/

// This is the class of the input binary tree.
class BinaryTree {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


function nodeDepths(root) {
  console.log(root);
}

// initialize the tree
const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.left.left = new BinaryTree(4);
root.left.left.left = new BinaryTree(8);
root.left.left.right = new BinaryTree(9);
root.left.right = new BinaryTree(5);
root.right = new BinaryTree(3);
root.right.left = new BinaryTree(6);
root.right.right = new BinaryTree(7);

//test cases
console.log(nodeDepths(root));