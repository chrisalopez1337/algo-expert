// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
	let results = []
	helper(root, 0, results)
	return results;
}

function helper(node, sum, results) {
	if (!node) { return }
	
	let newSum = sum + node.value;
	
	if (!node.right && !node.left) {
		results.push(newSum);
		return
	}
	helper(node.left, newSum, results);
	helper(node.right, newSum, results);
}
