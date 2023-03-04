/*
You're given a Node class that has a name and an array of optional children nodes. When put together, nodes for a acyclic tree-like structure.

Implement the depthFirstSearch method on the Node class, which takes in an empty array, traverses the tree using the Depth-first Search approach (specifically navigating the tree from left to right), stores all of the nodes' names in the input array, and returns it.


Sample input:
              A
           /  |  \
          B   C   D
         / \     / \
        E   F   G   H
           / \   \
          I  J    K

Sample Output: ["A","B","E","F","I","J","C","D","G","K","H"]
*/

// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor (name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Write your code here.
    array.push(this.name);

    for (const child of this.children) {
      child.depthFirstSearch(array)
    }
    return array
  }
}

const graph = new Node('A');
graph.addChild('B').addChild('C').addChild('D');
graph.children[0].addChild('E').addChild('F');
graph.children[2].addChild('G').addChild('H');
graph.children[0].children[1].addChild('I').addChild('J');
graph.children[2].children[0].addChild('K');

console.log(graph.depthFirstSearch([]));

// time: O(|V| + |E|) where V is the number of vertices (or nodes in the graph) and E is the number of edges
// space: O(|V|) where V is the number if vertices