function findThreeLargestNumbers(array) {
	let largest = [-Infinity, -Infinity, -Infinity];
	array.forEach(elem => {
		if (elem > largest[0]) {
			temp1 = largest[0]
			temp2 = largest[1]
			largest = [elem, temp1, temp2]
		} else if (elem > largest[1]) {
			temp1 = largest[1]
			largest[1] = elem
			largest[2] = temp1
		} else if (elem > largest[2]) {
			largest[2] = elem
 		}
	});
	largest.sort((a, b) => a-b)
	return largest
}

// These are pretty naive solutions.
