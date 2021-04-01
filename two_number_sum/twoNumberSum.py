# Psuedo-code
# Create a Dictionary to store already seen numbers
# loop over array
	# check if the difference number is in the Dictionary
	# if not add the current number to the dictonary and continue
	# if there is return the nums in an array
# Return empty array if no solution is found

def twoNumberSum(array, targetSum):
	Numbers = {}
	for x in array:
		target = targetSum - x
		if target in Numbers:
			return [target, x]
		else:
			Numbers[x] = x
	return []
