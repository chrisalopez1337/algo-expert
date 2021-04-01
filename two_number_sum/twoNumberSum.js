function twoNumberSum(array, targetSum) {
	const numbers = {}
	for (const num of array) {
		const target = targetSum - num;
		if (target in numbers) {
			return [num, target];
		} else {
			numbers[num] = true
		}
	}
	return []
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
