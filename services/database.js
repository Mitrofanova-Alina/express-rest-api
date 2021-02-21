const lowDb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const dbEmployees = lowDb(new FileSync('db-employees.json'));
const dbUsers = lowDb(new FileSync('../db-employees.json'));

// dbEmployees.defaults({"employees": [{id: 0, name: "admin", surname: "admin", age: 0}]}).write();

module.exports = {
    dbEmployees,
    dbUsers
};
