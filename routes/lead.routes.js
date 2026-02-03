const express = require('express');
const { createLead, listLeads, getLeadById, deleteLead } = require('../controllers/lead.controller');
const verifyAdmin = require('../middlewares/auth.middleware');
const router = express.Router();

router.post('/',  createLead);
router.get('/', verifyAdmin, listLeads);
router.get('/:id', verifyAdmin, getLeadById);
router.delete('/:id', verifyAdmin, deleteLead);

module.exports = router;
