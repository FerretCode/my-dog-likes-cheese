const dog = require("./index");

//TODO

function deleteKeyAndValue() {}

function addKeyAndValue() {
  dog
    .JSONPushKey(__dirname + "/nested.json", "bet", "test.test", false)
    .then((res) => console.log(res));
}

function logAllKeysAndValues() {}

function createAndDeleteJSONFile() {}

addKeyAndValue();
