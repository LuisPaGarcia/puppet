var fs = require('fs');
const getStuff = require('./readFile');

async function updateData(value) {
	// read actual completed
	const completedString = await getStuff('data');
	const completedJson = JSON.parse(completedString);
	// push this value
	completedJson.push(value);
	// rewrite actual completed
	const fileNameJSON = './output/data.json';
	const log = fs.openSync(fileNameJSON, 'w');
	fs.writeSync(log, JSON.stringify(completedJson));
}

module.exports = updateData;
