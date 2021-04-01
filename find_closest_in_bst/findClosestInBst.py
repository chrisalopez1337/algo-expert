# Psuedo-Code
# Main function
	# return helper with base values
# Helper functions
	# if the node is none, return the closest
	# check if the closest needs to be updated
	# if target < || > than nodes current value, recurse to the left or right branch
	# else if it equals, return the closest

def findClosestValueInBst(tree, target):
	return helper(tree, target, tree.value);

def helper(node, target, closest):
	if node is None:
		return closest
	if abs(target - closest) > abs(target - node.value):
		closest = node.value
	if target > node.value:
		return helper(node.right, target, closest)
	elif target < node.value:
		return helper(node.left, target, closest)
	else:
		return closest
