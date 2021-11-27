const fs = require("fs");

/**
 * Gets a nested key
 * @param {string} path a path of keys separated by periods
 * @param {string} file a file path
 * @returns {object} an object
 */
const getNestedKeys = (path, file) => {
  let json = JSON.parse(fs.readFileSync(file));

  let keys = path.split(".");
  let currentKey = json;

  for (let key of keys) {
    currentKey = currentKey[key];
  }

  return currentKey;
};

module.exports = {
  getNestedKeys,
};
