var fs = require('fs');
const getStuff = require('./readFile');

async function updateCompleted(value) {
	// read actual completed
	const completedString = await getStuff('completed');
	const completedJson = JSON.parse(completedString);
	// push this value
	completedJson.push(value);
	// rewrite actual completed
	const fileNameJSON = './input/completed.json';
	const log = fs.openSync(fileNameJSON, 'w');
	fs.writeSync(log, JSON.stringify(completedJson));
	fs.closeSync(log);
}

module.exports = updateCompleted;
