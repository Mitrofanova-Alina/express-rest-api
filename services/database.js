const lowDb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const db = lowDb(new FileSync('db.json'));

// db.defaults({"employees": [{id: 0, name: "admin", surname: "admin", age: 0}]}).write();

module.exports = db;
