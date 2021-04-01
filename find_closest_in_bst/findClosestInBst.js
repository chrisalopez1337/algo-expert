// Psuedo-Code
// Main function
	// return recursive funciton with starting value as the roots value

// Helper function
	// if node is null retun the closest
	// check if this node is closer, if so update closest
	// return recursive dependant on if target is < || > than value
	// else return closest(this means they are equal)

function findClosestValueInBst(tree, target) {
	return helper(tree, target, tree.value);
}

function helper(node, target, closest) {
	if (node === null) { return closest }
	
	if (Math.abs(target - closest) > Math.abs(target - node.value)) {
		closest = node.value;
	}
	
	if (target > node.value) {
		return helper(node.right, target, closest);
	} else if (target < node.value) {
		return helper(node.left, target, closest);
	} else {
		return closest;
	}
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
