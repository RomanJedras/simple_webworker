importScripts("constants.js", "functions.js");

function update() {
	postMessage({
      result: taxRound(result)
	});
 }

let result = 0;
onmessage = function(event) {
	
	for (let value in event.data) {
		result += event.data[value] * 1.22;
	}
	
	update();
};