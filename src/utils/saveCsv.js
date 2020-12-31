const json2csv = require('./json2csv');
var fs = require('fs');

async function saveCsv() {
	// read actual completed
	try {
		const csvContent = await json2csv();
		const log = fs.openSync('./output/data.csv', 'w');
		fs.writeSync(log, csvContent);
	} catch (error) {
		console.log(error);
	}
}

module.exports = saveCsv;
