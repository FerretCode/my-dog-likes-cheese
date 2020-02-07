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

var JSONPushKey = function(filepath, keyname, key = null) {
    var JSONContentReadyToParse = fs.readFileSync(filepath);
    var JSONParsedContent = JSON.parse(JSONContentReadyToParse);
    JSONParsedContent[keyname] = {};
    fs.writeFileSync(filepath, JSON.stringify(JSONParsedContent, null, 4), (err) => {
        if(err) console.error(err);
    });

    console.log("Key " + keyname + " has been added to " + filepath);
}

var JSONPushValue = function(filepath, nestedKey, value) {
    var JSONContentReadyToParse = fs.readFileSync(filepath);
    var JSONParsedContent = JSON.parse(JSONContentReadyToParse);
    if(JSONParsedContent[key]) {
        JSONParsedContent[key][value] = "";
    }

    if(key != null){
        JSONParsedContent[keyname][nestedKey] = {}
    }

     fs.writeFileSync(filepath, JSON.stringify(JSONParsedContent, null, 4), (err) => {
        if(err) console.error(err);
    });
}

var JSONCreateDB = function(filename) {
    var fileContent = "{}";

    fs.writeFileSync(filename + ".json", fileContent, (err) => {
        if(err) throw err;

        console.log("Database " + filename + " has been created." );
    })
}

var JSONDeleteDB = function(filepath) {
    console.log("File " + filepath + " has been deleted.");
    fs.unlinkSync(filepath);
}

module.exports = {
    JSONLogAllKeys: JSONLogAllKeys,
    JSONLogAllValues: JSONLogAllValues,
    JSONPushKey: JSONPushKey,
    JSONPushValue: JSONPushValue,
    JSONCreateDB: JSONCreateDB,
    JSONDeleteDB: JSONDeleteDB
}