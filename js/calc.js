

function update() {
	postMessage({
		result: Math.round(result * 100) / 100
	});
 }

let result = 0;
onmessage = function(event) {
	
	for (let value in event.data) {
		result += event.data[value] * 1.22;
	}
	
	update();
};