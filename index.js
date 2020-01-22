var fs = require('fs');

var JSONLogAllKeys = function(filepath) {
    var JSONContentReadyToParse = fs.readFileSync(filepath)
    var JSONParsedContent = JSON.parse(JSONContentReadyToParse);
    console.log(Object.keys(JSONParsedContent));
}

var JSONLogAllObjects = function(filepath) {
    var JSONContentReadyToParse = fs.readFileSync(filepath);
    var JSONParsedContent = JSON.parse(JSONContentReadyToParse);
    console.log(Object.values(JSONParsedContent));
}

var JSONPushKey = function(filepath, keyname) {
    var JSONContentReadyToParse = fs.readFileSync(filepath);
    var JSONParsedContent = fs.readFileSync(filepath);
    var nameToPush = [];
    nameToPush.push(keyname);
    nameToPush.push(JSONParsedContent);
}

module.exports = {
    JSONLogAllKeys: JSONLogAllKeys,
    JSONLogAllObjects: JSONLogAllObjects,
    JSONPushKey: JSONPushKey
}