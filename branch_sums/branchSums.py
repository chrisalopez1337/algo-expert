# This is the class of the input root. Do not edit it.
class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None



# Psuedo-code
# Return main function with starting variables

# Helper function
	# Add node value to running total for a path
	# once there is no longer a path, add to the result array
def branchSums(root):
	results = []
	helper(root, results, 0)
	return results

def helper(node, results, runningSum):
	if node is None:
		return
	newRunningSum = runningSum + node.value
	if node.left is None and node.right is None:
		results.append(newRunningSum)
		return
	helper(node.left, results, newRunningSum)
	helper(node.right, results, newRunningSum)
