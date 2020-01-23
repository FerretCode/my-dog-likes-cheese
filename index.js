var fs = require('fs');

var JSONLogAllKeys = function(filepath) {
    var JSONContentReadyToParse = fs.readFileSync(filepath)
    var JSONParsedContent = JSON.parse(JSONContentReadyToParse);
    console.log(Object.keys(JSONParsedContent));
}

var JSONLogAllValues = function(filepath) {
    var JSONContentReadyToParse = fs.readFileSync(filepath);
    var JSONParsedContent = JSON.parse(JSONContentReadyToParse);
    console.log(Object.values(JSONParsedContent));
}

var JSONPushKey = function(filepath, keyname) {
    var JSONContentReadyToParse = fs.readFileSync(filepath);
    var JSONParsedContent = JSON.parse(JSONContentReadyToParse);
    JSONParsedContent[keyname] = {};

    fs.writeFileSync(filepath, JSON.stringify(JSONParsedContent, null, 4), (err) => {
        if(err) console.error(err);
    });

    console.log("Key " + keyname + " has been added to " + filepath);
}

var JSONPushValue = function(filepath, key, value) {
    var JSONContentReadyToParse = fs.readFileSync(filepath);
    var JSONParsedContent = JSON.parse(JSONContentReadyToParse);
    if(JSONParsedContent[key]) {
        JSONParsedContent[key][value] = "";
    }

     fs.writeFileSync(filepath, JSON.stringify(JSONParsedContent, null, 4), (err) => {
        if(err) console.error(err);
    });
}

module.exports = {
    JSONLogAllKeys: JSONLogAllKeys,
    JSONLogAllValues: JSONLogAllValues,
    JSONPushKey: JSONPushKey,
    JSONPushValue: JSONPushValue
}