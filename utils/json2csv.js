const readFile = require('../utils/readFile');
const { Parser } = require('json2csv');
const fields = [ 'field1', 'field2', 'field3' ];

async function json2csv() {
	try {
		const data = await readFile('data');
		const dataJson = JSON.parse(data);
		const fields = Object(dataJson[0]).keys;
		const opts = { fields };
		const parser = new Parser(opts);
		const csv = parser.parse(dataJson);
		return csv;
	} catch (err) {
		console.error(err);
	}
}

module.exports = json2csv;
