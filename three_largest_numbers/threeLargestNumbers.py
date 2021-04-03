def findThreeLargestNumbers(array):
	least = float('-inf')
	largest = [least, least, least]
	for i in range(len(array)):
		num = array[i]
		if num > largest[0]:
			temp1 = largest[0]
			temp2 = largest[1]
			largest[0] = num
			largest[1] = temp1
			largest[2] = temp2
		elif num > largest[1]:
			temp1 = largest[1]
			largest[1] = num
			largest[2] = temp1
		elif num > largest[2]:
			largest[2] = num
	largest.sort()
	return largest
