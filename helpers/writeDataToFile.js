const fs = require("fs/promises");

const writeDataToFile = async (path, data) => {
  await fs.writeFile(path, JSON.stringify(data, null, 2));
};

module.exports = writeDataToFile;
