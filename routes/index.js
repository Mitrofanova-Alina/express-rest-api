const express = require('express');
const Boom = require('@hapi/boom')
const router = express.Router();
const employeesRoutes = require('./employees-routes');
const authRoutes = require('./auth-routes');

router.use('/employees', employeesRoutes);
router.use('/auth', authRoutes);
router.all('*', (req, res) => {
    res.json(Boom.notFound('not exist'))
})

module.exports = router;
