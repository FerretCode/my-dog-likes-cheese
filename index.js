const fs = require('fs');
const { set, unSet } = require('@irrelon/path');

const JSONLogAllKeys = function(filepath) {
    let JSONContentReadyToParse = fs.readFileSync(filepath)
    let JSONParsedContent = JSON.parse(JSONContentReadyToParse);
    console.log(Object.keys(JSONParsedContent));
}

const JSONLogAllValues = function(filepath) {
    let JSONContentReadyToParse = fs.readFileSync(filepath);
    let JSONParsedContent = JSON.parse(JSONContentReadyToParse);
    console.log(Object.values(JSONParsedContent));
}

const JSONPushKey = async function(filepath, keyName, nestedKey = null, logging = true) {
    let promise = new Promise((resolve, reject) => {
        let JSONContentReadyToParse = fs.readFileSync(filepath);
        let JSONParsedContent = JSON.parse(JSONContentReadyToParse);

        let messageToPrint = '';

        if(nestedKey !== null && typeof nestedKey !== 'string') 
            reject("nestedKey is not a string, and needs to be!")

        if(nestedKey === null) {
            JSONParsedContent[key] = {};

            messageToPrint = `Key ${keyName} has been added.`;
        }else if(nestedKey !== null && typeof nestedKey === 'string') {
            set(JSONParsedContent, nestedKey + '.' + keyname, {});

            fs.writeFileSync(filepath, JSON.stringify(JSONParsedContent, null, 4), (err) => {
                if (err)
                    reject(err);
            });

            messageToPrint = `Key ${keyName} has been added to ${nestedKey.split('.')[nestedKey.split('.').length - 1]}`;
        }

        if(logging)
            console.log(messageToPrint);

        resolve({
            status: "OK",
            result: messageToPrint
        });
    });

    return promise;
}

const JSONPushValue = async function(filepath, key, value, secondValue, nestedKey = null, logging = true) {
    let promise = new Promise((resolve, reject) => {
        let messageToPrint = '';

        let JSONContentReadyToParse = fs.readFileSync(filepath);
        let JSONParsedContent = JSON.parse(JSONContentReadyToParse);

        if(nestedKey !== null && typeof nestedKey !== 'string')
            reject("nestedKey is not a string and needs to be!");

        if(JSONParsedContent[key] && nestedKey === null) {
            key !== '' ? 
                JSONParsedContent[key][value] = secondValue 
                : JSONParsedContent[value] = secondValue; 

            messageToPrint = `Value ${value} has been added to ${key}`;
        } else if(nestedKey !== null && typeof nestedKey === 'string') {
            set(JSONParsedContent, nestedKey + '.' + key + '.' + value, secondValue);

            messageToPrint = `Value ${value} has been added to ${nestedKey.split('.')[nestedKey.split('.').length - 1]}`;
        }

        fs.writeFileSync(filepath, JSON.stringify(JSONParsedContent, null, 4), (err) => {
            if(err) reject(err);
        });

        if(logging)
            console.log(messageToPrint);

        resolve({
            status: "OK",
            result: messageToPrint
        });
    });

    return promise;
}

const JSONCreateDB = function(filename) {
    fs.writeFileSync(filename, "{}", (err) => {
        if(err) throw err;

        console.log(`JSON file ${filename} has been created.`);
    })
}

const JSONDeleteDB = function(filepath) {
    fs.unlinkSync(filepath);

    console.log(`JSON file ${filepath} has been deleted.`);
}

const JSONDeleteValue = (filepath, key, value = null, nestedKey = null, logging = true) => {
    let promise = new Promise((resolve, reject) => {
        let messageToPrint = '';

        let JSONContentReadyToParse = fs.readFileSync(filepath);
        let JSONParsedContent = JSON.parse(JSONContentReadyToParse);

        if(nestedKey === null && !JSONParsedContent[key])
            reject("Key was not found in the JSON file!");

        if(JSONParsedContent[key] && nestedKey === null) {
            if(value === null) {
                delete JSONParsedContent[key];

                messageToPrint = `Key ${key} has been deleted.`;
            }
            else {
                delete JSONParsedContent[key][value];

                messageToPrint = `Value ${value} has been deleted from ${key}`;
            }            
        } else if(nestedKey !== null && typeof nestedKey === 'string' && value) {
            unSet(JSONParsedContent, nestedKey + '.' + key + '.' + value);

            messageToPrint = `Value ${value} has been removed from ${nestedKey.split('.')[nestedKey.split('.').length - 1]}`;
        } else if(nestedKey !== null && typeof nestedKey === 'string' && !value) {
            unSet(JSONParsedContent, nestedKey + '.' + key);

            console.log(JSONParsedContent);

            messageToPrint = `Key ${key} has been removed from ${nestedKey.split('.')[nestedKey.split('.').length - 1]}`;
        }

        fs.writeFileSync(filepath, JSON.stringify(JSONParsedContent, null, 4), err => {
            if(err) reject(err);
        });

        if(logging)
            console.log(messageToPrint);

        resolve({
            status: "OK",
            result: messageToPrint
        });
    });

    return promise;
}

module.exports = {
    JSONLogAllKeys,
    JSONLogAllValues,
    JSONPushKey,
    JSONPushValue,
    JSONCreateDB,
    JSONDeleteDB,
    JSONDeleteValue
}
