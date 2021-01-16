const fs = require('fs');
const path = require('path');

const directory = './input-parts/';

function clearInputParts() {
	fs.readdir(directory, (err, files) => {
		if (err) throw err;

		for (const file of files) {
			fs.unlink(path.join(directory, file), err => {
				if (err) throw err;
			});
		}
		console.log('- Erased: ./input-parts/');
	});
}

function reset() {
	const files = [
		{
			path: './input/completed.json',
			value: '[]'
		},
		{
			path: './output/data.json',
			value: '[]'
		},
		{
			path: './input/empty.json',
			value: '[]'
		},
		{
			path: './output/data.csv',
			value: ''
		}
	];
	for (const file of files) {
		const log = fs.openSync(file.path, 'w');
		fs.writeSync(log, file.value);
		console.log(`- Erased: ${file.path}`);
		fs.closeSync(log);
	}
	clearInputParts();
}

reset();
