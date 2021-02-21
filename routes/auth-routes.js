const express = require('express');
const router = express.Router();
const getValid = require('../utils/validator');
const AuthController = require('../controllers/auth-controller');
const authShemas = require('../config/auth-schemas');

router.route('/')
    .post(
        getValid(authShemas.post),
        AuthController.createUser)
    .get(
        getValid(authShemas.get),
        AuthController.getUser);

module.exports = router;