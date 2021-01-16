const fs = require('fs');
const included = require('./input/included.json');
const chunk = (a, n) => [ ...Array(Math.ceil(a.length / n)) ].map((_, i) => a.slice(n * i, n + n * i));
const groupSize = 3000;
const arrayOfArrays = chunk(included, groupSize);

let count = 1;
for (const group of arrayOfArrays) {
	const log = fs.openSync(`./input-parts/included-${count}-${group.length}.json`, 'w');
	fs.writeSync(log, JSON.stringify(group));
	fs.closeSync(log);
	console.log('done', `included-${count}-${group.length}.json`);
	count++;
}
