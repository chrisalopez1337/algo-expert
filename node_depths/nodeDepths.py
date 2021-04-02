def nodeDepths(root):
	nodes = [{ "node": root, "level": 0 }]
	result = 0
	while len(nodes) > 0:
		current = nodes.pop(0)
		node, level = current["node"], current["level"]
		if node is None:
			continue
		result += level
		nodes.append({ "node": node.left, "level": level + 1})
		nodes.append({ "node": node.right, "level": level + 1})
	return result

# This is the class of the input binary tree.
class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
