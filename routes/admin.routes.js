const express = require('express');
const { login, logout, register } = require('../controllers/admin.controller');

const router = express.Router();

router.post('/login', login);
router.post('/logout', logout);
router.post('/register', register);

module.exports = router;
