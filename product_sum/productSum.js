function productSum(array, level=1) {
	let sum = 0;
	array.forEach(elem => {
		if (Array.isArray(elem)) {
			sum += productSum(elem, level+1);
		} else {
			sum += elem;
		}
	});
	return sum * level;
}
