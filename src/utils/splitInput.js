const fs = require("fs");
const included = require("../../input/included.json");

const chunk = (a, n) =>
  [...Array(Math.ceil(a.length / n))].map((_, i) => a.slice(n * i, n + n * i));

/**
 * Split the list of nogs into parts
 */
function splitInput() {
  let groupSize;
  // If the input value is not valid, we use 3000 as default value
  groupSize = Number.isInteger(Number(process.argv[2]))
    ? () => parseInt(process.argv[2], 10)
    : () => {
        console.log("Invalid size, using 3000 as default size.");
        return 3000;
      };
  groupSize = groupSize();
  // Split the input into chunks, then used to create N files
  const arrayOfArrays = chunk(included, groupSize);

  // Crete input parts if doesn't exist
  var dir = "./input-parts";
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  // Create the files
  let count = 1;
  for (const group of arrayOfArrays) {
    const log = fs.openSync(
      `./input-parts/nogs-${count}-${group.length}.json`,
      "w"
    );
    fs.writeSync(log, JSON.stringify(group));
    fs.closeSync(log);
    console.log("done", `nogs-${count}-${group.length}.json`);
    count++;
  }
}

splitInput();
