# Psuedo-Code
# Set pointer for sequence array
# iterate over array of nums
	# if the num at the pointer idx in the sequence arr matchs the arr num
		# Increment pointe 
		# Check if pointers length is the same as the sequence arr
			# if so return true
# return false

def isValidSubsequence(array, sequence):
	sequenceIdx = 0
	for num in array:
		target = sequence[sequenceIdx]
		if num == target:
			sequenceIdx += 1
			if sequenceIdx == len(sequence):
				return True
	return False
