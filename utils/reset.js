const fs = require('fs');
function reset() {
	const input = [ './input/completed.json', './output/data.json', './input/empty.json' ];
	const csv = [ './output/data.csv' ];
	for (const file of input) {
		const log = fs.openSync(file, 'w');
		fs.writeSync(log, '[]');
	}
	for (const file of csv) {
		const csv = fs.openSync(file, 'w');
		fs.writeSync(csv, '');
	}
	console.log(`Erased: ${input}, ${csv}`);
}

reset();
