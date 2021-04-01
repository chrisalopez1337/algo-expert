// Psuedo-Code
// Create a pointer for the sequence array
// iteratre over the array of nums
	// check if the current num is the one in the sequence que
		// if so iterate the sequence index
		// if the sequence index is the length of the sequence array, return true
// return false

function isValidSubsequence(array, sequence) {
	let sequenceIdx = 0;
	for (num of array) {
		let targetNum = sequence[sequenceIdx];
		if (num === targetNum) {
			sequenceIdx++;
			if (sequenceIdx === sequence.length) {
				return true;
			}
		}
	}
	return false;
}
