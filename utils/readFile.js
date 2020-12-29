const fs = require('fs');
const util = require('util');

// Convert fs.readFile into Promise version of same
const readFile = util.promisify(fs.readFile);

function getStuff(name) {
	const path = {
		completed: './input/completed.json',
		data: './output/data.json',
		empty: './input/empty.json'
	};
	return readFile(path[name]);
}

// (async () => {
// 	const data = await getStuff('data');
// 	console.log(data, data.toString());
// })();

// Can't use `await` outside of an async function so you need to chain
// with then()
module.exports = getStuff;
