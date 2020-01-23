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
    var JSONParsedContent = JSON.parse(JSONContentReadyToParse);
    JSONParsedContent[keyname] = [];
    JSONParsedContent[keyname].push(keyname);
    console.log("Key " + keyname + " has been added to " + filepath);
    //nameToPush.pop();
}

module.exports = {
    JSONLogAllKeys: JSONLogAllKeys,
    JSONLogAllObjects: JSONLogAllObjects,
    JSONPushKey: JSONPushKey
}