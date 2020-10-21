const config = require('./config/config');
const express = require('express');
const employeesRoutes = require('./routes/index')

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(config.url, employeesRoutes);

app.listen(config.port, config.host, () => {
    console.log(`API app started at ${config.port} port.`);
})
