const dog = require(__dirname + '/index.js');

//dog.JSONPushKey('test.json', 'testKey4', 'testKey1.testKey2.testKey3');
dog.JSONPushValue('test.json', 'testkey1', 'testvalue2', 'testvalue2', 'testkey1').then((v) => {
	console.log(v);
});