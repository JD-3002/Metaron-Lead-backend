const express = require('express');
const { createLead, listLeads } = require('../controllers/lead.controller');
const verifyAdmin = require('../middlewares/auth.middleware');
const router = express.Router();

router.post('/',  createLead);
router.get('/', verifyAdmin, listLeads);

module.exports = router;
