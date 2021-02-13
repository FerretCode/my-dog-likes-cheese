const fs = require('fs');
const { set } = require('@irrelon/path');

const JSONLogAllKeys = function(filepath) {
    var JSONContentReadyToParse = fs.readFileSync(filepath)
    var JSONParsedContent = JSON.parse(JSONContentReadyToParse);
    console.log(Object.keys(JSONParsedContent));
}

const JSONLogAllValues = function(filepath) {
    var JSONContentReadyToParse = fs.readFileSync(filepath);
    var JSONParsedContent = JSON.parse(JSONContentReadyToParse);
    console.log(Object.values(JSONParsedContent));
}

const JSONPushKey = async function(filepath, keyname, nestedKey = null) {
    var JSONContentReadyToParse = fs.readFileSync(filepath);
    var JSONParsedContent = JSON.parse(JSONContentReadyToParse);

    if(nestedKey != null && typeof nestedKey === 'string') {
        set(JSONParsedContent, nestedKey + '.' + keyname, '{}');

        fs.writeFileSync(filepath, JSON.stringify(JSONParsedContent, null, 4), (err) => {
            if (err)
                console.error(err);
        });

        messageToPrint = 'Key ' + keyname + " has been added to " + nestedKey.split('.')[nestedKey.split('.').length - 1];
    } else if(nestedKey !== null && typeof nestedKey !== 'string') {
        messageToPrint = 'ERROR: nestedKey is not an array';
    } else if(nestedKey === null) {
        JSONParsedContent[keyname] = {};
        var messageToPrint = "Key " + keyname + " has been added to " + filepath;

        fs.writeFileSync(filepath, JSON.stringify(JSONParsedContent, null, 4), (err) => {
            if(err) console.error(err);
        });
    }

    console.log(messageToPrint);
}

const JSONPushValue = async function(filepath, key, value, secondValue, nestedKey) {
    let messageToPrint;

    var JSONContentReadyToParse = fs.readFileSync(filepath);
    var JSONParsedContent = JSON.parse(JSONContentReadyToParse);
    if(JSONParsedContent[key] && nestedKey === null) {
        JSONParsedContent[key][value] = secondValue;

        messageToPrint = 'Value ' + value + " has been added to " + key;
    } else if(nestedKey !== null && !JSONParsedContent[key]) {
        set(JSONParsedContent, nestedKey + '.' + key + '.' + value, secondValue);

        messageToPrint = 'Value ' + value + " has been added to " + nestedKey.split('.')[nestedKey.split('.').length - 1];
    }

    fs.writeFileSync(filepath, JSON.stringify(JSONParsedContent, null, 4), (err) => {
        if(err) console.error(err);
    });

    console.log(messageToPrint);
}

const JSONCreateDB = function(filename) {
    var fileContent = "{}";

    fs.writeFileSync(filename, fileContent, (err) => {
        if(err) throw err;

        console.log("Database " + filename + " has been created." );
    })
}

const JSONDeleteDB = function(filepath) {
    console.log("File " + filepath + " has been deleted.");
    fs.unlinkSync(filepath);
}

const JSONDeleteValue = (filepath, key, value) => {
    try {
        const raw_json = fs.readFileSync(filepath);
        let parsed_json = JSON.parse(raw_json);
        delete parsed_json[key][nestedKey];
        fs.writeFileSync(filepath, JSON.stringify(parsed_json, null, 4));
    } catch (err) {
        throw err;
    }
}

const JSONDeleteKey = (filepath, key) => {
    try {
        const raw_json = fs.readFileSync(filepath);
        let parsed_json = JSON.parse(raw_json);
        delete parsed_json[key];
        fs.writeFileSync(filepath, JSON.stringify(parsed_json, null, 4));
    } catch (err) { 
        throw err
    };
}


module.exports = {
    JSONLogAllKeys: JSONLogAllKeys,
    JSONLogAllValues: JSONLogAllValues,
    JSONPushKey: JSONPushKey,
    JSONPushValue: JSONPushValue,
    JSONCreateDB: JSONCreateDB,
    JSONDeleteDB: JSONDeleteDB,
    JSONDeleteValue: JSONDeleteValue,
    JSONDeleteKey: JSONDeleteKey,
}
