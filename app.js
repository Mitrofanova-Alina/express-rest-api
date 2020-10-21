const express = require('express');
const lowDb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const config = {
    "port": 3012,
    "host": "localhost"
}
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const db = lowDb(new FileSync('db.json'));
// db.defaults({"employees": [{id: 0, name: "admin", surname: "admin", age: 0}]}).write();

app.get('/', (req, res) => {
    res.send('Hello API');
})

app.get('/employees', (req, res) => {
    const data = db.get("employees").value();
    res.send(data);
})

app.get('/employees/:id', (req, res) => {
    console.log("get", req.params);
    const employee = db.get("employees").find({id: Number(req.params.id)}).value();
    res.send(employee);
})

app.post('/employees', (req, res) => {
    console.log("post", req.body);
    const employee = {
        id: Date.now(),
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age
    };
    db.get("employees").push(employee).write();
    res.send(employee);
})

app.put('/employees/:id', (req, res) => {
    console.log("put", req.body);
    const employee = {
        id: Number(req.params.id),
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age
    };
    db.get("employees").remove({id: Number(req.params.id)}).write();
    db.get("employees").push(employee).write();
    res.sendStatus(200);
})

app.delete('/employees/:id', (req, res) => {
    console.log("delete", req.params);
    db.get("employees").remove({id: Number(req.params.id)}).write();
    res.sendStatus(200);
})

app.listen(config.port, config.host, () => {
    console.log(`API app started at ${config.port} port.`);
})
