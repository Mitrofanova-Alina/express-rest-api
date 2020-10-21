const db = require('./database');

class EmployeesService {
    getAll = () => {
        return db.get("employees").value();
    }

    getOne = () => {

    }

    deleteAll = () => {

    }

    deleteOne = () => {

    }

    post = () => {

    }

    put = () => {

    }
}

module.exports = new EmployeesService();

// router.get('/', (req, res) => {
//     res.send('Hello API');
// })
//
// router.get('/employees', (req, res) => {
//     const data = db.get("employees").value();
//     res.send(data);
// })
//
// router.get('/employees/:id', (req, res) => {
//     console.log("get", req.params);
//     const employee = db.get("employees").find({id: Number(req.params.id)}).value();
//     res.send(employee);
// })
//
// router.post('/employees', (req, res) => {
//     console.log("post", req.body);
//     const employee = {
//         id: Date.now(),
//         name: req.body.name,
//         surname: req.body.surname,
//         age: req.body.age
//     };
//     db.get("employees").push(employee).write();
//     res.send(employee);
// })
//
// router.put('/employees/:id', (req, res) => {
//     console.log("put", req.body);
//     const employee = {
//         id: Number(req.params.id),
//         name: req.body.name,
//         surname: req.body.surname,
//         age: req.body.age
//     };
//     db.get("employees").remove({id: Number(req.params.id)}).write();
//     db.get("employees").push(employee).write();
//     res.sendStatus(200);
// })
//
// router.delete('/employees/:id', (req, res) => {
//     console.log("delete", req.params);
//     db.get("employees").remove({id: Number(req.params.id)}).write();
//     res.sendStatus(200);
// })