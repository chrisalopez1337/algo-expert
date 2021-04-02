function nodeDepths(root) {
	const nodes = [{ node: root, level: 0}];
	let result = 0;
	while (nodes.length > 0) {
		const { node, level } = nodes.pop();
		result += level;
		if (node.left) {
			nodes.push({ node: node.left, level: level + 1 });
		}
		if (node.right) {
			nodes.push({ node: node.right, level: level + 1});
		}
	}
	return result;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
