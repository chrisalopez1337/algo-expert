function binarySearch(array, target) {
	let left = 0,
			right = array.length-1;
	while (left <= right) {
		const middle = Math.floor((left + right) / 2);
		if (array[middle] === target) { return middle }
		console.log(array[middle], target)
		
		if (array[middle] < target) {
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}
	return -1
}
