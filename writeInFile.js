var fs = require('fs');
const fileNameJSON = 'data.json';
var log = fs.openSync(fileNameJSON, 'w');

function writeInFile(value) {
	fs.writeSync(log, JSON.stringify(value));
	console.log(value);
}

module.exports = writeInFile;
