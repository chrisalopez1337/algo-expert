function getNthFib(n, result = 0) {
	if (n === 2) {
		return 1; // 0 + 1 
	}
	if (n === 1) {
		return 0; // 0
	}
	return getNthFib(n-1) + getNthFib(n-2);
}
