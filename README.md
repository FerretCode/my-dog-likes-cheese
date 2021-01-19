# my-dog-likes-cheese

this is a NPM library that allows the creation, manipulation, and logging of JSON files with race condition protection using `await-lock`

simply install with: `npm install my-dog-likes-cheese`

# creation and deletion of files
```javascript
var dog = require('my-dog-likes-cheese');

dog.JSONCreateDB('foo.json');
dog.JSONDeleteDB('foo.json');
```

# logging of values and keys
```javascript
var dog = require('my-dog-likes-cheese');

dog.JSONLogAllKeys('foo.json');
dog.JSONLogAllValues('foo.json');
```
# adding values and keys
```javascript
var dog = require('my-dog-likes-cheese');

//add key directly into json file
dog.JSONPushKey('foo.json', 'key name');
//add value directly into json
dog.JSONPushValue('foo.json', 'key name', 'value name', 'value');
//add key into an existing key
dog.JSONPushKey('foo.json', 'key name', 'key to nest in');
//add value into an existing key
dog.JSONPushKey('foo.json', 'key name', 'value name', 'value', 'key to nest in');
```
# Deleting values and keys
```javascript
const dog = require('my-dog-likes-cheese');

// Works for deleting nested keys too
dog.JSONDeleteValue('foo.json', 'key', 'value');

dog.JSONDeleteKey('foo.json', 'key');

```
# limitations
cannot delete keys or values
