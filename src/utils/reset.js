const fs = require("fs");
function reset() {
  const files = [
    {
      path: "./input/completed.json",
      value: "[]",
    },
    {
      path: "./output/data.json",
      value: "[]",
    },
    {
      path: "./input/empty.json",
      value: "[]",
    },
    {
      path: "./output/data.csv",
      value: "",
    },
  ];
  for (const file of files) {
    const log = fs.openSync(file.path, "w");
    fs.writeSync(log, file.value);
    console.log(`- Erased: ${file.path}`);
    fs.closeSync(log);
  }
}

reset();
