<a href="https://ibb.co/QF9Zb2f"><img align="center" src="https://i.ibb.co/99nJ8FN/my-dog-likes-cheese.png" alt="my-dog-likes-cheese" border="0"></a>

this is a NPM library that allows the creation, manipulation, and logging of JSON files with race condition protection using read and writeFileSync + promises and JSON querying/path setting using `@irrelon/path`

[![NPM](https://nodei.co/npm/my-dog-likes-cheese.png)](https://nodei.co/npm/my-dog-likes-cheese/)

like the package? star it on github! https://github.com/ferretcode/my-dog-likes-cheese

check out our website! https://my-dog-likes-cheese.glitch.me

# 📜 creation and deletion of files
```javascript
var dog = require('my-dog-likes-cheese');

dog.JSONCreateDB('foo.json');
dog.JSONDeleteDB('foo.json');
```

# 📜 logging of values and keys
```javascript
var dog = require('my-dog-likes-cheese');

dog.JSONLogAllKeys('foo.json');
dog.JSONLogAllValues('foo.json');
```
# 📜 adding values and keys
```javascript
var dog = require('my-dog-likes-cheese');

//add key directly into json file
dog.JSONPushKey('foo.json', 'key name').then(result => console.log(result));
//add value directly into json
dog.JSONPushValue('foo.json', 'key name', 'value name', 'value').then(result => console.log(result));
//add key into an existing key
dog.JSONPushKey('foo.json', 'key name', 'key.path.to.nest.in').then(result => console.log(result));
//add value into an existing key
dog.JSONPushValue('foo.json', 'key name', 'value name', 'value', 'key.path.to.nest.in').then(result => console.log(result));
```

# 📜 Deleting values and keys
```javascript
const dog = require('my-dog-likes-cheese');

//delete key directly accessible from json file
dog.JSONDeleteValue('foo.json', 'key name').then(result => console.log(result));
//delete value directly accessible from json file
dog.JSONDeleteValue('foo.json', 'key name', 'value name').then(result => console.log(result));
//delete nested key
dog.JSONDeleteValue('foo.json', 'key name', null, 'path.to.key').then(result => console.log(result));
//delete nested value
dog.JSONDeleteValue('foo.json', 'key name', 'value name', 'path.to.value').then(result => console.log(result));
```

# 🚫 limitations
limited data returned from promises
