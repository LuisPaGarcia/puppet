const fs = require("fs");
const path = require("path");
const directory = "./input-parts/";

/**
 * Clears all the files inside input-parts
 */
function splitInputReset() {
  if (!fs.existsSync(directory)) {
    return;
  }

  fs.readdir(directory, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(path.join(directory, file), (err) => {
        if (err) throw err;
      });
    }
    console.log("- Erased: ./input-parts/");
  });
}

splitInputReset();
