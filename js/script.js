(function() {
	
	var calc = new Worker("js/calc.js");
	calc.postMessage([
		6458, 4365, 2145, 5348, 55487, 5325, 643, 646, 5235,
		64, 435, 346, 20460, 6464, 2324, 787, 807, 4322,
		689, 3245, 6865, 53252, 6425, 1234, 421, 467, 334,
		674, 45877, 5752, 538, 232, 12234, 4244, 573, 12345, 325
	]);
	
	calc.onmessage = function(event) {
		document.getElementById('app').innerText = 'Cena (+ VAT 22%): ' + event.data.result;
	}
	
})(window.onload);