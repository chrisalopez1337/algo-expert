def productSum(array, level=1):
	sum = 0
	for x in array:
		if type(x) is list:
			sum += productSum(x, level+1)
		else:
			sum += x
	return sum * level
