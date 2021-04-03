def binarySearch(array, target):
	left = 0
	right = len(array)-1
	while left <= right:
		middle = (left + right) // 2
		num = array[middle]
		if num == target:
			return middle
		elif target < num:
			right = middle - 1
		else:
			left = middle + 1
	return -1
